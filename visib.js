// ==UserScript==
// @name      Disable Visibility API
// @namespace Disable-Visibility-API
// @include   *
// @grant     none
// @run-at    document-start
// ==/UserScript==

const a = Node.prototype.addEventListener;

Node.prototype.addEventListener = function(e) {
  if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange') {
    a.apply(this, arguments);
  }
};
