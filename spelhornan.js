/* Spelhörnan: gemensamma spelare och rekord för alla spel.
   Allt sparas i webbläsaren (localStorage) under nyckeln "spelhornan-v1".

   Så här rapporterar ett spel ett resultat:
     Spelhornan.rapportera('masken', 'easy', { poang: 120, namn: 'Lätt' });
     Spelhornan.rapportera('pluggis', 'add-easy', { poang: 9, max: 10, tid: 41000, namn: 'Plus · Lätt' });
   - spel:  spelets id (samma som filnamnet utan .html)
   - gren:  bana, nivå eller läge inom spelet (rekord sparas per gren)
   - poang: högre är bättre. tid (ms) avgör vid lika poäng, kortare är bättre.
   Om ingen spelare är vald får man frågan "Vem spelade?" och resultatet sparas när man väljer.

   Spelarknapp i ett spels sidhuvud:  Spelhornan.knapp(document.querySelector('.tools'));
*/
(function () {
  'use strict';
  /* Delad topplista mellan enheter (Supabase). Lämna tomt för att bara spara i den här webbläsaren.
     Databasen skapas med verktyg/topplista-supabase.sql. Nyckeln är "anon public"-nyckeln och får vara publik. */
  var SUPABASE_URL = '';
  var SUPABASE_KEY = 'sb_publishable_k-NYbOre-x20RYiJ73hm2A_3oYRgkAf';

  var KEY = 'spelhornan-v1';
  var SYMBOLER = ['🦊', '🐻', '🐼', '🐸', '🦁', '🐙', '🦄', '🚀', '⭐', '🐱', '🐶', '🦖'];
  var MAX_SPELARE = 12;
  var lyssnare = [];
  var vantande = null; // resultat som väntar på att någon väljer spelare

  function tom() { return { players: [], active: null, best: {}, dirty: {}, gone: {}, raderade: {} }; }
  function las() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && Array.isArray(d.players)) {
        var obj = function (x) { return x && typeof x === 'object' ? x : {}; };
        return { players: d.players.filter(function (p) { return p && p.id && p.name; }), active: d.active || null, best: obj(d.best), dirty: obj(d.dirty), gone: obj(d.gone), raderade: obj(d.raderade) };
      }
    } catch (e) {}
    return null;
  }
  var DB = las();
  if (!DB) {
    DB = tom();
    // Första gången: ta med användarna som redan finns i Pluggis.
    try {
      var pl = JSON.parse(localStorage.getItem('pluggis-v1'));
      if (pl && Array.isArray(pl.players)) {
        pl.players.forEach(function (p) { if (p && p.id && p.name) DB.players.push({ id: p.id, name: p.name, sym: p.sym || SYMBOLER[0] }); });
        if (pl.active && DB.players.some(function (p) { return p.id === pl.active; })) DB.active = pl.active;
      }
    } catch (e) {}
    spara();
  }
  if (DB.active && !hitta(DB.active)) DB.active = null;

  function spara(utanSynk) { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} meddela(); if (!utanSynk) synkSnart(); }
  function meddela() { lyssnare.forEach(function (f) { try { f(); } catch (e) {} }); }
  function hitta(id) { for (var i = 0; i < DB.players.length; i++) if (DB.players[i].id === id) return DB.players[i]; return null; }
  function nyttId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function stad(namn) { return String(namn || '').replace(/\s+/g, ' ').trim().slice(0, 16); }

  // Andra flikar kan ändra spelare: läs om när det händer.
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) { var d = las(); if (d) { DB = d; meddela(); } }
  });

  function battre(ny, gammal) {
    if (!gammal) return true;
    if (ny.poang !== gammal.poang) return ny.poang > gammal.poang;
    if (ny.tid != null && (gammal.tid == null || ny.tid < gammal.tid)) return true;
    return false;
  }

  var API = {
    SYMBOLER: SYMBOLER,
    spelare: function () { return DB.players.slice(); },
    aktiv: function () { return hitta(DB.active); },
    hitta: hitta,
    raderad: function (id) { return !!DB.raderade[id]; },
    valj: function (id) { DB.active = hitta(id) ? id : null; spara(); },
    lagg: function (namn, sym, id) {
      namn = stad(namn); if (!namn) return null;
      var p = id && hitta(id);
      if (p) { p.name = namn; if (sym) p.sym = sym; }
      else { p = { id: id || nyttId(), name: namn, sym: sym || ledigSymbol() }; DB.players.push(p); }
      DB.dirty[p.id] = 1; delete DB.gone[p.id];
      spara(); return p;
    },
    andra: function (id, namn, sym) {
      var p = hitta(id); if (!p) return; namn = stad(namn);
      if (namn) p.name = namn; if (sym) p.sym = sym; DB.dirty[id] = 1; spara();
    },
    tabort: function (id) {
      DB.players = DB.players.filter(function (p) { return p.id !== id; });
      delete DB.best[id]; delete DB.dirty[id];
      DB.gone[id] = 1; DB.raderade[id] = 1;
      if (DB.active === id) DB.active = null;
      spara();
    },
    // Alla rekord: { spelarId: { spel: { gren: {poang,max,tid,namn,t} } } }
    rekord: function () { return DB.best; },
    rapportera: function (spel, gren, r) {
      r = r || {};
      var rec = { poang: Number(r.poang) || 0, max: r.max != null ? r.max : null, tid: r.tid != null ? Math.round(r.tid) : null, namn: r.namn || String(gren), t: Date.now() };
      var p = hitta(DB.active);
      if (!p) { fragaVem(spel, String(gren), rec); return { sparad: false, nytt: false }; }
      return sparaRekord(p.id, spel, String(gren), rec);
    },
    lyssna: function (f) { lyssnare.push(f); },
    delad: function () { return !!(SUPABASE_URL && SUPABASE_KEY); },
    status: function () { return status; },
    synka: function () { return synka(); },
    knapp: knapp,
    oppnaValjare: function (klar) { oppna(klar); }
  };

  function sparaRekord(pid, spel, gren, rec) {
    var b = DB.best[pid] = DB.best[pid] || {};
    var s = b[spel] = b[spel] || {};
    var gammal = s[gren];
    var nytt = battre(rec, gammal);
    if (nytt) { s[gren] = rec; spara(); }
    else if (gammal && gammal.namn !== rec.namn) { gammal.namn = rec.namn; spara(); }
    return { sparad: nytt, nytt: nytt && !!gammal, forsta: nytt && !gammal, tidigare: gammal || null };
  }

  function ledigSymbol() {
    var used = DB.players.map(function (p) { return p.sym; });
    return SYMBOLER.filter(function (s) { return used.indexOf(s) < 0; })[0] || SYMBOLER[0];
  }

  /* ---------- utseende ---------- */
  var CSS = '' +
    '.sh-knapp{font:inherit;font-weight:600;font-size:1rem;display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;border:3px solid #2b5d82;background:#fff;color:#12324a;cursor:pointer;box-shadow:0 3px 0 rgba(18,50,74,.22);min-height:40px;max-width:100%}' +
    '.sh-knapp:active{transform:translateY(2px);box-shadow:0 1px 0 rgba(18,50,74,.22)}' +
    '.sh-knapp:focus-visible,.sh-ruta button:focus-visible,.sh-ruta input:focus-visible{outline:3px solid #ff7a3d;outline-offset:2px}' +
    '.sh-knapp .sh-sym{font-size:1.25rem;line-height:1}' +
    '.sh-knapp .sh-nm{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.sh-bak{position:fixed;inset:0;background:rgba(18,50,74,.45);display:flex;align-items:center;justify-content:center;padding:16px;z-index:9999}' +
    '.sh-ruta{font-family:"Fredoka","Nunito","Trebuchet MS",system-ui,sans-serif;color:#12324a;background:#fff;border:4px solid #2b5d82;border-radius:22px;box-shadow:0 8px 0 rgba(18,50,74,.25);padding:18px;width:100%;max-width:440px;max-height:calc(100vh - 32px);overflow:auto}' +
    '.sh-ruta h2{margin:0 0 4px;font-size:1.5rem}' +
    '.sh-ruta p{margin:0 0 12px;color:#46647c}' +
    '.sh-lista{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:12px}' +
    '.sh-sp{font:inherit;font-size:1.05rem;font-weight:600;display:flex;flex-direction:column;align-items:center;gap:2px;padding:10px 6px;border-radius:16px;border:3px solid #2b5d82;background:#f3f9ff;color:#12324a;cursor:pointer;min-width:0}' +
    '.sh-sp .sh-sym{font-size:2rem;line-height:1.1}' +
    '.sh-sp .sh-nm{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.sh-sp[aria-pressed="true"]{background:#ffe3d3;border-color:#ff7a3d}' +
    '.sh-sp.sh-ny{border-style:dashed;background:#fff}' +
    '.sh-rad{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}' +
    '.sh-b{font:inherit;font-weight:600;font-size:1rem;padding:8px 16px;border-radius:14px;border:3px solid #2b5d82;background:#fff;color:#12324a;cursor:pointer;min-height:44px}' +
    '.sh-b.sh-hu{background:#ff7a3d;color:#fff;border-color:#c4501d}' +
    '.sh-b.sh-rod{color:#b3261e;border-color:#b3261e}' +
    '.sh-ruta label{display:block;font-weight:600;margin:6px 0 4px}' +
    '.sh-ruta input{font:inherit;font-size:1.15rem;width:100%;padding:8px 12px;border-radius:12px;border:3px solid #2b5d82;color:#12324a;background:#fff}' +
    '.sh-symg{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin:4px 0 12px}' +
    '.sh-symg button{font-size:1.6rem;padding:4px 0;border-radius:12px;border:3px solid #cfe2f1;background:#fff;cursor:pointer}' +
    '.sh-symg button[aria-pressed="true"]{border-color:#ff7a3d;background:#ffe3d3}' +
    '.sh-fel{color:#b3261e;min-height:1.3em;margin:0 0 8px}' +
    '.sh-tost{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9998;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;max-width:calc(100vw - 32px);font-family:"Fredoka","Nunito","Trebuchet MS",system-ui,sans-serif;background:#12324a;color:#fff;padding:10px 14px;border-radius:16px;box-shadow:0 6px 0 rgba(18,50,74,.3);font-size:1rem}' +
    '.sh-tost .sh-b{min-height:38px;padding:4px 12px}';
  function stil() {
    if (document.getElementById('sh-stil')) return;
    var s = document.createElement('style'); s.id = 'sh-stil'; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  /* ---------- spelarknapp ---------- */
  function knapp(behallare) {
    if (!behallare) return null;
    stil();
    var b = el('button', 'sh-knapp'); b.type = 'button';
    function rita() {
      var p = API.aktiv(); b.textContent = '';
      b.appendChild(el('span', 'sh-sym', p ? p.sym : '👤'));
      b.appendChild(el('span', 'sh-nm', p ? p.name : 'Välj spelare'));
      b.setAttribute('aria-label', p ? 'Spelare: ' + p.name + '. Tryck för att byta.' : 'Välj spelare');
    }
    rita(); lyssna(rita);
    b.addEventListener('click', function () { oppna(); });
    behallare.appendChild(b);
    return b;
  }
  function lyssna(f) { lyssnare.push(f); }

  /* ---------- väljare ---------- */
  var oppen = null;
  function stang() {
    if (!oppen) return;
    var o = oppen; oppen = null;
    document.removeEventListener('keydown', o.esc, true);
    o.bak.remove();
    if (o.fokus && o.fokus.focus) try { o.fokus.focus({ preventScroll: true }); } catch (e) {}
  }
  function oppna(klar, rubrik) {
    stil(); stang();
    var bak = el('div', 'sh-bak'), ruta = el('div', 'sh-ruta');
    ruta.setAttribute('role', 'dialog'); ruta.setAttribute('aria-modal', 'true');
    bak.appendChild(ruta);
    var o = oppen = { bak: bak, fokus: document.activeElement, esc: function (e) { if (e.key === 'Escape') { e.stopPropagation(); e.preventDefault(); stang(); } } };
    document.addEventListener('keydown', o.esc, true);
    bak.addEventListener('click', function (e) { if (e.target === bak) stang(); });
    document.body.appendChild(bak);

    function vy() {
      ruta.textContent = '';
      var h = el('h2', null, rubrik || 'Vem spelar?'); h.id = 'sh-rub'; ruta.setAttribute('aria-labelledby', 'sh-rub');
      ruta.appendChild(h);
      ruta.appendChild(el('p', null, DB.players.length ? 'Tryck på ditt namn. Dina rekord sparas i topplistan.' : 'Skapa en spelare så sparas dina rekord i topplistan.'));
      var lista = el('div', 'sh-lista');
      DB.players.forEach(function (p) {
        var b = el('button', 'sh-sp'); b.type = 'button';
        b.setAttribute('aria-pressed', String(p.id === DB.active));
        b.appendChild(el('span', 'sh-sym', p.sym)); b.appendChild(el('span', 'sh-nm', p.name));
        b.addEventListener('click', function () { API.valj(p.id); klart(); });
        lista.appendChild(b);
      });
      if (DB.players.length < MAX_SPELARE) {
        var ny = el('button', 'sh-sp sh-ny'); ny.type = 'button';
        ny.appendChild(el('span', 'sh-sym', '＋')); ny.appendChild(el('span', 'sh-nm', 'Ny spelare'));
        ny.addEventListener('click', function () { formular(null); });
        lista.appendChild(ny);
      }
      ruta.appendChild(lista);
      var rad = el('div', 'sh-rad');
      var akt = API.aktiv();
      if (akt) { var an = el('button', 'sh-b', 'Ändra ' + akt.name); an.type = 'button'; an.addEventListener('click', function () { formular(akt); }); rad.appendChild(an); }
      var st = el('button', 'sh-b', 'Stäng'); st.type = 'button'; st.addEventListener('click', stang); rad.appendChild(st);
      ruta.appendChild(rad);
      var f = lista.querySelector('[aria-pressed="true"]') || lista.querySelector('button'); if (f) f.focus({ preventScroll: true });
      if (!DB.players.length) formular(null);
    }
    function formular(p) {
      ruta.textContent = '';
      var sym = p ? p.sym : ledigSymbol(), radera = false;
      var h = el('h2', null, p ? 'Ändra spelare' : 'Ny spelare'); h.id = 'sh-rub'; ruta.appendChild(h);
      var lb = el('label', null, 'Namn'); lb.htmlFor = 'sh-namn'; ruta.appendChild(lb);
      var inp = el('input'); inp.id = 'sh-namn'; inp.maxLength = 16; inp.autocomplete = 'off'; inp.value = p ? p.name : '';
      ruta.appendChild(inp);
      ruta.appendChild(el('label', null, 'Välj en figur'));
      var g = el('div', 'sh-symg');
      function ritaSym() {
        g.textContent = '';
        SYMBOLER.forEach(function (s) {
          var b = el('button', null, s); b.type = 'button'; b.setAttribute('aria-pressed', String(s === sym)); b.setAttribute('aria-label', 'Figur ' + s);
          b.addEventListener('click', function () { sym = s; ritaSym(); });
          g.appendChild(b);
        });
      }
      ritaSym(); ruta.appendChild(g);
      var fel = el('p', 'sh-fel'); fel.setAttribute('role', 'alert'); ruta.appendChild(fel);
      var rad = el('div', 'sh-rad');
      if (p) {
        var del = el('button', 'sh-b sh-rod', 'Ta bort'); del.type = 'button';
        del.addEventListener('click', function () {
          if (!radera) { radera = true; del.textContent = 'Tryck igen: rekorden försvinner'; return; }
          API.tabort(p.id); vy();
        });
        rad.appendChild(del);
      }
      var av = el('button', 'sh-b', 'Tillbaka'); av.type = 'button'; av.addEventListener('click', function () { if (DB.players.length) vy(); else stang(); }); rad.appendChild(av);
      var ok = el('button', 'sh-b sh-hu', 'Spara'); ok.type = 'button';
      function sparaF() {
        var namn = stad(inp.value);
        if (!namn) { fel.textContent = 'Skriv ett namn.'; inp.focus(); return; }
        var finns = DB.players.some(function (q) { return q.name.toLowerCase() === namn.toLowerCase() && (!p || q.id !== p.id); });
        if (finns) { fel.textContent = 'Det namnet finns redan.'; inp.focus(); return; }
        if (p) { API.andra(p.id, namn, sym); vy(); }
        else { var np = API.lagg(namn, sym); API.valj(np.id); klart(); }
      }
      ok.addEventListener('click', sparaF);
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); sparaF(); } });
      rad.appendChild(ok); ruta.appendChild(rad);
      inp.focus({ preventScroll: true });
    }
    function klart() { stang(); if (klar) klar(API.aktiv()); }
    vy();
  }

  /* ---------- resultat utan vald spelare ---------- */
  var tost = null;
  function fragaVem(spel, gren, rec) {
    vantande = { spel: spel, gren: gren, rec: rec };
    stil();
    if (tost) tost.remove();
    tost = el('div', 'sh-tost'); tost.setAttribute('role', 'status');
    tost.appendChild(el('span', null, '🏆 Vill du spara resultatet i topplistan?'));
    var b = el('button', 'sh-b sh-hu', 'Välj spelare'); b.type = 'button';
    var x = el('button', 'sh-b', 'Nej tack'); x.type = 'button';
    b.addEventListener('click', function () {
      oppna(function (p) {
        if (p && vantande) { sparaRekord(p.id, vantande.spel, vantande.gren, vantande.rec); vantande = null; }
        if (tost) { tost.remove(); tost = null; }
      }, 'Vem spelade?');
    });
    x.addEventListener('click', function () { vantande = null; tost.remove(); tost = null; });
    tost.appendChild(b); tost.appendChild(x);
    document.body.appendChild(tost);
  }
  // När någon väljer spelare via knappen sparas ett väntande resultat också.
  lyssna(function () {
    var p = API.aktiv();
    if (p && vantande) { var v = vantande; vantande = null; sparaRekord(p.id, v.spel, v.gren, v.rec); if (tost) { tost.remove(); tost = null; } }
  });


  /* ---------- synk med Supabase ---------- */
  var status = SUPABASE_URL && SUPABASE_KEY ? 'synkar' : 'lokal', synkPagar = null, igen = false, synkTimer = null;
  function synkSnart() {
    if (!(SUPABASE_URL && SUPABASE_KEY)) return;
    clearTimeout(synkTimer); synkTimer = setTimeout(synka, 400);
  }
  function anrop(vag, metod, kropp, extra) {
    var h = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
    // Gamla anon-nycklar (JWT) skickas även som Authorization. Nya sb_publishable-nycklar får inte det.
    if (/^eyJ/.test(SUPABASE_KEY)) h.Authorization = 'Bearer ' + SUPABASE_KEY;
    if (extra) for (var k in extra) h[k] = extra[k];
    return fetch(SUPABASE_URL.replace(/\/+$/, '') + '/rest/v1/' + vag, { method: metod || 'GET', headers: h, body: kropp ? JSON.stringify(kropp) : undefined, cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) return r.text().then(function (t) { throw new Error(r.status + ' ' + t); });
        return r.status === 204 ? null : r.text().then(function (t) { return t ? JSON.parse(t) : null; });
      });
  }
  function satt(st) { if (st !== status) { status = st; meddela(); } }
  function synka() {
    if (!API.delad()) return Promise.resolve();
    if (synkPagar) { igen = true; return synkPagar; }
    satt('synkar');
    synkPagar = gorSynk().then(function () { satt('ok'); }, function (e) {
      satt('fel'); try { console.warn('Spelhörnan: kunde inte synka topplistan', e); } catch (x) {}
    }).then(function () {
      synkPagar = null;
      if (igen) { igen = false; return synka(); }
    });
    return synkPagar;
  }
  function gorSynk() {
    // 1. Skicka ändrade och borttagna spelare.
    var upp = [];
    Object.keys(DB.gone).forEach(function (id) { upp.push({ id: id, namn: 'Borttagen', sym: null, borttagen: true }); });
    Object.keys(DB.dirty).forEach(function (id) { var p = hitta(id); if (p) upp.push({ id: p.id, namn: p.name, sym: p.sym, borttagen: false }); });
    var steg = upp.length ? anrop('spelare?on_conflict=id', 'POST', upp.map(function (x) { x.andrad = new Date().toISOString(); return x; }), { Prefer: 'resolution=merge-duplicates,return=minimal' })
      .then(function () { upp.forEach(function (x) { delete DB.gone[x.id]; delete DB.dirty[x.id]; }); spara(true); }) : Promise.resolve();
    // 2. Hämta allt från servern.
    return steg.then(function () {
      return Promise.all([anrop('spelare?select=id,namn,sym,borttagen'), anrop('rekord?select=spelare_id,spel,gren,poang,max,tid,namn,t')]);
    }).then(function (res) {
      var sp = res[0] || [], rk = res[1] || [], paServer = {};
      // 3. Spelare: servern bestämmer, utom för det som ändrats här under tiden.
      sp.forEach(function (s) {
        paServer[s.id] = s;
        if (DB.dirty[s.id] || DB.gone[s.id]) return;
        var p = hitta(s.id);
        if (s.borttagen) {
          DB.raderade[s.id] = 1;
          if (p) { DB.players = DB.players.filter(function (q) { return q.id !== s.id; }); delete DB.best[s.id]; if (DB.active === s.id) DB.active = null; }
        } else if (p) { p.name = s.namn; p.sym = s.sym || p.sym; }
        else DB.players.push({ id: s.id, name: s.namn, sym: s.sym || SYMBOLER[0] });
      });
      var nya = DB.players.filter(function (p) { return !paServer[p.id]; });
      nya.forEach(function (p) { DB.dirty[p.id] = 1; });
      // 4. Rekord: behåll det bästa av lokalt och server.
      var server = {};
      rk.forEach(function (r) {
        if (!hitta(r.spelare_id)) return;
        var rec = { poang: Number(r.poang), max: r.max == null ? null : Number(r.max), tid: r.tid == null ? null : Number(r.tid), namn: r.namn || r.gren, t: Date.parse(r.t) || Date.now() };
        server[r.spelare_id + '\u0001' + r.spel + '\u0001' + r.gren] = rec;
        var b = DB.best[r.spelare_id] = DB.best[r.spelare_id] || {}, s = b[r.spel] = b[r.spel] || {};
        if (battre(rec, s[r.gren])) s[r.gren] = rec;
      });
      spara(true);
      var skicka = [];
      Object.keys(DB.best).forEach(function (pid) {
        if (!hitta(pid) || DB.dirty[pid]) return; // nya spelare skickas först, rekorden nästa varv
        var spel = DB.best[pid];
        Object.keys(spel).forEach(function (sn) {
          Object.keys(spel[sn]).forEach(function (g) {
            var lok = spel[sn][g], srv = server[pid + '\u0001' + sn + '\u0001' + g];
            if (!srv || battre(lok, srv) && (lok.poang !== srv.poang || lok.tid !== srv.tid)) skicka.push({ p_spelare: pid, p_spel: sn, p_gren: g, p_poang: lok.poang, p_max: lok.max, p_tid: lok.tid, p_namn: lok.namn });
          });
        });
      });
      var kedja = Promise.resolve();
      skicka.forEach(function (x) { kedja = kedja.then(function () { return anrop('rpc/spara_rekord', 'POST', x); }); });
      return kedja.then(function () { if (nya.length) igen = true; });
    });
  }
  if (API.delad()) {
    window.addEventListener('online', synkSnart);
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') synkSnart(); });
    synkSnart();
  }

  window.Spelhornan = API;
})();
