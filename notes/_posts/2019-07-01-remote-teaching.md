---
layout: blog
title: "Emergency Remote Teaching: Lectures"
---

<em style="color: gray; font-size: smaller">
  {{ page.date | date_to_long_string }}</em>

I taught <a href="https://ucsd-cse11-s20.github.io/">UCSD's CSE 11</a>, our
accelerated introduction course in Java, this spring in “emergency remote”
style. That is, we had about 2-3 weeks of notice that our courses would need
to be entirely online. I was the sole instructor, but aided by a talented
staff of 11 undergraduate and graduate instructional assistants. The
enrollment was roughly 200 students.

This post details how I ran **lecture sessions** for the course. A lot of
credit for the overall approach goes to Arun Kumar and Niema Moshiri, whose
styles I blended to arrive at my approach. I also had some helpful
conversations with Kathi Fisler in the leadup to the quarter.

This is largely just a report on what I did – the course evaluations were
positive, and student feedback during the quarter indicated that all the
modalities described below were used and appreciated by some students. Beyond
that I haven't done much work to analyze data from the course, but I hope the
strategies outlined below are useful to folks to hear about nonetheless.

## Schedule and Context

The lecture met Tuesday and Thursday from 11am-12:20pm San Diego time.
Students were scattered over many different time zones (I polled at the start
of the quarter), but with the majority in California or at least Pacific
time. So I had to provide some completely asynchronous option for all
students, but I did have the opportunity to connect with many students live
during these scheduled times.

It's worth setting some context and some background about my teaching and
lecture style to explain the design goals here.

**Remark 1**: The value of forcing students to participate in lecture varies a
lot student-to-student based on their personal constraints, and students can
and should exercise their discretion in how much lecture they attend. My
courses usually have attendance policies that amount to “attend 1/2 to 2/3 of
the lectures to get full credit, but you can still get a good grade if you
skip them all.” So it isn't radically new for me to think about courses where
attendance is incentivized rather than required, and I'm comfortable with
half-full lecture halls. I value measurable *engagement* with the material
(thanks Mia Minnes for that terminology) more than *attendance*, even in
non-pandemic times.

**Remark 2**: I **dont't** teach well with a completely empty lecture hall.
The back-and-forth with students is the flesh on the bones of lecture. Every
group of students and course offering is different, and students' live
confusions, requests for clarification, and prompts for deeper understanding
help guide the direction of the course. These allow for cross-referenced
understanding and immediate insight (“Ask that question again next weeek!
Answers are coming!”; “Remember when we did the example with the `Book` class
for homework? This is applying the same idea!”; “What happens if you change
that `x` to `this.x` on line 10? Let's try it!”) that I don't know how to get
in high fidelity asynchronously.

## Watching Pre-Recorded Videos

I settled into a pattern of generating about 2 hours of video content per
week, split into 5-10 minute chunks, which I'd share with students the day
before lecture via <a
href="https://drive.google.com/drive/folders/1iPmJ1L5V2IBsg5tzj1y8uqqI7hAcpr7o">Google
Drive</a> (and Canvas, for students in countries with limited Google access).
This is not unlike the kind of video you'd make for a flipped classroom, or
for MOOC. These were generally a mix of live coding with an IDE/terminal on
one side of the screen and with diagrams and definitions on a digital
whiteboard on the other side.

<img src="/notes/img/lecture-screenshot.png" width="100%"/>

<div class='sidenote'>The idea to watch with students came from Arun
Kumar.</div> Then, I would *watch the videos with the students during
lecture*, and take their questions via private-to-instructor chat. Some
questions I would answer via private reply, others I'd copy/paste into the
public chat and answer, and others would prompt me to alt-tab from the video
to my laptop setup to try something live, augment a definition, and so on.
This was all done through Zoom. A quick search of the chat logs shows that I
answered roughly a dozen questions per lecture period in the public chat

I also shared with students a starter repo of the code I used for each
lecture (e.g. <a
href="https://github.com/ucsd-cse11-s20/09-Arrays-Main">https://github.com/ucsd-cse11-s20/09-Arrays-Main</a>)
so they could follow along with larger code files if they wanted. Sometimes I
would even tell them to look over a large file that wouldn't all fit on my
screen at once in order to come up with questions or observations.

## Active Learning

There were a few techniques I used for encouraging active learning for students
in lecture.

<div
class='sidenote'>I've seen the “pause here” idea a lot from chess streamers <a href="https://www.youtube.com/user/AGADMATOR">agadmator</a> and <a href="https://www.youtube.com/user/ChessNetwork">ChessNetwork</a>, who often encourage viewers to pause the video in key positions to try and figure out the best move. It was fun to implement it myself!</div>
1. Encourage questions and observations, and answer/respond to them in
between videos.
2. In between videos, ask students a direct question and have them answer via
chat. Given the free-form nature of chat, this could be a line of code, a
fill-in-the blank numeric answer, a yes/no, and so on. I enjoyed this
freedom, and it let me be quite spontaneous with the kinds of reply I was
requesting.
3. During a video, plant a question for students to answer. In the video I
could cue myself to let students do it by saying “take a minute to do this,
if you're watching on your own, pause the video before you go on.” This was
useful for lectures where I wasn't present and a TA was covering, because I
could make sure some key moments of reflection and interaction were “baked
in.” It was also useful for students who just wanted to watch the videos on
their own to have some self-paced interaction. I don't know the degree
to which students engaged with this practice.
4. I briefly tried using Zoom polls to re-use some of my multiple-choice peer
instruction questions from past offerings of the course. I found the poll
interface a bit flaky in Zoom a few times, which discouraged me at first.
This led me to start asking more free-response questions and using chat more
heavily, and once I got into that habit I didn't really go back to polls.
Free form text is great!

## Lecture Quizzes (Measuring Engagement)

Along with each lecture's worth of content, we created and released a lecture
quiz, intended to be completed after or along with the lecture and associated
reading to demonstrate engagement with that day's content. This completely
took over the role of tracking engagement, and there was no credit associated
with attendance (this in line with university policy as well, though I think
it was the right pedagogic choice anyway).

The lecture quizzes asked a mix of questions that referred to the code from
that lecture's recordings (sometimes by directly linking into the day's
repo), references to the reading material for the course (a mix of notes I
wrote and Ben Lerner's notes from <a
href="https://course.ccs.neu.edu/cs2510/index.html">CS2510 at
Northeastern</a>), and novel content and questions on the topic of the day.
Some of these very transparently were simply encouragement to download the
code from a lecture or reading and run it:

<img src="/notes/img/lecture-quiz.png" width="100%"/>

## Recording Tech

I used a bunch of tech, some new to me, some familiar, to complete all the
recordings:

### OBS

I used <a href="https://obsproject.com/">OBS (Open Broadcaster Software)</a>
to record all of the videos. I tried a few configurations. I eventually found
it most useful to have three “window” regions, one for VSCode, one for my
talking head, and one for my notes file. This was as opposed to sharing my
entire second monitor, which would include details like the clock, taskbar,
Dock animations, and notifications in unexpected ways no matter how I tried
to arrange it.

Probably the best, most important feature of OBS for me was that it encoded
the recording in real time, so there was no delay after finishing the
recording to get the finished file. Early on in the quarter I tried using
iMovie and ffmpeg to edit my old recorded lectures into bite-sized chunks,
and the export/reencoding step dominated the workflow. Similarly,
video editing after recording was almost *never* worth my time. Since OBS
exported immediately in the `.mkv` format that was playable in Drive, and it
was usually faster for me to re-do a 5-minute video than to try and move that
file into a tool like iMovie or even use `ffmpeg` to edit it.

The overall quality of the videos is lower than I know I'm capable of, but I
also was recording about 2 hours of content a week in under 4 total hours,
which was a total win.

### Notability

I used Notability as my virtual whiteboard. I write a lot more about virtual
whiteboarding in my post on <a
href="https://jpolitz.github.io/notes/2019/02/07/writing-in-class.html">writing
in class</a>.

### Zoom Screenshare

One of the nice features of having pre-recorded videos was that if students
had a lousy connection, they could pre-download the videos and watch them
live with the class, and only tune into the audio/chat of the Zoom call.

For students with good connections, I used Zoom screenshare to play the
videos on my screen and put it through the share to them. The only important
tip here is that when you screenshare in Zoom, there's a checkbox at the
bottom of the share window that allows you to share your computer's audio
over the screenshare. I used this for playing the videos.

### Google Drive

All of the videos were uploaded to Google Drive directly in the `.mkv` format
that is the default export format for OBS.

One attractive feature of sharing video via Drive is that it has a built-in
movie player that uses' YouTube's player, which is really good! I used Google
Backup and Sync to copy the video files to the appropriate lecture directory
right after recording, avoiding any extra steps of uploading to YouTube,
managing playlists, and so on.
