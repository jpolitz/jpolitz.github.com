(function() {
  var wisdoms = [
'<p>Brian W. Kernigan on programming:</p>' +
'<p><i>“Debugging is twice as hard as writing the code in the ' +
'first place.  Therefore, if you write the code as cleverly as ' +
'possible, you are, by definition, not smart enough to debug ' +
'it.”</i></p>',

'<p>G.E.P. Box on modeling:</p>' + 
'<p><i>“All models are wrong, but some models are useful.”</i></p>',

'<p>F.D.R. on making progress:</p>' + 
'<p><i>“It is common sense to take a method and try it: If it fails, admit ' +
'it frankly and try another.  But above all, try something.”</i></p>',

'<p>Douglas Adams on interface design:</p>' +
'<p><i>“A common mistake people make when trying to design something ' +
'completely foolproof is to underestimate the ingenuity of complete ' +
'fools.”</i></p>',

'<p><a href="http://nyan.cat">Nyan Cat</a> on the utility of ' +
'nonterminating programs:</p>' +
'<p><i>“Nyan nyan nyan nyan.”</i></p>',

'<p>Bertrand Russell on formalisms:</p>' +
'<p><i>“Everything is vague to a degree you do not realize till you have tried ' +
'to make it precise.”</i></p>',

'<p>Adam Smith on strategy:</p>' +
'<p><i>“[Have] two torpedoes in the water.”</i></p>',

'<p>Steve Yegge on security:</p>' +
'<p><i>“Accessibility is actually more important than Security because dialing ' +
'Accessibility to zero means you have no product at all, whereas dialing ' +
'Security to zero can still get you a reasonably successful product such as the ' +
'Playstation Network.”</i></p>',

'<p>Shriram Krishnamurthi on product management:</p>' +
'<p><i>“Don\'t put any bugs in.  If you already have, take them out.  Thanks.”</i></p>',

'<p>Alan Perlis on developer quality:</p>' +
'<p><i>“Programmers are not to be measured by their ingenuity and their logic ' +
'but by the completeness of their case analysis.”</i></p>',

'<p>Sarah Politz on restraint:</p>' +
'<p><i>“Just because you can, don\'t.”</i></p>',

'<p>Michael A. Jackson on the rules of optimization:</p>' +
'<p><i>“1. Don\'t do it.</i></p>' +
'<p><i>2. (For experts only). Don\'t do it yet.”</i></p>',

'<p>Derman and Wilmott on modelling responsibly:</p>' +
'<p><i>“I will never sacrifice reality for elegance without explaining why ' +
'I have done so.”</i></p>',

'<p>Mark Miller on the economics of programming:</p>' +
'<p><i>“In an <a href="http://en.wikipedia.org/wiki/Agoric_computing">agoric</a>' +
' LISP, money is the root of all eval.”</i></p>',

'<p>Von Lipwig on necessity:</p>' +
'<p><i>“The only way to get something to turn up when you need it is to need '
+
'it to turn up.”</i></p>',

'<p>Mickens on systems programming:</p>' +
'<p><i>“...there is no family-friendly GRE analogy that relates what my ' 
'code should do, and what it is actually doing.”</i></p>',

'<p>Churchill on execution:</p>' +
'<p><i>“However beautiful the strategy, you should occasionally look at the results.”</i></p>'
  ]; 

  var wisCount = Math.floor(Math.random() * wisdoms.length);
  window.newWisdom = function() {
    wisCount = (wisCount + 1) % wisdoms.length;
    document.getElementById('wisdom-content').innerHTML = wisdoms[wisCount]
  };
  window.newWisdom();
})();

