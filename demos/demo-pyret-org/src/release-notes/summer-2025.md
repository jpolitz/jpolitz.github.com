## Pyret Updates 2025

We’ve released a few improvements and new features in Pyret that we are
excited to share!

- A Visual Studio Code extension for running Pyret
- Improvements to offline Pyret via [pyret-npm](https://www.npmjs.com/package/pyret-npm) and the VScode extension
- New ways to import modules
- New ways to work with files, URLs, and images
- A prototype of a block-based editor
- An update to the default context (called `starter2025`)
- Various bug fixes for images, charts, and more
- Documentation and naming convention clean up

There should be no backwards incompatibilities in this release for existing
code. However, since the default context changed, some new names are available
in new programs. This could affect you if you or your students students start
from a newly-created file in the `starter` context, see below.

## VScode Extension

Pyret now has a VScode extension:

[Pyret Interactive Editor for VSCode](https://marketplace.visualstudio.com/items?itemName=PyretProgrammingLanguage.pyret-parley)

It opens Pyret programs

## Improvements to Offline Pyret

The command-line version of Pyret, which most folks use through the [npm
package](FILL) has seen a few improvements:

- The `image` library is now fully functional from the command line. It uses
  the [node-canvas](FILL) npm package to do this. From the command line—and
  from the VScode mode!—you can use [`image-file`] to read images from a local
  path, and [`save-file`] to save (and later view) images
- We've added and documented a few new libraries including [`csv`], [`file`],
  and [`fetch`] for getting more work done from the command line. (TODO links)
  Functions that work with files function both from the command-line tool and
  from the VScode extension.

## New Ways to Import Modules

We've added the ability to import modules from URLs with `url(...)` and
`url-file(...)` imports (TODO link docs). This allows for development of
student-facing starter code and libraries for code.pyret.org without relying on
Google Drive.

## New Ways to Work with Files, URLs, and Images

csv-url for data that's not in Google

## Default Context Update

We changed the default context for new files to be `starter2025`. The new names
available are:

```
# constants:
E
PI

# numeric functions available without a `num-` prefix:
sqrt
expt
sqr
abs
cos
sin
tan

# more math-friendly names for a few functions:
dilate     # same as the image function scale
translate  # same as the image function put-image
negate     # a new function, equivalent to `fun negate(x): -1 * x end`
```

These were added specifically to support folks using mathy curricula who have
students start from brand-new files. This kind of update is something we expect
to do semi-regularly as we get feedback from users.

Existing files that have been saved before will have a context like
`essentials2021` (or something else previously configured) saved in them. This
ensures that this update won't break old code that uses these names in
background code or libraries. Only new files created on code.pyret.org will use
this context.

You can change the context for a program under the Pyret menu -> Choose
Context, if you want to switch a blank file back to `essentials2021` for any
reason. The [release notes from 2021](./summer-2021.html) talk more about
contexts.

## Block-based Editing

There is a _prototype_ block-based editor for Pyret available at
[https://code.pyret.org/blocks](https://code.pyret.org/blocks) that uses the
Snap! interface integrated with Pyret's runtime.

Feel free to try it out! Drag the blocks from the drawer on the left to form
your program

This is thanks to a lot of work from Jens Mönig, Dorai Sitaram, Emmanuel
Schanzer, Paul Carduner, and Adam Solove.
