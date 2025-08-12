---
layout: blog
published: true
future: true
title: "High Standards, Multiple Tries: Illinois Summer Teaching Workshop 2024"
---

<h2><a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a></h2>

This page is for resources for the talk “High Standards, Multiple Tries – How
I've Been Grading”.

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

