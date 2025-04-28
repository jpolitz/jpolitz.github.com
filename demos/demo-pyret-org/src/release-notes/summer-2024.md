## Pyret Updates 2025

We’ve been working on a few improvements and new features in Pyret that you'll
surely notice!

- An update to the default context (called `starter2025`)
- New ways to work with files and URLs
- New ways to import modules
- A new way to run Pyret via a VScode extension
- Improvements to offline Pyret via [pyret-npm](https://www.npmjs.com/package/pyret-npm)
- Various bug fixes for images, charts, and more
- A prototype of a block-based editor
- Documentation and namespace cleanup

There should be no backwards incompatibilities in this release **for existing code**. However, since the default context changed, some new names are available in new programs. This could affect you if you have students start from a blank file, see below.

## Default Context Update

We changed the default context for new files to be `starter2024`. The new names available are:

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

These were added specifically to support folks using mathy curricula who have students start from brand-new files. This kind of update is something we expect to do semi-regularly as we get feedback from users.

Existing files that have been saved before will have a context like `essentials2021` (or something else previously configured) saved in them. This ensures that this update won't break old code that uses these names in background code or libraries. Only new files created on code.pyret.org will use this context.

You can change the context for a program under the Pyret menu -> Choose Context, if you want to switch a blank file back to `essentials2021` for any reason. The [release notes from 2021](./summer-2021.html) talk more about contexts.

## Block-based Editing

There is a _prototype_ block-based editor for Pyret available at [https://code.pyret.org/blocks](https://code.pyret.org/blocks) that uses the Snap! interface integrated with Pyret's runtime.

Feel free to try it out! Drag the blocks from the drawer on the left to form your program



This is thanks to a lot of work from Jens Mönig, Dorai Sitaram, Emmanuel Schanzer, Paul Carduner, and Adam Solove.
