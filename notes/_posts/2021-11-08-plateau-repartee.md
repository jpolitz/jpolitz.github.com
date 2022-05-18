---
layout: blog
title: "Repartee at Plateau 2021"
---

<h2><a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a></h2>

The prototype implementation is on the <code>anchor</code> branch of the <code>pyret-lang</code> repo: [https://github.com/brownplt/pyret-lang/tree/anchor](https://github.com/brownplt/pyret-lang/tree/anchor). For archives and reproducibility, the commit used for the paper and talk is <code>a2f332b96ad97ec441fea47ecb5a1a98eb693aeb</code>.

The live demo (which may have some updates since the paper and/or talk, depending on when you are reading this) is at: [https://pyret-anchor.s3.amazonaws.com/anchor/index.html](https://pyret-anchor.s3.amazonaws.com/anchor/index.html), as it automatically re-builds from that repository.

There is also a [direct link to the code](https://pyret-anchor.s3.amazonaws.com/anchor/index.html?program=%23%20These%20are%20required%20for%20technical%20reasons%0Ainclude%20cpo%0Ainclude%20image%23.CHUNK%23%0Aring1%20%3D%20circle(50%2C%20%27solid%27%2C%20%27red%27)%23.CHUNK%23%0Aring2%20%3D%20overlay(circle(40%2C%20%27solid%27%2C%20%27white%27)%2C%20ring1)%23.CHUNK%23%0Aring3%20%3D%20overlay(circle(30%2C%20%27solid%27%2C%20%27red%27)%2C%20ring2)%23.CHUNK%23%0Aring4%20%3D%20overlay(circle(20%2C%20%27solid%27%2C%20%27blue%27)%2C%20ring3)%23.CHUNK%23%0Ashield%20%3D%20overlay(star(20%2C%20%27solid%27%2C%20%27white%27)%2C%20ring4)) used for the demo in the paper and the talk.

Read the paper here: [https://cs.brown.edu/~sk/Publications/Papers/Published/pmvnpkl-repartee-repl/](https://cs.brown.edu/~sk/Publications/Papers/Published/pmvnpkl-repartee-repl/)

The demo videos from the paper are directly linked below:

- [“Before” video of code.pyret.org behavior](https://drive.google.com/file/d/1fposbW87BPfHzNdKSLTVJPjTYmowmlMI/view)
- [“After” video of REPARTEE](https://drive.google.com/file/d/1FowaQ-4YUKRw7kPHGlPnQeTIUhxXxQK-/view)

The earlier blog post on this site that Joe Gibbs Politz and Michael MacLeod wrote summarizing the goals of the project is here: [https://jpolitz.github.io/notes/2020/07/10/repl-problems.html](https://jpolitz.github.io/notes/2020/07/10/repl-problems.html)
