---
layout: blog
title: "Beginner REPL Stumbles"
doodle: https://jpolitz.github.io/notes/img/cpo-definitions.png
blurb: I spend a lot of time teaching beginning programming with REPLs...
---

<em style="color: gray; font-size: smaller">
  {{ page.date | date_to_long_string }}</em>

<em>Developed with Michael MacLeod.</em>

I spend a lot of time teaching beginning programming with REPLs. This
includes [Bootstrap](https://www.bootstrapworld.org) workshops with high
school teachers using [Pyret](https://www.pyret.org), high school classrooms
using Pyret, and undergraduate courses using tools like
[IDLE](https://docs.python.org/3/library/idle.html), `python` in a terminal,
and <a href="https://ucsd-cse8a-f18.github.io/notes/jshell/">`jshell`</a>.

There are some common actions I've seen beginners try to take in REPLs over
and over again that require direct instruction, often repeated, to overcome.

I have a few goals with this post:

1. To clearly lay out these issues to compare to other modes of interaction
that I might try or hear about (e.g. notebooks, the “stage” model of Snap and
Scratch).
2. To help others who choose REPLs to predict potential issues.
3. To spur people to tell me how I'm doing it
all wrong, and let me in on their favorite tool/strategy/pedagogy makes all
these struggles into non-issues. Tell me about it <a
target="_blank" href="https://twitter.com/joepolitz">@jpolitz</a>.

## Definitions vs. Interactions

[DrRacket](https://docs.racket-lang.org/drracket/interface-essentials.html),
[WeScheme](https://www.wescheme.org), and
[code.pyret.org](https://code.pyret.org/editor) (borrowing from DrRacket) use
the terms **Definitions** and
**Interactions**. **Definitions** is the part of the screen where users write
functions, variable declarations, and statements in a straight-line program
style. **Interactions** is where the programmer gets a statement-at-a-time
prompt that evaluates and displays results, and it also displays any results
printed by the definitions area.

![Definitions vs Interactions](/notes/img/defs-vs-interactions.gif)

Other tools have a similar distinction, with a common constraint that the
definitions window has a particular file loaded – in the screenshot below I
had to save the file as `Untitled.py` in order to run it.

<img width="100%" src="/notes/img/idle-defs-vs-interactions.png"/>

<div class='sidenote'>
These are just the REPLs I use to teach, so I can draw examples from 
my experience easily, there are of course many more.
</div>

`jshell` doesn't have a built-in visual environment, and requires running
with a file as a command-line argument to load its definition, then shows an
interactions prompt.


Often, instruction proceeds by first showing how some simple expressions or
statements work in the interactions area since the feedback loop is quite
quick. Then, later, the desire to write more complex expressions and
statements motivates putting things in definitions.

## Interactions Struggle #1: Editing Past Entries

<div class='sidenote'>In fact, I see this mistake when I'm teaching terminal
commands, as well.</div>
One of the errors I see all the time is students
make a mistake in a REPL entry, hit enter to run it, see the error message,
and then try to re-focus it with their cursor to edit it and fix it. This
style of REPL doesn't allow this – once evaluated, the program fragment and
its output becomes an immutable part of the REPL history, much like a command
at a shell like `bash`. Clicking on old entries can only highlight the
immutable text, not allow editing of a past entry.

I've seen learners have the reaction of wanting to make the error message “go
away,” so editing the existing entry is natural. Instead, the intended REPL
workflow is to have them look at the error message and build a **new** REPL
entry with a fixed version of the program, hit enter again, and see the
result. This can be pedagogically useful – the entry with the error and the
fixed entry are juxtaposed after going through this process successfully,
usefully illustrating the mistake. At the same time, the error message
remains onscreen for future entries in the interaction session, cluttering
information in scrollback and obscuring the intended computations. This can
be especially frustrating when error messages take up more screen real estate
than the output itself.

REPLs typically come with the ability to recall past entries, with the up
arrow, or Ctrl-P, or some other keyboard shortcut. Teaching this early
becomes critical, because otherwise learners start trying to re-type entire
lines, which is erorr-prone can distract focus from fixing the error that
just came up. In the worst case, retyping produces a program fragment with
**different** errors than the original because of typos in retyping, which
compounds confusion in unproductive ways.

## Interactions Struggle #2: Interactions Aren't Programs

After running a sequence of interactions, I've seen learners wonder how to
save their program for later. This leads into a discussion of the
interactions area as a temporary scratch pad, with the definitions area (or
files) as the place to store programs. Code needs to be copied out of the
interactions area to somewhere else in order to become a save-able and
rerunnable program.

This means that in the early stages of working through a programming
environment focused on interactions, learners haven't yet written a program.
They get told quickly that what they did isn't quite an authentic artifact,
but was just practice.

So there's a necessary mechanical step of re-typing or copy-pasting
interactions output into some other area for safekeeping. Usually this comes
with new rules for how to run it – no longer do you type in the expression
and press Enter at the end of the line, now you save the file and run with a
command, or now you click a distinct Run button. In addition, if the
programmer has an **erroneous** REPL entries, they need to be careful to copy
only the desired, correct entries to persist into their program.

Depending on the system, the output may look different when run from a file
vs. when run from the REPL. WeScheme, DrRacket, and code.pyret.org avoid this
issue for the most part by displaying the results of top-level expressions in
the interactions window when running definitions. For example, in
code.pyret.org, the following statements render the results whether put into
definitions or interactions:

<img width="45%" src="/notes/img/cpo-interactions.png"/>
<img width="45%" src="/notes/img/cpo-definitions.png"/>

This isn't the case for tools like IDLE or `jshell`, where toplevel
statements do **not** have their output rendered in the REPL:

<img width="45%" src="/notes/img/idle-interactions-output.png"/>
<img width="45%" src="/notes/img/idle-definitions-output.png"/>

## Interactions Struggle #3: State in the System

There are several pieces of state that any REPL system maintains. It's worth
noting that these might include, but aren't the same thing as, any state in
the **program**, like the current value of variables or mutable lists on the heap.
Rather, these pieces of state exist whether the program is a stateful program
or not – they are part of the editor-interactions interface. The main pieces
of state are:

1. The contents of the editor
2. Names defined by the definitions/program the last time it was run
3. Names defined by the interactions area

When typing at the next active REPL entry, the union of (2) and (3) are
what's available for use. When adding code at the end of the program, only
(1) is relevant for what's available for use. This can cause a lot of
confusion!

<div class='sidenote'>This leaves out issues of forgetting to <b>save</b>.
IDLE, WeScheme, and code.pyret.org save on run, so there's less of an issue
with forgetting to do both. Forgetting to save is a problem with
<code>jshell</code> workflows, though.</div> Here are some workflows I've
seen that cause struggles based on a developing understanding of this state:

- A learner defines a variable at interactions and expects it to be defined
when they next edit their program, or after re-running the program to restart
interactions.
- A learner defines a variable in their program, but there is an
error in the program on run, so it isn't defined at interactions. The learner
is confused when they can't use that variable (this may lead to trying to
define it at interactions, and so on). Different systems define different
behavior on errors from programs, too, from defining nothing, to defining
variables up to the error, to continuing past the error and defining some
variables in future entries.
- A learner makes an edit to their program and doesn't re-run it, and expects
newly-written definitions from the program to be available at interactions.
- A learner makes an edit to their program and doesn't re-run it, and the
edit introduced an error that they don't notice until much later due to a
“working” interactions area.
- A learner gets used to clicking a distinct “Run” button/shortcut to run the
program, and starts clicking it to try and run individual interactions
(rather than pressing Enter), which resets the interactions area by
re-running the program.

Any of these patterns can easily get a learner stuck enough that an
instructor's advice is needed to get unstuck. They all have to do with
internalizing the model of program vs. interactions, which is part of the
programming environment's state.

## Takeaways

I really like teaching with REPLs and have a ton of practice with it. They
allow for experimentation in live demonstrations and at learner's
workstations, they nicely put expressions next to the values they produce,
and they break a curricular dependency on printing in order to get programs
to produce interesting output.

I call the three points above “struggles,” which is not meant (strictly)
pejoratively, as (productive) struggle causes learning. Learners can and should
experiment with the programming environment, and no environment can or should
avoid having the learner struggle with **something**. So some friction in, or
struggle with, the interface is necessary and desirable. A freshman computer
science student should be able to internalize this kind of interaction model
in a quarter.

However, I'm less sure they should be able to to do so in a week. And for
high school or earlier students, with less focused time than undergraduates,
or for teachers who are learning rapidly in a weeklong workshop, it's less
clear to me that these are necessary struggles. In particular, these are all
struggles that come up in the first 10 hours or so of instruction. For those
use cases, and for getting off the ground more efficiently, I can't help but
wonder what pedagogic and technological fixes I should be considering.
