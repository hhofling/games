/* Spelhörnan som webbapp: registrerar service workern (offline) och visar en
   hemknapp när sidan körs från hemskärmen och spelet saknar egen länk tillbaka. */
(function () {
  'use strict';
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
  var app = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  if (!app) return;
  document.documentElement.classList.add('som-app');
  function hemknapp() {
    var sida = location.pathname.split('/').pop();
    if (sida === '' || sida === 'index.html') return;
    if (document.querySelector('a[href="index.html"], a[href="./"]')) return;
    var a = document.createElement('a');
    a.href = './';
    a.textContent = '🏠';
    a.title = 'Till Spelhörnan';
    a.setAttribute('aria-label', 'Till Spelhörnan');
    a.style.cssText = 'position:fixed;z-index:99999;left:calc(env(safe-area-inset-left,0px) + 8px);' +
      'bottom:calc(env(safe-area-inset-bottom,0px) + 8px);width:44px;height:44px;display:flex;' +
      'align-items:center;justify-content:center;font-size:22px;text-decoration:none;' +
      'background:rgba(255,255,255,.85);border:3px solid #2b5d82;border-radius:50%;' +
      'box-shadow:0 3px 0 rgba(18,50,74,.22);-webkit-tap-highlight-color:transparent';
    document.body.appendChild(a);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hemknapp);
  else hemknapp();
})();
