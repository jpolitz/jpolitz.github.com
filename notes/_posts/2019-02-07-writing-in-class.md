---
layout: blog
title: "Writing in Class"
---

In many of my lectures, I draw onscreen alongside code, slides, and more.
Sometimes folks ask me about what I use, so this post summarizes and reviews
the different tools I've tried.

## Pens and Writing Surfaces

I've used two different writing surfaces:

### Wacom Bamboo CTH-470

![/img/bamboo.png](Wacom Bamboo CTH-470)

This is a USB-connected writing surface that gives pen input. I've used it on
OSX and on Ubuntu and both support it reasonably. On OSX I had to repeatedly
install the driver for it for some reason, but it was easy to find on the Wacom
web site.

One really nice feature of the pen is the multi-click button, which some
pen-based input editors support. It lets you select between three modes (e.g.
eraser, lasso select, writing) without having to click on a menu item.

It sometimes required a little work to calibrate exactly where the mapping
between the screen and the tablet was, especially when plugging it into a
projector and undergoing a resolution change. Typically it was best to just
plug the USB in _after_ connecting to a projector to let it figure out the
screen ratios.

The main downside is that you need to develop some hand-eye coordination in
mapping the pen to the screen, since the tablet itself is just a gray slate.
The pen input recognizes hovering and renders a cursor, but you need to learn
to track that movement on the screen while your hand moves around on the slate.

The pen itself has a pretty pleasant writing experience on the slate – it feels
“scratchy” and has similar resistance to writing on paper.

I used this tablet for about 2 years and it held up really well.

### iPad Pro 10.5", Apple Pencil, Astropad

In 2017, I got an iPad pro 10.5" and started using that, with an Apple Pencil,
for drawing in class. The main contrasts are:

- The writing experience is slightly less pleasant with pencil-on-glass than
  with the tablet
- No multi-click button, so all configuring needs to be done via menu items
- I get a screen with amazing touch plus pencil support on the iPad
- In terms of value added divided by backpack space, an iPad gives me more than
  a writing tablet (and since I lecture 3 days a week, one of them is always in
  my backpack). I read papers on my iPad, too, so even if it has some tradeoffs
  with the tablet, overall I like having it.

I'm including [https://astropad.com/](Astropad) here because you can't
out-of-the-box use an iPad and a Pencil to write on your OSX screen in any
reasonable way that I could find. Astropad is a pen-input screen-mirroring tool
for OSX and iOS.  You install the app on your laptop and on your iPad, connect
them, and the iPad becomes a mirrored screen with intelligent touch input. So
far, Astropad has completely gotten out of the way and done what I have hoped,
which is forward my Pencil strokes to my laptop smoothly. Not free, but worth
it.

## Software
 
### Xournal

[http://xournal.sourceforge.net/](Xournal) is a great piece of software for pen
input on X. It was awesomely configurable with the Wacom multi-button options,
generates nice PDFs of what's drawn, and has all kinds of nice touches:

- Insert vertical space tool (useful for organizing chunks of lecture)
- Lasso and rectangle select
- Configurable toolbar to maximize screen real estate

I really liked Xournal. I used it for a year or so when I still used Ubuntu as
my primary operating system. I stopped using it when I switched to OSX, because
the pen input was really janky through XQuartz and I never found a good way to
run it in that context. Highly recommended as an option on Linux. Free (in both
sense of the word).

### Write

[http://www.styluslabs.com/](Write) by Stylus Labs was the first tool I tried
in earnest on OSX after giving up on configuring Xournal.

Cool stuff:

- It has a unique feature – the “undo wheel” is a pretty cool idea: You hold
  down the pen on the undo button and make counterclockwise circles to cycle
  backward through document states, and clockwise to re-do.  It's a really neat
  pen-based affordance.
- If you paste off the bottom of the page, the page simply becomes larger to
  accommodate it.  Ditto drawing off the bottom of the page.  That's exactly
  the right thing in most cases.
- The stroke-based eraser, ruled insert-space, and lasso select are all awesome
  things that I came to expect in Xournal and found in Write as well.
- It's super-cool that it saves my drawings to SVG by default, and also allows
  me to make PDFs.
- The fullscreen mode nicely spends only the minimum required pixels on a
  one-tool-depth toolbar at the top.

There was some jank:

- It really doesn't do a great job with the scroll events coming from my
  trackpad.  It would scroll too far, or the screen would jump when I started
  writing after a scroll, or a bunch of other weirdness.  I try to avoid
  scrolling in class because it's hard for students to follow anyway, but this
  basically removed my ability to quickly jump back to an earlier point as a
  "free" action.
- I'm not sure if this is Write's fault or my pen input, but I could never
  quite get the hang of writing double quotes.  The two fast strokes tended to
  get connected at the top, so I ended up using single-quoted strings most of
  the time.  This caused some minor char-vs-string confusions accidentally.
- I never really got the hang of importing images and PDFs. The best I managed
  was usually to screenshot some images and paste them in, then move them
  around. I have a memory that annotating a PDF was hard for some reason, but
  my memory is a little fuzzy on why or what happened.

Free as in beer, not open source that I could find, and not sure if it's
under active development anymore.

### Notability

[https://www.gingerlabs.com/](Notability) is a polished, non-free OSX app that
I've been using for several quarters.

- Generates some of the prettiest/smoothest lines and exported PDFs
- Really simple PDF importing, which I use a ton in 2018/19 because I've
  started designing 1-2 page worksheets for students, and can fill them in
  interactively
- “Normal” features like stroke-based eraser and selection that I've come to
  expect work well
- Feels solid in a way some other apps haven't – no crashes, lots of autosaving
  happening in the background so I never lose work.

The main annoyance of the interface is that if you click on the color-selector
pallette to turn it on and off, it simply removes that chunk of the window
space (resizing the window), instead of using that space for more writing area.
This seems like the wrong choice to me and occasionally means I do a manual
window resize, but is overall pretty minor.

## Other Notes

### On Cool Features

One amazingly cool feature of using a tablet and a screen-based writing surface
is that you can do things like copy/paste, undo, select-and-move, and other
whiteboard impossibilities. This is great, but it's important to remember that
_students_ don't have these abilities in their paper notebooks. When lecturing,
I need to take care to note when I expect something to be student-writable, vs.
when I'm using the drawing power to make a point that students don't need to
note down.

Examples:

- When working on linked lists with removes and insertions, it's _not_ a good
  idea for me to use erase and node movement to show things happening, because
  the temporality is lost in the final picture, and students can't draw it.
- When I want to show how a full adder can be replicated 32 times to make a
  32-bit adder, it is **awesome** to draw the full adder, resize it to be tiny,
  duplicate it, and organize the copies on screen. The ad hoc animation is
  illustrative, and students wouldn't be able to draw all 32 adders anyway, so
  I'm not hampering their note-taking, just demonstrating something.

### On Scrolling and Screen Space

Scrolling is jarring for folks in the audience. It's pretty important to plan
out the layout of writing before a lecture to avoid scrolling too much. In
contrast to full-room whiteboards, a screen has relatively less real estate to
track past things that were written. So make sure anything you want students to
be able to copy doesn't get scrolled away too quickly, and avoid scrolling the
page too often, which can shatter students' visual context.

## On Preparing Visuals

One really nice thing you can do ahead of time is set up templates of
time-consuming parts of drawings, and put them in the flow of the document. For
example, drawing out a grid for the stack and heap can be difficult to do by
hand and take up unnecessary lecture time. Import a PDF or take screenshots of
the blank grid beforehand and use that to write on in class (and consider
handing out hard copies of the templates to students, as well!)

You can also write out the text form of questions you want to ask in typed
prose, so that you don't have to hand-write questions and students don't have
to just rely on hearing exactly what you asked aloud. Pre-seed the document
with peer instruction questions or discussion questions you want to ask, and
scroll to them or drag them onto the screen when you're ready to ask them.


