/* Spelhörnan: registrerar service workern (offline) och lägger en hemknapp 🏠
   på alla spelsidor så att man alltid kan ta sig tillbaka till startsidan. */
(function () {
  'use strict';
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
  var app = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  if (app) document.documentElement.classList.add('som-app');

  // Hemknappen 🏠 finns på alla sidor utom startsidan, både i webbläsaren och
  // i webbappen, och ligger ovanpå allt även under pågående spel.
  // Ett spel kan flytta den med <html data-hem="uppe-hoger|nere-vanster|nere-hoger">
  // (standard uppe till vänster) om den skulle krocka med spelets kontroller.
  function hemknapp() {
    var sida = location.pathname.split('/').pop();
    if (sida === '' || sida === 'index.html' || document.getElementById('hemknapp')) return;
    var plats = (document.documentElement.getAttribute('data-hem') || 'uppe-vanster').split('-');
    var stil = document.createElement('style');
    stil.textContent =
      '#hemknapp{position:fixed;z-index:2147483000;width:44px;height:44px;box-sizing:border-box;' +
      'display:flex;align-items:center;justify-content:center;font-size:22px;line-height:1;' +
      'text-decoration:none;background:rgba(255,255,255,.92);border:3px solid #2b5d82;' +
      'border-radius:50%;box-shadow:0 3px 0 rgba(18,50,74,.25);-webkit-tap-highlight-color:transparent;' +
      'touch-action:manipulation;user-select:none;-webkit-user-select:none;cursor:pointer}' +
      '#hemknapp:hover{background:#fff;transform:translateY(-1px)}' +
      '#hemknapp:active{transform:translateY(2px);box-shadow:0 1px 0 rgba(18,50,74,.25)}' +
      '#hemknapp:focus-visible{outline:3px solid #ff7a3d;outline-offset:2px}' +
      '@media print{#hemknapp{display:none}}';
    document.head.appendChild(stil);
    var a = document.createElement('a');
    a.id = 'hemknapp';
    a.href = './';
    a.textContent = '🏠';
    a.title = 'Till Spelhörnan';
    a.setAttribute('aria-label', 'Till Spelhörnan');
    a.style[plats[0] === 'nere' ? 'bottom' : 'top'] =
      'calc(env(safe-area-inset-' + (plats[0] === 'nere' ? 'bottom' : 'top') + ',0px) + 8px)';
    a.style[plats[1] === 'hoger' ? 'right' : 'left'] =
      'calc(env(safe-area-inset-' + (plats[1] === 'hoger' ? 'right' : 'left') + ',0px) + 8px)';
    // Spel som lyssnar på tangenter eller pekhändelser på hela sidan ska inte
    // få klicket på knappen.
    ['pointerdown', 'touchstart', 'mousedown'].forEach(function (t) {
      a.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
    });
    document.body.appendChild(a);
    document.documentElement.classList.add('har-hemknapp');
    // Skjut sidans rubrik åt sidan om knappen ligger ovanpå den när sidan är
    // rullad högst upp (främst på mobil).
    var h1 = document.querySelector('h1');
    function flyttaRubrik() {
      if (!h1 || !a.isConnected) return;
      h1.style.paddingLeft = '';
      var k = a.getBoundingClientRect(), r = h1.getBoundingClientRect(), y = window.scrollY || 0;
      if (!r.width || r.left >= k.right + 6 || r.right <= k.left || r.top + y >= k.bottom || r.bottom + y <= k.top) return;
      h1.style.paddingLeft = Math.ceil(k.right + 8 - r.left) + 'px';
    }
    flyttaRubrik();
    window.addEventListener('resize', flyttaRubrik);
    // Om spelet går in i helskärm på ett element flyttas knappen dit så den syns.
    document.addEventListener('fullscreenchange', function () {
      (document.fullscreenElement || document.body).appendChild(a);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hemknapp);
  else hemknapp();
})();
