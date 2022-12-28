---
layout: blog
title: "Code Tracing in Video Exams"
blurb: "We asked students to make screencasts of themselves tracing their programs for their exams, and were surprised to find..."
doodle: "/img/code-trace-types.png"
published: true
---

<div class="sidenote">This post is a teaser for a <a href="/docs/sigcse-2023-video-exams.pdf">SIGCSE 2023</a> paper.</div>
I've been using [video exams](/notes/2020-07-01-remote-teaching-assessment.html)
for a few years. The basic idea is that we have students record screencasts of
themselves tracing a program they wrote, and submit that video as (part of)
their “exam.” We grade them on the accuracy of their traces alongside typical
automatic and manual grading of their code. Here's the kind of prompt we give:

<div class="sidenote">There are lots more details in the <a href="https://ucsd-cse11-f21.github.io/assignments/exam2.html">exam description</a>.</div>
- Implement the method `averageWithoutLowest` which
takes an array of doubles and returns the average (mean) of them,
leaving out the lowest number.
- **Video**: Choose an example of calling `averageWithoutLowest` with an
array of at length 4 where the lowest element is not the first or
last element in the array. Write down a trace table corresponding
to one loop you wrote in the body of the method. Pre-write the header row of the
table, but you must fill in the contents of the table on the video. As you fill
in the “end” value for each variable, indicate which statement(s) in the program
caused its value to change.

It turns out there are different ways students do this; here's two different
choices they made -- both “correct” answers but in different orders:

<div class="sidenote">These aren't actual recordings, they are reproduced these
on a simplified example for comparison.</div>
![Order A](/img/order-a.gif){: width="45%"}
![Order B](/img/order-b.gif){: width="45%"}

Do you see the difference? One is following the evaluation order of Java very
precisely, and the other groups the variable updates the way they happen to be
written out in order in the table.

Now, I wasn't thinking particularly hard about loop trace ordering beyond the
per-iteration tabular setup when I assigned this question. But it turns out it's
pretty interesting to look at how students approach this. Here's a key figure
from [the SIGCSE 2023 paper](/docs/sigcse-2023-video-exams.pdf) we wrote
analyzing these videos:

![Loop Trace Figure](/img/loop-trace-figure.png){: width="100%" }

<div class="sidenote">The paper describes our strategy for oversampling from
failing exam submissions to find more misconceptions. The pass rate for the exam
in the class overall is much higher than in this sample, which is a few dozen
out of 550 submissions.</div> We identified three different orderings that most
students in our sample used to fill in the traces, illustrated by the arrows on
the right-hand side of the figure. Order B is the one that most closely matches
semantics of Java, where the student filled in each value in the table in the
same order the variables would update in memory.  Order A and Order C follow a
pattern for each variable that works for this example but could be incorrect for
some kinds of interleaved updates of variables (see [section 4.1 in the
paper](/docs/sigcse-2023-video-exams.pdf)).

Interestingly, the choice of ordering wasn't a factor in our rubric, but it does
seem to have some relationship to students' performance. Of the different
strategies (A, B, C, and other), it was only for ordering B that a majority of
students passed the exam in our sample. So the choice of ordering, which
represents something about students' choice or ability to match Java's semantics
closely in their trace, could be a signal related to overall performance.


This is pretty
cool – I can already see ways to write questions that get at precisely the
differences between these traces, and how to give students some direct
instruction and examples that distinguish them. This is just one result from a
set of questions we had about what we can learn from these exams, including:

<div class="sidenote">We wouldn't have done all this work without Rachel Lim
pushing for it and driving the process. Thanks, Rachel!</div> 
- Do video exams help us get at aspects of student understanding that
code-writing and on-paper exams might not?
- What kinds of mistakes do students make when recording a trace?
- How does the quality of student traces relate to the correctness of their
code?
- Most importantly, **should we keep doing this** (and should you)?

<div class="sidenote">See the related work section of the paper for some good
starting points into the literature on this!</div> Of course, we're far from the
first to notice interesting misconceptions from student program traces! What I'm
excited about is getting this kind of information as a natural part of an
assessment that's reasonable to give in my class. The richness of video gives us
a temporal dimension that turns out to have valuable signal about how students
are understanding their programs. Check out the [full
paper](/docs/sigcse-2023-video-exams.pdf) for more on these questions, including
analysis of another exam question with interesting misconceptions about recursion.