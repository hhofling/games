/* Service worker för Spelhörnan. Gör att spelen fungerar utan nätverk.
   Listan FILER och VERSION skrivs om av: node verktyg/pwa-lista.mjs
   Kör det skriptet när ett spel eller en fil läggs till eller ändras. */
var VERSION = '29274ede12';
var FILER = [
  "./",
  "banbygget.html",
  "bilbanan.html",
  "drottningen.html",
  "himlapatrullen.html",
  "hojhoppet.html",
  "index.html",
  "kalaha.html",
  "klossregn.html",
  "korsordet.html",
  "krypkampen.html",
  "ledtradson.html",
  "manifest.webmanifest",
  "masken.html",
  "ordmemory.html",
  "pluggis.html",
  "pwa.js",
  "robotresan.html",
  "spelhornan.js",
  "topplista.html",
  "turborallyt.html",
  "varldsresan.html",
  "ikoner/apple-touch-icon.png",
  "ikoner/ikon-192.png",
  "ikoner/ikon-512.png",
  "ikoner/ikon-maskable-512.png",
  "ikoner/ikon.svg",
  "flaggor/ad.svg",
  "flaggor/ae.svg",
  "flaggor/af.svg",
  "flaggor/ag.svg",
  "flaggor/al.svg",
  "flaggor/am.svg",
  "flaggor/ao.svg",
  "flaggor/ar.svg",
  "flaggor/at.svg",
  "flaggor/au.svg",
  "flaggor/az.svg",
  "flaggor/ba.svg",
  "flaggor/bb.svg",
  "flaggor/bd.svg",
  "flaggor/be.svg",
  "flaggor/bf.svg",
  "flaggor/bg.svg",
  "flaggor/bh.svg",
  "flaggor/bi.svg",
  "flaggor/bj.svg",
  "flaggor/bn.svg",
  "flaggor/bo.svg",
  "flaggor/br.svg",
  "flaggor/bs.svg",
  "flaggor/bt.svg",
  "flaggor/bw.svg",
  "flaggor/by.svg",
  "flaggor/bz.svg",
  "flaggor/ca.svg",
  "flaggor/cd.svg",
  "flaggor/cf.svg",
  "flaggor/cg.svg",
  "flaggor/ch.svg",
  "flaggor/ci.svg",
  "flaggor/cl.svg",
  "flaggor/cm.svg",
  "flaggor/cn.svg",
  "flaggor/co.svg",
  "flaggor/cr.svg",
  "flaggor/cu.svg",
  "flaggor/cv.svg",
  "flaggor/cy.svg",
  "flaggor/cz.svg",
  "flaggor/de.svg",
  "flaggor/dj.svg",
  "flaggor/dk.svg",
  "flaggor/dm.svg",
  "flaggor/do.svg",
  "flaggor/dz.svg",
  "flaggor/ec.svg",
  "flaggor/ee.svg",
  "flaggor/eg.svg",
  "flaggor/er.svg",
  "flaggor/es.svg",
  "flaggor/et.svg",
  "flaggor/fi.svg",
  "flaggor/fj.svg",
  "flaggor/fm.svg",
  "flaggor/fr.svg",
  "flaggor/ga.svg",
  "flaggor/gb.svg",
  "flaggor/gd.svg",
  "flaggor/ge.svg",
  "flaggor/gh.svg",
  "flaggor/gm.svg",
  "flaggor/gn.svg",
  "flaggor/gq.svg",
  "flaggor/gr.svg",
  "flaggor/gt.svg",
  "flaggor/gw.svg",
  "flaggor/gy.svg",
  "flaggor/hn.svg",
  "flaggor/hr.svg",
  "flaggor/ht.svg",
  "flaggor/hu.svg",
  "flaggor/id.svg",
  "flaggor/ie.svg",
  "flaggor/il.svg",
  "flaggor/in.svg",
  "flaggor/iq.svg",
  "flaggor/ir.svg",
  "flaggor/is.svg",
  "flaggor/it.svg",
  "flaggor/jm.svg",
  "flaggor/jo.svg",
  "flaggor/jp.svg",
  "flaggor/ke.svg",
  "flaggor/kg.svg",
  "flaggor/kh.svg",
  "flaggor/ki.svg",
  "flaggor/km.svg",
  "flaggor/kn.svg",
  "flaggor/kp.svg",
  "flaggor/kr.svg",
  "flaggor/kw.svg",
  "flaggor/kz.svg",
  "flaggor/la.svg",
  "flaggor/lb.svg",
  "flaggor/lc.svg",
  "flaggor/li.svg",
  "flaggor/lk.svg",
  "flaggor/lr.svg",
  "flaggor/ls.svg",
  "flaggor/lt.svg",
  "flaggor/lu.svg",
  "flaggor/lv.svg",
  "flaggor/ly.svg",
  "flaggor/ma.svg",
  "flaggor/mc.svg",
  "flaggor/md.svg",
  "flaggor/me.svg",
  "flaggor/mg.svg",
  "flaggor/mh.svg",
  "flaggor/mk.svg",
  "flaggor/ml.svg",
  "flaggor/mm.svg",
  "flaggor/mn.svg",
  "flaggor/mr.svg",
  "flaggor/mt.svg",
  "flaggor/mu.svg",
  "flaggor/mv.svg",
  "flaggor/mw.svg",
  "flaggor/mx.svg",
  "flaggor/my.svg",
  "flaggor/mz.svg",
  "flaggor/na.svg",
  "flaggor/ne.svg",
  "flaggor/ng.svg",
  "flaggor/ni.svg",
  "flaggor/nl.svg",
  "flaggor/no.svg",
  "flaggor/np.svg",
  "flaggor/nr.svg",
  "flaggor/nz.svg",
  "flaggor/om.svg",
  "flaggor/pa.svg",
  "flaggor/pe.svg",
  "flaggor/pg.svg",
  "flaggor/ph.svg",
  "flaggor/pk.svg",
  "flaggor/pl.svg",
  "flaggor/ps.svg",
  "flaggor/pt.svg",
  "flaggor/pw.svg",
  "flaggor/py.svg",
  "flaggor/qa.svg",
  "flaggor/ro.svg",
  "flaggor/rs.svg",
  "flaggor/ru.svg",
  "flaggor/rw.svg",
  "flaggor/sa.svg",
  "flaggor/sb.svg",
  "flaggor/sc.svg",
  "flaggor/sd.svg",
  "flaggor/se.svg",
  "flaggor/sg.svg",
  "flaggor/si.svg",
  "flaggor/sk.svg",
  "flaggor/sl.svg",
  "flaggor/sm.svg",
  "flaggor/sn.svg",
  "flaggor/so.svg",
  "flaggor/sr.svg",
  "flaggor/ss.svg",
  "flaggor/st.svg",
  "flaggor/sv.svg",
  "flaggor/sy.svg",
  "flaggor/sz.svg",
  "flaggor/td.svg",
  "flaggor/tg.svg",
  "flaggor/th.svg",
  "flaggor/tj.svg",
  "flaggor/tl.svg",
  "flaggor/tm.svg",
  "flaggor/tn.svg",
  "flaggor/to.svg",
  "flaggor/tr.svg",
  "flaggor/tt.svg",
  "flaggor/tv.svg",
  "flaggor/tz.svg",
  "flaggor/ua.svg",
  "flaggor/ug.svg",
  "flaggor/us.svg",
  "flaggor/uy.svg",
  "flaggor/uz.svg",
  "flaggor/va.svg",
  "flaggor/vc.svg",
  "flaggor/ve.svg",
  "flaggor/vn.svg",
  "flaggor/vu.svg",
  "flaggor/ws.svg",
  "flaggor/xk.svg",
  "flaggor/ye.svg",
  "flaggor/za.svg",
  "flaggor/zm.svg",
  "flaggor/zw.svg"
];
var CACHE = 'spelhornan-' + VERSION;
var EXTERN = 'spelhornan-extern';
/* Bibliotek och typsnitt från andra sajter som spelen behöver offline. */
var EXTERNA_FILER = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js'
];
var EXTERNA_VARDAR = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', function (e) {
  e.waitUntil((async function () {
    var c = await caches.open(CACHE);
    await c.addAll(FILER.map(function (f) { return new Request(f, { cache: 'reload' }); }));
    var x = await caches.open(EXTERN);
    await Promise.all(EXTERNA_FILER.map(async function (u) {
      if (await x.match(u)) return;
      try { await x.put(u, await fetch(u, { mode: 'no-cors' })); } catch (err) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    var nycklar = await caches.keys();
    await Promise.all(nycklar.filter(function (k) { return k !== CACHE && k !== EXTERN; })
      .map(function (k) { return caches.delete(k); }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  if (url.origin === location.origin) {
    /* Egna filer: hämta nytt från nätet om det går (så uppdateringar syns direkt),
       annars den sparade kopian. */
    e.respondWith((async function () {
      var c = await caches.open(CACHE);
      try {
        var svar = await fetch(req);
        if (svar && svar.ok && svar.type === 'basic') c.put(req, svar.clone());
        return svar;
      } catch (err) {
        var sparat = await c.match(req, { ignoreSearch: true });
        if (sparat) return sparat;
        if (req.mode === 'navigate') {
          var start = await c.match('./');
          if (start) return start;
        }
        throw err;
      }
    })());
    return;
  }

  if (EXTERNA_VARDAR.indexOf(url.hostname) !== -1) {
    /* Typsnitt och bibliotek ändras inte: ta sparad kopia först. */
    e.respondWith((async function () {
      var x = await caches.open(EXTERN);
      var sparat = await x.match(req);
      if (sparat) return sparat;
      var svar = await fetch(req);
      if (svar && (svar.ok || svar.type === 'opaque')) x.put(req, svar.clone());
      return svar;
    })());
  }
  /* Allt annat (t.ex. topplistan i Supabase) går direkt till nätet. */
});
