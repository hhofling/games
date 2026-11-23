// Bygger kart- och landsdata till varldsresan.html och kopierar flaggorna till flaggor/.
//
// Kör från repots rotmapp:
//   mkdir -p /tmp/vr && cd /tmp/vr && npm init -y && \
//     npm i world-atlas@2.0.2 world-countries@5.1.0 flag-icons@7.6.0 d3-geo@3.1.2 topojson-client@3.1.0 topojson-simplify@3.0.3
//   cd - && NODE_PATH=/tmp/vr/node_modules node verktyg/varldsresan-data.mjs /tmp/vr/node_modules
//
// Källor (öppen data):
//   Kartor:   Natural Earth 1:50m (public domain) via world-atlas (ISC)
//   Länder:   world-countries / mledoze (ODbL), svenska namn från dess översättningar
//   Flaggor:  flag-icons (MIT)
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const NM = path.resolve(process.argv[2] || 'node_modules');
const require = createRequire(path.join(NM, 'x.js'));
const d3 = require('d3-geo');
const topo = require('topojson-client');
const simp = require('topojson-simplify');
const COUNTRIES = require('world-countries');
const ATLAS = JSON.parse(fs.readFileSync(path.join(NM, 'world-atlas/countries-50m.json'), 'utf8'));
const FLAGDIR = path.join(NM, 'flag-icons/flags/4x3');
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const HTML = path.join(ROOT, 'varldsresan.html');

// FN-medlemmar plus Vatikanstaten, Kosovo och Palestina (som Sverige erkänner).
const EXTRA = ['VA', 'XK', 'PS'];

// Svenska namn där källan har ett äldre namn.
const NAME = { SZ: 'Eswatini', CZ: 'Tjeckien', CI: 'Elfenbenskusten' };

// Huvudstäder på svenska. Saknas en stad här används källans namn.
const CAP = {
  AT: 'Wien', BE: 'Bryssel', CZ: 'Prag', DK: 'Köpenhamn', GR: 'Aten', IT: 'Rom', LU: 'Luxemburg',
  PL: 'Warszawa', PT: 'Lissabon', RO: 'Bukarest', RU: 'Moskva', SM: 'San Marino', RS: 'Belgrad',
  VA: 'Vatikanstaten', MD: 'Chișinău',
  DZ: 'Alger', EG: 'Kairo', ET: 'Addis Abeba', ZA: 'Pretoria', SZ: 'Mbabane',
  AE: 'Abu Dhabi', AM: 'Jerevan', CN: 'Peking', IR: 'Teheran', IQ: 'Bagdad', KW: 'Kuwait',
  MN: 'Ulan Bator', SA: 'Riyadh', SY: 'Damaskus', TM: 'Asjchabad', TJ: 'Dusjanbe', UZ: 'Tasjkent',
  YE: 'Sanaa', KG: 'Bisjkek',
  AG: "Saint John's", CU: 'Havanna', US: 'Washington', GD: "Saint George's", TT: 'Port of Spain',
  KI: 'Tarawa',
};
// Inga frågor om huvudstad för länder där frågan är omstridd.
const NOCAP = new Set(['IL', 'PS']);
// Korta fakta som visas efter svaret och i Utforska.
const NOTE = {
  ZA: 'Sydafrika har tre huvudstäder: Pretoria, Kapstaden och Bloemfontein.',
  BO: 'Sucre är huvudstad, men regeringen sitter i La Paz.',
  NL: 'Amsterdam är huvudstad, men regeringen sitter i Haag.',
  CI: 'Yamoussoukro är huvudstad, men Abidjan är största staden.',
  CH: 'Bern kallas Schweiz "förbundsstad".',
  RU: 'Ryssland är världens största land. Det ligger både i Europa och Asien.',
  VA: 'Vatikanstaten är världens minsta land. Det ligger mitt i Rom.',
  SE: 'Här bor vi!',
  IL: 'Vilken stad som är huvudstad är omstritt.',
  PS: 'Vilken stad som är huvudstad är omstritt.',
};

function continent(c) {
  if (c.region === 'Europe') return 'europa';
  if (c.region === 'Africa') return 'afrika';
  if (c.region === 'Asia') return 'asien';
  if (c.region === 'Oceania') return 'oceanien';
  if (c.subregion === 'South America') return 'sydamerika';
  return 'nordamerika';
}

const list = COUNTRIES.filter(c => c.unMember || EXTRA.includes(c.cca2)).map(c => ({
  c: c.cca2,
  n: NAME[c.cca2] || c.translations.swe.common,
  k: NOCAP.has(c.cca2) ? '' : (CAP[c.cca2] || c.capital[0]),
  r: continent(c),
  num: c.ccn3,
  ll: c.latlng,
  note: NOTE[c.cca2] || '',
}));
list.sort((a, b) => a.n.localeCompare(b.n, 'sv'));

// Geometri: förenkla lite, slå ihop Somaliland med Somalia och Nordcypern med Cypern.
function build(q) {
const PRE = simp.presimplify(JSON.parse(JSON.stringify(ATLAS)));
const T = simp.simplify(PRE, simp.quantile(PRE, q));
const G = T.objects.countries.geometries;
const byNum = new Map(list.map(x => [x.num, x]));
const groups = new Map();
for (const g of G) {
  let code = byNum.get(g.id)?.c;
  const nm = g.properties.name;
  if (nm === 'Kosovo') code = 'XK';
  if (nm === 'Somaliland') code = 'SO';
  if (nm === 'N. Cyprus') code = 'CY';
  const key = code || ('_' + nm);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(g);
  g._key = key;
}
const shapes = new Map(); // code -> GeoJSON
for (const [k, gs] of groups) shapes.set(k, topo.merge(T, gs));
// Grannar, så att länder som gränsar till varandra får olika färg.
const nb = new Map();
topo.neighbors(G).forEach((ns, i) => {
  const a = G[i]._key;
  if (!nb.has(a)) nb.set(a, new Set());
  for (const j of ns) if (G[j]._key !== a) nb.get(a).add(G[j]._key);
});
shapes.nb = nb;
return shapes;
}
// Andel punkter som behålls. Världskartan visas mindre, så den förenklas mer.
const SHAPES = build(0.35), SHAPES_WORLD = build(0.1);

const VIEWS = {
  europa:      { box: [-25, 34, 45, 71.5], proj: () => d3.geoAzimuthalEqualArea().rotate([-12, -52]) },
  afrika:      { box: [-25, -35.5, 58, 38], proj: () => d3.geoAzimuthalEqualArea().rotate([-17, -2]) },
  asien:       { box: [26, -11, 146, 56], proj: () => d3.geoAzimuthalEqualArea().rotate([-88, -30]) },
  nordamerika: { box: [-168, 7, -52, 74], proj: () => d3.geoAzimuthalEqualArea().rotate([100, -45]) },
  sydamerika:  { box: [-82, -56, -34, 13], proj: () => d3.geoAzimuthalEqualArea().rotate([60, 20]) },
  oceanien:    { box: [112, -48, 190, 10], proj: () => d3.geoAzimuthalEqualArea().rotate([-155, 18]) },
  varlden:     { box: [-180, -57, 180, 80], proj: () => d3.geoEqualEarth().rotate([-11, 0]) },
};
const W = 1000;
const r1 = v => Math.round(v * 10) / 10;

// Girig färgläggning med fem färger, största grannskap först, den minst använda lediga färgen.
const color = {}, count = [0, 0, 0, 0, 0];
const order = list.map(x => x.c).sort((a, b) => (SHAPES.nb.get(b)?.size || 0) - (SHAPES.nb.get(a)?.size || 0));
for (const c of order) {
  const used = new Set([...(SHAPES.nb.get(c) || [])].map(n => color[n]));
  const free = [0, 1, 2, 3, 4].filter(k => !used.has(k));
  const k = (free.length ? free : [0, 1, 2, 3, 4]).sort((a, b) => count[a] - count[b])[0];
  color[c] = k; count[k]++;
}
const out = { views: {}, countries: list.map(({ num, ll, ...x }) => ({ ...x, f: color[x.c] })) };
for (const [name, V] of Object.entries(VIEWS)) {
  const [x0, y0, x1, y1] = V.box;
  const pts = [];
  for (let i = 0; i <= 20; i++) for (let j = 0; j <= 20; j++) pts.push([x0 + (x1 - x0) * i / 20, y0 + (y1 - y0) * j / 20]);
  const p = V.proj().fitWidth(W, { type: 'MultiPoint', coordinates: pts });
  const b = d3.geoPath(p).bounds({ type: 'MultiPoint', coordinates: pts });
  const H = Math.round(b[1][1] - b[0][1]);
  p.translate([p.translate()[0] - b[0][0], p.translate()[1] - b[0][1]]);
  const pad = 30;
  p.clipExtent([[-pad, -pad], [W + pad, H + pad]]);
  const gp = d3.geoPath(p).digits(1);
  const shapes = name === 'varlden' ? SHAPES_WORLD : SHAPES;
  const mine = list.filter(x => name === 'varlden' || x.r === name);
  const mineSet = new Set(mine.map(x => x.c));
  const paths = {}, dots = {};
  // Område under gränsen blir en klickbar prick i stället.
  const tiny = name === 'varlden' ? 40 : 70;
  for (const x of mine) {
    const s = shapes.get(x.c);
    const d = s ? gp(s) : null;
    const area = s ? gp.area(s) : 0;
    if (d) paths[x.c] = d;
    if (!d || area < tiny) {
      let pt = null;
      if (s) {
        // Prick på största delen av landet.
        let best = null, ba = -1;
        for (const poly of s.coordinates) {
          const f = { type: 'Polygon', coordinates: poly };
          const a = d3.geoArea(f);
          if (a > ba) { ba = a; best = f; }
        }
        if (best) pt = p(d3.geoCentroid(best));
      }
      const inside = q => q && q[0] > -5 && q[0] < W + 5 && q[1] > -5 && q[1] < H + 5;
      if (!inside(pt)) pt = p([x.ll[1], x.ll[0]]);
      if (inside(pt)) dots[x.c] = [r1(pt[0]), r1(pt[1])];
    }
  }
  // Allt land som inte är frågeländer: en grå bakgrund.
  const other = [];
  for (const [k, s] of shapes) if (!mineSet.has(k)) other.push(...(s.coordinates || []));
  const ctx = gp({ type: 'MultiPolygon', coordinates: other }) || '';
  const sphere = name === 'varlden' ? gp({ type: 'Sphere' }) : '';
  out.views[name] = { w: W, h: H, paths, dots, ctx, sphere };
  const sz = JSON.stringify(out.views[name]).length;
  console.log(name.padEnd(12), H, 'px', (sz / 1024 | 0) + 'k', Object.keys(paths).length, 'former', Object.keys(dots).length, 'prickar', 'saknas:', mine.filter(x => !paths[x.c] && !dots[x.c]).map(x => x.c).join(' '));
}

const json = JSON.stringify(out);
console.log('totalt', (json.length / 1024 | 0) + 'k', out.countries.length, 'länder');

let html = fs.readFileSync(HTML, 'utf8');
const A = '/*DATA-START*/', B = '/*DATA-END*/';
const i = html.indexOf(A), j = html.indexOf(B);
if (i < 0 || j < 0) throw new Error('Hittar inte DATA-markörerna i varldsresan.html');
html = html.slice(0, i + A.length) + '\nconst DATA=' + json + ';\n' + html.slice(j);
fs.writeFileSync(HTML, html);

const FL = path.join(ROOT, 'flaggor');
fs.mkdirSync(FL, { recursive: true });
for (const x of list) fs.copyFileSync(path.join(FLAGDIR, x.c.toLowerCase() + '.svg'), path.join(FL, x.c.toLowerCase() + '.svg'));
console.log('kopierade', list.length, 'flaggor');
