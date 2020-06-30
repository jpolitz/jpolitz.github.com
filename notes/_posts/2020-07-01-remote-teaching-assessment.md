---
layout: blog
title: "Emergency Remote Teaching: Assessment"
---

<em style="color: gray; font-size: smaller">
  {{ page.date | date_to_long_string }}</em>

I taught <a href="https://ucsd-cse11-s20.github.io/">UCSD's CSE 11</a>, our
accelerated introduction course in Java, this spring in “emergency remote”
style. That is, we had about 2-3 weeks of notice that our courses would need
to be entirely online. I was the sole instructor, but aided by a talented
staff of 11 undergraduate and graduate instructional assistants. The
enrollment was roughly 200 students.

This post details how I ran **exam assessments** for the course; a separate
post details <a
href="/notes/2020/06/29/remote-teaching-lectures.html">lectures</a>. A lot of
the initial development for the exam ideas came from discussion with Mia
Minnes. Adalbert Gerald Soosai Raj and Greg Miranda gave me really useful
feedback and guidance on rubrics for the videos.

## Course and Context

I really dislike a heavy-handed culture of policing academic integrity, and
prefer to design assignments that encourage collaboration. I typically lean
somewhat on exams to provide a passing threshold for an individual assessment
– students need to pass a midterm or a final exam or both to pass the course.

For spring 2020 I was reluctant to lean on traditional exams this way (though
I actually don't think it would have been a terrible idea). I didn't want to
pursue live video proctoring solutions because of the privacy implications.
So I considered other options that would give me confidence that the students
I was giving grades to had actually completed the assessments their grade was
based on. Videos where they showed their student ID and completed an
assessment task seemed like a good solution.

## Programming Exams

The design I settled on was to give take-home programming tasks, with the
additional requirement that students **record a screencast of themselves
presenting it**. Students had to perform acceptably on at least one of these
in order to pass the course, and their letter grade depended on their
performance on all of them.

I thought through some different ideas for what to have them record. I
initially wondered if I could have them record the entire development of a
small method or class. That had a few issues. The videos could be quite long
due to getting stuck or typing speed. There were questions about authenticity
– did we care if they practiced developing the method off camera and then
typed it in on camera? The act of programming was too nebulous to really
rubric-ify, as well.

Next I thought about “explain your code” kinds of prompts. In a useful
conversation with Greg Miranda, he pointed out that he'd tried something
similar and “explain code” is nearly impossible to generate a rubric for, and
also difficult to control for length.

I ended up choosing a **tracing task** and making it essentially the same
kind of task for all of the exams, so that students could use feedback from
one exam to improve on the future ones. Here's the description from <a
href="https://ucsd-cse11-s20.github.io/exam2/">exam 2</a>:

> For the AllQuery with array of size 3 that you created in Task 3:

> Run the ExamplesSearch program and show the output corresponding to a method call for this example. Then, starting from the line in your code with the call to the matches method, indicate each line of code that runs in your program while evaluating that method call. You can scoll to and click the lines to highlight them, or otherwise indicate each one. You should indicate them **in the order that Java will evaluate them** (this might be different than the order they appear in the file).

I gave them an <a
href="https://drive.google.com/open?id=1E-TcVXSg9BI4MnWoVU9_BbcRJsu8ZhCf">example
of what I wanted</a>, working to focus the assessment not on interpreting the
prompt, but on applying the tracing task to their code. We talked about
tracing and order of evaluation quite a bit in class, so this was a familiar
idea, and I figured with 3 exams to attempt it, they could succeed at least
once.

## Learning Outcomes

While “trace code” is a learning outcome for the course, it's only one of
many that the course serves. The rest of the exam asked students to read
existing code, generate new code, and write about existing code, which are
other key learning outcomes. The videos served as a kind of “checksum,” so
that there was some moderately challenging task where we had confidence in
student identity and would assume from the video that the student was capable
of completing these other tasks as well. This is a kind of compromise we make
with any exam strategy! Summative assessments are often not a perfect
representation of the practice they are assessing.

Another program-level learning outcome in our CSE department is to
communicate orally about programs. This learning outcome is touched on in
various ways throughout our courses, mostly through project presentations and
group work. I realized while designing these exams that this provided a
pretty direct assessment of this learning outcome. In addition, **recording
screencasts is a really important skill**, especially given the current
situation's likely lasting changes to our work and communication habits. So
there's a pretty explicit benefit to students completing this exercise.

## Rubrics

Grading the videos required developing a rubric. Since videos were around 10
minutes in length, we needed rubrics good enough to parallelize across many
graders. I ended up using a relatively coarse and explicit rubric. Here's an
example:

- **6/6 points** [Correct]: Video has task described and shows the line by
line evaluation. OK if there are code mistakes as long as the description and
trace are correct and sufficiently detailed. OK if short circuiting behavior
of `&&`/`||` aren't described, but any early returns SHOULD be accounted for
(don't keep evaluating after return), OK if constructors are not discussed in
detail. The video MUST cover all uses of the matches method

- **3/6 points** [PartialTrace]: Like [Correct], but the task is described
without going through it step-by-step from the caller through the relevant
matches method calls. Might describe the methods in general without
describing the order/traversal through the methods. MUST STILL show some
method bodies that are related to the examples in both cases.

- **2/6 points** [NoMethodBody]: Only discusses the constructed objects
instead of the method bodies.

These ended up covering the vast majority of cases; the rest of the rubric
had some minor deductions for going over the desired length significantly or
other procedural issues.

The bar for passing was the **3/6** item. There's probably room for an item
in between these two rubric items, but we couldn't quite articulate it and
get it consistent. I think it's interesting that we added some explicit
exceptions like the `&&`/`||` tracing, which was necessary because some
students would jump back and forth between describing the trace on **the
specific values of the test case** and **the behavior of the method in
general**. But in many of these cases, they used language like “this call
_would_ go into this method and produce false,” so they were following the
spirit if not the letter of the prompt.

These quibbles notwithstanding, it was pretty clear when a student couldn't
make the passing bar, because they were unable to correctly relate the method
and class bodies in the program to the test case that they were asked to run.
This was our indication that, however they had produced the code on the
screen, they didn't have the understanding we wanted demonstrated.

I don't typically post grade distributions publicly, so I'm being explicitly
quiet in this post about how many students passed or failed by these
measures.

## Logistics

We had students submit their videos via Google Form with a File Upload
question. This was great because it stored their name in a spreadsheet with a
direct Drive link to their video. Drive uses the YouTube player, which let
our graders play at 1.5x or 2x speed when appropriate to grade more quickly,
and the Drive player supports a wide variety of video formats. We still did
the grading in Gradescope, graders just had the submission sheet open to
search for the student and find their video.

I made two tutorial videos, one about <a
href="https://drive.google.com/open?id=1KROMAQuTCk40zwrEFotlYSJJQdcG_GUU">making
screencasts with Zoom</a>, and one demonstrating the traces we wanted them to
produce. We had them create a simple video for an earlier programming
assignment to test their workflow. Some students ended up using a cell phone
to record, which in most cases worked fine, though the Zoom-recorded videos
were much easier to grade.

There are some potential equity issues with access to recording equipment,
software, and so on. I tried to keep things to software students for sure had
access to (e.g. Zoom licenses), and the only exception students asked for was
cell phone recording instead of doing a desktop screencast. At the same time,
I don't know if any students _didn't_ reach out, or how hard it was for them
to get access to the required resources. I had a general call for them to
reach out to me, but of course they may have taken on the burden quietly.

## Reflection and Improvements

Student feedback was mixed, some students praising the ability to work for a
few days and to explain themselves rather than taking a timed tests. Some
students lamented that they had to present orally and would have preferred a
more traditional assessment.

I'm not sure if I'd use this instead of “normal” exams (in-person or in-lab)
if we weren't forced to be remote. Given the need to be remote, I think I'd
refine this process but generally keep it the same.

I suspect there are tasks other than tracing that could be used. One other
kind of prompt I can think of is “here's some code, write a test that causes
lines 10, 25, and 30 to run, and discuss in what order those lines evaluate.”
It's similar to the prompts I gave, but forces students to also synthesize an
interesting test case, and the test case part would be auto-gradable with
coverage tools to see if it matches their description.

