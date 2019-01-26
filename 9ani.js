// ==UserScript==
// @name      9anime Essentials
// @namespace 9anime-Essentials
// @include   http://www*.9anime.to/*
// @include   https://www*.9anime.to/*
// @grant     none
// @run-at    document-body
// ==/UserScript==

const head = document.querySelector('head');
const style = document.createElement('style');

style.textContent = `
  .widget.player .widget-body {
    margin-right: -10px;
    margin-left: -10px;
  }

  .widget.player #player {
    position: relative;
    height: 0;
    padding-bottom: 59.7%;
  }

  .widget.player #player iframe {
    position: absolute;
  }
`;
head.appendChild(style);

const scheduleLink = document.querySelector('a[href="schedule"]');

scheduleLink.setAttribute('href', 'schedule?tz=Europe%2FLondon');
