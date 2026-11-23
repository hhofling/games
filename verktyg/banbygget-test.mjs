// Kontrollerar att varje bana i banbygget.html går att klara med sin kända lösning (sol)
// och att den INTE går att klara utan några delar. Kör: node verktyg/banbygget-test.mjs
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../banbygget.html',import.meta.url),'utf8');
const pure=html.slice(html.indexOf('/*PURE-START*/'),html.indexOf('/*PURE-END*/'));
const M=new Function(pure+'\nreturn {LEVELS,W,H,parseLevel,makeSim,stepSim,canPlace};')();
function run(L,pieces){
  for(let i=0;i<pieces.length;i++){const p=pieces[i];if(!M.canPlace(L,pieces.slice(0,i),p.k,p.x,p.y))return {status:'kan inte placera '+p.k+' '+p.x+','+p.y};}
  const S=M.makeSim(L,M.parseLevel(L),pieces);
  while(S.status==='run')M.stepSim(S);
  return {status:S.status,why:S.why,stars:S.stars.filter(s=>s.got).length};
}
let fel=0;
M.LEVELS.forEach((L,i)=>{
  const probs=[];
  if(L.rows.length!==M.H||L.rows.some(r=>r.length!==M.W))probs.push('fel storlek');
  const P=M.parseLevel(L);
  if(P.starts.length!==L.obj.length)probs.push('antal S stämmer inte med obj');
  if(!P.goal)probs.push('inget mål');
  const sol=L.sol.map(s=>{const [k,x,y]=s.split(/[ ,]/);return {k,x:+x,y:+y};});
  const used={};sol.forEach(p=>used[p.k]=(used[p.k]||0)+1);
  for(const k in used)if(used[k]>(L.inv[k]||0))probs.push('lösningen använder för många '+k);
  const a=run(L,sol),b=run(L,[]);
  if(a.status!=='win')probs.push('lösningen klarar inte banan: '+a.status+' '+(a.why||''));
  if(b.status==='win')probs.push('banan klaras utan delar');
  if(probs.length)fel++;
  console.log(String(i+1).padStart(2),L.name.padEnd(22),probs.length?'FEL: '+probs.join(', '):'ok, '+a.stars+'/'+P.stars.length+' stjärnor');
});
process.exit(fel?1:0);
