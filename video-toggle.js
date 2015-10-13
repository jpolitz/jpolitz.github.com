"use strict";
$(function() {
  $(".video-toggle").each(function(ix, elt) {
    elt = $(elt);
    var video = $("#" + elt.data("video"));
    var hider = $("#" + elt.data("hide"));
    elt.hover(function() { video.fadeIn(1000); });
    elt.click(function() { video.toggle(); });
    hider.click(function() { video.fadeOut(1000); });
  });
});
