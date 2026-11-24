// Skriver om FILER och VERSION i sw.js utifrån filerna i repot.
// Kör: node verktyg/pwa-lista.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rot = join(dirname(fileURLToPath(import.meta.url)), '..');
const MED = /\.(html|js|css|svg|png|webmanifest|json)$/;
const SKIPPA = new Set(['sw.js', 'fail.png', 'laser.png', 'mobile.png']);
const MAPPAR = ['', 'ikoner', 'flaggor'];

const filer = [];
for (const m of MAPPAR) {
  for (const f of readdirSync(join(rot, m)).sort()) {
    const vag = m ? m + '/' + f : f;
    if (!statSync(join(rot, vag)).isFile() || !MED.test(f) || SKIPPA.has(vag)) continue;
    filer.push(vag);
  }
}
const h = createHash('sha256');
for (const f of filer) { h.update(f); h.update(readFileSync(join(rot, f))); }
const version = h.digest('hex').slice(0, 10);
const lista = ['./', ...filer];

const swVag = join(rot, 'sw.js');
let sw = readFileSync(swVag, 'utf8');
sw = sw.replace(/var VERSION = '[^']*';/, `var VERSION = '${version}';`)
       .replace(/var FILER = \[[\s\S]*?\];/, 'var FILER = ' + JSON.stringify(lista, null, 0).replace(/","/g, '",\n  "').replace('["', '[\n  "').replace('"]', '"\n]') + ';');
writeFileSync(swVag, sw);
console.log(`sw.js: ${lista.length} filer, version ${version}`);
