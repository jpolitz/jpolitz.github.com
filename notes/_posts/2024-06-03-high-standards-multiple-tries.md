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

### How I Got Here

The overall design I've arrived at has a few interlocking, supporting pieces.
It's difficult for me to say which ones are orthogonal enough to use on their
own – when I think carefully through the consequences of each I'm led toward the
others. So I'll start with what I think is one of the motivations less commonly
mentioned and measured, but which I believe is absolutely critical.

#### Motivation 1: My Inbox, Assignment Extensions, and Emotional Energy

Many instructors will share the experience of a stressful processing of their
inbox the day after a significant assignment deadline. I often find myself
confronted with a influx of trauma, excuses, and requests to triage. I tend to
not have the emotional energy, nor the time, to investigate these, but generally
I expect that the vast majority are quite genuine expressions of bad situations
and requests for help.

> _“...I've been doing my work at XYZ public place because I don't have internet
at home, and that place's WiFi was unavailable last night, can I submit now that
I'm on campus?”_

> _“...My brother/father/friend broke their arm yesterday and I had to take them
to the hospital. Can I have an extension?...”_

> _“...I was sick with a fever and vomiting all day the past few days and...”_

> _“...I simply forgot to submit. This isn't like me and...”_

> _“...Gradescope was broken for me and I couldn't submit. Can I...”_

> _“...My family was displaced last week and...”

Not all of these always happen with the same intensity on each submission, but
it's not unheard of to have a dozen of these during stressful times when
teaching a course of hundreds of students. It becomes my job to triage these and
come up with appropriate responses to each.  But I've taught enough now to see
the pattern: I must accept that these are not exceptions, these are the rule.
Processing them as exceptions, consuming resources from staff or myself to
develop a fair and compassionate response tailored to each case, is not how I
want to handle them.

Further, this is just the most intense kind of message. There's another category
that shows up as well:

> _“I really feel I could have done better than what I submitted last night. My
Java is rusty (it's been a few years since I've taken a coding class) and I'm
doing my best to catch up with the resources you provided...”_

> _“I completely misunderstood part of the assignment and know I did badly on it.
I woke up this morning and immediately solved it...”_

These are interesting in that they don't cite external impositions on the
student's life. Rather, they are about the student's learning, and often involve
the student taking quite direct responsibility. Aren't these good reasons to
give extensions, to encourage these students and reward their desire to improve?
More triage, more careful weighing of options for how to handle the situation.

There's yet another category that I strongly suspect exists: emails from
students that are never sent, and requests for extensions never made. Maybe a
student has had the experience in the past of being denied accommodations so
they don't want to try again. Maybe it's a matter of pride: they don't want to
ask for a handout. Jessica Calarco has [made the
case](https://static1.squarespace.com/static/55b27527e4b0029a63553153/t/5ff05630232e037c66804710/1609586225556/Coached+for+the+Classroom_5_Accepted+Manuscript.pdf)
that the willingness to ask for exceptional treatment is split along economic
lines. In these cases, there's no message to carefully consider a response to,
while the student may be just as deserving of a response as the (also justified)
squeakier wheels.

**Design Goals**:

- Spend fewer instructional team resources (especially emotional energy)
responding to requests for exceptions around deadlines and extensions
- Respond fairly, perhaps uniformly, to these requests
- “Respond” to justified but unasked requests
- Reify this in a written policy that I am comfortable applying broadly
enough that exceptions to it are truly exceptional

#### Motivation 2: Grading, Feedback, and Regrading

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















