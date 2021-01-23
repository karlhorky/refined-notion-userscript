// ==UserScript==
// @name        Refined Notion
// @namespace   Violentmonkey Scripts
// @match       https://www.notion.so/*
// @grant       none
// @version     1.0
// @author      Karl Horky
// @description 1/23/2021, 11:45:43 AM
// ==/UserScript==

// Prevent Notion cmd-N from overriding browser shortcut
// https://twitter.com/karlhorky/status/1352932541750247427
document.addEventListener('keydown', (event) => {
  if (event.key === 'n' && event.metaKey === true) {
    event.cancelBubble = true;
    event.stopImmediatePropagation();
  }

  return false;
});
