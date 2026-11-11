(function () {
  'use strict';
  var entries = Array.from(document.querySelectorAll('[data-tweet-id]'));
  if (!entries.length) return;
  var unavailable = '推文预览暂不可用，可通过上方链接查看原文。';
  function fallback(entry) {
    var status = entry.querySelector('.tweet-status');
    status.textContent = unavailable;
    status.hidden = false;
  }
  function render(entry) {
    var target = document.createElement('div');
    var previous = entry.querySelector('.tweet-target');
    target.className = 'tweet-target';
    previous.replaceWith(target);
    var status = entry.querySelector('.tweet-status');
    status.hidden = true;
    window.twttr.widgets.createTweet(entry.dataset.tweetId, target, {
      theme: document.documentElement.dataset.theme || 'light',
      dnt: true,
      conversation: 'none',
      align: 'left'
    }).then(function (frame) {
      if (!target.isConnected) return;
      if (!frame) fallback(entry);
      else status.hidden = true;
    }).catch(function () { if (target.isConnected) fallback(entry); });
    setTimeout(function () {
      if (target.isConnected && !target.querySelector('iframe')) fallback(entry);
    }, 10000);
  }
  var script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.onload = function () {
    if (!window.twttr || !window.twttr.widgets) { entries.forEach(fallback); return; }
    entries.forEach(render);
    new MutationObserver(function () { entries.forEach(render); }).observe(
      document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }
    );
  };
  script.onerror = function () { entries.forEach(fallback); };
  document.head.appendChild(script);
  setTimeout(function () {
    if (!window.twttr || !window.twttr.widgets) entries.forEach(fallback);
  }, 10000);
})();
