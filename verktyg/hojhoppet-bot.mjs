// Kör en enkel datorförare genom alla banor i hojhoppet.html för att se att de går att klara
// och för att räkna fram rimliga tidsgränser (par). Kör: node verktyg/hojhoppet-bot.mjs  (lägg till -v för alla försök)
// Tumregel: par (3 stjärnor) ≈ datorförarens bästa tid × 1,35, avrundat uppåt.
import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../hojhoppet.html',import.meta.url),'utf8');
const pure=src.split('/*PURE-START*/')[1].split('/*PURE-END*/')[0];
const M=new Function(pure+';return {LEVELS,buildLevel,makeBike,stepBike,bikeAngle,bikeVel,slopeAt,PH};')();
const {LEVELS,buildLevel,makeBike,stepBike,bikeAngle,bikeVel,slopeAt,PH}=M;

function drive(L,opt){
  const T=buildLevel(L);let b=makeBike(T,40),t=0,crashes=0,cp=-1;
  const maxT=180;
  while(t<maxT){
    const a=bikeAngle(b),v=bikeVel(b),mx=(b.p[0].x+b.p[1].x)/2;
    const air=!b.con[0]&&!b.con[1];
    const target=air?slopeAt(T,mx+Math.max(0,v.x)*opt.look):slopeAt(T,mx);
    const err=a-target; // positivt = nosen för långt ned
    let lean=0;if(err>opt.db)lean=-1;else if(err<-opt.db)lean=1;
    const gas=v.x<opt.vmax&&!(err<-0.6&&!air);
    const r=stepBike(b,T,{gas,brake:v.x>opt.vmax+80,lean});t+=PH.DT;
    while(cp+1<T.cps.length&&b.p[1].x>T.cps[cp+1])cp++;
    if(r==='goal')return {t,crashes};
    if(r){crashes++;t+=1.1;b=makeBike(T,(cp>=0?T.cps[cp]:0)+40);if(crashes>40)return {t:Infinity,crashes,x:Math.round(mx),why:r};}
  }
  return {t:Infinity,crashes,stuck:Math.round((b.p[0].x+b.p[1].x)/2)};
}
for(const L of LEVELS){
  let best=null;const rows=[];
  for(const vmax of [250,350,450,560])for(const db of [.05,.12,.25])for(const look of [.2,.5]){
    const r=drive(L,{vmax,db,look});rows.push([vmax,db,look,r]);
    if(r.t<Infinity&&(!best||r.t<best.r.t||(r.crashes<best.r.crashes&&r.t<best.r.t*1.1)))best={vmax,db,look,r};
  }
  const clean=rows.filter(x=>x[3].crashes===0&&x[3].t<Infinity).length;
  const T=buildLevel(L);
  console.log(L.id.padEnd(10),'längd',Math.round(T.goal),'bäst',best?best.r.t.toFixed(1)+'s krascher '+best.r.crashes+' (v'+best.vmax+' db'+best.db+' look'+best.look+')':'KLARAS INTE',
    '| utan krasch:',clean+'/'+rows.length, '| par nu',L.par);
  if(process.argv.includes('-v'))for(const x of rows)console.log('   ',x[0],x[1],x[2],JSON.stringify(x[3]));
}
