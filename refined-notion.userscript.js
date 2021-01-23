// ==UserScript==
// @name        Refined Notion
// @description Improve Notion.so
// @version     1.0
// @author      Karl Horky
// @namespace   https://www.karlhorky.com/
// @match       https://www.notion.so/*
// @grant       none
// ==/UserScript==

// Fix bug where Notion.so cmd-N shortcut overrides browser "New Window" shortcut
// https://twitter.com/karlhorky/status/1352932541750247427
document.addEventListener('keydown', (event) => {
  if (event.key === 'n' && event.metaKey === true) {
    event.cancelBubble = true;
    event.stopImmediatePropagation();
  }

  return false;
});
