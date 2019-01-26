// ==UserScript==
// @name      Disable Facebook Window Blur
// @namespace Disable-Facebook-Window-Blur
// @include   http://www.facebook.com/*
// @include   https://www.facebook.com/*
// @grant     none
// @run-at    document-start
// ==/UserScript==

const a = window.addEventListener;

window.addEventListener = function(e) {
  if (e !== 'blur') {
    a.apply(this, arguments);
  }
};
