const CPO = "https://pyret-horizon.herokuapp.com/editor";

export type State = {
  definitionsAtLastRun: string,
  interactionsSinceLastRun: string[],
  editorContents: string,
  replContents: string,
  messageNumber?: number
}

export type API = {
  sendReset: (state : State) => void,
  postMessage: (message : any) => void,
  getFrame: () => HTMLIFrameElement,
  setInteractions: (text : string) => void,
  runDefinitions: () => void,
  runInteractionResult: () => Promise<any>,
  onChange: (callback : ((msg : any) => void)) => void,
  clearInteractions: () => void
};

export type EmbedConfig = {
  container: HTMLElement,
  src?: string,
  id?: string,
  state?: State,
  options: {
    footerStyle?: 'hidden',
    warnOnExit?: boolean,
    hideDefinitions?: boolean,
    hideInteractions?: boolean
  }
};

const defaultOptions = {
  footerStyle: 'hidden',
  warnOnExit: false,
  hideDefinitions: false,
  hideInteractions: false
};
const defaultConfig = {
  src: CPO,
  state: false,
  options: defaultOptions
};

export function makeEmbedConfig(config : EmbedConfig) : Promise<API> {
  let mergedConfig = { ...defaultConfig, ...config };
  let mergedOptions = { ...defaultConfig.options, ...config.options };
  let { container, src } = mergedConfig;
  let id = config.id || ("pyret-embed" + Math.floor(Math.random() * 1000000));
  const fragment = `${mergedOptions.footerStyle ? `?footerStyle=${mergedOptions.footerStyle}` : ""}${mergedOptions.warnOnExit ? `&warnOnExit=${mergedOptions.warnOnExit}` : ""}${mergedOptions.hideDefinitions ? `&hideDefinitions=${mergedOptions.hideDefinitions}` : ""}${mergedOptions.hideInteractions ? `&hideInteractions=${mergedOptions.hideInteractions}` : ""}`;
  if(src.indexOf("#") !== -1) {
    src = src + "&" + fragment;
  }
  else {
    src = src + "#" + fragment;
  }

  let messageNumber = 0;
  let currentState : State;
  function sendReset(frame, state) {
    if(!state) {
      state = {
        definitionsAtLastRun: false,
        interactionsSinceLastRun: [],
        editorContents: "use context starter2024",
        replContents: ""
      };
    }
    if(typeof state === "object") {
      state.messageNumber = 0;
    }
    currentState = state;
    const payload = {
      data: {
        type: 'reset',
        state: typeof state === "string" ? state : JSON.stringify(state)
      },
      protocol: 'pyret'
    };
    frame.contentWindow.postMessage(payload, '*');
  }

  function gainControl(frame : HTMLIFrameElement) {
    frame.contentWindow!.postMessage({
      type: 'gainControl'
    }, '*');
  }

  function setInteractions(frame : HTMLIFrameElement, text : string) {
    messageNumber += 1;
    const change = {
      from: { line: 0, ch: 0 },
      to: { line: 0, ch: 0 },
      text: text
    };
    currentState = { ...currentState, messageNumber, replContents: text };
    const payload = {
      protocol: 'pyret',
      data: {
        type: 'changeRepl',
        change: change
      },
      state: currentState
    };
    frame.contentWindow!.postMessage(payload, '*');
  }

  function runDefinitions(frame : HTMLIFrameElement) {
    messageNumber += 1;
    currentState = { ...currentState, messageNumber, interactionsSinceLastRun: [], definitionsAtLastRun: currentState.editorContents };
    const payload = {
      protocol: 'pyret',
      data: {
        type: 'run'
      },
      state: currentState
    };
    frame.contentWindow!.postMessage(payload, '*');
  }

  function clearInteractions(frame : HTMLIFrameElement) {
    messageNumber += 1;
    const payload = {
      protocol: 'pyret',
      data: {
        type: 'clearInteractions'
      },
      state: currentState
    };
    frame.contentWindow!.postMessage(payload, '*');
  }

  let resultCounter = 0;

  function runInteractionResult(frame : HTMLIFrameElement) {
    const { promise , resolve, reject } = Promise.withResolvers<any>();
    messageNumber += 1;
    const newInteractions = currentState.interactionsSinceLastRun.concat([currentState.replContents])
    currentState = {
        ...currentState,
        messageNumber: messageNumber,
        interactionsSinceLastRun: newInteractions,
        replContents: "",
    };
    const payload = {
      protocol: 'pyret',
      data: {
        type: 'runInteraction',
        reportAnswer: 'interaction' + (++resultCounter)
      },
      state: currentState
    };
    frame.contentWindow!.postMessage(payload, '*');
    window.addEventListener('message', message => {
      if(message.data.protocol !== 'pyret') { return; }
      if(message.source !== frame.contentWindow) { return; }
      const pyretMessage = message.data;
      if(pyretMessage.data.type === 'interactionResult') {
        resolve(pyretMessage.data.textResult);
      }
    });
    return promise;
  }

  function directPostMessage(frame : HTMLIFrameElement, message : any) {
    frame.contentWindow.postMessage(message);
  }

  /* An issue we run into with iframes and scrolling is that CPO wants to scroll
     interactions around sometimes. However, scrolling elements in the iframe
     can scroll the outer page as well to focus it. We don't want that.
     We can prevent this by making the iframe position: fixed, but that makes
     sensible positioning hard. So we create a wrapper iframe that works in the
     normal flow, and make the actual CPO iframe inside that.

     Since CPO only knows how to postMessage to its immediate parent, we also
     proxy all requests through the wrapper, and that's what the client sees.
  */

  const wrapper = document.createElement("iframe");
  wrapper.style = "width: 100%; height: 100%; border: 0; display: block;";

  wrapper.srcdoc = `
<html>
<head>
<style>
html, body { height: 100%; }
body { margin: 0; padding: 0; }
</style>
<script>
window.addEventListener('message', (e) => {
  if (e.source === window.parent) {
    const iframes = document.getElementsByTagName("iframe");
    iframes[0].contentWindow.postMessage(e.data, "*");
  }
  else {
    window.parent.postMessage(e.data, "*");
  }
});
</script>
<body></body>
</html>`;
  container.appendChild(wrapper);
  wrapper.addEventListener("load", () => {
    const wrapperBody = wrapper.contentDocument.body;

    const inner = document.createElement("iframe");
    inner.src = src || CPO;
    inner.style = "width: 100%; height: 100%; border: 0; display: block; position: fixed;";
    inner.width = "100%";
    inner.id = id;
    inner.frameBorder = "0";

    wrapperBody.appendChild(inner);
  });
  const frame = wrapper;

  const { promise, resolve, reject } = Promise.withResolvers<API>();
  setTimeout(() => reject(new Error("Timeout waiting for Pyret to load")), 60000);

  const onChangeCallbacks = [];

  window.addEventListener('message', message => {
    if(message.data.protocol !== 'pyret') {
      return;
    }
    if(message.source !== frame.contentWindow) {
      return;
    }
    const pyretMessage = message.data;
    const typ = pyretMessage.data.type;
    if(typ === 'pyret-init') {
      console.log("Sending gainControl", pyretMessage);
      gainControl(frame);
      if(mergedConfig.state) {
        sendReset(frame, mergedConfig.state);
      }
      resolve(makeEmbedAPI(frame));
    }
    else if(typ === "changeRepl" || typ === "change") {
      onChangeCallbacks.forEach(cb => cb(pyretMessage));
      currentState = pyretMessage.state;
    }
    else {
      currentState = pyretMessage.state;
    }
  });
  function makeEmbedAPI(frame) {
    return {
      sendReset: (state : State) => sendReset(frame, state),
      postMessage: (message : any) => directPostMessage(frame, message),
      getFrame: () => frame,
      setInteractions: (text : string) => setInteractions(frame, text),
      runDefinitions: () => runDefinitions(frame),
      runInteractionResult: async () => await runInteractionResult(frame),
      onChange: (callback : ((msg : any) => void)) => onChangeCallbacks.push(callback),
      clearInteractions: () => clearInteractions(frame)
    }
  }
  return promise;

}

export function makeEmbed(id : string, container : HTMLElement, src?: string) : Promise<API>{
  const config : EmbedConfig = {
    container,
    id,
    options: { }
  };
  if(src) { config.src = src; }
  return makeEmbedConfig(config);
}
