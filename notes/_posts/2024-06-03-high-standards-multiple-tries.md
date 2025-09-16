-r--
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

### Multiple Tries on Everything















