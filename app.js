"use strict";
const APP_VERSION = 59;
const STORAGE_KEY="finanzenPwaV49Clean";
const START_CAPITAL=2386.50;
const DEFAULTS={
 capitalHistory:[{"month":"2025-06","sparkasse":1500,"sparkasseInterest":1.81,"tradeRepublic":881.35,"trInterest":1.52,"dividend":0.02,"total":3.35},{"month":"2025-07","sparkasse":1520,"sparkasseInterest":1.01,"tradeRepublic":811.25,"trInterest":1.37,"dividend":0.37,"total":2.75},{"month":"2025-08","sparkasse":1525,"sparkasseInterest":1.02,"tradeRepublic":812.62,"trInterest":1.36,"dividend":0.21,"total":2.59},{"month":"2025-09","sparkasse":1530,"sparkasseInterest":1.02,"tradeRepublic":895.09,"trInterest":1.42,"dividend":0.1,"total":2.54},{"month":"2025-10","sparkasse":1500,"sparkasseInterest":1.0,"tradeRepublic":1297.71,"trInterest":1.81,"dividend":1.1,"total":3.91},{"month":"2025-11","sparkasse":1150,"sparkasseInterest":0.77,"tradeRepublic":1999.73,"trInterest":3.03,"dividend":0.21,"total":4.01},{"month":"2025-12","sparkasse":1460,"sparkasseInterest":0.97,"tradeRepublic":2227.86,"trInterest":2.71,"dividend":1.1,"total":4.78},{"month":"2026-01","sparkasse":885,"sparkasseInterest":0.6,"tradeRepublic":2231.61,"trInterest":3.79,"dividend":0,"total":4.39},{"month":"2026-02","sparkasse":465,"sparkasseInterest":0.35,"tradeRepublic":2235.61,"trInterest":3.43,"dividend":0.21,"total":3.99},{"month":"2026-03","sparkasse":665,"sparkasseInterest":0.5,"tradeRepublic":2169.92,"trInterest":3.72,"dividend":1.06,"total":5.28},{"month":"2026-04","sparkasse":475,"sparkasseInterest":0.32,"tradeRepublic":2174.81,"trInterest":3.58,"dividend":1.17,"total":5.07},{"month":"2026-05","sparkasse":635,"sparkasseInterest":0.42,"tradeRepublic":2655.5,"trInterest":4.27,"dividend":5.61,"total":10.3},{"month":"2026-06","sparkasse":5,"sparkasseInterest":0.11,"tradeRepublic":2562.05,"trInterest":4.46,"dividend":2.28,"total":6.85},{"month":"2026-07","sparkasse":655,"sparkasseInterest":0.49,"tradeRepublic":2567.7,"trInterest":4.91,"dividend":1.19,"total":6.59},{"month":"2026-08","sparkasse":655,"sparkasseInterest":0.49,"tradeRepublic":2622.61,"trInterest":5.01,"dividend":0,"total":5.5},{"month":"2026-09","sparkasse":null,"sparkasseInterest":0,"tradeRepublic":null,"trInterest":null,"dividend":null,"total":null}],
 incomeHistory:[{"month":"2025-06","salary":426.53,"bonus":50,"tips":150,"parents":105,"costs":-35.93,"total":795.6},{"month":"2025-07","salary":237.31,"bonus":50,"tips":125,"parents":105,"costs":-35.93,"total":596.38},{"month":"2025-08","salary":599.89,"bonus":50,"tips":200,"parents":105,"costs":-35.93,"total":1018.96},{"month":"2025-09","salary":617.17,"bonus":50,"tips":200,"parents":105,"costs":-60.93,"total":1011.24},{"month":"2025-10","salary":667.81,"bonus":50,"tips":250,"parents":105,"costs":-137.08,"total":1035.73},{"month":"2025-11","salary":719.6,"bonus":50,"tips":225,"parents":105,"costs":-920.42,"total":279.18},{"month":"2025-12","salary":761.84,"bonus":50,"tips":250,"parents":105,"costs":-181.42,"total":1070.42},{"month":"2026-01","salary":735.94,"bonus":50,"tips":225,"parents":105,"costs":-187.42,"total":928.52},{"month":"2026-02","salary":506.8,"bonus":50,"tips":125,"parents":105,"costs":-191.7,"total":595.1},{"month":"2026-03","salary":595.92,"bonus":50,"tips":225,"parents":105,"costs":-247.2,"total":728.72},{"month":"2026-04","salary":920.26,"bonus":50,"tips":250,"parents":105,"costs":-303.7,"total":1021.56},{"month":"2026-05","salary":1014.08,"bonus":50,"tips":325,"parents":105,"costs":-240.7,"total":1278.38},{"month":"2026-06","salary":514.92,"bonus":50,"tips":100,"parents":105,"costs":-215.7,"total":554.22},{"month":"2026-07","salary":560.75,"bonus":50,"tips":200,"parents":105,"costs":-240.7,"total":700.05},{"month":"2026-08","salary":852.75,"bonus":50,"tips":300,"parents":105,"costs":-215.7,"total":1092.05},{"month":"2026-09","salary":840,"bonus":50,"tips":300,"parents":105,"costs":-265.7,"total":1079.3},{"month":"2026-10","salary":840,"bonus":50,"tips":300,"parents":105,"costs":-247.2,"total":1079.3},{"month":"2026-11","salary":840,"bonus":50,"tips":300,"parents":105,"costs":-240.7,"total":1079.3},{"month":"2026-12","salary":840,"bonus":50,"tips":300,"parents":105,"costs":-215.7,"total":1079.3}],
 amexHistory:[{"month":"2025-05","expenses":-942.84},{"month":"2025-06","expenses":-332.81},{"month":"2025-07","expenses":-485.92},{"month":"2025-08","expenses":-556.42},{"month":"2025-09","expenses":-379.02},{"month":"2025-10","expenses":-354.97},{"month":"2025-11","expenses":-368.61},{"month":"2025-12","expenses":-1426.3},{"month":"2026-01","expenses":-633.6},{"month":"2026-02","expenses":-509.36},{"month":"2026-03","expenses":-602.85},{"month":"2026-04","expenses":-363.47},{"month":"2026-05","expenses":-781.81},{"month":"2026-06","expenses":-275.2},{"month":"2026-07","expenses":-586.81}],
 fixedCosts:[{"id":"netflix","name":"Netflix","amount":9.99,"day":31,"frequency":"monthly","when":"Ende des Monats"},{"id":"telekom","name":"Telekom","amount":19.95,"day":31,"frequency":"monthly","when":"Ende des Monats"},{"id":"spotify","name":"Spotify","amount":12.99,"day":1,"frequency":"monthly","when":"Anfang des Monats"},{"id":"versicherung","name":"Versicherung","amount":148.77,"day":14,"frequency":"monthly","when":"Mitte des Monats"},{"id":"cheer-month","name":"Cheerleading","amount":24,"day":1,"frequency":"monthly","when":"Anfang des Monats"},{"id":"fsv","name":"FSV","amount":31.5,"day":1,"frequency":"semiannual","months":[4,10],"when":"April & Oktober"},{"id":"hanse","name":"HanseMerkur","amount":25,"day":14,"frequency":"annual","months":[9],"when":"Mitte September"},{"id":"cheer-year","name":"Cheerleading Jahresbeitrag","amount":59,"day":1,"frequency":"annual","months":[4],"when":"April"},{"id":"reit","name":"Reitverein","amount":50,"day":1,"frequency":"annual","months":[3],"when":"März"},{"id":"friseur","name":"Friseur","amount":25,"day":1,"frequency":"bimonthly","months":[6,8,10,12],"when":"alle 2 Monate"}], assets:[{"id":"sparkasse-giro","name":"Sparkasse Girokonto","type":"bank","balance":0,"rate":0},{"id":"spk-tg1","name":"Sparkasse Tagesgeld 1","type":"savings","balance":645,"rate":0.88},{"id":"spk-tg2","name":"Sparkasse Tagesgeld 2","type":"savings","balance":10,"rate":0.88},{"id":"tr-cash","name":"Trade Republic Tagesgeld","type":"savings","balance":2622.61,"rate":2.25},{"id":"tr-stock","name":"Trade Republic Aktien","type":"stock","balance":789.98,"monthlyDividend":1.7,"costBasis":722.73}], priorityGoals:[[1,"Absicherung","Polster",10000,10000,null,null,null,null,39.36,39.36,4067.59],[2,"Bildung","Master",182.1,370,null,null,null,null,0,0,null],[3,"Haus","Dachzustand prüfen und reparieren",1500,5000,null,null,null,null,0,0,null],[4,"Haus","Treppenhaus sanieren",900,3063,null,null,null,null,0,0,null],[5,"Haus","Sanierung Bad Erdgeschoss",5000,10000,null,null,null,null,0,0,null],[6,"Haus","Renovierung Bad Wohnung",3000,7000,null,null,null,null,0,0,null],[7,"Haus","Sanierung Bad Opa",5000,10000,null,null,null,null,0,0,null],[8,"Bank","Kredit Deutsche Bildung",13440,13790,null,null,null,null,8.3,0,null],[9,"Bank","Raten Vorwerk",581.97,529.02,null,null,null,null,0,0,null],[10,"Bank","Kredit ING",52336.78,52336.78,7080,7080,590,590,0,0,null],[11,"Bank","Kredit Bulldog",45727.88,45727.88,7017.12,7017.12,584.76,584.76,0,0,null],[12,"Bank","Kredit Haus",51436.68,51436.68,10277.64,10277.64,856.47,856.47,0,0,null],[13,"Scheune","Wohnung in Scheune sanieren",180000,250000,null,null,null,null,0,0,null],[14,"Altes Haus","Architekten/Bauplaner beauftragen",18000,103500,null,null,null,null,0,0,null],[15,"Altes Haus","Grundsanierung",200000,690000,16800,22200,1400,1850,0,0,null],[16,"Altes Haus","Automat",1150,9200,534,7620,44.5,635,0,0,null],[17,"Altes Haus","Laden einrichten",3300,10000,null,null,null,null,0,0,null],[18,"Altes Haus","Ferienwohnung einrichten",12000,25000,null,null,null,null,0,0,null],[19,"Altes Haus","Eventraum einrichten",10000,22000,null,null,null,null,0,0,null],[20,"Altes Haus","Büro einrichten",3200,11200,null,null,null,null,0,0,null],[null,"Haus","Bodenbeläge Zimmer",2500,6000,null,null,null,null,0,0,null],[null,"Haus","Modernisierung Haus Isolation",37000,80000,null,null,null,null,0,0,null],[null,"Haus","Modernisierung Haus Heizung",8000,23000,2400,3600,200,300,0,0,null],[null,"Scheune","Stall bauen",4200,12900,null,null,null,null,0,0,null],[null,"Scheune","Werkstatt renovieren",4000,4800,null,null,null,null,0,0,null],[null,"Gewölbekeller","renovieren",13500,22500,null,null,null,null,0,0,null],[null,"Eckhaus","zurückkaufen",400000,480000,null,null,null,null,0,0,null],[null,"Garten","Gartenhaus renovieren",3000,5000,null,null,null,null,0,0,null],[null,"Haustier","Hund/e",150,400,600,1800,50,150,0,0,null],[null,"Haustier","Pferde",11000,24000,9600,13200,800,1100,0,0,null],[null,"Auto","Audi A3",22000,30000,2640,3600,220,300,0,0,null],[null,"Eltern","Versorgt",650000,1100000,null,null,null,null,0,0,null],[null,"Gnadenhof","Land kaufen & bauen",5913254.39,18394160,1218590,2768939,101549.17,230744.92,0,0,null],[null,"Strandhaus","kaufen",300000,2500000,null,null,null,null,0,0,null],[null,"Herrenhaus","kaufen",300000,1500000,null,null,null,null,0,0,null],[null,"Herrenhaus","sanieren",90000,700000,null,null,null,null,0,0,null],[null,"Schloss","kaufen",300000,4000000,null,null,null,null,0,0,null],[null,"Schloss","sanieren",480000,4500000,30000,135000,2500,11250,0,0,null]], fuelEntries:[{"id":"fuel-initial","date":"2026-07-01","amount":278.75,"note":"Bisheriger Stand"}],
 amexPaid:{}, goals:[], settings:{}
};
const clone=o=>JSON.parse(JSON.stringify(o));
const $=id=>document.getElementById(id);
const fmt=n=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(Number(n)||0);
const pct=n=>`${(Number(n)||0).toFixed(2).replace(".",",")} %`;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const monthLabel=m=>{if(!m)return"–";const [y,mo]=m.split("-");return new Date(+y,+mo-1,1).toLocaleDateString("de-DE",{month:"long",year:"numeric"})};
const currentMonth=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`};
const daysInMonth=ym=>{const [y,m]=ym.split("-").map(Number);return new Date(y,m,0).getDate()};
function load(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY));return x&&typeof x==='object'?{...clone(DEFAULTS),...x}:clone(DEFAULTS)}catch{return clone(DEFAULTS)}}
let data=load();

const fixedCostsFromMay2026V54 = {"2026-05": -240.7, "2026-06": -215.7, "2026-07": -240.7, "2026-08": -215.7, "2026-09": -265.7, "2026-10": -247.2, "2026-11": -240.7, "2026-12": -215.7};
function applyFixedCostsFromMay2026V54(){
  const rows = Array.isArray(data.incomeHistory)
    ? data.incomeHistory
    : (Array.isArray(data.v7?.incomeHistory) ? data.v7.incomeHistory : []);

  rows.forEach(row=>{
    if(Object.prototype.hasOwnProperty.call(fixedCostsFromMay2026V54,row.month)){
      row.costs = fixedCostsFromMay2026V54[row.month];
      row.total =
        Number(row.salary||0) +
        Number(row.bonus||0) +
        Number(row.tips||0) +
        Number(row.parents||0) +
        Number(row.costs||0);
    }
  });

  data.settings = data.settings || {};
  data.settings.fixedCostsFromMay2026Version = 54;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
applyFixedCostsFromMay2026V54();


function normalizeDataV51(){
 if(!Array.isArray(data.assets))data.assets=[];
 if(!data.assets.some(a=>a.id==="sparkasse-giro"||String(a.name||"").toLowerCase()==="sparkasse girokonto"))data.assets.unshift({id:"sparkasse-giro",name:"Sparkasse Girokonto",type:"bank",balance:0,rate:0});
 localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
normalizeDataV51();
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(data));renderAll()}
function annualOccurrences(f){return f==='monthly'?12:f==='bimonthly'?6:f==='quarterly'?4:f==='semiannual'?2:1}
function fixedAnnual(){return data.fixedCosts.reduce((s,x)=>s+Math.abs(x.amount)*annualOccurrences(x.frequency),0)}
function fixedMonthly(){return fixedAnnual()/12}
function fixedDaily(){return fixedAnnual()/365}
function fixedForMonth(ym){const m=Number(ym.slice(5));return data.fixedCosts.filter(x=>x.frequency==='monthly'||(x.months||[]).includes(m))}
function interestForAsset(a,ym=currentMonth()){return ['savings','bank','cash'].includes(a.type)?a.balance*(a.rate||0)/100/365*daysInMonth(ym):0}
function dividendMonthly(){return data.assets.filter(a=>a.type==='stock').reduce((s,a)=>s+Number(a.monthlyDividend||0),0)}
function totalWealth(){return data.assets.reduce((s,a)=>s+Number(a.balance||0),0)}
function stockValue(){return data.assets.filter(a=>a.type==='stock').reduce((s,a)=>s+Number(a.balance||0),0)}
function stockProfit(){return data.assets.filter(a=>a.type==='stock').reduce((s,a)=>s+Number(a.balance||0)-Number(a.costBasis ?? a.balance ?? 0),0)}
function monthlyInterest(ym=currentMonth()){return data.assets.reduce((s,a)=>s+interestForAsset(a,ym),0)}
function passive(){const i=monthlyInterest(),d=dividendMonthly(),m=i+d,days=daysInMonth(currentMonth());return{interest:i,dividend:d,monthly:m,daily:m/days,annual:m*12,coverage:fixedMonthly()?m/fixedMonthly()*100:0}}
function currentIncome(){return data.incomeHistory.find(x=>x.month===currentMonth())||data.incomeHistory.at(-1)}
function currentAmex(){return data.amexHistory.find(x=>x.month===currentMonth())||data.amexHistory.at(-1)}
function monthsSinceStart(){const d=new Date();return Math.max(1,(d.getFullYear()-2025)*12+(d.getMonth()+1-6))}
function syncCurrentCapital(){let r=data.capitalHistory.find(x=>x.month===currentMonth());if(!r){r={month:currentMonth(),dividend:0};data.capitalHistory.push(r)};const spk=data.assets.filter(a=>a.type==='savings'&&a.name.toLowerCase().includes('sparkasse'));const tr=data.assets.find(a=>a.id==='tr-cash');r.sparkasse=spk.reduce((s,a)=>s+a.balance,0);r.sparkasseInterest=spk.reduce((s,a)=>s+interestForAsset(a),0);r.tradeRepublic=tr?.balance||0;r.trInterest=tr?interestForAsset(tr):0;r.total=r.sparkasseInterest+r.trInterest+Number(r.dividend||0)}
function capitalMetrics(){syncCurrentCapital();const wealth=totalWealth(),diff=wealth-START_CAPITAL;const hist=data.capitalHistory.filter(x=>x.month!==currentMonth());return{wealth,diff,growth:diff/START_CAPITAL*100,avg:diff/monthsSinceStart(),interestProfit:hist.reduce((s,r)=>s+Number(r.sparkasseInterest||0)+Number(r.trInterest||0),0)+monthlyInterest(),dividendProfit:hist.reduce((s,r)=>s+Number(r.dividend||0),0)+Number(data.capitalHistory.find(x=>x.month===currentMonth())?.dividend||0)}}
function cumulativeAmex(){let sum=0;return new Map([...data.amexHistory].sort((a,b)=>a.month.localeCompare(b.month)).map((r,i)=>[r.month,(sum+=Math.abs(r.expenses))/(i+1)]))}
function avgSurplus(){const inc=new Map(data.incomeHistory.map(r=>[r.month,Number(r.total||0)]));const rows=data.amexHistory.filter(r=>inc.has(r.month));return rows.length?rows.reduce((s,r)=>s+inc.get(r.month)-Math.abs(r.expenses),0)/rows.length:0}
function set(id,v){const e=$(id);if(e)e.textContent=v}
function renderTabs(){document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));b.classList.add('active');$(b.dataset.page)?.classList.add('active')})}
function renderDashboard(){const p=passive(),c=capitalMetrics(),inc=currentIncome(),am=currentAmex();set('headerMonth',new Date().toLocaleDateString('de-DE',{month:'long',year:'numeric'}));set('totalWealth',fmt(c.wealth));set('wealthChange',`${c.diff>=0?'+':''}${fmt(c.diff)} seit Juni 2025`);set('monthExpenses',fmt(fixedDaily()));set('monthIncome',fmt(inc?.total||0));set('monthBalance',`Monatsüberschuss: ${fmt((inc?.total||0)-Math.abs(am?.expenses||0))}`);set('passiveMonth',`${fmt(p.monthly)}/Monat`);set('passiveYear',`${fmt(p.annual)}/Jahr`);set('breakEvenPassive',pct(p.coverage));set('breakEvenWithSalary',`Mit Einnahmen: ${pct(((inc?.total||0)+p.monthly)/fixedMonthly()*100)} der Fixkosten`);const bar=$('passiveProgress');if(bar)bar.style.width=`${Math.min(100,p.coverage)}%`;set('interestProfit',fmt(c.interestProfit));set('dailyInterest',`aktuell ${fmt(p.interest/daysInMonth(currentMonth()))}/Tag`);set('dividendProfit',fmt(c.dividendProfit));set('monthlyDividend',`durchschnittlich ${fmt(p.dividend)}/Monat`);set('stockProfit',fmt(stockProfit()));set('dashboardStockValue',`aktueller Aktienwert: ${fmt(stockValue())}`);set('capitalGrowth',pct(c.growth));set('capitalDelta',`${c.diff>=0?'+':''}${fmt(c.diff)} seit Juni 2025 · Ø ${fmt(c.avg)} pro Monat · aktuelles Vermögen ${fmt(c.wealth)}`);renderAssetSummary();renderNextFixed();renderDashboardHistory();renderAmexDashboard()}
function renderAssetSummary(){const e=$('assetSummary');if(e)e.innerHTML=data.assets.map(a=>`<div class="list-item"><span>${esc(a.name)}</span><strong>${fmt(a.balance)}</strong></div>`).join('')}
function nextDue(x){const d=new Date(),y=d.getFullYear(),m=d.getMonth()+1;let months=x.frequency==='monthly'?[m,m+1]:x.months||[];for(let add=0;add<14;add++){let mm=m+add,yy=y+Math.floor((mm-1)/12);mm=((mm-1)%12)+1;if(x.frequency==='monthly'||months.includes(mm)){let day=Math.min(x.day,new Date(yy,mm,0).getDate());let dt=new Date(yy,mm-1,day);if(dt>=new Date(y,m-1,d.getDate()))return dt}}return new Date(y+1,0,1)}
function renderNextFixed(){const e=$('nextFixedCosts');if(!e)return;e.innerHTML=[...data.fixedCosts].sort((a,b)=>nextDue(a)-nextDue(b)).slice(0,5).map(x=>`<div class="list-item next-fixed-item"><div class="next-fixed-main"><strong>${esc(x.name)}</strong><span>${nextDue(x).toLocaleDateString('de-DE')}</span></div><strong>${fmt(-x.amount)}</strong></div>`).join('')}
function renderAmexDashboard(){const sel=$('amexMonthSelect');if(!sel)return;sel.innerHTML=[...data.amexHistory].reverse().map(r=>`<option value="${r.month}">${monthLabel(r.month)}</option>`).join('');sel.value=currentAmex()?.month||'';const update=()=>{const r=data.amexHistory.find(x=>x.month===sel.value);set('amexMonthTotal',fmt(Math.abs(r?.expenses||0)));set('amexStatus',data.amexPaid[sel.value]?'Abgebucht':'Noch nicht als abgebucht markiert')};sel.onchange=update;$('toggleAmexPaid').onclick=()=>{data.amexPaid[sel.value]=!data.amexPaid[sel.value];save()};update()}
function renderDashboardHistory(){const e=$('financeHistoryBody');if(e)e.innerHTML=[...data.capitalHistory].sort((a,b)=>a.month.localeCompare(b.month)).map(r=>`<tr><td>${monthLabel(r.month)}</td><td>${r.sparkasse==null?'–':fmt(r.sparkasse)}</td><td>${fmt(r.sparkasseInterest)}</td><td>${r.tradeRepublic==null?'–':fmt(r.tradeRepublic)}</td><td>${r.trInterest==null?'–':fmt(r.trInterest)}</td><td>${r.dividend==null?'–':fmt(r.dividend)}</td><td>${r.total==null?'–':fmt(r.total)}</td></tr>`).join('');set('historyTotalProfit',fmt(data.capitalHistory.reduce((s,r)=>s+Number(r.total||0),0)))}
const INTEREST_GOALS_V51=[[0.17,2757.78],[0.18,2920],[0.19,3082.22],[0.20,3244.44],[0.21,3406.67],[0.22,3568.89],[0.23,3731.11],[0.24,3893.33],[0.25,4055.56],[0.26,4217.78],[0.27,4380],[0.28,4542.22],[0.29,4704.44],[0.30,4866.67]];
function trCashV51(){const a=data.assets.find(x=>x.id==='tr-cash'||(String(x.name||'').toLowerCase().includes('trade republic')&&String(x.name||'').toLowerCase().includes('tagesgeld')));return Number(a?.balance||0)}
function renderInterestGoalsV51(){const cash=trCashV51();const a=$('interestGoalsBody');if(a)a.innerHTML=INTEREST_GOALS_V51.map(([d,t])=>`<tr><td>${Math.round(d*100)} Cent</td><td>${fmt(t)}</td><td>${fmt(Math.max(0,t-cash))} fehlen</td></tr>`).join('');const b=$('interestTargetsBody');if(b)b.innerHTML=INTEREST_GOALS_V51.map(([d,t])=>`<tr><td>${Math.round(d*100)} Cent</td><td>${fmt(Math.max(0,t-cash))}</td><td>${t<=cash?'erreicht':'offen'}</td></tr>`).join('')}
function renderOverview(){const p=passive(),c=capitalMetrics();set('v6TotalWealth',fmt(c.wealth));set('v6AvgSaving',fmt(avgSurplus()));const avgInc=data.incomeHistory.reduce((s,r)=>s+r.total,0)/(data.incomeHistory.length||1);set('v6SavingRate',pct(avgInc?avgSurplus()/avgInc*100:0));set('v6PassiveMonthly',fmt(p.monthly));set('v6FixedMonthly',fmt(fixedMonthly()));set('v6Coverage',pct(p.coverage));const ml=$('milestoneList');if(ml)ml.innerHTML=[5000,10000,25000,50000,100000].map(t=>{const progress=c.wealth/t*100,months=c.avg>0?Math.max(0,(t-c.wealth)/c.avg):Infinity,dt=new Date();if(Number.isFinite(months))dt.setMonth(dt.getMonth()+Math.ceil(months));return`<div class="milestone-row-v51"><strong>${fmt(t)}</strong><div class="progress"><div style="width:${Math.min(100,progress)}%"></div></div><span>${pct(progress)} · ${Number.isFinite(months)?dt.toLocaleDateString('de-DE'):'–'}</span></div>`}).join('');const yr=$('yearForecast');if(yr){const inc2026=data.incomeHistory.filter(r=>r.month.startsWith('2026')).reduce((s,r)=>s+r.total,0);const am=data.amexHistory.filter(r=>r.month.startsWith('2026'));const annualExp=(am.reduce((s,r)=>s+Math.abs(r.expenses),0)/(am.length||1))*12;yr.innerHTML=`<div class="stat"><span>Einnahmen 2026</span><strong>${fmt(inc2026)}</strong></div><div class="stat"><span>Ausgaben hochgerechnet</span><strong>${fmt(annualExp)}</strong></div><div class="stat"><span>Passiv hochgerechnet</span><strong>${fmt(p.annual)}</strong></div><div class="stat"><span>Vermögen Jahresende</span><strong>${fmt(c.wealth+inc2026-annualExp+p.annual)}</strong></div>`}}
let editingIncome=null;
function renderIncome(){
  set('salary2025',fmt(data.incomeHistory.filter(r=>r.month.startsWith('2025')).reduce((s,r)=>s+Number(r.salary||0),0)));
  set('salary2026',fmt(data.incomeHistory.filter(r=>r.month.startsWith('2026')).reduce((s,r)=>s+Number(r.salary||0),0)));
  set('taxAllowanceLeft',fmt(Math.max(0,12096-data.incomeHistory.filter(r=>r.month.startsWith('2026')).reduce((s,r)=>s+Number(r.salary||0),0))));
  const b=$('incomeHistoryBody');
  if(!b)return;
  b.innerHTML=data.incomeHistory.map(r=>{
    const total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
    r.total=total;
    if(editingIncome!==r.month){
      return `<tr>
        <td>${monthLabel(r.month)}</td>
        <td>${fmt(r.salary)}</td>
        <td>${fmt(r.bonus)}</td>
        <td>${fmt(r.tips)}</td>
        <td>${fmt(r.parents)}</td>
        <td>${fmt(r.costs)}</td>
        <td>${fmt(total)}</td>
        <td><button data-edit-income="${r.month}">Bearbeiten</button></td>
      </tr>`;
    }
    return `<tr>
      <td>${monthLabel(r.month)}</td>
      ${['salary','bonus','tips','parents','costs'].map(k=>`<td><input class="inline-input" type="number" step="0.01" data-income-field="${k}" value="${Number(r[k]||0)}"></td>`).join('')}
      <td>${fmt(total)}</td>
      <td>
        <button data-save-income="${r.month}">Speichern</button>
        <button data-cancel-income>Abbrechen</button>
      </td>
    </tr>`;
  }).join('');
}
let editingAmex=null;function renderAmex(){const av=cumulativeAmex(),cur=currentAmex();set('avgExpenses',fmt(Math.abs(cur?.expenses||0)));set('avgExpensesDaily',fmt(av.get(cur?.month)||0));set('avgIncomeDaily',monthLabel(cur?.month));set('avgMonthlySaving',fmt(avgSurplus()));const b=$('expenseHistoryBody');if(b)b.innerHTML=data.amexHistory.map(r=>editingAmex===r.month?`<tr><td>${monthLabel(r.month)}</td><td><input class="inline-input" id="amexEditValue" type="number" step="0.01" value="${r.expenses}"></td><td>${fmt(av.get(r.month))}</td><td><button data-save-amex="${r.month}">Speichern</button><button data-cancel-amex>Abbrechen</button></td></tr>`:`<tr><td>${monthLabel(r.month)}</td><td>${fmt(Math.abs(r.expenses))}</td><td>${fmt(av.get(r.month))}</td><td><button data-edit-amex="${r.month}">Bearbeiten</button></td></tr>`).join('');renderFuel()}
let editingFuel=null;
function renderFuel(){
  const rows=[...data.fuelEntries].sort((a,b)=>a.date.localeCompare(b.date));
  const total=rows.reduce((s,x)=>s+Number(x.amount||0),0);
  set('fuelCurrentTotal',fmt(total));
  set('fuelAvgEntry',rows.length?fmt(total/rows.length):'–');
  const months=new Set(rows.map(x=>x.date.slice(0,7)));
  set('fuelAvgMonth',months.size?fmt(total/months.size):'–');
  const gaps=[];
  for(let i=1;i<rows.length;i++)gaps.push((new Date(rows[i].date)-new Date(rows[i-1].date))/86400000);
  set('fuelAvgGap',gaps.length?`${(gaps.reduce((a,b)=>a+b,0)/gaps.length).toFixed(1).replace('.',',')} Tage`:'–');

  const b=$('fuelEntriesBody');
  if(!b)return;
  b.innerHTML=rows.map(x=>{
    if(editingFuel!==x.id){
      return `<tr>
        <td>${new Date(x.date+'T12:00').toLocaleDateString('de-DE')}</td>
        <td>${fmt(x.amount)}</td>
        <td>${esc(x.note||'')}</td>
        <td>
          <button data-edit-fuel="${x.id}">Bearbeiten</button>
          <button data-delete-fuel="${x.id}">Löschen</button>
        </td>
      </tr>`;
    }
    return `<tr>
      <td><input class="inline-input" type="date" data-fuel-field="date" value="${x.date||''}"></td>
      <td><input class="inline-input" type="number" step="0.01" data-fuel-field="amount" value="${Number(x.amount||0)}"></td>
      <td><input class="inline-input" type="text" data-fuel-field="note" value="${esc(x.note||'')}"></td>
      <td>
        <button data-save-fuel="${x.id}">Speichern</button>
        <button data-cancel-fuel>Abbrechen</button>
      </td>
    </tr>`;
  }).join('');
}
function renderFixed(){const p=passive();set('fixedMonthlyTotal',fmt(fixedMonthly()));set('fixedYearlyTotal',fmt(fixedAnnual()));set('nextFixedCount',fmt(fixedDaily()));set('fixedCostsPassiveCoverage',pct(p.coverage));set('fixedCostsDailyTotal',fmt(fixedDaily()));const b=$('fixedCostListV6');if(b)b.innerHTML=data.fixedCosts.map(x=>`<div class="list-item fixed-cost-item"><div><h3>${esc(x.name)}</h3><p>Tag ${x.day} · ${esc(x.when)}</p></div><div class="fixed-cost-values"><strong>${fmt(-x.amount)}</strong><small>${fmt(x.amount*annualOccurrences(x.frequency)/365)} pro Tag</small><button data-edit-fixed="${x.id}">Bearbeiten</button></div></div>`).join('')}
function renderAssets(){const c=capitalMetrics(),p=passive();set('assetTotal',fmt(c.wealth));const b=$('assetList');if(b)b.innerHTML=data.assets.map(a=>{const month=a.type==='stock'?Number(a.monthlyDividend||0):interestForAsset(a);const annual=month*12;return`<div class="list-item"><div><h3>${esc(a.name)}</h3><p>${a.type==='stock'?`Aktien · durchschnittliche Dividende: ${fmt(month)}/Monat · Rendite ${pct(a.balance?month*12/a.balance*100:0)}`:`Tagesgeldkonto · Zinssatz: ${pct(a.rate)}`}</p><small>Dynamisch übernommen: ${fmt(month)}/Monat · ${fmt(annual)}/Jahr</small></div><div><strong>${fmt(a.balance)}</strong><button data-edit-asset="${a.id}">Aktualisieren</button></div></div>`}).join('');const cards=[['Aktueller Vermögenswert',c.wealth],['Kapital t=0',START_CAPITAL],['Kapitaldifferenz',c.diff],['Steigerung Durchschnitt pro Monat',c.avg],['Kapitalsteigerung',pct(c.growth)],['Aktueller Aktienwert',stockValue()],['Gewinn Aktien',stockProfit()],['Gewinn Zinsen',c.interestProfit],['Gewinn Dividende',c.dividendProfit],['Zinsen aktueller Monat',p.interest],['Durchschnittliche Dividende pro Monat',p.dividend],['Passiv pro Tag',p.daily],['Passiv pro Monat',p.monthly],['Fixkosten gedeckt',pct(p.coverage)]];const cm=$('capitalMetricCards');if(cm)cm.innerHTML=cards.map(([k,v])=>`<div class="stat"><span>${k}</span><strong>${typeof v==='string'?v:fmt(v)}</strong></div>`).join('');renderCapitalTable()}
let editingCapital=null;function renderCapitalTable(){syncCurrentCapital();const b=$('capitalMasterBody');if(!b)return;b.innerHTML=[...data.capitalHistory].sort((a,b)=>a.month.localeCompare(b.month)).map(r=>{const current=r.month===currentMonth();if(editingCapital!==r.month)return`<tr><td>${monthLabel(r.month)}</td><td>${r.sparkasse==null?'–':fmt(r.sparkasse)}</td><td>${fmt(r.sparkasseInterest)}</td><td>${r.tradeRepublic==null?'–':fmt(r.tradeRepublic)}</td><td>${r.trInterest==null?'–':fmt(r.trInterest)}</td><td>${r.dividend==null?'–':fmt(r.dividend)}</td><td>${r.total==null?'–':fmt(r.total)}</td><td><button data-edit-capital="${r.month}">Bearbeiten</button></td></tr>`;const fields=current?['dividend']:['sparkasse','sparkasseInterest','tradeRepublic','trInterest','dividend'];return`<tr><td>${monthLabel(r.month)}</td>${['sparkasse','sparkasseInterest','tradeRepublic','trInterest','dividend'].map(k=>`<td>${fields.includes(k)?`<input class="inline-input" data-cap-field="${k}" value="${r[k]??''}" type="number" step="0.01">`:fmt(r[k])}</td>`).join('')}<td>${fmt(r.total)}</td><td><button data-save-capital="${r.month}">Speichern</button><button data-cancel-capital>Abbrechen</button></td></tr>`}).join('')}
function renderPassive(){const p=passive();set('passiveInterestMonth',fmt(p.interest));set('passiveDividendMonth',fmt(p.dividend));set('passiveTotalDay',fmt(p.daily));set('passiveTabMonth',fmt(p.monthly));set('passiveTabYear',fmt(p.annual));set('passiveCoverage',pct(p.coverage));set('passiveForecastStartWealth',fmt(totalWealth()));set('passiveForecastRate',pct(totalWealth()?p.annual/totalWealth()*100:0));set('passiveForecastStartPassive',fmt(p.monthly));set('passiveForecastStartCoverage',pct(p.coverage));const rate=totalWealth()?p.annual/totalWealth():0;const b=$('passiveForecastBody');if(b)b.innerHTML=[5,10,25,50,75,100].map(t=>{const targetMonthly=fixedMonthly()*t/100,target=rate?targetMonthly*12/rate:Infinity,progress=target?totalWealth()/target*100:0;let years=target<=totalWealth()?0:rate?Math.log(target/totalWealth())/Math.log(1+rate):Infinity;const dt=new Date();if(Number.isFinite(years))dt.setMonth(dt.getMonth()+Math.ceil(years*12));return`<div class="list-item passive-forecast-item"><div class="passive-forecast-main"><strong>${t} % der Fixkosten</strong><div class="progress"><div style="width:${Math.min(100,progress)}%"></div></div><small>${fmt(target)} · ${fmt(targetMonthly)}/Monat</small></div><div class="passive-forecast-meta"><strong>${pct(progress)}</strong><small>${years===0?'bereits erreicht':Number.isFinite(years)?dt.toLocaleDateString('de-DE'):'nicht erreichbar'}</small></div></div>`}).join('')}
function syncFirstGoal(){const g=data.priorityGoals[0];if(g){g[11]=totalWealth();g[9]=g[3]?g[11]/g[3]*100:0;g[10]=g[4]?g[11]/g[4]*100:0}}
function renderGoals(){syncFirstGoal();const b=$('priorityGoalsBody');if(b)b.innerHTML=data.priorityGoals.map((r,i)=>`<tr><td>${r[0]??''}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${r[3]==null?'–':fmt(r[3])}</td><td>${r[4]==null?'–':fmt(r[4])}</td><td>${r[5]==null?'–':fmt(r[5])}</td><td>${r[6]==null?'–':fmt(r[6])}</td><td>${r[7]==null?'–':fmt(r[7])}</td><td>${r[8]==null?'–':fmt(r[8])}</td><td>${pct(r[9])}</td><td>${pct(r[10])}</td><td>${r[11]==null?'–':fmt(r[11])}</td><td><button data-edit-goal="${i}">Bearbeiten</button></td></tr>`).join('');const f=$('priorityGoalsFoot');if(f){const sums=[3,4,5,6,7,8,11].map(ix=>data.priorityGoals.reduce((s,r)=>s+Number(r[ix]||0),0));f.innerHTML=`<tr><th colspan="3">Summe</th>${sums.slice(0,6).map(x=>`<th>${fmt(x)}</th>`).join('')}<th>–</th><th>–</th><th>${fmt(sums[6])}</th><th></th></tr>`}}

const confirmedIncomeFixedCostsV55={
  "2026-05":-240.70,
  "2026-06":-215.70,
  "2026-07":-240.70,
  "2026-08":-215.70,
  "2026-09":-265.70,
  "2026-10":-247.20,
  "2026-11":-240.70,
  "2026-12":-215.70
};
function enforceConfirmedIncomeFixedCostsV55(){
  (data.incomeHistory||[]).forEach(r=>{
    if(Object.prototype.hasOwnProperty.call(confirmedIncomeFixedCostsV55,r.month)){
      r.costs=confirmedIncomeFixedCostsV55[r.month];
      r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
    }
  });
}


function backupDateStampV57(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}


function trSavingsAssetV58(){
  return (data.assets||[]).find(a=>{
    const n=String(a.name||"").toLowerCase();
    return n.includes("trade republic") && (n.includes("tagesgeld") || n.includes("cash"));
  });
}
function averageMonthlySavingV58(){
  const inc=new Map((data.incomeHistory||[]).map(r=>[r.month,Number(r.total||0)]));
  const rows=(data.amexHistory||[]).filter(r=>inc.has(r.month));
  if(!rows.length) return 0;
  return rows.reduce((sum,r)=>sum+inc.get(r.month)-Math.abs(Number(r.expenses||0)),0)/rows.length;
}
function monthlyRateV58(){
  const a=trSavingsAssetV58();
  return Number(a?.rate||0)/100/12;
}
function projectBalanceMonthsV58(months){
  const a=trSavingsAssetV58();
  let balance=Number(a?.balance||0);
  const saving=Math.max(0,averageMonthlySavingV58());
  const r=monthlyRateV58();
  for(let i=0;i<months;i++){
    balance+=saving;
    balance*=1+r;
  }
  return balance;
}
function monthsToTargetV58(target){
  const a=trSavingsAssetV58();
  let balance=Number(a?.balance||0);
  if(balance>=target) return 0;
  const saving=Math.max(0,averageMonthlySavingV58());
  const r=monthlyRateV58();
  if(saving<=0 && r<=0) return Infinity;
  for(let m=1;m<=1200;m++){
    balance+=saving;
    balance*=1+r;
    if(balance>=target) return m;
  }
  return Infinity;
}
function addMonthsDateV58(months){
  const d=new Date();
  d.setMonth(d.getMonth()+months);
  return d.toLocaleDateString("de-DE");
}
function pctV58(v){
  return `${Number(v||0).toFixed(2).replace(".",",")} %`;
}
function renderInterestGoalsV58(){
  const body=$("interestGoalsBody");
  if(!body) return;
  const current=Number(trSavingsAssetV58()?.balance||0);
  const goals=[
    [17,2757.78],[18,2920],[19,3082.22],[20,3244.44],[21,3406.67],
    [22,3568.89],[23,3731.11],[24,3893.33],[25,4055.56],[26,4217.78],
    [27,4380],[28,4542.22],[29,4704.44],[30,4866.67]
  ];
  body.innerHTML=goals.map(([cent,target])=>{
    const progress=Math.min(100,current/target*100);
    const months=monthsToTargetV58(target);
    const date=months===0?"bereits erreicht":Number.isFinite(months)?addMonthsDateV58(months):"–";
    return `<tr>
      <td>${cent} Cent/Tag</td>
      <td>
        <div class="progress"><div class="progress-bar" style="width:${progress}%"></div></div>
        <small>${pctV58(progress)}</small>
      </td>
      <td>${date}</td>
      <td>${fmt(target)}</td>
      <td>${fmt(Math.max(0,target-current))}</td>
    </tr>`;
  }).join("");

  const next=goals.find(([,target])=>target>current);
  if(next){
    const [cent,target]=next;
    const months=monthsToTargetV58(target);
    set("nextInterestMilestone",`${cent} Cent pro Tag`);
    set("nextInterestMilestoneDetail",
      `${fmt(Math.max(0,target-current))} fehlen · ${Number.isFinite(months)?addMonthsDateV58(months):"keine Prognose"}`
    );
  }else{
    set("nextInterestMilestone","30 Cent pro Tag erreicht");
    set("nextInterestMilestoneDetail","Alle hinterlegten Zinsziele erreicht");
  }
}
function renderLongTermForecastV58(){
  const body=$("longTermForecastBody");
  if(!body) return;
  const a=trSavingsAssetV58();
  const annualRate=Number(a?.rate||0)/100;
  const rows=[[1,12],[3,36],[5,60],[10,120]];
  body.innerHTML=rows.map(([years,months])=>{
    const balance=projectBalanceMonthsV58(months);
    const monthInterest=balance*annualRate/365*31;
    return `<tr>
      <td>${years} ${years===1?"Jahr":"Jahre"}</td>
      <td>${fmt(balance)}</td>
      <td>${fmt(monthInterest)}</td>
    </tr>`;
  }).join("");
}


const SNAPSHOT_START_MONTH_V59="2026-08";
const WEALTH_T0_V59=2386.50;
const WEALTH_MILESTONES_V59=[5000,10000,25000,50000,100000];
const PASSIVE_MILESTONES_V59=[5,10,25,50,75,100];
const CENT_GOALS_V59=[
  [17,2757.78],[18,2920],[19,3082.22],[20,3244.44],[21,3406.67],
  [22,3568.89],[23,3731.11],[24,3893.33],[25,4055.56],[26,4217.78],
  [27,4380],[28,4542.22],[29,4704.44],[30,4866.67]
];

function monthKeyV59(d=new Date()){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
}
function monthsBetweenV59(fromYm,toYm){
  const [fy,fm]=fromYm.split("-").map(Number);
  const [ty,tm]=toYm.split("-").map(Number);
  return (ty-fy)*12+(tm-fm);
}
function ensureProgressStateV59(){
  data.progressTrackingV59=data.progressTrackingV59||{
    baseline:null,
    snapshots:{},
    goalForecasts:{}
  };
  const state=data.progressTrackingV59;

  if(!state.baseline){
    const currentYm=monthKeyV59();
    const monthsSinceT0=Math.max(1,monthsBetweenV59("2025-06",SNAPSHOT_START_MONTH_V59));
    const currentWealth=Number(typeof totalWealth==="function"?totalWealth():0);
    const avgMonthly=(currentWealth-WEALTH_T0_V59)/monthsSinceT0;
    state.baseline={
      startMonth:SNAPSHOT_START_MONTH_V59,
      wealthAtStart:currentWealth,
      avgMonthlyGrowth:avgMonthly,
      t0:WEALTH_T0_V59
    };
  }
  return state;
}
function currentPassiveMonthlyV59(){
  if(typeof passive==="function") return Number(passive().monthly||0);
  if(typeof passiveDetails==="function") return Number(passiveDetails().monthly||0);
  return 0;
}
function currentFixedCoverageV59(){
  const p=typeof passive==="function"?passive():null;
  if(p && Number.isFinite(Number(p.coverage))) return Number(p.coverage);
  const monthly=typeof fixedMonthly==="function"?Number(fixedMonthly()||0):0;
  const passiveMonthly=currentPassiveMonthlyV59();
  return monthly?passiveMonthly/monthly*100:0;
}
function currentWealthV59(){
  return Number(typeof totalWealth==="function"?totalWealth():0);
}
function currentSavingGoalV59(){
  const rows=(data.priorityGoals||data.goals||[]);
  return rows && rows.length ? rows[0] : null;
}
function savingsGoalInfoV59(){
  const r=currentSavingGoalV59();
  if(!r) return null;
  // array format from existing master data
  if(Array.isArray(r)){
    return {
      name:`${r[1]||""}${r[2]?" – "+r[2]:""}`,
      min:Number(r[3]||0),
      available:Number(r[11]||currentWealthV59())
    };
  }
  return {
    name:r.name||r.title||r.subcategory||"Sparziel",
    min:Number(r.min||r.targetMin||r.target||0),
    available:Number(r.available||currentWealthV59())
  };
}
function forecastDateForCapitalTargetV59(target,currentCapital=null){
  const current=currentCapital==null?Number(trSavingsAssetV58()?.balance||0):Number(currentCapital||0);
  if(current>=target) return new Date();
  const monthlySaving=Math.max(0,typeof averageMonthlySavingV58==="function"?averageMonthlySavingV58():0);
  const monthlyRate=typeof monthlyRateV58==="function"?monthlyRateV58():0;
  if(monthlySaving<=0 && monthlyRate<=0) return null;
  let bal=current;
  for(let m=1;m<=1200;m++){
    bal+=monthlySaving;
    bal*=1+monthlyRate;
    if(bal>=target){
      const d=new Date();
      d.setMonth(d.getMonth()+m);
      return d;
    }
  }
  return null;
}
function forecastDateForWealthTargetV59(target){
  const current=currentWealthV59();
  if(current>=target) return new Date();
  const state=ensureProgressStateV59();
  const monthly=Math.max(0,Number(state.baseline?.avgMonthlyGrowth||0));
  if(monthly<=0) return null;
  const months=Math.ceil((target-current)/monthly);
  const d=new Date();
  d.setMonth(d.getMonth()+months);
  return d;
}
function forecastDateForPassiveCoverageV59(targetPct){
  const monthlyFixed=typeof fixedMonthly==="function"?Number(fixedMonthly()||0):0;
  const tr=trSavingsAssetV58?.();
  const annualRate=Number(tr?.rate||0)/100;
  const currentDiv=typeof dividendMonthly==="function"?Number(dividendMonthly()||0):0;
  const targetPassive=monthlyFixed*targetPct/100;
  if(targetPassive<=currentPassiveMonthlyV59()) return new Date();
  const neededInterest=Math.max(0,targetPassive-currentDiv);
  if(annualRate<=0) return null;
  const targetCapital=neededInterest*12/annualRate;
  return forecastDateForCapitalTargetV59(targetCapital,Number(tr?.balance||0));
}
function fmtDateV59(d){
  return d?d.toLocaleDateString("de-DE"):"–";
}
function diffDaysV59(a,b){
  if(!a||!b) return null;
  return Math.round((a-b)/86400000);
}
function humanTimeGainV59(days){
  if(days==null) return "–";
  const abs=Math.abs(days);
  if(abs<31) return `${days<0?"▲":"▼"} ${abs} Tage ${days<0?"schneller":"langsamer"}`;
  const months=Math.round(abs/30.4375);
  if(months<12) return `${days<0?"▲":"▼"} ${months} Mon. ${days<0?"schneller":"langsamer"}`;
  const years=Math.floor(months/12), rest=months%12;
  return `${days<0?"▲":"▼"} ${years} J.${rest?` ${rest} Mon.`:""} ${days<0?"schneller":"langsamer"}`;
}
function captureMonthlySnapshotV59(){
  const state=ensureProgressStateV59();
  const ym=monthKeyV59();
  if(ym<SNAPSHOT_START_MONTH_V59) return;
  const tr=Number(trSavingsAssetV58?.()?.balance||0);
  const nextWealth=WEALTH_MILESTONES_V59.find(x=>x>currentWealthV59())||WEALTH_MILESTONES_V59.at(-1);
  const nextPassive=PASSIVE_MILESTONES_V59.find(x=>x>currentFixedCoverageV59())||PASSIVE_MILESTONES_V59.at(-1);
  const nextCent=CENT_GOALS_V59.find(([,target])=>target>tr)||CENT_GOALS_V59.at(-1);
  const sg=savingsGoalInfoV59();

  const forecastMap={
    wealth:forecastDateForWealthTargetV59(nextWealth)?.toISOString()||null,
    passive:forecastDateForPassiveCoverageV59(nextPassive)?.toISOString()||null,
    cent:forecastDateForCapitalTargetV59(nextCent[1],tr)?.toISOString()||null,
    savings:sg?.min?forecastDateForWealthTargetV59(sg.min)?.toISOString()||null:null
  };

  if(!state.snapshots[ym]){
    state.snapshots[ym]={
      month:ym,
      wealth:currentWealthV59(),
      passiveMonthly:currentPassiveMonthlyV59(),
      fixedCoverage:currentFixedCoverageV59(),
      trBalance:tr,
      forecasts:forecastMap
    };
  }else{
    // keep the first snapshot of the month, only add missing fields
    state.snapshots[ym]={...state.snapshots[ym],forecasts:state.snapshots[ym].forecasts||forecastMap};
  }

  // save first-ever forecasts per logical goal
  const logicalGoals={
    [`wealth-${nextWealth}`]:forecastMap.wealth,
    [`passive-${nextPassive}`]:forecastMap.passive,
    [`cent-${nextCent[0]}`]:forecastMap.cent,
    [`savings-0`]:forecastMap.savings
  };
  Object.entries(logicalGoals).forEach(([k,v])=>{
    if(v && !state.goalForecasts[k]) state.goalForecasts[k]={first:v,firstMonth:ym};
  });

  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
function previousSnapshotV59(){
  const state=ensureProgressStateV59();
  const keys=Object.keys(state.snapshots).sort();
  const current=monthKeyV59();
  const prevKeys=keys.filter(k=>k<current);
  return prevKeys.length?state.snapshots[prevKeys.at(-1)]:null;
}
function baselineExpectedWealthTodayV59(){
  const state=ensureProgressStateV59();
  const base=state.baseline;
  const months=Math.max(0,monthsBetweenV59(base.startMonth,monthKeyV59()));
  return Number(base.wealthAtStart||0)+Number(base.avgMonthlyGrowth||0)*months;
}
function forecastMetaV59(kind,key,currentDate){
  const state=ensureProgressStateV59();
  const first=state.goalForecasts[key]?.first?new Date(state.goalForecasts[key].first):null;
  const prev=previousSnapshotV59();
  const prevDate=prev?.forecasts?.[kind]?new Date(prev.forecasts[kind]):null;
  const firstDiff=first&&currentDate?diffDaysV59(currentDate,first):null;
  const prevDiff=prevDate&&currentDate?diffDaysV59(currentDate,prevDate):null;
  const firstText=firstDiff==null?"":` · seit erster Prognose ${humanTimeGainV59(firstDiff)}`;
  const prevText=prevDiff==null?"":` · ${humanTimeGainV59(prevDiff)} als letzter Monatsstand`;
  return `${firstText}${prevText}`;
}
function renderProgressV59(){
  captureMonthlySnapshotV59();
  const state=ensureProgressStateV59();
  const prev=previousSnapshotV59();
  const wealth=currentWealthV59();
  const passiveMonthly=currentPassiveMonthlyV59();
  const tr=Number(trSavingsAssetV58?.()?.balance||0);
  const coverage=currentFixedCoverageV59();

  const wealthDelta=prev?wealth-Number(prev.wealth||0):null;
  const passiveDelta=prev?passiveMonthly-Number(prev.passiveMonthly||0):null;

  set("monthlyProgressHeadlineV59",prev?`Vergleich mit ${monthLabel(prev.month)}`:"Erster Monatsstand ab August 2026");
  set("deltaWealthV59",wealthDelta==null?"–":`${wealthDelta>=0?"+":""}${fmt(wealthDelta)}`);
  set("deltaPassiveV59",passiveDelta==null?"–":`${passiveDelta>=0?"+":""}${fmt(passiveDelta)}`);

  const nextWealth=WEALTH_MILESTONES_V59.find(x=>x>wealth)||WEALTH_MILESTONES_V59.at(-1);
  const wealthDate=forecastDateForWealthTargetV59(nextWealth);
  set("nextWealthMilestoneV59",fmt(nextWealth));
  set("nextWealthMilestoneMetaV59",`${(wealth/nextWealth*100).toFixed(2).replace(".",",")} % · ${fmtDateV59(wealthDate)}${forecastMetaV59("wealth",`wealth-${nextWealth}`,wealthDate)}`);

  const nextPassive=PASSIVE_MILESTONES_V59.find(x=>x>coverage)||PASSIVE_MILESTONES_V59.at(-1);
  const passiveDate=forecastDateForPassiveCoverageV59(nextPassive);
  set("nextPassiveMilestoneV59",`${nextPassive} % der Fixkosten`);
  set("nextPassiveMilestoneMetaV59",`${coverage.toFixed(2).replace(".",",")} % aktuell · ${fmtDateV59(passiveDate)}${forecastMetaV59("passive",`passive-${nextPassive}`,passiveDate)}`);

  const nextCent=CENT_GOALS_V59.find(([,target])=>target>tr)||CENT_GOALS_V59.at(-1);
  const centDate=forecastDateForCapitalTargetV59(nextCent[1],tr);
  set("nextCentGoalV59",`${nextCent[0]} Cent/Tag`);
  set("nextCentGoalMetaV59",`${fmt(Math.max(0,nextCent[1]-tr))} fehlen · ${fmtDateV59(centDate)}${forecastMetaV59("cent",`cent-${nextCent[0]}`,centDate)}`);

  const sg=savingsGoalInfoV59();
  if(sg){
    const savingsDate=forecastDateForWealthTargetV59(sg.min);
    set("nextSavingsGoalV59",sg.name);
    set("nextSavingsGoalMetaV59",`${fmt(Math.max(0,sg.min-sg.available))} fehlen · ${fmtDateV59(savingsDate)}${forecastMetaV59("savings","savings-0",savingsDate)}`);
  }

  const expected=baselineExpectedWealthTodayV59();
  const lead=wealth-expected;
  set("baselineExpectedWealthV59",fmt(expected));
  set("actualWealthV59",fmt(wealth));
  set("wealthLeadV59",`${lead>=0?"+":""}${fmt(lead)}`);
  set("baselineMonthlyGrowthV59",fmt(state.baseline.avgMonthlyGrowth));
}

function renderAll(){enforceConfirmedIncomeFixedCostsV55();renderTabs();renderDashboard();renderOverview();renderIncome();renderAmex();renderFixed();renderAssets();renderPassive();renderGoals();renderInterestGoalsV51()}
function modal(html){$('modalContent').innerHTML=html;$('modal').classList.remove('hidden')}
function closeModal(){$('modal').classList.add('hidden')}
document.addEventListener('click',e=>{const d=e.target.dataset;if(d.editIncome){editingIncome=d.editIncome;renderIncome()}if(d.cancelIncome!==undefined){editingIncome=null;renderIncome()}if(d.saveIncome){
      const r=data.incomeHistory.find(x=>x.month===d.saveIncome);
      document.querySelectorAll('[data-income-field]').forEach(x=>r[x.dataset.incomeField]=Number(x.value)||0);
      r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
      editingIncome=null;
      save();
    }if(d.editAmex){editingAmex=d.editAmex;renderAmex()}if(d.cancelAmex!==undefined){editingAmex=null;renderAmex()}if(d.saveAmex){data.amexHistory.find(x=>x.month===d.saveAmex).expenses=Number($('amexEditValue').value)||0;editingAmex=null;save()}if(d.editFuel){editingFuel=d.editFuel;renderFuel()}
if(d.cancelFuel!==undefined){editingFuel=null;renderFuel()}
if(d.saveFuel){
  const r=data.fuelEntries.find(x=>x.id===d.saveFuel);
  document.querySelectorAll('[data-fuel-field]').forEach(x=>{
    r[x.dataset.fuelField]=x.dataset.fuelField==='amount'?(Number(x.value)||0):x.value;
  });
  editingFuel=null;
  save();
}
if(d.deleteFuel){data.fuelEntries=data.fuelEntries.filter(x=>x.id!==d.deleteFuel);save()}if(d.editCapital){editingCapital=d.editCapital;renderCapitalTable()}if(d.cancelCapital!==undefined){editingCapital=null;renderCapitalTable()}if(d.saveCapital){const r=data.capitalHistory.find(x=>x.month===d.saveCapital);document.querySelectorAll('[data-cap-field]').forEach(x=>r[x.dataset.capField]=Number(x.value)||0);r.total=Number(r.sparkasseInterest||0)+Number(r.trInterest||0)+Number(r.dividend||0);editingCapital=null;save()}if(d.editFixed){const x=data.fixedCosts.find(v=>v.id===d.editFixed);modal(`<h2>${esc(x.name)} bearbeiten</h2><label>Tag<input id="mDay" type="number" min="1" max="31" value="${x.day}"></label><label>Betrag<input id="mAmount" type="number" step="0.01" value="${x.amount}"></label><button id="mSaveFixed">Speichern</button>`);$('mSaveFixed').onclick=()=>{x.day=Number($('mDay').value)||1;x.amount=Number($('mAmount').value)||0;closeModal();save()}}if(d.editAsset){const a=data.assets.find(v=>v.id===d.editAsset);const stock=a.type==='stock';modal(`<h2>${esc(a.name)} aktualisieren</h2><label>Neuer Stand<input id="mBal" type="number" step="0.01" value="${a.balance}"></label><label>${stock?'Dividende pro Monat':'Zinssatz p. a. (%)'}<input id="mYield" type="number" step="0.01" value="${stock?a.monthlyDividend:a.rate}"></label>${stock?`<p>Berechnete Dividendenrendite: <strong id="mRendite"></strong></p>`:''}<button id="mSaveAsset">Speichern</button>`);const upd=()=>{if(stock)set('mRendite',pct(Number($('mBal').value)?Number($('mYield').value)*12/Number($('mBal').value)*100:0))};if(stock){$('mBal').oninput=upd;$('mYield').oninput=upd;upd()}$('mSaveAsset').onclick=()=>{a.balance=Number($('mBal').value)||0;if(stock)a.monthlyDividend=Number($('mYield').value)||0;else a.rate=Number($('mYield').value)||0;closeModal();save()}}if(d.editGoal!==undefined){const r=data.priorityGoals[Number(d.editGoal)];const name=prompt('Unterkategorie',r[2]);if(name===null)return;r[2]=name;const min=prompt('Einmalige Kosten min',r[3]??'');if(min===null)return;r[3]=Number(String(min).replace(',','.'))||0;const max=prompt('Einmalige Kosten max',r[4]??'');if(max===null)return;r[4]=Number(String(max).replace(',','.'))||0;save()}});
$('closeModal').onclick=closeModal;$('addFuelEntry').onclick=()=>{
  modal(`<h2>Tankvorgang hinzufügen</h2>
    <label>Datum<input id="newFuelDate" type="date" value="${new Date().toISOString().slice(0,10)}"></label>
    <label>Betrag<input id="newFuelAmount" type="number" step="0.01"></label>
    <label>Notiz<input id="newFuelNote" type="text"></label>
    <div class="inline-actions">
      <button id="saveNewFuel" type="button">Speichern</button>
      <button id="cancelNewFuel" type="button">Abbrechen</button>
    </div>`);
  $('saveNewFuel').onclick=()=>{
    const date=$('newFuelDate').value;
    const amount=Number($('newFuelAmount').value)||0;
    const note=$('newFuelNote').value||'';
    if(!date||!amount)return;
    data.fuelEntries.push({id:Date.now().toString(),date,amount,note});
    closeModal();
    save();
  };
  $('cancelNewFuel').onclick=closeModal;
};
$('exportBackup').onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`finanzen-backup-${backupDateStampV57()}.json`;a.click();URL.revokeObjectURL(a.href)};
$('importBackup').onchange=async e=>{
  const file=e.target.files?.[0];
  if(!file)return;

  if(!confirm('Möchtest du dieses Backup wirklich importieren? Die aktuellen Daten werden dadurch ersetzt.')){
    e.target.value='';
    return;
  }

  try{
    const x=JSON.parse(await file.text());
    if(!x || typeof x!=='object') throw new Error('Ungültiges Backup');
    data={...clone(DEFAULTS),...x};
    save();
    alert('Backup wurde erfolgreich importiert.');
  }catch{
    alert('Das Backup konnte nicht importiert werden.');
  }finally{
    e.target.value='';
  }
};
$('deleteAll').onclick=()=>{if(confirm('Alle Daten auf Stammdaten zurücksetzen?')){data=clone(DEFAULTS);save()}};
renderAll();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});


const __renderAllV58=renderAll;
renderAll=function(){
  __renderAllV58();
  renderInterestGoalsV58();
  renderLongTermForecastV58();
};
setTimeout(()=>{
  renderInterestGoalsV58();
  renderLongTermForecastV58();
},0);

const __renderAllV59=renderAll;
renderAll=function(){
  __renderAllV59();
  renderProgressV59();
};
setTimeout(renderProgressV59,0);
