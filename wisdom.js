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

'<p>Jamie Zawinski on focus:</p>' +
'<p><i>“\'How will this software get my users laid\' should be on the minds of ' +
'anyone writing social software (and these days, almost all software is social ' +
'software).”</i></p>',

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
<<<<<<< HEAD
'<p><i>“In an <a href="http://en.wikipedia.org/wiki/Agoric_computing">agoric</a>' +
' LISP, money is the root of all eval.”</i></p>',
=======
'<p><i>"In an <a href="http://en.wikipedia.org/wiki/Agoric_computing">agoric</a>' +
' LISP, money is the root of all eval."</i></p>',

'<p>Roger Ebert on animated movie violence:</p>' +
'<p><i>"After an hour of struggle that shakes the very firmament... There are a lot of speeches about how we now see that fighting is wrong. There will be a sequel, in which no doubt there will be another hour of fighting before the same lesson is learned again."</i></p>"',

'<p>Mickens on systems programming:</p>' +
'<p><i>“...there is no family-friendly GRE analogy that relates what my ' +
'code should do, and what it is actually doing.”</i></p>'
  ]; 

  var wisCount = Math.floor(Math.random() * wisdoms.length);
  window.newWisdom = function() {
    wisCount = (wisCount + 1) % wisdoms.length;
    document.getElementById('wisdom-content').innerHTML = wisdoms[wisCount]
  };
  window.newWisdom();
})();

