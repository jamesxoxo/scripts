// ==UserScript==
// @name      Masterani Essentials
// @namespace Masterani-Essentials
// @include   http://www.masterani.me/*
// @include   https://www.masterani.me/*
// @grant     none
// @run-at    document-start
// ==/UserScript==

const head = document.querySelector('head');
const style = document.createElement('style');

style.textContent = `
  .ui.grid > .row.anime-video {
    width: calc(100% + 60px) !important;
    margin-right: -30px;
    margin-left: -30px;
  }

  #watch > .ui.grid > .row.anime-video .options {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
head.appendChild(style);

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  const nav = document.querySelector('.menu.top.fixed');

  nav.classList.remove('fixed');
});

alert(nav);
