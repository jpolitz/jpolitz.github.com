---
layout: blog
published: false
title: "Some Ideas from Modeling Instruction"
---

<em style="color: gray; font-size: smaller">
  {{ page.date | date_to_long_string }}</em>

Earlier this month, Ben Lerner and I had the pleasure of helping to run a
workshop led by two experienced physics modeling teachers, Jess Dykes and
Melissa Girmscheid. The context is a collaboration between the American
Association of Physics Teachers (AAPT), the American Modeling Teachers
Assocation (AMTA), and Bootstrap. The goal is to integrate computation into
physics classrooms (primarily targeting 9th grade physics).

<h3>Physics, Computation, and Modeling Instruction</h3>

At a high level, the connections are pretty clear – the computation that goes
into a physics simulation is yet another way to explain and predict physical
phenomena along with labs, graphs, visualizations, and math that physics
classes already use. The exciting work is in finding the computational tasks
that align with and complement what's happening in classrooms. For this, we've
been developing material in the context of _modeling instruction_ for physics,
with the help of the AMTA.

There's a lot to say about both modeling and integrating computation into
non-CS courses. Much of my usual focus working on Bootstrap goes into the tool
and program design that support these curricula with a fast path through
beginning programming to get to useful, subject-aligned content.  During this
workshop, I found myself with a different focus. I learned a lot from watching
modeling instruction techniques that I saw Jess and Melissa implement
firsthand, and tried them out myself in the workshop when emphasizing
computational concepts. These techniques don't at all capture all of modeling
instruction, but they are an important part of the toolbox modelers use.

For context, we were teaching integrated physics and computation to around 20
high-school physics teachers from around the country. Equally importantly, we
(really Jess and Melissa) were teaching them the modeling instruction by
example by using those techniques to teach the rest of the content.

<h3>Whiteboarding</h3>

Modeling instruction uses a lot of techniques; I'm going to focus on one that I
learned a lot about during this workshop, _whiteboarding_. (Whiteboarding is
not modeling and modeling is not whiteboarding, but it is a frequently used
technique.)

Whiteboarding fosters both an environment of contributing student pedagogy and
active learning.  In small groups (3 is often best), students build up content
on whiteboards and then share it in different ways. The emphasis that became
clear to me watching this week is on juxtoposing _multiple representations of
the same phenomenon_ on the whiteboards.

For example, students might collect data about a car moving on a sloped ramp,
and then be asked to build up a whiteboard with a _motion map_ (a particular
way of drawing transitions between positions), a graph of velocity versus time,
and an algebraic calculation of the measured acceleration. Each group of
students perform 3-4 experiments with different conditions (being pushed up the
ramp from the bottom, being released from the top, etc), and they whiteboard
one of them. After building the whiteboard, they are asked to identify, in each
representation, how the notion of “speeding up” appears. They mark this on the
whiteboards and then share this to other teams.

There are many various on how the sharing works and how to stage the boards –
presenting to the whole class or with pairs of groups, going around the room
with a rotating presenter staying at the the board to explain it, and many more
that we didn't try in the workshop. It's nice to mix it up, and I'm sure with
experience I'd learn which specific techniques map to which content well. The
sharing provides an opportunity for the instructor and students to find
similarities and differences between the boards. Some of these differences are
mistakes, where the graph is incorrectly drawn or inconsistent. Others are
interesting variations in data on the same experiment, or totally different
data from a different experiment. From these contrasts, patterns like the
underlying idea of _constant acceleration_ or _measurement error_ being to
emerge, and can then be named and identified in future sessions.

<h3>Takeaways</h3>

There are a few key lessons I took from this, and I think these different
lessons in isolation are less effective than their combination.

1. _Justopose multiple representations_ and then _prompt connections
  between them_. Further, it's often useful to _first create the independent
  representations_ and only then prompt for connections. In some sense, this is
  nothing new to me, as the Design Recipe in How to Design Programs is just
  this kind of tool for providing multiple representations. This is a
  “intra-whiteboard” comment about what students build on their own.

2. For sharing activities, _make sure different groups produce
  materially different boards_. This could mean solving different problems, or
  using different data, or giving free choice in some parameters of the
  problem. This has several really positive effects:

  - It primes students to pay attention during the sharing phase, since they
  aren't just looking at another version of their board.
  - It ensures that any _mistakes_ are likely to be the least interesting
  thing to talk about. Sure, they can be corrected in passing, but the meat of
  the discussion is about reconciling patterns in different data, and any
  errors simply need to be fixed to get at that understanding, rather than to
  make the mistake-maker feel bad. If everyone does the same problem, some of
  the main differences will be mistakes and focus shifts to right and wrong.
  - It allows the instructor to build up a bigger, combined artifact out of
  the pieces that were given to the different groups.

<h3>Whiteboarding Integrated Physics and Programming</h3>

These two lessons motivated a few exercises that we designed to get at
connections between physics and computation. These ranged from shallow “tricks”
to quite deep connections. Most of these involved writing Pyret _examples_,
which programmers may recognize as unit tests, and Pyret has special syntax and
support for. Most, but not all, involved conditional functions (e.g. functions
with an `if` in their body), mostly because I was at that point in the
computational concepts we needed to introduce.

**Introducing Conditional Syntax**

For the teachers' first introduction to conditionals, I used a shallow “trick”
that I think ended up being a pretty effective representational connection. One
of the things we harp on in Bootstrap:Algebra is that `if` is a way to
implement _piecewise functions_. I gave the teachers a file with the following
code:

```
phase-of-water :: Number -> String
# Consumes a temperature in celsius and returns the (commonly-understood) phase
# of water at that temperature assuming we don't argue about pressure or other
# issues
examples:
  ...
end
fun phase-of-water(degrees):
  if degrees >= 100: "gas"
  else if degrees >= 0: "liquid"
  else: "solid"
  end
end


vel-at-t :: Number -> Number
# Consumes a time in seconds, and produces a velocity at that time
examples:
  ...
end
fun vel-at-t(t):
  if t < 50: 3 * t
  else if (t >= 50) and (t <= 100): 150
  else if (t > 100) and (t <= 200): (-2 * t) + 350
  else: 250
  end
end
```

I then asked them to build a whiteboard with three representations:

- examples of using the `phase-of-water` function
- examples of using the `vel-at-t` function
- a _graph_ of the `vel-at-t` function

The “trick” is that, while we had been drawing velocity-vs-time graphs, there
really was no reason this had to be one, or any deep connection to a simulation
or a physical concept. It was just a way to reference what we had done in a new
context. I'll share what I considered a “deeper” connection later.

Despite being a bit shallow, this was a great activity. The `if` syntax is
readable enought that teachers could intuit the meaning, and they could also
run the program and try calling `phase-of-water` and `vel-at-t` to check
specific inputs' results. Finally, the graph made it evident that:

- this kind of function does matter for representing physics concepts
- boundary conditions are important, and teachers are already primed to think
  about boundary conditions in piecewise functions via open/closed dots

Here's an example board that was produced:

FILL

The main weakness of this activity is that the graphs _weren't different_.
Different groups did choose different examples, so there was some variation,
but the graphs were all the same. Were I to do it again, I would provide _two_
`vel-at-t` functions, and have different groups draw different ones, then share
the results.

**Checking Game Conditions**

A through-line of the computational physics materials is a "space lander" game,
where students implement the physics behind a simple lander under the effects
of (user-controlled) thrust and gravity, and try to land it safely. Part of the
implementation is a `game-status` function that consumes information about the
current velocity and position of the lander, and produces a string to show in
the user interface. This corresponds to the idea of an "observation" of a
physical state, represented as a computation. This function involves some
fairly sophisticated conditional reasoning – the idea is that a safe landing
involves the lander's `y` coordinate meeting the ground with a low enough
speed.

For this activity, I had each group draw two pictures of a game state, and for
each, write an example (a unit test) of the `game-status` function that
corresponded to that situation with concrete values. This was nice because it
forced everyone to think about the signature of the `game-status` and other
first-order ideas, like that it was returning a string and not a boolean. Most
groups picked one example with the lander high in the air, and one with the
lander either safely landed or crashed.

Before sharing anything, I then had groups _swap boards_. The group that got
the new board was instructed to _write a test expression that would evaluate to
true_ when the `game-status` function had the given return value. Note the goal
here – the students need to understand that they'll need to write an if
expression with both the test part and the result for (at least) three
different branches. Swapping the boards forced them to confront thinking
through the boolean tests on an example that they didn't choose.

Then I had the swapped groups present to one another, and ask if they'd
captured one another's intent. Finally, we all looked at the resulting boards
as a group. The discussion that ensued was really cool, because by aggregating
across the boards we had essentially everything written except the `if` and
`else` keywords. The in-air, landing safely, crashing, and a few fun odd-ball
cases were represented, and all we had to talk about is if the conditions folks
had picked were correct. Some groups only checked the height and not the speed,
some folks had confusions about the magnitude of negative velocity and which
comparison to do. But these misconceptions came out naturally looking around
the boards, and the framing of the discussion was understanding the different
scenarios and how to make the code match them, not trying to point out the
“mistakes” in the code. Also, everyone had some plausible deniability, because
they had written the test for someone else's scenario.

I had never taught conditionals this way before, and there was something very
exciting and new about this experience.


**Implementing Game Physics**

As a final example, another part of the game takes in the key the user pressed,
along with a currently-applied thrust, and produces the new thrust. For this
activity, I prompted the teachers to build a whiteboard with:

- A force diagram for the rocket _before_ and _after_ the key is pressed
- An _example_ (unit test) for the `force-of-key` function they needed to write
  that corresponded to that picture

The immediacy of this connection was clear, and made it obvious how the code
corresponded to the physical scenario being represented. I had six different
groups each do one of three different scenarios, and then had them compare
within triplets of groups to cover all three scenarios. This ended up building
up another conditional, and causing useful discussions.

We went _back_ to those boards soon after, when calculating the total force and
acceleration on the rocket, because they provided scenarios we understood for
writing examples for those calculations. These I explicitly scaffolded with
some outcomes in mind (you can see that
[here](https://docs.google.com/document/d/1ugJYU-4UUvTN_bWdT03JFAeADCAuwKZsl8e0uJ0VbAw/edit?usp=sharing),
to force these examples to be useful throughout.

<h3>Perspective</h3>

There are a lot of good learning environment effects here. The knowledge in the
classroom is in students' minds, not just the instructor's, and these
techniques draw it out. Fast, iterated feedback is useful for students.
Providing an environment that makes mistakes easy to correct without blame lets
students explore. Students learn by exploring multiple representations, and by
seeing different approaches to similar problems.

I view some of these techniques as serving the same goals as [in-flow peer
review](FILL), providing students with opportunities to learn from one another
in moments where they care about seeing other approaches. They certainly
represent collaborative and active learning, and are student-centric approaches
to building up concepts.

All of these are broadly Good Things. The two main lessons I'm taking away are
that _juxtoposing representations and noting connections_ is as powerful as
ever, and it is supercharged by having students build the same juxtoposed
representations for different versions or parts of the same problem. I'm sure
that I've only begun to learn the wealth of techniques that modeling
instruction has to offer, and I'm excited to learn more and find how I can use
it.

(As a final note – it's certainly an interesting challenge to find the
applications to 200 or even 100-person lecture settings that I encounter during
the academic year!)

