---
layout: blog
title: "Code Tracing in Video Exams"
blurb: "We asked students to make screencasts of themselves tracing their programs for their exams, and were surprised to find..."
doodle: "/img/code-trace-types.png"
published: true
---

<h2><a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a></h2>

I've been using [video exams](/notes/2020-07-01-remote-teaching-assessment.html)
for a while, first because of emergency remote instruction and then because I
started to think it was just a good idea.  After running things this way a few
times, Rachel Lim convinced me that we should collect data, analyze it, and
share it, since we seemed to believe in it at least a little bit.

The basic idea is that we have students record screencasts of themselves tracing
a program they wrote, and submit that video as (part of) their “exam.” We graded
them on the accuracy of their traces alongside typical automatic and manual grading
of their code.

<div class="sidenote">We give some insight into all of these in <a href="/docs/sigcse-2023-video-exams.pdf">the full paper at SIGCSE
2023</a>.</div>
We collected video exams for over 500 students, and developed a few questions we
wanted to answer:

- Do video exams help us get at aspects of student understanding that
code-writing and on-paper exams might not?
- What kinds of mistakes do students make when recording a trace?
- How does the quality of student traces relate to the correctness of their
code?
- Most importantly, **should we keep doing this** (and should you)?

In analyzing traces from a program with a simple loop, I learned something
different about student understanding from videos than I typically do through
on-paper exams or submitted code.

The prompt was for a pretty standard CS1-with-loops kind of program:

- Implement the method `averageWithoutLowest` which
takes an array of doubles and returns the average (mean) of them,
leaving out the lowest number. So, for example, the average of 1,
2, and 3 according to this scheme is 2.5. If there are no elements
to average, the method should return 0. If there is a tie for the
lowest, leave out only a single one of the tied lowest numbers
- **Video**: Choose an example of calling `averageWithoutLowest` with an
array of at length 4 where the lowest element is not the first or
last element in the array. Write down a trace table corresponding
to one loop you wrote in the body of the method. Pre-write the header row of the
table, but you must fill in the contents of the table on the video. As you fill
in the “end” value for each variable, indicate which statement(s) in the program
caused its value to change.

The key thing we got from the videos is temporality. We didn't just ask students
for the final trace table, we could watch them fill it in. Here's a key figure
from the paper with a sample fragment of a solution and some related analysis:

![Loop Trace Figure](/img/loop-trace-figure.png){: width="100%" }

These are animations of Order A and Order B:

![Order A](/img/order-a.gif){: width="45%"}
![Order B](/img/order-b.gif){: width="45%"}

<div class="sidenote">The paper describes our strategy for oversampling from
students who failed the exam to find more misconceptions. The pass rate for the
exam in the class overall is much higher than in this sample. This isn't a great
setup for coming to statistical conclusions about these trace strategies, so we
don't make any statistical claims here.</div> We identified three different
orderings that most students in our sample used to fill in the traces,
illustrated by the arrows on the right-hand side of the figure. Order B is the
one that most closely matches semantics of Java, where the student filled in
each value in the table in the same order the variables would update in memory.
Order A and Order C follow a pattern for each variable that works for this
example but could be incorrect for some kinds of interleaved updates of
variables (see [section 4.1 in the paper](/docs/sigcse-2023-video-exams.pdf)).

Notably, we **did not grade on ordering**, just whether the final trace table
was correct and whether each variable update was narrated with respect to the
right line number. However, the fact that the only ordering for which a majority
of students passed the exam is Order B is very suggestive that something is
going on with those students' understanding relative to others. The immediate
intervention isn't clear. For example it's possible, but not a foregone
conclusion, that instructing students to use Order B would help them understand
Java better.

For me, the main takeaway is that I wasn't thinking particularly hard about loop
trace ordering beyond the per-iteration tabular setup when I assigned this
question. But now I can't ignore that the approach and ordering students take to
filling these in could be just as important a signal as the final (static)
artifact. For small examples, we could still get at some of this understanding
in static text by requiring, say, students answer questions about which updates
happen before others (this could even be done with on-paper exams). For more
complex programs, however, I'm interested in continuing to explore how to
evaluate students' understanding from these richer, temporal artifacts.

Of course, we're hardly the first people to notice that students show
misconceptions when tracing; there's tons of existing work on this (see the
related work of the paper for some). I'm excited about the results in the paper
because it fits into an existing assessment mechanism.  There's lots of work to
do here: grading these is time consuming and we aren't perfect at it (see
section 4.3 of the paper), and we now have lots of ideas for how we can update
the prompts and the rubrics. Check out [the full
paper](/docs/sigcse-2023-video-exams.pdf) for more details.
