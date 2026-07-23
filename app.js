
const priorityGoalsV7 = [
[1,"Absicherung","Polster",10000,10000],
[2,"Bildung","Master",182.10,370],
[3,"Haus","Dachzustand prüfen und reparieren",1500,5000],
[4,"Haus","Treppenhaus sanieren",900,3063],
[5,"Haus","Sanierung Bad Erdgeschoss",5000,10000],
[6,"Haus","Renovierung Bad Wohnung",3000,7000],
[7,"Haus","Sanierung Bad Opa",5000,10000],
[8,"Bank","Kredit Deutsche Bildung",13440,13790],
[9,"Bank","Raten Vorwerk",529.02,581.97],
[10,"Bank","Kredit ING",52336.78,52336.78],
[11,"Bank","Kredit Bulldog",45727.88,45727.88],
[12,"Bank","Kredit Haus",51436.68,51436.68],
[13,"Scheune","Wohnung in Scheune sanieren",180000,250000],
[14,"Altes Haus","Architekten/Bauplaner beauftragen",18000,103500],
[15,"Altes Haus","Grundsanierung",200000,690000],
[16,"Altes Haus","Automat",1150,9200],
[17,"Altes Haus","Laden einrichten",3300,10000],
[18,"Altes Haus","Ferienwohnung einrichten",12000,25000],
[19,"Altes Haus","Eventraum einrichten",10000,22000],
[20,"Altes Haus","Büro einrichten",3200,11200],
[21,"Haus","Bodenbeläge Zimmer",2500,6000],
[22,"Haus","Modernisierung Haus Isolation",37000,80000],
[23,"Haus","Modernisierung Haus Heizung",8000,23000],
[24,"Scheune","Stall bauen",4200,12900],
[25,"Scheune","Werkstatt renovieren",4000,4800],
[26,"Gewölbekeller","Renovieren",13500,22500],
[27,"Eckhaus","Zurückkaufen",400000,480000],
[28,"Garten","Gartenhaus renovieren",3000,5000],
[29,"Haustier","Hund/e",150,400],
[30,"Haustier","Pferde",11000,24000],
[31,"Auto","Audi A3",22000,30000],
[32,"Eltern","Versorgt",650000,1100000],
[33,"Gnadenhof","Land kaufen & bauen",5913254.39,18394160],
[34,"Strandhaus","Kaufen",300000,2500000],
[35,"Herrenhaus","Kaufen",300000,1500000],
[36,"Herrenhaus","Sanieren",90000,700000],
[37,"Schloss","Kaufen",300000,4000000],
[38,"Schloss","Sanieren",480000,4500000]
].map(([priority,category,name,min,max])=>({priority,category,name,min,max}));


const incomeHistoryV6 = [
["2025-06",426.53,50,150,100,-35.93,790.60],
["2025-07",237.31,50,125,100,-35.93,591.38],
["2025-08",599.89,50,200,100,-35.93,1013.96],
["2025-09",617.17,50,200,100,-60.93,1006.24],
["2025-10",667.81,50,250,100,-137.08,1030.73],
["2025-11",719.60,50,225,100,-920.42,274.18],
["2025-12",761.84,50,250,100,-181.42,1065.42],
["2026-01",735.94,50,225,100,-187.42,923.52],
["2026-02",506.80,50,125,100,-191.70,590.10],
["2026-03",595.92,50,225,100,-247.20,723.72],
["2026-04",920.26,50,300,100,-303.70,1066.56],
["2026-05",1014.08,50,300,100,-215.70,1248.38],
["2026-06",514.92,50,300,100,-215.70,749.22],
["2026-07",679.50,50,300,100,-215.70,913.80],
["2026-08",910,50,300,100,-215.70,1144.30],
["2026-09",840,50,300,100,-215.70,1074.30],
["2026-10",840,50,300,100,-215.70,1074.30],
["2026-11",840,50,300,100,-215.70,1074.30],
["2026-12",840,50,300,100,-215.70,1074.30]
].map(([month,salary,bonus,tips,parents,costs,total])=>({month,salary,bonus,tips,parents,costs,total}));

const expenseHistoryV6 = [
["2025-05",-942.84,null,null,null],
["2025-06",-332.81,25.92,0.109726776,455.5898333],
["2025-07",-485.92,19.39,0.090273224,116.0507527],
["2025-08",-556.42,33.24,0.084808743,469.1011828],
["2025-09",-379.02,32.99,0.083278689,623.443],
["2025-10",-354.97,33.79,0.128196721,685.3953226],
["2025-11",-368.61,8.99,0.13136612,-96.56683333],
["2025-12",-1426.30,34.93,0.156830601,-333.091828],
["2026-01",-633.60,30.28,0.143934426,304.5293548],
["2026-02",-509.36,19.35,0.130819672,39.25142857],
["2026-03",-602.85,23.73,0.173114754,72.32410714],
["2026-04",-363.47,34.97,0.166229508,675.7073214],
["2026-05",-781.81,40.93,0.337704918,407.0655357],
["2026-06",-275.20,24.56,0.224590164,456.2985714],
["2026-07",-642.97,29.96,0.214754098,219.9719643]
].map(([month,expenses,incomeDay,passiveDay,saving])=>({month,expenses,incomeDay,passiveDay,saving}));

const fixedCostsV6 = [
{name:"Netflix",amount:9.99,frequency:"monthly",when:"Ende des Monats"},
{name:"Telekom",amount:19.95,frequency:"monthly",when:"Ende des Monats"},
{name:"Spotify",amount:12.99,frequency:"monthly",when:"Anfang des Monats"},
{name:"Versicherung",amount:148.77,frequency:"monthly",when:"Mitte des Monats"},
{name:"Cheerleading",amount:24.00,frequency:"monthly",when:"Anfang des Monats"},
{name:"FSV",amount:31.50,frequency:"twice",when:"April & Oktober"},
{name:"HanseMerkur",amount:25.00,frequency:"yearly",when:"Mitte September"},
{name:"Cheerleading Jahresbeitrag",amount:59.00,frequency:"yearly",when:"April"},
{name:"Reitverein",amount:50.00,frequency:"yearly",when:"März"},
{name:"Friseur",amount:25.00,frequency:"bimonthly",when:"alle 2 Monate"}
];

const passiveCapitalTargetsV6 = [
[0.16,2595.56],[0.17,2757.78],[0.18,2920.00],[0.19,3082.22],[0.20,3244.44],
[0.21,3406.67],[0.22,3568.89],[0.23,3731.11],[0.24,3893.33],[0.25,4055.56],
[0.26,4217.78],[0.27,4380.00],[0.28,4542.22],[0.29,4704.44],[0.30,4866.67]
];


const STORAGE_KEY = "finanzenPwaV7";
const APP_VERSION = 7;
const seededHistory = [
  {month:"2025-06",sparkasse:1500.00,sparkasseInterest:1.81,tradeRepublic:881.35,trInterest:1.52,dividend:0.02},
  {month:"2025-07",sparkasse:1520.00,sparkasseInterest:1.01,tradeRepublic:811.25,trInterest:1.37,dividend:0.37},
  {month:"2025-08",sparkasse:1525.00,sparkasseInterest:1.02,tradeRepublic:812.62,trInterest:1.36,dividend:0.21},
  {month:"2025-09",sparkasse:1530.00,sparkasseInterest:1.02,tradeRepublic:895.09,trInterest:1.42,dividend:0.10},
  {month:"2025-10",sparkasse:1500.00,sparkasseInterest:1.00,tradeRepublic:1297.71,trInterest:1.81,dividend:1.10},
  {month:"2025-11",sparkasse:1150.00,sparkasseInterest:0.77,tradeRepublic:1999.73,trInterest:3.03,dividend:0.21},
  {month:"2025-12",sparkasse:1460.00,sparkasseInterest:0.97,tradeRepublic:2227.86,trInterest:2.71,dividend:1.10},
  {month:"2026-01",sparkasse:885.00,sparkasseInterest:0.60,tradeRepublic:2231.61,trInterest:3.79,dividend:0.00},
  {month:"2026-02",sparkasse:465.00,sparkasseInterest:0.35,tradeRepublic:2235.61,trInterest:3.43,dividend:0.21},
  {month:"2026-03",sparkasse:665.00,sparkasseInterest:0.50,tradeRepublic:2169.92,trInterest:3.72,dividend:1.06},
  {month:"2026-04",sparkasse:475.00,sparkasseInterest:0.32,tradeRepublic:2174.81,trInterest:3.58,dividend:1.17},
  {month:"2026-05",sparkasse:635.00,sparkasseInterest:0.42,tradeRepublic:2655.50,trInterest:4.27,dividend:5.61},
  {month:"2026-06",sparkasse:5.00,sparkasseInterest:0.11,tradeRepublic:2562.05,trInterest:4.46,dividend:2.28},
  {month:"2026-07",sparkasse:600.00,sparkasseInterest:0.40,tradeRepublic:2567.70,trInterest:4.91,dividend:1.19},
  {month:"2026-08",sparkasse:null,sparkasseInterest:0.00,tradeRepublic:null,trInterest:null,dividend:null},
  {month:"2026-09",sparkasse:null,sparkasseInterest:0.00,tradeRepublic:null,trInterest:null,dividend:null}
].map(x=>({...x,total:Number(x.sparkasseInterest||0)+Number(x.trInterest||0)+Number(x.dividend||0)}));
const defaultData = {
  balances: [], incomes: [], fixedCosts: [], goals: [], amexPaid: {}, incomeHistory: [], amexHistory: [], fuelEntries: [], completedPriorityGoals: [],
  assets: [
    {
      id:"seed-sparkasse-giro",
      name:"Sparkasse Girokonto",
      type:"bank",
      balance:0.00,
      rate:0,
      history:[{date:"2026-07-23",balance:0.00}]
    },
    {
      id:"seed-sparkasse-tg1",
      name:"Sparkasse Tagesgeld 1",
      type:"cash",
      balance:590.00,
      rate:0,
      history:seededHistory.filter(x=>x.sparkasse!==null).map(x=>({
        date:x.month+"-28",
        balance:x.month==="2026-07"?590.00:x.sparkasse
      }))
    },
    {
      id:"seed-sparkasse-tg2",
      name:"Sparkasse Tagesgeld 2",
      type:"cash",
      balance:10.00,
      rate:0,
      history:[{date:"2026-07-23",balance:10.00}]
    },
    {
      id:"seed-tr-cash",
      name:"Trade Republic Tagesgeld",
      type:"cash",
      balance:2567.70,
      rate:2.42,
      history:seededHistory.filter(x=>x.tradeRepublic!==null).map(x=>({date:x.month+"-28",balance:x.tradeRepublic}))
    },
    {
      id:"seed-stocks",
      name:"Trade Republic Aktien",
      type:"stocks",
      balance:768.63,
      rate:2.58,
      history:[{date:"2026-07-23",balance:768.63}]
    }
  ],
  financeHistory: seededHistory,
  metrics: {currentMonthlyDividend:1.65,currentDailyInterest:0.17,currentDailyDividend:0.05,capitalStart:2386.50,capitalCurrent:3936.33,capitalDiff:1549.83,monthlyCapitalIncrease:110.70,capitalGrowthPct:64.94,currentDailyCapitalIncrease:0.23,interestProfit:39.84,stockProfit:45.90,dividendProfit:14.63,totalProfit:54.47},
  settings: { currency: "EUR", seedVersion:7, trackingStart:"2025-06-01", capitalStart:2386.50, lifetimeStart:"2023-05-01", lifetimeCapitalStart:0 }
};
let data = loadData();
if(!data.balances)data.balances=[];
if(!data.financeHistory || !data.financeHistory.length)data.financeHistory=structuredClone(seededHistory);
if(!data.metrics)data.metrics=structuredClone(defaultData.metrics);
if(!data.settings)data.settings={currency:"EUR"};
if(!data.settings.trackingStart)data.settings.trackingStart="2025-06-01";
if(!data.settings.lifetimeStart)data.settings.lifetimeStart="2023-05-01";
if(data.settings.lifetimeCapitalStart===undefined)data.settings.lifetimeCapitalStart=0;
if(data.settings.capitalStart===undefined)data.settings.capitalStart=2386.50;
if(Number(data.settings.seedVersion||0)<5){
  const oldSparkasse=(data.assets||[]).find(a=>a.name==="Sparkasse");
  data.assets=(data.assets||[]).filter(a=>a.name!=="Sparkasse");
  const required=structuredClone(defaultData.assets);
  const existingNames=new Set(data.assets.map(a=>a.name));
  required.forEach(a=>{if(!existingNames.has(a.name))data.assets.push(a);});
  if(oldSparkasse){
    const tg1=data.assets.find(a=>a.name==="Sparkasse Tagesgeld 1");
    if(tg1 && oldSparkasse.history?.length){
      tg1.history=oldSparkasse.history.map(h=>({...h}));
      tg1.balance=590;
      tg1.history.push({date:"2026-07-23",balance:590});
    }
  }
  (data.goals||[]).forEach(g=>g.linkedToWealth=true);
  data.settings.seedVersion=5;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}

if(!Array.isArray(data.incomeHistory)||!data.incomeHistory.length){
  data.incomeHistory=incomeHistoryV6.map(x=>({...x}));
}
if(!Array.isArray(data.amexHistory)||!data.amexHistory.length){
  data.amexHistory=expenseHistoryV6.map(x=>({
    month:x.month,
    amount:Math.abs(x.expenses),
    status:x.month==="2026-07"?"open":"paid"
  }));
}
if(!Array.isArray(data.fuelEntries))data.fuelEntries=[];
if(!data.fuelEntries.length){
  data.fuelEntries=[{id:"fuel-start",date:"2026-07-23",amount:278.75,note:"Bisherige Tankkosten – Ausgangswert"}];
}
if(!Array.isArray(data.completedPriorityGoals))data.completedPriorityGoals=[];
data.settings.seedVersion=7;
localStorage.setItem(STORAGE_KEY,JSON.stringify(data));

let deferredPrompt = null;

const $ = id => document.getElementById(id);
const fmt = n => new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(Number(n)||0);
const todayISO = () => new Date().toISOString().slice(0,10);
const monthISO = d => {
  const x = d ? new Date(d+"T12:00:00") : new Date();
  return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}`;
};
const uid = () => crypto.randomUUID ? crypto.randomUUID() : Date.now()+"-"+Math.random();
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function loadData(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? {...structuredClone(defaultData),...saved} : structuredClone(defaultData);
  }catch{return structuredClone(defaultData)}
}
function saveData(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(data)); renderAll(); }
function toast(msg){ $("toast").textContent=msg;$("toast").classList.remove("hidden");setTimeout(()=>$("toast").classList.add("hidden"),2200); }
function daysInMonth(y,m){ return new Date(y,m,0).getDate(); }
function fixedDueInMonth(item, ym){
  if(!item.active) return false;
  const [y,m]=ym.split("-").map(Number), [sy,sm]=item.startMonth.split("-").map(Number);
  const diff=(y-sy)*12+(m-sm);
  if(diff<0)return false;
  const step={monthly:1,quarterly:3,semiannual:6,annual:12}[item.frequency]||1;
  return diff%step===0;
}
function fixedForMonth(ym){ return data.fixedCosts.filter(x=>fixedDueInMonth(x,ym)); }
function monthlyAverageFixed(){
  return data.fixedCosts.filter(x=>x.active).reduce((s,x)=>s+Number(x.amount)/({monthly:1,quarterly:3,semiannual:6,annual:12}[x.frequency]||1),0);
}
function passiveAnnual(){ return data.assets.reduce((s,a)=>s+(Number(a.balance)||0)*(Number(a.rate)||0)/100,0); }
function getAccountBalanceChanges(ym){
  const accounts=[...new Set(data.balances.map(x=>x.account))];
  let total=0;
  accounts.forEach(account=>{
    const rows=data.balances.filter(x=>x.account===account).sort((a,b)=>a.date.localeCompare(b.date));
    const monthRows=rows.filter(x=>x.date.startsWith(ym));
    if(!monthRows.length)return;
    const first=monthRows[0],last=monthRows[monthRows.length-1];
    const before=rows.filter(x=>x.date<first.date).at(-1);
    if(account==="Amex") total+=Math.max(0,Number(last.amount)-(before?Number(before.amount):0));
    else total+=Math.max(0,(before?Number(before.amount):Number(last.amount))-Number(last.amount));
  });
  return total;
}
function currentMonthExpenseTotal(){
  const ym=monthISO();
  return getAccountBalanceChanges(ym)+fixedForMonth(ym).reduce((s,x)=>s+Number(x.amount),0);
}
function currentMonthIncomeTotal(){
  const ym=monthISO();
  return data.incomes.filter(x=>x.date.startsWith(ym)).reduce((s,x)=>s+Number(x.amount),0);
}
function totalWealth(){return data.assets.reduce((s,a)=>s+Number(a.balance||0),0)}
function monthsBetween(startDate,endDate){
  return Math.max(0.03,(endDate-startDate)/(1000*60*60*24*30.4375));
}
function capitalStats(){
  const start=new Date((data.settings?.trackingStart||"2025-06-01")+"T12:00:00");
  const end=new Date();
  const capitalStart=Number(data.settings?.capitalStart??2386.50);
  const current=totalWealth();
  const diff=current-capitalStart;
  const months=monthsBetween(start,end);
  const monthly=diff/months;
  const pct=capitalStart ? diff/capitalStart*100 : 0;
  const daily=diff/Math.max(1,(end-start)/(1000*60*60*24));
  return {start,current,diff,months,monthly,pct,daily};
}
function lifetimeCapitalStats(){
  const start=new Date((data.settings?.lifetimeStart||"2023-05-01")+"T12:00:00");
  const end=new Date();
  const capitalStart=Number(data.settings?.lifetimeCapitalStart??0);
  const current=totalWealth();
  const diff=current-capitalStart;
  const months=monthsBetween(start,end);
  const monthly=diff/months;
  const daily=diff/Math.max(1,(end-start)/(1000*60*60*24));
  return {start,current,diff,months,monthly,daily};
}
function monthLabel(ym){
  const [y,m]=ym.split("-").map(Number);
  return new Intl.DateTimeFormat("de-DE",{month:"long",year:"numeric"}).format(new Date(y,m-1,1));
}
function renderAll(){
  renderDashboard();renderBalances();renderFixed();renderIncome();renderAssets();renderGoals();renderAmexMonths();renderV6();renderFinanceHistory();
}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn));
  document.querySelectorAll(".page").forEach(x=>x.classList.toggle("active",x.id===btn.dataset.page));
}));

function renderDashboard(){
  $("headerMonth").textContent=monthLabel(monthISO());
  const wealth=totalWealth(), expenses=currentMonthExpenseTotal(), income=currentMonthIncomeTotal(), passive=passiveAnnual();
  $("totalWealth").textContent=fmt(wealth);
  const allHist=data.assets.flatMap(a=>(a.history||[]).map(h=>({date:h.date,total:null})));
  $("wealthChange").textContent=data.assets.some(a=>(a.history||[]).length>1)?"Kontostände mit Historie":"Noch keine ausreichende Historie";
  $("monthExpenses").textContent=fmt(expenses);
  $("monthIncome").textContent=fmt(income);
  $("monthBalance").textContent=`Monatssaldo: ${fmt(income-expenses)}`;
  $("passiveMonth").textContent=`${fmt(passive/12)}/Monat`;
  $("passiveYear").textContent=`${fmt(passive)}/Jahr`;
  const fixed=monthlyAverageFixed();
  const pct=fixed?Math.min(100,(passive/12)/fixed*100):0;
  $("passiveProgress").style.width=`${pct}%`;
  $("breakEvenPassive").textContent=`${pct.toFixed(1).replace(".",",")} %`;
  const withSalary=fixed?Math.min(100,(passive/12+income)/fixed*100):0;
  $("breakEvenWithSalary").textContent=fixed
    ? `Mit dem in diesem Monat erfassten Gehalt wären ${withSalary.toFixed(1).replace(".",",")} % der durchschnittlichen Fixkosten gedeckt.`
    : "Noch keine aktiven Fixkosten vorhanden.";
  $("assetSummary").innerHTML=data.assets.length?data.assets.map(a=>`
    <div class="list-item"><div><h3>${esc(a.name)}</h3><p>${typeLabel(a.type)} · ${Number(a.rate||0).toFixed(2).replace(".",",")} % p. a.</p></div>
    <strong>${fmt(a.balance)}</strong></div>`).join(""):'<div class="empty">Noch keine Vermögenswerte.</div>';
  const next=[...data.fixedCosts].filter(x=>x.active).map(x=>({...x,next:nextDueDate(x)})).sort((a,b)=>a.next-b.next).slice(0,6);
  $("nextFixedCosts").innerHTML=next.length?next.map(x=>`
    <div class="list-item"><div><h3>${esc(x.name)}</h3><p>${x.next.toLocaleDateString("de-DE")} · ${esc(x.account)}</p></div><strong>${fmt(x.amount)}</strong></div>`).join(""):'<div class="empty">Keine Fixkosten angelegt.</div>';
  const m=data.metrics||{};
  const c=capitalStats();
  $("interestProfit").textContent=fmt(m.interestProfit);
  $("dailyInterest").textContent=`aktuell ${fmt(m.currentDailyInterest)}/Tag`;
  $("dividendProfit").textContent=fmt(m.dividendProfit);
  $("monthlyDividend").textContent=`aktuell ${fmt(m.currentMonthlyDividend)}/Monat · ${fmt(m.currentDailyDividend)}/Tag`;
  $("stockProfit").textContent=fmt(m.stockProfit);
  $("capitalGrowth").textContent=`${c.pct.toFixed(2).replace(".",",")} %`;
  $("capitalDelta").textContent=`${c.diff>=0?"+":""}${fmt(c.diff)} seit Juni 2025 · Ø ${fmt(c.monthly)}/Monat · ${fmt(c.daily)}/Tag`;
  const lifetime=lifetimeCapitalStats();
  const lifetimeEl=$("lifetimeCapitalDelta");
  if(lifetimeEl) lifetimeEl.textContent=`Langfristig seit Mai 2023: ${fmt(lifetime.current)} aufgebaut · rechnerisch Ø ${fmt(lifetime.monthly)}/Monat. Für Prognosen wird weiterhin nur die dokumentierte Historie ab Juni 2025 verwendet.`;
}
function nextDueDate(item){
  let d=new Date(); d.setHours(12,0,0,0);
  for(let i=0;i<18;i++){
    const test=new Date(d.getFullYear(),d.getMonth()+i,1,12);
    const ym=`${test.getFullYear()}-${String(test.getMonth()+1).padStart(2,"0")}`;
    if(fixedDueInMonth(item,ym)){
      const day=Math.min(Number(item.day),daysInMonth(test.getFullYear(),test.getMonth()+1));
      const due=new Date(test.getFullYear(),test.getMonth(),day,12);
      if(due>=d)return due;
    }
  }
  return new Date(2099,0,1);
}
function typeLabel(t){return ({stocks:"Aktien",cash:"Tagesgeldkonto",bank:"Sparkasse Konto",other:"Sonstiges"})[t]||t}

$("balanceForm").addEventListener("submit",e=>{
  e.preventDefault();
  data.balances.push({id:uid(),date:$("balanceDate").value,account:$("balanceAccount").value,amount:Number($("balanceAmount").value),note:$("balanceNote").value});
  e.target.reset();$("balanceDate").value=todayISO();saveData();toast("Kontostand gespeichert");
});
$("balanceMonthFilter").addEventListener("change",renderBalances);
$("balanceAccountFilter").addEventListener("change",renderBalances);
function balanceDelta(row){
  const rows=data.balances.filter(x=>x.account===row.account).sort((a,b)=>a.date.localeCompare(b.date));
  const idx=rows.findIndex(x=>x.id===row.id); if(idx<=0)return null;
  const prev=Number(rows[idx-1].amount),cur=Number(row.amount);
  return row.account==="Amex"?cur-prev:prev-cur;
}
function renderBalances(){
  const ym=$("balanceMonthFilter").value||monthISO(),account=$("balanceAccountFilter").value;
  const rows=data.balances.filter(x=>x.date.startsWith(ym)&&(!account||x.account===account)).sort((a,b)=>b.date.localeCompare(a.date));
  const expenses=rows.map(balanceDelta).filter(x=>x!==null&&x>0).reduce((s,x)=>s+x,0);
  $("balanceSummary").textContent=`${rows.length} Kontostände · berechnete Ausgaben ${fmt(expenses)}`;
  $("balanceList").innerHTML=rows.length?rows.map(x=>{const d=balanceDelta(x);const t=d===null?"Erster Stand":d>0?`Ausgaben seit letztem Stand: ${fmt(d)}`:d<0?`Zugang / Ausgleich: ${fmt(Math.abs(d))}`:"Keine Veränderung";return `<div class="list-item"><div><h3>${esc(x.account)}</h3><p>${new Date(x.date+"T12:00:00").toLocaleDateString("de-DE")}${x.note?" · "+esc(x.note):""}</p><p>${t}</p></div><div class="item-actions"><strong>${fmt(x.amount)}</strong><button class="danger" onclick="removeItem('balances','${x.id}')">Löschen</button></div></div>`;}).join(""):'<div class="empty">Keine Kontostände für diesen Filter.</div>';
}

function renderFinanceHistory(){
  const rows=data.financeHistory||[];
  $("financeHistoryBody").innerHTML=rows.map(x=>{
    const future=x.sparkasse===null&&x.tradeRepublic===null;
    return `<tr class="${future?"future-row":""}"><td>${monthLabel(x.month)}</td><td>${x.sparkasse===null?"–":fmt(x.sparkasse)}</td><td>${fmt(x.sparkasseInterest)}</td><td>${x.tradeRepublic===null?"–":fmt(x.tradeRepublic)}</td><td>${x.trInterest===null?"–":fmt(x.trInterest)}</td><td>${x.dividend===null?"–":fmt(x.dividend)}</td><td class="positive">${fmt(x.total)}</td></tr>`;
  }).join("");
  $("historyTotalProfit").textContent=`Gewinn gesamt: ${fmt(data.metrics?.totalProfit||0)}`;
  const currentCapital=Number(data.assets.find(a=>a.name==="Trade Republic Tagesgeld")?.balance||0);
  const targets=[];
  for(let cents=16;cents<=30;cents++)targets.push({daily:cents/100,capital:cents*162.222222});
  $("interestTargetsBody").innerHTML=targets.map(x=>`<tr><td>${Math.round(x.daily*100)} Cent</td><td>${fmt(x.capital)}</td><td>${currentCapital>=x.capital?'<span class="badge success">erreicht</span>':fmt(x.capital-currentCapital)+" fehlen"}</td></tr>`).join("");
}

$("fixedForm").addEventListener("submit",e=>{
  e.preventDefault();
  data.fixedCosts.push({id:uid(),name:$("fixedName").value,amount:Number($("fixedAmount").value),day:Number($("fixedDay").value),frequency:$("fixedFrequency").value,startMonth:$("fixedStartMonth").value,account:$("fixedAccount").value,active:true});
  e.target.reset();$("fixedDay").value=1;$("fixedStartMonth").value=monthISO();
$("goalCurrent").value=totalWealth().toFixed(2);saveData();toast("Fixkosten gespeichert");
});
function renderFixed(){
  $("fixedMonthlyAverage").textContent=`Ø ${fmt(monthlyAverageFixed())}/Monat`;
  $("fixedList").innerHTML=data.fixedCosts.length?data.fixedCosts.map(x=>`
    <div class="list-item">
      <div><h3>${esc(x.name)} ${x.active?'':'<span class="badge warn">pausiert</span>'}</h3>
      <p>${frequencyLabel(x.frequency)} · Tag ${x.day} · ab ${monthLabel(x.startMonth)} · ${esc(x.account)}</p></div>
      <div class="item-actions"><strong>${fmt(x.amount)}</strong>
      <button class="secondary" onclick="toggleFixed('${x.id}')">${x.active?'Pausieren':'Aktivieren'}</button>
      <button class="danger" onclick="removeItem('fixedCosts','${x.id}')">Löschen</button></div>
    </div>`).join(""):'<div class="empty">Noch keine Fixkosten.</div>';
}
function frequencyLabel(x){return ({monthly:"monatlich",quarterly:"vierteljährlich",semiannual:"halbjährlich",annual:"jährlich"})[x]||x}
window.toggleFixed=id=>{const x=data.fixedCosts.find(v=>v.id===id);if(x)x.active=!x.active;saveData()}

$("incomeForm").addEventListener("submit",e=>{
  e.preventDefault();
  data.incomes.push({id:uid(),date:$("incomeDate").value,amount:Number($("incomeAmount").value),type:$("incomeType").value,note:$("incomeNote").value});
  e.target.reset();$("incomeDate").value=todayISO();saveData();toast("Einkommen gespeichert");
});
$("incomeMonthFilter").addEventListener("change",renderIncome);
function renderIncome(){
  const ym=$("incomeMonthFilter").value||monthISO();
  const rows=data.incomes.filter(x=>x.date.startsWith(ym)).sort((a,b)=>b.date.localeCompare(a.date));
  $("incomeList").innerHTML=rows.length?rows.map(x=>`
    <div class="list-item"><div><h3>${esc(x.type)}</h3><p>${new Date(x.date+"T12:00:00").toLocaleDateString("de-DE")}${x.note?" · "+esc(x.note):""}</p></div>
    <div class="item-actions"><strong>${fmt(x.amount)}</strong><button class="danger" onclick="removeItem('incomes','${x.id}')">Löschen</button></div></div>`).join(""):'<div class="empty">Kein Einkommen in diesem Monat.</div>';
}

$("assetForm").addEventListener("submit",e=>{
  e.preventDefault();
  const bal=Number($("assetBalance").value);
  data.assets.push({id:uid(),name:$("assetName").value,type:$("assetType").value,balance:bal,rate:Number($("assetRate").value),history:[{date:todayISO(),balance:bal}]});
  e.target.reset();$("assetRate").value=0;saveData();toast("Vermögenswert gespeichert");
});
function renderAssets(){
  $("assetTotal").textContent=fmt(totalWealth());
  $("assetList").innerHTML=data.assets.length?data.assets.map(a=>{
    const annual=Number(a.balance)*Number(a.rate||0)/100;
    return `<div class="list-item">
      <div><h3>${esc(a.name)}</h3><p>${typeLabel(a.type)} · ${Number(a.rate||0).toFixed(2).replace(".",",")} % p. a.</p>
      <p>Erwartet: ${fmt(annual/12)}/Monat · ${fmt(annual)}/Jahr</p></div>
      <div class="item-actions"><strong>${fmt(a.balance)}</strong>
      <button class="secondary" onclick="openAssetUpdate('${a.id}')">Aktualisieren</button>
      <button class="danger" onclick="removeItem('assets','${a.id}')">Löschen</button></div>
    </div>`}).join(""):'<div class="empty">Noch keine Vermögenswerte.</div>';
}
window.openAssetUpdate=id=>{
  const a=data.assets.find(x=>x.id===id);if(!a)return;
  openModal(`<h2>${esc(a.name)} aktualisieren</h2>
    <form id="assetUpdateForm" class="form-grid">
      <label>Datum<input id="assetUpdateDate" type="date" value="${todayISO()}" required></label>
      <label>Neuer Stand<input id="assetUpdateBalance" type="number" step="0.01" value="${a.balance}" required></label>
      <label>Neuer Satz p. a. (%)<input id="assetUpdateRate" type="number" min="0" step="0.01" value="${a.rate||0}" required></label>
      <button type="submit">Speichern</button>
    </form>`);
  $("assetUpdateForm").addEventListener("submit",e=>{
    e.preventDefault();a.balance=Number($("assetUpdateBalance").value);a.rate=Number($("assetUpdateRate").value);
    a.history=a.history||[];a.history.push({date:$("assetUpdateDate").value,balance:a.balance});
    closeModal();saveData();toast("Kontostand aktualisiert");
  });
};

$("goalForm").addEventListener("submit",e=>{
  e.preventDefault();
  const cur=totalWealth();
  data.goals.push({id:uid(),name:$("goalName").value,target:Number($("goalTarget").value),current:cur,targetDate:$("goalDate").value,linkedToWealth:true,history:[{date:todayISO(),value:cur}]});
  e.target.reset();saveData();toast("Sparziel gespeichert");
});
function renderGoals(){
  const c=capitalStats();
  $("goalCurrent").value=totalWealth().toFixed(2);
  $("goalList").innerHTML=data.goals.length?data.goals.map(g=>{
    const target=Number(g.target);
    const current=g.linkedToWealth!==false?totalWealth():Number(g.current);
    g.current=current;
    const remaining=target-current;
    const pct=target===0?(current===0?100:0):Math.max(0,Math.min(100,current/target*100));
    const monthsLeft=Math.max(.03,(new Date(g.targetDate+"T12:00:00")-new Date())/(1000*60*60*24*30.4375));
    const required=remaining/monthsLeft;
    const avg=c.monthly;
    let estimated=null;
    if(avg>0&&remaining>0){
      estimated=new Date();
      estimated.setDate(estimated.getDate()+remaining/avg*30.4375);
    }
    return `<article class="panel goal-card">
      <div class="goal-top"><div><h2>${esc(g.name)}</h2><p class="muted">${fmt(current)} von ${fmt(target)} · automatisch aus Gesamtvermögen</p></div><strong>${pct.toFixed(1).replace(".",",")} %</strong></div>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="goal-stats">
        <div class="stat"><span>Wunschdatum</span><strong>${new Date(g.targetDate+"T12:00:00").toLocaleDateString("de-DE")}</strong></div>
        <div class="stat"><span>Nötig pro Monat</span><strong>${remaining<=0?"Erreicht":fmt(required)}</strong></div>
        <div class="stat"><span>Ø dokumentiert seit Juni 2025</span><strong>${fmt(avg)}/Monat</strong></div>
        <div class="stat"><span>Geschätztes Ziel</span><strong>${estimated?estimated.toLocaleDateString("de-DE"):remaining<=0?"Erreicht":"Bei aktuellem Verlauf nicht berechenbar"}</strong></div>
      </div>
      <div class="button-row" style="margin-top:.9rem">
        <button class="secondary" onclick="openGoalUpdate('${g.id}')">Wunschdatum ändern</button>
        <button class="danger" onclick="removeItem('goals','${g.id}')">Löschen</button>
      </div>
    </article>`;
  }).join(""):'<article class="panel empty">Noch keine Sparziele.</article>';
}
window.openGoalUpdate=id=>{
  const g=data.goals.find(x=>x.id===id);if(!g)return;
  openModal(`<h2>${esc(g.name)} aktualisieren</h2>
    <form id="goalUpdateForm" class="form-grid">
      <label>Datum<input id="goalUpdateDate" type="date" value="${todayISO()}" required></label>
      <label>Aktueller Stand<input type="text" value="${fmt(totalWealth())}" readonly></label>
      <label>Wunschdatum<input id="goalUpdateTargetDate" type="date" value="${g.targetDate}" required></label>
      <button type="submit">Speichern</button>
    </form>`);
  $("goalUpdateForm").addEventListener("submit",e=>{
    e.preventDefault();g.current=totalWealth();g.linkedToWealth=true;g.targetDate=$("goalUpdateTargetDate").value;
    g.history=g.history||[];g.history.push({date:$("goalUpdateDate").value,value:g.current});
    closeModal();saveData();toast("Sparziel aktualisiert");
  });
};

function renderAmexMonths(){
  const months=new Set([monthISO()]); data.balances.filter(x=>x.account==="Amex").forEach(x=>months.add(x.date.slice(0,7)));
  const sorted=[...months].sort().reverse(),previous=$("amexMonthSelect").value;
  $("amexMonthSelect").innerHTML=sorted.map(m=>`<option value="${m}">${monthLabel(m)}</option>`).join("");
  if(sorted.includes(previous))$("amexMonthSelect").value=previous; renderAmexCard();
}
$("amexMonthSelect").addEventListener("change",renderAmexCard);
$("toggleAmexPaid").addEventListener("click",()=>{
  const ym=$("amexMonthSelect").value;
  data.amexPaid[ym]=!data.amexPaid[ym];
  saveData();toast(data.amexPaid[ym]?"Als abgebucht markiert":"Markierung entfernt");
});
function renderAmexCard(){
  const ym=$("amexMonthSelect").value||monthISO();
  const rows=data.balances.filter(x=>x.account==="Amex"&&x.date.startsWith(ym)).sort((a,b)=>a.date.localeCompare(b.date));
  const latest=rows.at(-1),paid=!!data.amexPaid[ym];
  $("amexMonthTotal").textContent=latest?fmt(latest.amount):fmt(0);
  $("amexStatus").innerHTML=paid?'<span class="badge success">abgebucht</span>':'<span class="badge warn">noch offen · ungefähr am 10. des Folgemonats</span>';
  $("toggleAmexPaid").textContent=paid?"Abbuchung zurücksetzen":"Als abgebucht markieren";
}
window.removeItem=(key,id)=>{
  if(!confirm("Eintrag wirklich löschen?"))return;
  data[key]=data[key].filter(x=>x.id!==id);saveData();toast("Eintrag gelöscht");
};

function openModal(html){$("modalContent").innerHTML=html;$("modal").classList.remove("hidden")}
function closeModal(){$("modal").classList.add("hidden");$("modalContent").innerHTML=""}
$("closeModal").addEventListener("click",closeModal);
$("modal").addEventListener("click",e=>{if(e.target===$("modal"))closeModal()});

$("exportBackup").addEventListener("click",()=>{
  download(`finanzen-backup-${todayISO()}.json`,JSON.stringify({version:APP_VERSION,exportedAt:new Date().toISOString(),data},null,2),"application/json");
});
$("importBackup").addEventListener("change",async e=>{
  const file=e.target.files[0];if(!file)return;
  try{
    const parsed=JSON.parse(await file.text());
    const incoming=parsed.data||parsed;
    if(!incoming.assets)throw new Error("Ungültiges Backup");
    if(confirm("Aktuelle Daten durch dieses Backup ersetzen?")){
      data={...structuredClone(defaultData),...incoming};saveData();toast("Backup importiert");
    }
  }catch(err){alert("Backup konnte nicht gelesen werden: "+err.message)}
  e.target.value="";
});
$("exportCsv").addEventListener("click",()=>{
  const rows=[["Datum","Konto","Kontostand","Notiz","Veränderung"],...data.balances.map(x=>[x.date,x.account,x.amount,x.note||"",balanceDelta(x)??""])];
  const csv="\uFEFF"+rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(";")).join("\n");
  download(`kontostaende-${todayISO()}.csv`,csv,"text/csv;charset=utf-8");
});
$("deleteAll").addEventListener("click",()=>{
  if(confirm("Wirklich ALLE Finanzdaten auf diesem Gerät löschen?")){
    localStorage.removeItem(STORAGE_KEY);data=structuredClone(defaultData);saveData();toast("Alle Daten gelöscht");
  }
});
function download(name,content,type){
  const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").classList.remove("hidden")});
$("installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").classList.add("hidden")});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js");

$("balanceDate").value=todayISO();
$("incomeDate").value=todayISO();
$("balanceMonthFilter").value=monthISO();
$("incomeMonthFilter").value=monthISO();
$("fixedStartMonth").value=monthISO();
$("goalCurrent").value=totalWealth().toFixed(2);
renderAll();


function daysInMonthKey(ym){
  const [y,m]=ym.split("-").map(Number);
  return new Date(y,m,0).getDate();
}
function renderV6(){
  const wealth=totalWealth();
  const validExpenses=expenseHistoryV6.filter(x=>x.month>="2025-06");
  const avgExp=validExpenses.reduce((s,x)=>s+Math.abs(x.expenses),0)/validExpenses.length;
  const avgSaving=validExpenses.reduce((s,x)=>s+Number(x.saving||0),0)/validExpenses.length;
  const avgIncome=incomeHistoryV6.reduce((s,x)=>s+x.total,0)/incomeHistoryV6.length;
  const savingRate=avgIncome ? avgSaving/avgIncome*100 : 0;
  const monthlyFixed=fixedCostsV6.reduce((s,x)=>{
    if(x.frequency==="monthly")return s+x.amount;
    if(x.frequency==="bimonthly")return s+x.amount/2;
    if(x.frequency==="twice")return s+x.amount*2/12;
    return s+x.amount/12;
  },0);
  const interestDay=Number(data.metrics?.currentDailyInterest||0.17);
  const dividendDay=Number(data.metrics?.currentDailyDividend||0.05);
  const passiveMonthly=(interestDay+dividendDay)*30.4375;
  const coverage=monthlyFixed?passiveMonthly/monthlyFixed*100:0;

  const set=(id,val)=>{const el=$(id);if(el)el.textContent=val};
  set("v6TotalWealth",fmt(wealth));
  set("v6AvgSaving",fmt(avgSaving)+"/Monat");
  set("v6SavingRate",savingRate.toFixed(1).replace(".",",")+" %");
  set("v6PassiveMonthly",fmt(passiveMonthly));
  set("v6FixedMonthly",fmt(monthlyFixed));
  set("v6Coverage",coverage.toFixed(1).replace(".",",")+" %");

  const salary2025=incomeHistoryV6.filter(x=>x.month.startsWith("2025")).reduce((s,x)=>s+x.salary,0);
  const salary2026=incomeHistoryV6.filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.salary,0);
  set("salary2025",fmt(salary2025));
  set("salary2026",fmt(salary2026));
  set("taxAllowanceLeft",fmt(Math.max(0,12096-salary2026)));

  const ih=$("incomeHistoryBody");
  if(ih)ih.innerHTML=incomeHistoryV6.map(x=>`<tr><td>${monthLabel(x.month)}</td><td>${fmt(x.salary)}</td><td>${fmt(x.bonus)}</td><td>${fmt(x.tips)}</td><td>${fmt(x.parents)}</td><td>${fmt(x.costs)}</td><td><strong>${fmt(x.total)}</strong></td></tr>`).join("");

  set("avgExpenses",fmt(avgExp));
  const avgDailyExp=validExpenses.reduce((s,x)=>s+Math.abs(x.expenses)/daysInMonthKey(x.month),0)/validExpenses.length;
  const avgDailyIncome=validExpenses.filter(x=>x.incomeDay).reduce((s,x)=>s+x.incomeDay,0)/validExpenses.filter(x=>x.incomeDay).length;
  set("avgExpensesDaily",fmt(avgDailyExp));
  set("avgIncomeDaily",fmt(avgDailyIncome));
  set("avgMonthlySaving",fmt(avgSaving));

  const eh=$("expenseHistoryBody");
  if(eh)eh.innerHTML=expenseHistoryV6.map(x=>`<tr><td>${monthLabel(x.month)}</td><td>${fmt(x.expenses)}</td><td>${x.incomeDay==null?"–":fmt(x.incomeDay)}</td><td>${x.passiveDay==null?"–":fmt(x.passiveDay)}</td><td>${x.saving==null?"–":fmt(x.saving)}</td></tr>`).join("");

  set("fixedMonthlyTotal",fmt(monthlyFixed));
  set("fixedYearlyTotal",fmt(monthlyFixed*12));
  set("nextFixedCount",String(fixedCostsV6.length));
  const fl=$("fixedCostListV6");
  if(fl)fl.innerHTML=fixedCostsV6.map(x=>`<div class="list-item"><div><h3>${esc(x.name)}</h3><p>${esc(x.when)}</p></div><strong>${fmt(x.amount)}</strong></div>`).join("");

  set("passiveInterestDay",fmt(interestDay));
  set("passiveDividendDay",fmt(dividendDay));
  set("passiveMonth",fmt(passiveMonthly));
  set("passiveYear",fmt(passiveMonthly*12));
  const pt=$("passiveTargetsBody");
  if(pt)pt.innerHTML=passiveCapitalTargetsV6.map(([daily,capital])=>`<tr><td>${fmt(daily)}</td><td>${fmt(capital)}</td><td>${wealth>=capital?'<span class="badge success">erreicht</span>':fmt(capital-wealth)+" fehlen"}</td></tr>`).join("");

  const milestones=[5000,10000,25000,50000,100000];
  const c=capitalStats();
  const ml=$("milestoneList");
  if(ml)ml.innerHTML=milestones.map(target=>{
    const pct=Math.min(100,wealth/target*100);
    const remaining=Math.max(0,target-wealth);
    let eta="–";
    if(remaining<=0)eta="Erreicht";
    else if(c.monthly>0){
      const d=new Date();
      d.setDate(d.getDate()+remaining/c.monthly*30.4375);
      eta=d.toLocaleDateString("de-DE");
    }
    return `<div class="list-item"><div style="width:100%"><div class="milestone-row"><strong>${fmt(target)}</strong><span>${pct.toFixed(1).replace(".",",")} % · ${eta}</span></div><div class="progress"><div style="width:${pct}%"></div></div></div></div>`;
  }).join("");

  const yf=$("yearForecast");
  if(yf){
    const projectedIncome=incomeHistoryV6.filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.total,0);
    const projectedExpenses=avgExp*12;
    const projectedPassive=passiveMonthly*12;
    const projectedEnd=wealth+Math.max(0,avgSaving)*(12-new Date().getMonth()-1);
    yf.innerHTML=`
      <div class="stat"><span>Einkommen 2026</span><strong>${fmt(projectedIncome)}</strong></div>
      <div class="stat"><span>Ausgaben hochgerechnet</span><strong>${fmt(projectedExpenses)}</strong></div>
      <div class="stat"><span>Passiv hochgerechnet</span><strong>${fmt(projectedPassive)}</strong></div>
      <div class="stat"><span>Vermögen Jahresende</span><strong>${fmt(projectedEnd)}</strong></div>`;
  }
}


document.addEventListener("click",e=>{
  const btn=e.target.closest("[data-page]");
  if(!btn)return;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=document.getElementById(btn.dataset.page);
  if(target)target.classList.add("active");
  document.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active",b===btn));
  if(btn.dataset.page==="overview")renderV6();
});


function renderV6(){
  const wealth=totalWealth();
  const c=capitalStats();
  const monthlyFixed=fixedCostsV6.reduce((s,x)=>{
    if(x.frequency==="monthly")return s+x.amount;
    if(x.frequency==="bimonthly")return s+x.amount/2;
    if(x.frequency==="twice")return s+x.amount*2/12;
    return s+x.amount/12;
  },0);
  const interestDay=Number(data.metrics?.currentDailyInterest||0.17);
  const dividendDay=Number(data.metrics?.currentDailyDividend||0.05);
  const passiveMonthly=(interestDay+dividendDay)*30.4375;
  const set=(id,val)=>{const el=$(id);if(el)el.textContent=val};

  set("v6TotalWealth",fmt(wealth));
  set("v6AvgSaving",fmt(c.monthly)+"/Monat");
  set("v6SavingRate","aus Vermögensverlauf");
  set("v6PassiveMonthly",fmt(passiveMonthly));
  set("v6FixedMonthly",fmt(monthlyFixed));
  set("v6Coverage",(monthlyFixed?passiveMonthly/monthlyFixed*100:0).toFixed(1).replace(".",",")+" %");

  const incomeRows=data.incomeHistory||[];
  const salary2025=incomeRows.filter(x=>x.month.startsWith("2025")).reduce((s,x)=>s+Number(x.salary),0);
  const salary2026=incomeRows.filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+Number(x.salary),0);
  set("salary2025",fmt(salary2025));
  set("salary2026",fmt(salary2026));
  set("taxAllowanceLeft",fmt(Math.max(0,12096-salary2026)));
  const ih=$("incomeHistoryBody");
  if(ih)ih.innerHTML=incomeRows.slice().sort((a,b)=>a.month.localeCompare(b.month)).map(x=>`<tr>
    <td>${monthLabel(x.month)}</td><td>${fmt(x.salary)}</td><td>${fmt(x.bonus)}</td><td>${fmt(x.tips)}</td>
    <td>${fmt(x.parents)}</td><td>${fmt(x.costs)}</td><td><strong>${fmt(x.total)}</strong></td>
    <td><button class="secondary icon-btn" onclick="editIncomeMonth('${x.month}')">Bearbeiten</button></td></tr>`).join("");

  const paid=(data.amexHistory||[]).filter(x=>x.status==="paid");
  const open=(data.amexHistory||[]).find(x=>x.status==="open");
  const avg=paid.length?paid.reduce((s,x)=>s+Number(x.amount),0)/paid.length:0;
  const max=paid.length?Math.max(...paid.map(x=>Number(x.amount))):0;
  set("avgAmexDebit",fmt(avg));
  set("currentAmexOpen",open?fmt(open.amount):fmt(0));
  set("maxAmexDebit",fmt(max));
  const eh=$("expenseHistoryBody");
  if(eh)eh.innerHTML=(data.amexHistory||[]).slice().sort((a,b)=>a.month.localeCompare(b.month)).map(x=>`<tr>
    <td>${monthLabel(x.month)}</td><td>${fmt(x.amount)}</td>
    <td>${x.status==="open"?'<span class="badge warn">aktuell offen</span>':'<span class="badge success">abgebucht</span>'}</td></tr>`).join("");

  set("fixedMonthlyTotal",fmt(monthlyFixed));
  set("fixedYearlyTotal",fmt(monthlyFixed*12));
  const fl=$("fixedCostListV6");
  if(fl)fl.innerHTML=fixedCostsV6.map(x=>`<div class="list-item"><div><h3>${esc(x.name)}</h3><p>${esc(x.when)}</p></div><strong>${fmt(x.amount)}</strong></div>`).join("");
  renderFuelV7();

  set("passiveInterestDay",fmt(interestDay));
  set("passiveDividendDay",fmt(dividendDay));
  set("passiveMonth",fmt(passiveMonthly));
  set("passiveYear",fmt(passiveMonthly*12));
  const trCash=Number((data.assets||[]).find(a=>a.name==="Trade Republic Tagesgeld")?.balance||0);
  const pt=$("passiveTargetsBody");
  if(pt)pt.innerHTML=passiveCapitalTargetsV6.map(([daily,capital])=>`<tr><td>${fmt(daily)}</td><td>${fmt(capital)}</td><td>${trCash>=capital?'<span class="badge success">erreicht</span>':fmt(capital-trCash)+" fehlen"}</td></tr>`).join("");

  renderPriorityGoalsV7();

  const milestones=[5000,10000,25000,50000,100000];
  const ml=$("milestoneList");
  if(ml)ml.innerHTML=milestones.map(target=>{
    const pct=Math.min(100,wealth/target*100), remaining=Math.max(0,target-wealth);
    let eta=remaining<=0?"Erreicht":"–";
    if(remaining>0&&c.monthly>0){const d=new Date();d.setDate(d.getDate()+remaining/c.monthly*30.4375);eta=d.toLocaleDateString("de-DE")}
    return `<div class="list-item"><div style="width:100%"><div class="milestone-row"><strong>${fmt(target)}</strong><span>${pct.toFixed(1).replace(".",",")} % · ${eta}</span></div><div class="progress"><div style="width:${pct}%"></div></div></div></div>`;
  }).join("");

  const yf=$("yearForecast");
  if(yf){
    const projectedIncome=incomeRows.filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+Number(x.total),0);
    const projectedEnd=wealth+Math.max(0,c.monthly)*(12-new Date().getMonth()-1);
    yf.innerHTML=`<div class="stat"><span>Einkommen 2026</span><strong>${fmt(projectedIncome)}</strong></div>
    <div class="stat"><span>Passiv hochgerechnet</span><strong>${fmt(passiveMonthly*12)}</strong></div>
    <div class="stat"><span>Vermögen Jahresende</span><strong>${fmt(projectedEnd)}</strong></div>`;
  }
}

window.editIncomeMonth=function(month){
  let row=data.incomeHistory.find(x=>x.month===month);
  if(!row){row={month,salary:0,bonus:0,tips:0,parents:0,costs:0,total:0};data.incomeHistory.push(row)}
  openModal(`<form id="incomeEditForm"><h2>${monthLabel(month)} bearbeiten</h2>
    <label>Monat<input id="ieMonth" type="month" value="${row.month}" required></label>
    <label>Gehalt<input id="ieSalary" type="number" step="0.01" value="${row.salary}" required></label>
    <label>Bonus<input id="ieBonus" type="number" step="0.01" value="${row.bonus}" required></label>
    <label>Trinkgeld<input id="ieTips" type="number" step="0.01" value="${row.tips}" required></label>
    <label>Eltern<input id="ieParents" type="number" step="0.01" value="${row.parents}" required></label>
    <label>Kosten<input id="ieCosts" type="number" step="0.01" value="${row.costs}" required></label>
    <div class="button-row"><button type="submit">Speichern</button><button id="ieDelete" type="button" class="danger">Löschen</button></div></form>`);
  $("incomeEditForm").addEventListener("submit",e=>{
    e.preventDefault();
    row.month=$("ieMonth").value;row.salary=Number($("ieSalary").value);row.bonus=Number($("ieBonus").value);
    row.tips=Number($("ieTips").value);row.parents=Number($("ieParents").value);row.costs=Number($("ieCosts").value);
    row.total=row.salary+row.bonus+row.tips+row.parents+row.costs;
    saveData();closeModal();toast("Einkommen gespeichert");
  });
  $("ieDelete").addEventListener("click",()=>{data.incomeHistory=data.incomeHistory.filter(x=>x!==row);saveData();closeModal()});
};
const addIncomeMonthV7=$("addIncomeMonth");
if(addIncomeMonthV7)addIncomeMonthV7.addEventListener("click",()=>editIncomeMonth(monthISO()));

function renderFuelV7(){
  const rows=(data.fuelEntries||[]).slice().sort((a,b)=>a.date.localeCompare(b.date));
  const byMonth={};rows.forEach(x=>byMonth[x.date.slice(0,7)]=(byMonth[x.date.slice(0,7)]||0)+Number(x.amount));
  const monthVals=Object.values(byMonth);
  const avg=monthVals.length?monthVals.reduce((s,x)=>s+x,0)/monthVals.length:0;
  const intervals=[];for(let i=1;i<rows.length;i++)intervals.push((new Date(rows[i].date)-new Date(rows[i-1].date))/86400000);
  const m=$("fuelMonthlyAverage"),it=$("fuelIntervalAverage");
  if(m)m.textContent=rows.length?fmt(avg):"Noch keine Daten";
  if(it)it.textContent=intervals.length?(intervals.reduce((s,x)=>s+x,0)/intervals.length).toFixed(1).replace(".",",")+" Tage":"Noch nicht berechenbar";
  const list=$("fuelList");if(list)list.innerHTML=rows.slice().reverse().map(x=>`<div class="list-item"><div><h3>${new Date(x.date+"T12:00:00").toLocaleDateString("de-DE")}</h3><p>${esc(x.note||"Tanken")}</p></div><div class="item-actions"><strong>${fmt(x.amount)}</strong><button class="danger" onclick="removeFuelV7('${x.id}')">Löschen</button></div></div>`).join("");
}
window.removeFuelV7=id=>{data.fuelEntries=data.fuelEntries.filter(x=>x.id!==id);saveData()};
const fuelFormV7=$("fuelForm");
if(fuelFormV7){
  $("fuelDate").value=todayISO();
  fuelFormV7.addEventListener("submit",e=>{e.preventDefault();data.fuelEntries.push({id:uid(),date:$("fuelDate").value,amount:Number($("fuelAmount").value),note:$("fuelNote").value});e.target.reset();$("fuelDate").value=todayISO();saveData();toast("Tankvorgang gespeichert")});
}

function renderPriorityGoalsV7(){
  const wealth=totalWealth(), completed=new Set(data.completedPriorityGoals||[]);
  const current=priorityGoalsV7.find(g=>!completed.has(g.priority));
  const card=$("priorityGoalCard");
  if(card&&current){
    const pct=Math.min(100,wealth/current.min*100),remaining=Math.max(0,current.min-wealth),c=capitalStats();
    let eta="Nicht berechenbar";if(remaining<=0)eta="Zielbetrag erreicht – als erledigt markieren";else if(c.monthly>0){const d=new Date();d.setDate(d.getDate()+remaining/c.monthly*30.4375);eta=d.toLocaleDateString("de-DE")}
    card.innerHTML=`<div class="goal-current"><span class="badge">Priorität ${current.priority}</span><h3>${esc(current.category)} · ${esc(current.name)}</h3>
      <p>${fmt(wealth)} von mindestens ${fmt(current.min)}${current.max!==current.min?" · maximal "+fmt(current.max):""}</p>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="goal-meta"><div><span>Fortschritt</span><strong>${pct.toFixed(2).replace(".",",")} %</strong></div><div><span>Noch nötig</span><strong>${fmt(remaining)}</strong></div><div><span>Ø Vermögensaufbau</span><strong>${fmt(c.monthly)}/Monat</strong></div><div><span>Prognose</span><strong>${eta}</strong></div></div>
      ${remaining<=0?`<button style="margin-top:1rem" onclick="completePriorityGoalV7(${current.priority})">Ziel abschließen und nächstes anzeigen</button>`:""}</div>`;
  }
  const body=$("priorityGoalsBody");if(body)body.innerHTML=priorityGoalsV7.map(g=>`<tr><td>${g.priority}</td><td>${esc(g.category)}</td><td>${esc(g.name)}</td><td>${fmt(g.min)}</td><td>${fmt(g.max)}</td><td>${completed.has(g.priority)?"Erledigt":g.priority===current?.priority?"Aktuell":"Später"}</td></tr>`).join("");
}
window.completePriorityGoalV7=p=>{if(!data.completedPriorityGoals.includes(p))data.completedPriorityGoals.push(p);saveData()};
