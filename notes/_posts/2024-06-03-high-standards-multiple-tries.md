---
layout: blog
published: true
future: true
title: "High Standards, Multiple Tries"
---

<h2><a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a></h2>

This page is for resources for the talk “High Standards, Multiple Tries – How
I've Been Grading”, which I've given in a few places.

Abstract: Supporting students who miss coursework or get off to a bad start
presents many challenges. Extending deadlines, giving retakes, or creating
alternate assignments strains course staff with rescheduling and regrading;
further, judging which student situations warrant these extra opportunities is
fraught. Curving course grades or exam grades, dropping lowest assignments,
deciding grade cutoffs post hoc, and more fuel a perception of eroding rigor
(justified or not). 
 
In this talk I present how I've tried to make progress on this in my courses,
at scale, over the past few years. I've used a mix of technological solutions,
syllabus design decisions, staff training, and student communication. The
primary design consideration is twofold: clearly articulating course outcomes
and their mappings to activities, and assuming that most students will need
more than one try on many course activities (to sloganize: “high standards,
multiple tries”). From these principles, we design resubmission and regrade
systems, a retake strategy for exams, and an overall grading policy that gives
me straightforward replies to the vast majority of “exceptional” student
situations and doesn't make me feel like I'm compromising on assessment.


Slides: [pptx](/docs/high-standards-multiple-tries.pptx)

Several course websites that use (variants of) the grading scheme I mentioned:

- [https://ucsd-cse15l-w24.github.io/#grading](https://ucsd-cse15l-w24.github.io/#grading) (This is specifically the instance from the talk)
  - That link goes directly to “Grading”, but overall policies for skill
    demonstrations, lab reports, and some sample skill demos are linked from
    that page
  - Individual week links from the sidebar have lab report descriptions
- [https://ucsd-cse15l-f23.github.io/syllabus/#grading](https://ucsd-cse15l-f23.github.io/syllabus/#grading)
- [https://ucsd-compilers-s23.github.io](https://ucsd-compilers-s23.github.io)

This paper (though not about CSE15L, which was featured in the talk), describes
a “two tries” exam strategy from our accelerated intro course, also in the
spirit of the talk:

[Stream your exam to the course staff](https://jpolitz.github.io/docs/sigcse-2023-video-exams.pdf)

## High Standards, Multiple Tries

There are three mutually-supporting principles presented in the talk:

1. **Standards-Based Grading Across Categories**: Rather than using weightings,
require certain levels of achievement in all categories to meet grade
thresholds. One of the categories should involve secure assessments that map
directly to course outcomes.
2. **Multiple Tries**: Giving resubmission or retry attempts to all students on
all or nearly all major assignments and assessments
3. **Coarse-Grained Rubrics**: Assign scores on assignments and assessments out
of 3-5 points, not out of 100 (or larger numbers).

The development in the talk starts with (2) and then justifies the others from
there. Here, we follow backwards design principles starting with outcomes and
working back through implementation and student incentives that will get us
there.

### What do (my) grades mean?

The first point is about what meaning is ascribed to an A, B+, C-, and so on.
Most of this work I've done in the context of a programming-heavy lab-based
course on software tools. Outcomes from the course are things like:

> A student should be able to clone a repository that contains C code and a
> Makefile, `cd` into it, run `make`, and if there is a compiler error from
> `gcc`, identify which file and line the error is referring to.

> A student should be able to write a C program that takes a UTF-8 encoded
> command-line argument and prints the first Unicode code point in it (given
> sufficient documentation about UTF-8).

A key observation about programming in today's courses is this: Assigning these
tasks as take-home work, having students submit code and prose about them, and
inspecting those artifacts should **not** give us confidence that students have
achieved the outcomes above. Excessive collaboration with peers, help from
course staff, and LLM use all confound using this kind of assignment as a
secure assessment.  Efforts to police collaboration, coach LLM use, and train
TAs to not “give away the answer” are a mix of laudable and ineffective, but
are all insufficient for secure assessment.

This does not mean we shouldn't give students take-home programming work! I
simply don't view take-home programming work as a secure way to assign grades
on its own. It's (an important) part of students' learning, but not a
sufficient certification.

By **secure assessment** I mean that we have high confidence that the work we
assess was completed by a specific student under controlled conditions we
chose, and those conditions were roughly uniform across students.  In-person
proctored exams are a great example. Secure assessments are an important part
of certifying a student's work at a particular grade level, because they remove
the confounds of external help.

For the courses I've been teaching that have programming or tool-based learning
outcomes like the ones above, a paper exam isn't great. While I can have high
confidence that students may be able to trace code, identify git commands, or
fill in parts of a C program on a paper exam, I don't actually observe the
outcomes I stated above. So for these classes I've been doing proctored
on-computer assessments that require actually running commands, checking out
repositories, making commits, and so on in order to complete them. I do this
because **I don't trust the programming assignments to certify that learning
outcomes were reached**, and I care deeply about observing that students
achieved the outcomes I care about!

With secure assessments in hand that map directly to the learning outcomes I
care about, and some take-home programming work, we can assemble the evidence
of learning we have into a grade for each student. Here a bit of **incentive
design** comes into play. We should not disincentivize students from doing
take-home programming work (it is so good for their learning!). But we don't
want take-home programming work to dominate their grade; we can't trust it for
that. While we could try various _weightings_, I find it more direct to use the
standards-based approach. To earn an A (or B, C, etc), students must achieve
A/B/C-level success on _both_ their assignments _and_ the secure assessments.
So a student who submits no programming work fails the course just as a student
who doesn't pass any exams fails the course.

Some people have called this “min-grading” because it is mathematically
equivalent to taking the _minimum_ of the categories. While true, this is not a
helpful presentation for students (especially when considering the other
factors below), because it comes across as draconian: if the assignments and
exams are the same as they would have been otherwise (maybe they aren't, maybe
they are, but it's not an unreasonable assumption) it seems we've simply
“removed opportunities” or “made it harder” to get an A, such that a
student who “used to” get an A under “normal” grading no longer would.

Indeed – this could be draconian if we made no other changes! And doing this
with no further changes would immediately run into myriad predictable issues –
students who do poorly early may have a “ceiling” on their grade that
disincentivizes trying in other categories, we still need policies for missed
work or exams, and so on.

### Multiple Tries on (Almost) Everything

Most modern courses have policies in place so that getting a bad grade on a
single exam or an assignment (or even more than one) doesn't put a hard ceiling
on a student's grade in the course. Often, since categories like assignments
and exams are weighted, one category can help “make up” for another one (and
sometimes policies take explicit advantage of this by giving extra points in
categories, and so on).

In contrast, with category-based standards-based cutoff grading described
above, if we aren't careful, we can set up perverse incentives. A bad grade on
an assignment or exam could cap a student's overall grade at a B or C (or even
F), no matter how well they do in another category, and this could even happen
quite early. This is disappointing if it makes a student no longer try on
assignments because of a bad exam grade, or vice versa!

There are other considerations about “bad” grades or “lost credit”.

- _Missed assignments_: It's useful to design policies that accommodate a wide
  range of situations students end up in, and to do so fairly. That means
  missing a deadline here and there is _expected_, and we should have a plan to
  deal with it, not treat it as “exceptional.” That doesn't mean
  automatically granting extensions or complicating the workload of staff with
  extra work or or “forgiving” missed assignments, just that our policy
  should take it into account.
- _Engagement with feedback_: Grades often come with _feedback_ on student
  work, often painstakingly written by instructors and course staff, to support
  student learning. Sometimes this goes completely unread! (There are ways,
  like the 👁️ icon in Gradescope, to see if a student has viewed their grade
  feedback). Often if a student gets a “good enough” grade, or even gets a
  “bad” grade but has enough future opportunities to earn the credit they
  need, there is little incentive to engage with feedback. It may even be
  unpleasant for some students to read it (I have to steel myself when I open
  paper reviews and course evaluations!), so why bother if they don't have to?
  And yet, responding to feedback is among the most critical skills for
  students who go on to participate in code reviews or peer review of scholarly
  work!

**Having retries, or a second round of submission addresses all of these
points**. For assignments, this typically means (for me) having a second
deadline a week or two after the initial deadline. Work is submitted, then
graded in a few days or a week, then there are a few days or a week for the
resubmission. For exams, I've been giving several during the quarter and then
scheduling all retry exams during finals week.

- Resubmission or retries gives students a chance to improve their grade at a
  later point, so they are incentivized to do well on other work in the
  meantime. The scheduling of this can be important – I typically have _exam_
  retries all happen towards the end of the quarter (which gives a lot of time
  for learning and practice) and _assignment_ retries happen with quicker
  turnaround while the feedback is fresh.
- I've been using resubmission and retries as the _only_ late handin policy.  A
  missed assignment does not get an extension, just the resubmission
  opportunity.  Similarly, a missed exam during the quarter can be replaced
  only by a retry in finals week, avoiding the onerous scheduling of a make-up
  exam with all the challenges of making new versions, etc.
- A resubmission _after_ feedback is given directly incentivizes engaging with
  feedback – it tells students what to improve in their resubmission! Indeed,
  the rubric for resubmission grading can often be “did you respond to the
  feedback”. And there is little stronger motivation for learning where you
  went wrong on an exam than knowing a retry of the same material is coming.

Some considerations:

<div class='sidenote'>For example by adding both <a
href="https://github.com/ucsd-cse29/pa1-utf8?tab=readme-ov-file#pa1-resubmission-due-date-1028-at-10pm">a
new function to implement and a new design question</a></div>
- I've sometimes given _new_ tasks along with resubmissions, especially when
  chunks of the work are automatically graded, or on written work where the
  answer is “given away” by the feedback. In those cases resubmitting the
  “fixed” work on its own doesn't demonstrate the learning I'm looking for.
- Sometimes I have a cap on the resubmission credit (e.g. only 3/4 of the
  credit available for a resubmission after missing the deadline, see below),
  but never so much that a late submission on its own precludes a student from
  getting a good grade. However, it sometimes is enough that submitting _all_
  assignments late would preclude earning an A (or even a B). Without this,
  depending on how deadlines are structured a pitfall is having the
  resubmission deadline become the perceived “real” deadline.
- If I know all students will have a resubmission opportunity, this opens up a
  lot of rubric design space. When grading is “one-shot” the stakes are
  higher for mistakes and cross-student consistency: if two students get
  different assignment grades for similar work they may be rightly frustrated.
  However, if they have a resubmission attempt and the consequence is “submit
  again and get all the credit”, that is much lower stakes than “you have
  fewer points forever.” This has given me the freedom to experiment with
  ideas like not giving full credit until students fix _code style_ or _writing
  style_ feedback, even down to feedback like “please put your code examples
  in monospace font in your markdown.” With a normal one-show grading
  procedure, it feels _bad_ to lose points forever for this! But with a
  known-resubmit policy, it's simply holding students to a high standard.

In short, allowing multiple submissions supports the high standards of the
assessments we discussed in the last section, along with providing other useful
incentives and structures for missed work, engaging with feedback, and more.

A major tradeoff with resubmission for each assignment is the grading effort
for anything that requires human review. If all students are afforded a
resubmit, it seems natural that nearly twice as much grading would result.

In my experience, this is partially true. I have given fewer assignments (e.g.
5 or 6 instead of 8) when allowing resubmits. Also, my final exams have also
been mostly made up of retry exam material.  However, when I know up front that
grading is going to have to happen in bulk and involve resubmits, there are
some related decisions we can make that help a lot, specifically in how we set
up rubrics.

### Coarse Rubrics

I have found there to be a lot of _false precision_ when I default to grading
things out of e.g. 100 points. I don't really think that I have 100 increments
of credit. Rather, a student's work on an assignment or exam largely falls into
buckets of achievement – they've demonstrated mastery, proficiency, not much
understanding, etc. Exposing this false precision to students in grades causes
issues:

<div class="sidenote">And in weighted grading, a point on an assignment could
“make up” for a point missed on an exam later or vice versa, which compounds
the issue!</div>
- Students are incentivized to pursue even small amounts of credit. Because
  each point out of 100 could matter towards their grade, it is meaningful for
  them to strive for a 100 instead of a 95, even if I as an instructor think
  that those scores indicate basically the same achievement level.
- There are more opportunities for inconsistency across graders, especially
  when scaling up to a large course with many course staff. Without a very
  precise rubric, a finer-grained scoring system simply provides more chances
  that graders would reasonably give different grades to the same or similar
  work.

These issue have led me to use **coarse-grained rubrics and scoring** on just
about everything. That is, we may have many mechanisms for grading on the
backend (autograding with dozens or hundreds of unit tests, manual review of
code, reading written work, reading handwritten code on exam, and so on), but
the score exposed to students is a whole number in, say, the 0-4. Any grading
work we do is projected to one of those scores, and they send clear signals.

<div class="sidenote">I've gotten explicit feedback in course evaluations that
the little bit of leeway really makes students feel some trust that the course
staff is made of reasonable people.</div>
The clearest signal is 4 – if a student scores a 4 there is no more work for
them to do; we have evaluated their work as demonstrating mastery and there's
no more “credit” to get. Crucially, there's usually a bit of leeway below
“perfection” that still earns a 4. We may still give feedback about small
mistakes, or provide the few less important tests that failed, but all the
credit is still earned. This immediately removes an entire class of submissions
from needing resubmissions or retries. It also subtly signals that students can
relax a little bit – we are looking for them to demonstrate thorough
understanding and execution, but _not_ perfection.

Scores of 3 and 2 are similar (sometimes I've used 0-3 grading). Significant
errors were made, but the work is (mostly) complete and there's some meaningful
understanding demonstrated. A score of 1 usually means something was submitted
but it was quite incomplete or missed the point, and a score of 0 is reserved
for blank submissions, submissions of something totally wrong or different, or
missed deadlines.

A typical rubric for a programming assignment might require that a submission
pass all but a handful of test cases out of hundreds, and also demonstrate
understanding in written design questions, in order to earn a 4. If some core
test cases are passed but some meaningful features are incorrect, this could
result in a 2 or a 3 (perhaps depending on the supporting written design work),
and so on. Crucially, the human effort of deciding on the boundaries between
1-4 can be done (relatively) quickly. Further, all the benefits of retries
described above apply – a grader won't assign a 2 or 3 to work with _no_
mistakes, so even if a grader gives a 3 when a 4 would have been appropriate,
the only consequence is the student resubmits (and they learn more, and they
did make mistakes!) to earn full credit.

To avoid resubmissions being treated as the “real” deadlline, I'll have
policies like:

- If you score a 0 or 1, you can earn maximum a 3 on resubmission
- If you score a 2 or 3, you can earn a 4 on resubmission

This puts a strong incentive on submitting complete (if not correct) work at
the initial deadline in order to get feedback and have the option for a
full-credit resubmission available. At the same time, the overall grade
thresholds are set to make it so a few 3 grades don't ruin an overall course
grade.

Typically for exams I allow regaining _all_ credit on the retry exam.  There
are typically fewer exams than assignments, so missing one has more of an
impact. In addition, exams interact with students' schedules differently –
they happen in a specific time slot, which students can miss because of
illness, emergency, and more that span just a few hours. In contrast,
assignments are usually available for a week, and students _can_ submit them
early, and time management is a valuable skill. So incentivizing submitting
assignments on time comes with a different set of tradeoffs than trying to
incentivize the “be present at a specific time” nature of exams.

### Summary, Logistics, and Examples

I've presented how I've been grading according to three principles: **High
Standards Across Categories of Work**, **Multiple Tries on Most Activities**,
and **Coarse Grained Rubrics** that support one another in various ways.

#### Communicating with Students

Much of the grading strategy presented here is “nonstandard”, at least at my
institution. Other courses tend to use some kind of “pile of points” grading
with weighted averages across categories. This presents communication
challenges: I need students to understand how their work translates to grades,
while avoiding pitfalls like students perceiving the policy as draconian or
unfair.

There are several explicit strategies that have come up.

1. Around the first assignment deadline, I remind students of the policies and
that grades will be coming with feedback to fix. Students that *miss* the
deadline and ask for an extension are pointed to the policy in a positive way.
I don't say “the posted policy is your only option”. I say something more
like “I'm sorry X happened and you missed the deadline. There will be a
resubmission deadline on DD/MM, so please continue to do the work, come to
office hours, etc. See the policy here: ...” Many students haven't even seen
or read the policy carefully, they're just stressed out about missing the
deadline and email. In class I also remind students that _if_ they missed the
deadline, there is a resubmit opportunity.
2. When the first assignment's grades are released, the next day in class I
talk about what that means, when the resubmission deadline is, and how that
process works. This is also a second reminder for those who missed the deadline
that this is coming up.
3. Students typically find exams in the style I've been giving quite
challenging on the first attempt. As much as half the class will get a 1 or 0.
I come prepared for this: _before_ the exam I reiterate that my goal is to
uphold high standards, and give students mechanisms to practice and get to
those standards. _After_ exam grades are released, I reiterate that a 0 does
not mean they've lost credit forever; I use the phrase “even a 0 on the exam
has _no permanent impact on your final course grade yet_”. I think this is
impactful! It's also one of the few ways I've found to give a challenging
assessment (e.g. writing a C program from scratch in a pure command-line
environment) where students get to really feel the challenge, fail, and then
meet it again later. I tell them about this happening in the past and try to
motivate them.
4. In the syllabus I try to word as much as possible positively. I don't say
“your grade is the _minimum_ of XYZ categories” (even if that's
mathematically accurate). Instead I simply list the requirements to get an A,
B, etc. as crisply as possible. The vibe is meant to be “here are the
standards we will strive towards” not “I'm imposing this new grading scheme
because I believe students are cheating/using LLMs/fundamentally not
learning.” None of this should come from a punitive or mistrusting place,
rather from a place of setting out learning goals and their measurement.


#### Course Examples

I've been using syllabi designed from these principles for several years now.
Some of these use variations on the principles above: scores may be 0-3 or 0-2
instead of 0-4, there are creative ways of applying resubmission credit to
assignments, there are elements like participation in lab factored in, and so
on. There's actually a fairly rich design space here – in a lot of what I say
above I pick specific examples and policies to describe things, but they are
far from the only version I can imagine working.

All of the courses below have a grading/syllabus section that describes how the
scoring works, some description of how retries work, and some
publicly-available assignments:

<ul>
  <li><b>Systems Programming &amp; Software Tools</b> <i>(UCSD CSE 29)</i><br/>
    [<a href="https://ucsd-cse29.github.io/ss1-25">Summer1 2025</a>]
    [<a href="https://ucsd-cse29.github.io/fa24">Fall 2024</a>]
  </li>
  <li><b>Software Tools &amp; Techniques Laboratory</b> <i>(UCSD CSE 15L)</i><br/>
    [<a href="https://ucsd-cse15l-w24.github.io/">Winter 2024</a>]
    [<a href="https://ucsd-cse15l-s23.github.io/">Spring 2023</a>]
    [<a href="https://ucsd-cse15l-w23.github.io/">Winter 2023</a>]
    [<a href="https://ucsd-cse15l-w22.github.io/">Winter 2022</a>]
  </li>
  <li><b>Compilers</b> <i>(UCSD CSE 131/231)</i><br/>
    [<a href="https://ucsd-compilers-s23.github.io">Spring 2023</a>] <em>This uses a slightly different “resubmission” strategy where more comprehensive later compiler implementations could count for credit for earlier ones.</em>
  </li>
  <li><b>Introduction to Object-Oriented Programming in Java: Accelerated Pace</b>
    <i>(UCSD CSE 11)</i><br/>
    [<a href="https://ucsd-cse11-f21.github.io/">Fall 2021</a>]
  </li>
</ul>



#### Attendance and Engagement

Often courses have 5-10% of the score dedicated to things like participation,
completing surveys, attending lecture, doing low-stakes weekly reading quizzes,
and so on. Broadly I refer to these as “engagement”. Depending on the course,
these might be one of the major categories (e.g. in Fall 2021 CSE11 there are
achievement levels for participation for various grade levels). If not,
typically what I do is say that the major components like exams and assignments
will decide the A/B/C/F letter grade, and various measures of engagement will
determine the +/- modifiers on the grade. So low engagement can't make a grade
drop from an A to a B, but it can drop an A to A-. I find this to be a useful
minor incentive to engage without having it take over too much of the
assessment of mastery.

In particular, engagement cannot *increase* a grade level or make the
difference between passing and failing the course. That has to come from the
more carefully designed secure assessments of specific outcomes.


#### Going Forward

This has gone beyond an experimental phase for me; I plan to use variants of
this grading strategy going forward until I find something deeply dissatisfying
or notably better. It helps me balance objective and secure assessment with
multiple-tries mastery. I have gotten positive or neutral feedback from
students about it, and I like the set of motivations and incentives it sets up
for them.

Feel free to reach out if you have questions or try some of these ideas and
have feedback!


## High Standards, Multiple Tries

There are three mutually-supporting principles presented in the talk:

1. **Standards-Based Grading Across Categories**: Rather than using weightings,
require certain levels of achievement in all categories to meet grade
thresholds. One of the categories should involve secure assessments that map
directly to course outcomes.
2. **Multiple Tries**: Giving resubmission or retry attempts to all students on
all or nearly all major assignments and assessments
3. **Coarse-Grained Rubrics**: Assign scores on assignments and assessments out
of 3-5 points, not out of 100 (or larger numbers).

The development in the talk starts with (2) and then justifies the others from
there. Here, we follow backwards design principles starting with outcomes and
working back through implementation and student incentives that will get us
there.

### What do (my) grades mean?

The first point is about what meaning is ascribed to an A, B+, C-, and so on.
Most of this work I've done in the context of a programming-heavy lab-based
course on software tools. Outcomes from the course are things like:

> A student should be able to clone a repository that contains C code and a
> Makefile, `cd` into it, run `make`, and if there is a compiler error from
> `gcc`, identify which file and line the error is referring to.

> A student should be able to write a C program that takes a UTF-8 encoded
> command-line argument and prints the first Unicode code point in it (given
> sufficient documentation about UTF-8).

A key observation about programming in today's courses is this: Assigning these
tasks as take-home work, having students submit code and prose about them, and
inspecting those artifacts should **not** give us confidence that students have
achieved the outcomes above. Excessive collaboration with peers, help from
course staff, and LLM use all confound using this kind of assignment as a
secure assessment.  Efforts to police collaboration, coach LLM use, and train
TAs to not “give away the answer” are a mix of laudable and ineffective, but
are all insufficient for secure assessment.

This does not mean we shouldn't give students take-home programming work! I
simply don't view take-home programming work as a secure way to assign grades
on its own. It's (an important) part of students' learning, but not a
sufficient certification.

By **secure assessment** I mean that we have high confidence that the work we
assess was completed by a specific student under controlled conditions we
chose, and those conditions were roughly uniform across students.  In-person
proctored exams are a great example. Secure assessments are an important part
of certifying a student's work at a particular grade level, because they remove
the confounds of external help.

For the courses I've been teaching that have programming or tool-based learning
outcomes like the ones above, a paper exam isn't great. While I can have high
confidence that students may be able to trace code, identify git commands, or
fill in parts of a C program on a paper exam, I don't actually observe the
outcomes I stated above. So for these classes I've been doing proctored
on-computer assessments that require actually running commands, checking out
repositories, making commits, and so on in order to complete them. I do this
because **I don't trust the programming assignments to certify that learning
outcomes were reached**, and I care deeply about observing that students
achieved the outcomes I care about!

With secure assessments in hand that map directly to the learning outcomes I
care about, and some take-home programming work, we can assemble the evidence
of learning we have into a grade for each student. Here a bit of **incentive
design** comes into play. We should not disincentivize students from doing
take-home programming work (it is so good for their learning!). But we don't
want take-home programming work to dominate their grade; we can't trust it for
that. While we could try various _weightings_, I find it more direct to use the
standards-based approach. To earn an A (or B, C, etc), students must achieve
A/B/C-level success on _both_ their assignments _and_ the secure assessments.
So a student who submits no programming work fails the course just as a student
who doesn't pass any exams fails the course.

Some people have called this “min-grading” because it is mathematically
equivalent to taking the _minimum_ of the categories. While true, this is not a
helpful presentation for students (especially when considering the other
factors below), because it comes across as draconian: if the assignments and
exams are the same as they would have been otherwise (maybe they aren't, maybe
they are, but it's not an unreasonable assumption) it seems we've simply
“removed opportunities” or “made it harder” to get an A, such that a
student who “used to” get an A under “normal” grading no longer would.

Indeed – this could be draconian if we made no other changes! And doing this
with no further changes would immediately run into myriad predictable issues –
students who do poorly early may have a “ceiling” on their grade that
disincentivizes trying in other categories, we still need policies for missed
work or exams, and so on.

### Multiple Tries on (Almost) Everything

Most modern courses have policies in place so that getting a bad grade on a
single exam or an assignment (or even more than one) doesn't put a hard ceiling
on a student's grade in the course. Often, since categories like assignments
and exams are weighted, one category can help “make up” for another one (and
sometimes policies take explicit advantage of this by giving extra points in
categories, and so on).

In contrast, with category-based standards-based cutoff grading described
above, if we aren't careful, we can set up perverse incentives. A bad grade on
an assignment or exam could cap a student's overall grade at a B or C (or even
F), no matter how well they do in another category, and this could even happen
quite early. This is disappointing if it makes a student no longer try on
assignments because of a bad exam grade, or vice versa!

There are other considerations about “bad” grades or “lost credit”.

- _Missed assignments_: It's useful to design policies that accommodate a wide
  range of situations students end up in, and to do so fairly. That means
  missing a deadline here and there is _expected_, and we should have a plan to
  deal with it, not treat it as “exceptional.” That doesn't mean
  automatically granting extensions or complicating the workload of staff with
  extra work or or “forgiving” missed assignments, just that our policy
  should take it into account.
- _Engagement with feedback_: Grades often come with _feedback_ on student
  work, often painstakingly written by instructors and course staff, to support
  student learning. Sometimes this goes completely unread! (There are ways,
  like the 👁️ icon in Gradescope, to see if a student has viewed their grade
  feedback). Often if a student gets a “good enough” grade, or even gets a
  “bad” grade but has enough future opportunities to earn the credit they
  need, there is little incentive to engage with feedback. It may even be
  unpleasant for some students to read it (I have to steel myself when I open
  paper reviews and course evaluations!), so why bother if they don't have to?
  And yet, responding to feedback is among the most critical skills for
  students who go on to participate in code reviews or peer review of scholarly
  work!

**Having retries, or a second round of submission addresses all of these
points**. For assignments, this typically means (for me) having a second
deadline a week or two after the initial deadline. Work is submitted, then
graded in a few days or a week, then there are a few days or a week for the
resubmission. For exams, I've been giving several during the quarter and then
scheduling all retry exams during finals week.

- Resubmission or retries gives students a chance to improve their grade at a
  later point, so they are incentivized to do well on other work in the
  meantime. The scheduling of this can be important – I typically have _exam_
  retries all happen towards the end of the quarter (which gives a lot of time
  for learning and practice) and _assignment_ retries happen with quicker
  turnaround while the feedback is fresh.
- I've been using resubmission and retries as the _only_ late handin policy.  A
  missed assignment does not get an extension, just the resubmission
  opportunity.  Similarly, a missed exam during the quarter can be replaced
  only by a retry in finals week, avoiding the onerous scheduling of a make-up
  exam with all the challenges of making new versions, etc.
- A resubmission _after_ feedback is given directly incentivizes engaging with
  feedback – it tells students what to improve in their resubmission! Indeed,
  the rubric for resubmission grading can often be “did you respond to the
  feedback”. And there is little stronger motivation for learning where you
  went wrong on an exam than knowing a retry of the same material is coming.

Some considerations:

<div class='sidenote'>For example by adding both <a
href="https://github.com/ucsd-cse29/pa1-utf8?tab=readme-ov-file#pa1-resubmission-due-date-1028-at-10pm">a
new function to implement and a new design question</a></sidenote>
- I've sometimes given _new_ tasks along with resubmissions, especially when
  chunks of the work are automatically graded, or on written work where the
  answer is “given away” by the feedback. In those cases resubmitting the
  “fixed” work on its own doesn't demonstrate the learning I'm looking for.
- Sometimes I have a cap on the resubmission credit (e.g. only 3/4 of the
  credit available for a resubmission after missing the deadline, see below),
  but never so much that a late submission on its own precludes a student from
  getting a good grade. However, it sometimes is enough that submitting _all_
  assignments late would preclude earning an A (or even a B). Without this,
  depending on how deadlines are structured a pitfall is having the
  resubmission deadline become the perceived “real” deadline.
- If I know all students will have a resubmission opportunity, this opens up a
  lot of rubric design space. When grading is “one-shot” the stakes are
  higher for mistakes and cross-student consistency: if two students get
  different assignment grades for similar work they may be rightly frustrated.
  However, if they have a resubmission attempt and the consequence is “submit
  again and get all the credit”, that is much lower stakes than “you have
  fewer points forever.” This has given me the freedom to experiment with
  ideas like not giving full credit until students fix _code style_ or _writing
  style_ feedback, even down to feedback like “please put your code examples
  in monospace font in your markdown.” With a normal one-show grading
  procedure, it feels _bad_ to lose points forever for this! But with a
  known-resubmit policy, it's simply holding students to a high standard.

In short, allowing multiple submissions supports the high standards of the
assessments we discussed in the last section, along with providing other useful
incentives and structures for missed work, engaging with feedback, and more.

A major tradeoff with resubmission for each assignment is the grading effort
for anything that requires human review. If all students are afforded a
resubmit, it seems natural that nearly twice as much grading would result.

In my experience, this is partially true. I have given fewer assignments (e.g.
5 or 6 instead of 8) when allowing resubmits. Also, my final exams have also
been mostly made up of retry exam material.  However, when I know up front that
grading is going to have to happen in bulk and involve resubmits, there are
some related decisions we can make that help a lot, specifically in how we set
up rubrics.

### Coarse Rubrics

I have found there to be a lot of _false precision_ when I default to grading
things out of e.g. 100 points. I don't really think that I have 100 increments
of credit. Rather, a student's work on an assignment or exam largely falls into
buckets of achievement – they've demonstrated mastery, proficiency, not much
understanding, etc. Exposing this false precision to students in grades causes
issues:

<div class="sidenote">And in weighted grading, a point on an assignment could
“make up” for a point missed on an exam later or vice versa, which compounds
the issue!</div>
- Students are incentivized to pursue even small amounts of credit. Because
  each point out of 100 could matter towards their grade, it is meaningful for
  them to strive for a 100 instead of a 95, even if I as an instructor think
  that those scores indicate basically the same achievement level.
- There are more opportunities for inconsistency across graders, especially
  when scaling up to a large course with many course staff. Without a very
  precise rubric, a finer-grained scoring system simply provides more chances
  that graders would reasonably give different grades to the same or similar
  work.

These issue have led me to use **coarse-grained rubrics and scoring** on just
about everything. That is, we may have many mechanisms for grading on the
backend (autograding with dozens or hundreds of unit tests, manual review of
code, reading written work, reading handwritten code on exam, and so on), but
the score exposed to students is a whole number in, say, the 0-4. Any grading
work we do is projected to one of those scores, and they send clear signals.

<div class="sidenote">I've gotten explicit feedback in course evaluations that
the little bit of leeway really makes students feel some trust that the course
staff is made of reasonable people.</div>
The clearest signal is 4 – if a student scores a 4 there is no more work for
them to do; we have evaluated their work as demonstrating mastery and there's
no more “credit” to get. Crucially, there's usually a bit of leeway below
“perfection” that still earns a 4. We may still give feedback about small
mistakes, or provide the few less important tests that failed, but all the
credit is still earned. This immediately removes an entire class of submissions
from needing resubmissions or retries. It also subtly signals that students can
relax a little bit – we are looking for them to demonstrate thorough
understanding and execution, but _not_ perfection.

Scores of 3 and 2 are similar (sometimes I've used 0-3 grading). Significant
errors were made, but the work is (mostly) complete and there's some meaningful
understanding demonstrated. A score of 1 usually means something was submitted
but it was quite incomplete or missed the point, and a score of 0 is reserved
for blank submissions, submissions of something totally wrong or different, or
missed deadlines.

A typical rubric for a programming assignment might require that a submission
pass all but a handful of test cases out of hundreds, and also demonstrate
understanding in written design questions, in order to earn a 4. If some core
test cases are passed but some meaningful features are incorrect, this could
result in a 2 or a 3 (perhaps depending on the supporting written design work),
and so on. Crucially, the human effort of deciding on the boundaries between
1-4 can be done (relatively) quickly. Further, all the benefits of retries
described above apply – a grader won't assign a 2 or 3 to work with _no_
mistakes, so even if a grader gives a 3 when a 4 would have been appropriate,
the only consequence is the student resubmits (and they learn more, and they
did make mistakes!) to earn full credit.

To avoid resubmissions being treated as the “real” deadlline, I'll have
policies like:

- If you score a 0 or 1, you can earn maximum a 3 on resubmission
- If you score a 2 or 3, you can earn a 4 on resubmission

This puts a strong incentive on submitting complete (if not correct) work at
the initial deadline in order to get feedback and have the option for a
full-credit resubmission available. At the same time, the overall grade
thresholds are set to make it so a few 3 grades don't ruin an overall course
grade.

Typically for exams I allow regaining _all_ credit on the retry exam.  There
are typically fewer exams than assignments, so missing one has more of an
impact. In addition, exams interact with students' schedules differently –
they happen in a specific time slot, which students can miss because of
illness, emergency, and more that span just a few hours. In contrast,
assignments are usually available for a week, and students _can_ submit them
early, and time management is a valuable skill. So incentivizing submitting
assignments on time comes with a different set of tradeoffs than trying to
incentivize the “be present at a specific time” nature of exams.

### Summary, Logistics, and Examples

I've presented how I've been grading according to three principles: **High
Standards Across Categories of Work**, **Multiple Tries on Most Activities**,
and **Coarse Grained Rubrics** that support one another in various ways.

#### Communicating with Students

Much of the grading strategy presented here is “nonstandard”, at least at my
institution. Other courses tend to use some kind of “pile of points” grading
with weighted averages across categories. This presents communication
challenges: I need students to understand how their work translates to grades,
while avoiding pitfalls like students perceiving the policy as draconian or
unfair.

There are several explicit strategies that have come up.

1. Around the first assignment deadline, I remind students of the policies and
that grades will be coming with feedback to fix. Students that *miss* the
deadline and ask for an extension are pointed to the policy in a positive way.
I don't say “the posted policy is your only option”. I say something more
like “I'm sorry X happened and you missed the deadline. There will be a
resubmission deadline on DD/MM, so please continue to do the work, come to
office hours, etc. See the policy here: ...” Many students haven't even seen
or read the policy carefully, they're just stressed out about missing the
deadline and email. In class I also remind students that _if_ they missed the
deadline, there is a resubmit opportunity.
2. When the first assignment's grades are released, the next day in class I
talk about what that means, when the resubmission deadline is, and how that
process works. This is also a second reminder for those who missed the deadline
that this is coming up.
3. Students typically find exams in the style I've been giving quite
challenging on the first attempt. As much as half the class will get a 1 or 0.
I come prepared for this: _before_ the exam I reiterate that my goal is to
uphold high standards, and give students mechanisms to practice and get to
those standards. _After_ exam grades are released, I reiterate that a 0 does
not mean they've lost credit forever; I use the phrase “even a 0 on the exam
has _no permanent impact on your final course grade yet_”. I think this is
impactful! It's also one of the few ways I've found to give a challenging
assessment (e.g. writing a C program from scratch in a pure command-line
environment) where students get to really feel the challenge, fail, and then
meet it again later. I tell them about this happening in the past and try to
motivate them.
4. In the syllabus I try to word as much as possible positively. I don't say
“your grade is the _minimum_ of XYZ categories” (even if that's
mathematically accurate). Instead I simply list the requirements to get an A,
B, etc. as crisply as possible. The vibe is meant to be “here are the
standards we will strive towards” not “I'm imposing this new grading scheme
because I believe students are cheating/using LLMs/fundamentally not
learning.” None of this should come from a punitive or mistrusting place,
rather from a place of setting out learning goals and their measurement.


#### Course Examples

I've been using syllabi designed from these principles for several years now.
Some of these use variations on the principles above: scores may be 0-3 or 0-2
instead of 0-4, there are creative ways of applying resubmission credit to
assignments, there are elements like participation in lab factored in, and so
on. There's actually a fairly rich design space here – in a lot of what I say
above I pick specific examples and policies to describe things, but they are
far from the only version I can imagine working.

All of the courses below have a grading/syllabus section that describes how the
scoring works, some description of how retries work, and some
publicly-available assignments:

<ul>
  <li><b>Systems Programming &amp; Software Tools</b> <i>(UCSD CSE 29)</i><br/>
    [<a href="https://ucsd-cse29.github.io/ss1-25">Summer1 2025</a>]
    [<a href="https://ucsd-cse29.github.io/fa24">Fall 2024</a>]
  </li>
  <li><b>Software Tools &amp; Techniques Laboratory</b> <i>(UCSD CSE 15L)</i><br/>
    [<a href="https://ucsd-cse15l-w24.github.io/">Winter 2024</a>]
    [<a href="https://ucsd-cse15l-s23.github.io/">Spring 2023</a>]
    [<a href="https://ucsd-cse15l-w23.github.io/">Winter 2023</a>]
    [<a href="https://ucsd-cse15l-w22.github.io/">Winter 2022</a>]
  </li>
  <li><b>Compilers</b> <i>(UCSD CSE 131/231)</i><br/>
    [<a href="https://ucsd-compilers-s23.github.io">Spring 2023</a>] <em>This uses a slightly different “resubmission” strategy where more comprehensive later compiler implementations could count for credit for earlier ones.</em>
  </li>
  <li><b>Introduction to Object-Oriented Programming in Java: Accelerated Pace</b>
    <i>(UCSD CSE 11)</i><br/>
    [<a href="https://ucsd-cse11-f21.github.io/">Fall 2021</a>]
  </li>
</li>



#### Attendance and Engagement

Often courses have 5-10% of the score dedicated to things like participation,
completing surveys, attending lecture, doing low-stakes weekly reading quizzes,
and so on. Broadly I refer to these as “engagement”. Depending on the course,
these might be one of the major categories (e.g. in Fall 2021 CSE11 there are
achievement levels for participation for various grade levels). If not,
typically what I do is say that the major components like exams and assignments
will decide the A/B/C/F letter grade, and various measures of engagement will
determine the +/- modifiers on the grade. So low engagement can't make a grade
drop from an A to a B, but it can drop an A to A-. I find this to be a useful
minor incentive to engage without having it take over too much of the
assessment of mastery.

In particular, engagement cannot *increase* a grade level or make the
difference between passing and failing the course. That has to come from the
more carefully designed secure assessments of specific outcomes.


#### Going Forward

This has gone beyond an experimental phase for me; I plan to use variants of
this grading strategy going forward until I find something deeply dissatisfying
or notably better. It helps me balance objective and secure assessment with
multiple-tries mastery. I have gotten positive or neutral feedback from
students about it, and I like the set of motivations and incentives it sets up
for them.

Feel free to reach out if you have questions or try some of these ideas and
have feedback!


