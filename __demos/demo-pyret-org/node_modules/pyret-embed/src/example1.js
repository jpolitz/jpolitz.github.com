
async function example1() {
  const iframeContainer = document.getElementById("example1");
  const embed = await makeEmbed('basic1', iframeContainer);

  embed.sendReset({
    definitionsAtLastRun: "use context starter2024\n\n'Hello!'",
    interactionsSinceLastRun: [],
    editorContents: "use context starter2024\n\n'Hello!'",
    replContents: ""
  });
}

window.addEventListener('load', example1);

let codeContainer = document.getElementById("example1-code");
codeContainer.innerText = String(example1);

