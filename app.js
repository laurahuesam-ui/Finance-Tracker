
const defaultIncomeHistoryV7 = [{"month": "2025-06", "salary": 426.53, "bonus": 50, "tips": 150, "parents": 105, "costs": -35.93, "total": 790.6}, {"month": "2025-07", "salary": 237.31, "bonus": 50, "tips": 125, "parents": 105, "costs": -35.93, "total": 591.38}, {"month": "2025-08", "salary": 599.89, "bonus": 50, "tips": 200, "parents": 105, "costs": -35.93, "total": 1013.96}, {"month": "2025-09", "salary": 617.17, "bonus": 50, "tips": 200, "parents": 105, "costs": -60.93, "total": 1006.24}, {"month": "2025-10", "salary": 667.81, "bonus": 50, "tips": 250, "parents": 105, "costs": -137.08, "total": 1030.73}, {"month": "2025-11", "salary": 719.6, "bonus": 50, "tips": 225, "parents": 105, "costs": -920.42, "total": 274.18}, {"month": "2025-12", "salary": 761.84, "bonus": 50, "tips": 250, "parents": 105, "costs": -181.42, "total": 1065.42}, {"month": "2026-01", "salary": 735.94, "bonus": 50, "tips": 225, "parents": 105, "costs": -187.42, "total": 923.52}, {"month": "2026-02", "salary": 506.8, "bonus": 50, "tips": 125, "parents": 105, "costs": -191.7, "total": 590.1}, {"month": "2026-03", "salary": 595.92, "bonus": 50, "tips": 225, "parents": 105, "costs": -247.2, "total": 723.72}, {"month": "2026-04", "salary": 920.26, "bonus": 50, "tips": 300, "parents": 105, "costs": -303.7, "total": 1066.56}, {"month": "2026-05", "salary": 1014.08, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1248.38}, {"month": "2026-06", "salary": 514.92, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 749.22}, {"month": "2026-07", "salary": 679.5, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 913.8}, {"month": "2026-08", "salary": 910.0, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1144.3}, {"month": "2026-09", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1074.3}, {"month": "2026-10", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1074.3}, {"month": "2026-11", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1074.3}, {"month": "2026-12", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 105, "costs": -215.7, "total": 1074.3}];

const defaultAmexHistoryV7 = [{"month": "2025-05", "expenses": -942.84, "average": null, "expenseDay": null, "incomeDay": null, "passiveDay": null, "netDay": null, "saving": null}, {"month": "2025-06", "expenses": -332.81, "average": -637.825, "expenseDay": -11.09366667, "incomeDay": 25.92, "passiveDay": 0.109726776, "netDay": 14.94, "saving": 455.5898333}, {"month": "2025-07", "expenses": -485.92, "average": -561.8725, "expenseDay": -15.67483871, "incomeDay": 19.39, "passiveDay": 0.090273224, "netDay": 3.8, "saving": 116.0507527}, {"month": "2025-08", "expenses": -556.42, "average": -559.14625, "expenseDay": -17.94903226, "incomeDay": 33.24, "passiveDay": 0.084808743, "netDay": 15.38, "saving": 469.1011828}, {"month": "2025-09", "expenses": -379.02, "average": -469.083125, "expenseDay": -12.634, "incomeDay": 32.99, "passiveDay": 0.083278689, "netDay": 20.44, "saving": 623.443}, {"month": "2025-10", "expenses": -354.97, "average": -412.0265625, "expenseDay": -11.45064516, "incomeDay": 33.79, "passiveDay": 0.128196721, "netDay": 22.47, "saving": 685.3953226}, {"month": "2025-11", "expenses": -368.61, "average": -390.3182813, "expenseDay": -12.287, "incomeDay": 8.99, "passiveDay": 0.13136612, "netDay": -3.17, "saving": -96.56683333}, {"month": "2025-12", "expenses": -1426.3, "average": -908.3091406, "expenseDay": -46.00967742, "incomeDay": 34.93, "passiveDay": 0.156830601, "netDay": -10.92, "saving": -333.091828}, {"month": "2026-01", "expenses": -633.6, "average": -770.9545703, "expenseDay": -20.43870968, "incomeDay": 30.28, "passiveDay": 0.143934426, "netDay": 9.98, "saving": 304.5293548}, {"month": "2026-02", "expenses": -509.36, "average": -640.1572852, "expenseDay": -18.19142857, "incomeDay": 19.35, "passiveDay": 0.130819672, "netDay": 1.29, "saving": 39.25142857}, {"month": "2026-03", "expenses": -602.85, "average": -621.5036426, "expenseDay": -21.53035714, "incomeDay": 23.73, "passiveDay": 0.173114754, "netDay": 2.37, "saving": 72.32410714}, {"month": "2026-04", "expenses": -363.47, "average": -492.4868213, "expenseDay": -12.98107143, "incomeDay": 34.97, "passiveDay": 0.166229508, "netDay": 22.15, "saving": 675.7073214}, {"month": "2026-05", "expenses": -781.81, "average": -637.1484106, "expenseDay": -27.92178571, "incomeDay": 40.93, "passiveDay": 0.337704918, "netDay": 13.35, "saving": 407.0655357}, {"month": "2026-06", "expenses": -275.2, "average": -456.1742053, "expenseDay": -9.828571429, "incomeDay": 24.56, "passiveDay": 0.224590164, "netDay": 14.96, "saving": 456.2985714}, {"month": "2026-07", "expenses": -642.97, "average": -549.5721027, "expenseDay": -22.96321429, "incomeDay": 29.96, "passiveDay": 0.214754098, "netDay": 7.21, "saving": 219.9719643}];

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


const defaultFixedCostsV12 = [{"id": "fixed-master-0", "name": "Netflix", "amount": 9.99, "day": 31, "frequency": "monthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "Ende des Monats"}, {"id": "fixed-master-1", "name": "Telekom", "amount": 19.95, "day": 31, "frequency": "monthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "Ende des Monats"}, {"id": "fixed-master-2", "name": "Spotify", "amount": 12.99, "day": 1, "frequency": "monthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "Anfang des Monats"}, {"id": "fixed-master-3", "name": "Versicherung", "amount": 148.77, "day": 14, "frequency": "monthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "Mitte des Monats"}, {"id": "fixed-master-4", "name": "Cheerleading", "amount": 24.0, "day": 1, "frequency": "monthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "Anfang des Monats"}, {"id": "fixed-master-5", "name": "FSV", "amount": 31.5, "day": 1, "frequency": "semiannual", "startMonth": "2025-04", "account": "Standard", "active": true, "when": "April & Oktober"}, {"id": "fixed-master-6", "name": "HanseMerkur", "amount": 25.0, "day": 14, "frequency": "annual", "startMonth": "2025-09", "account": "Standard", "active": true, "when": "Mitte September"}, {"id": "fixed-master-7", "name": "Cheerleading Jahresbeitrag", "amount": 59.0, "day": 1, "frequency": "annual", "startMonth": "2025-04", "account": "Standard", "active": true, "when": "April"}, {"id": "fixed-master-8", "name": "Reitverein", "amount": 50.0, "day": 1, "frequency": "annual", "startMonth": "2025-03", "account": "Standard", "active": true, "when": "März"}, {"id": "fixed-master-9", "name": "Friseur", "amount": 25.0, "day": 1, "frequency": "bimonthly", "startMonth": "2025-01", "account": "Standard", "active": true, "when": "alle 2 Monate"}];

const passiveCapitalTargetsV6 = [
[0.16,2595.56],[0.17,2757.78],[0.18,2920.00],[0.19,3082.22],[0.20,3244.44],
[0.21,3406.67],[0.22,3568.89],[0.23,3731.11],[0.24,3893.33],[0.25,4055.56],
[0.26,4217.78],[0.27,4380.00],[0.28,4542.22],[0.29,4704.44],[0.30,4866.67]
];


const STORAGE_KEY = "finanzenPwaCleanV48";
const LEGACY_STORAGE_KEYS = ["finanzenPwaV10","finanzenPwaV9","finanzenPwaV8","finanzenPwaV7","finanzenPwaV6","finanzenPwaV5","finanzenPwaV4","finanzenPwaV3","finanzenData","financePwa","financeData"];
const APP_VERSION = 48;
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

const masterCapitalHistoryV14 = [{"month": "2025-06", "sparkasse": 1500.0, "sparkasseInterest": 1.81, "tradeRepublic": 881.35, "trInterest": 1.52, "dividend": 0.02, "total": 3.35}, {"month": "2025-07", "sparkasse": 1520.0, "sparkasseInterest": 1.01, "tradeRepublic": 811.25, "trInterest": 1.37, "dividend": 0.37, "total": 2.75}, {"month": "2025-08", "sparkasse": 1525.0, "sparkasseInterest": 1.02, "tradeRepublic": 812.62, "trInterest": 1.36, "dividend": 0.21, "total": 2.59}, {"month": "2025-09", "sparkasse": 1530.0, "sparkasseInterest": 1.02, "tradeRepublic": 895.09, "trInterest": 1.42, "dividend": 0.1, "total": 2.54}, {"month": "2025-10", "sparkasse": 1500.0, "sparkasseInterest": 1.0, "tradeRepublic": 1297.71, "trInterest": 1.81, "dividend": 1.1, "total": 3.91}, {"month": "2025-11", "sparkasse": 1150.0, "sparkasseInterest": 0.77, "tradeRepublic": 1999.73, "trInterest": 3.03, "dividend": 0.21, "total": 4.01}, {"month": "2025-12", "sparkasse": 1460.0, "sparkasseInterest": 0.97, "tradeRepublic": 2227.86, "trInterest": 2.71, "dividend": 1.1, "total": 4.78}, {"month": "2026-01", "sparkasse": 885.0, "sparkasseInterest": 0.6, "tradeRepublic": 2231.61, "trInterest": 3.79, "dividend": 0.0, "total": 4.39}, {"month": "2026-02", "sparkasse": 465.0, "sparkasseInterest": 0.35, "tradeRepublic": 2235.61, "trInterest": 3.43, "dividend": 0.21, "total": 3.99}, {"month": "2026-03", "sparkasse": 665.0, "sparkasseInterest": 0.5, "tradeRepublic": 2169.92, "trInterest": 3.72, "dividend": 1.06, "total": 5.28}, {"month": "2026-04", "sparkasse": 475.0, "sparkasseInterest": 0.32, "tradeRepublic": 2174.81, "trInterest": 3.58, "dividend": 1.17, "total": 5.07}, {"month": "2026-05", "sparkasse": 635.0, "sparkasseInterest": 0.42, "tradeRepublic": 2655.5, "trInterest": 4.27, "dividend": 5.61, "total": 10.3}, {"month": "2026-06", "sparkasse": 5.0, "sparkasseInterest": 0.11, "tradeRepublic": 2562.05, "trInterest": 4.46, "dividend": 2.28, "total": 6.85}, {"month": "2026-07", "sparkasse": 600.0, "sparkasseInterest": 0.45, "tradeRepublic": 2567.7, "trInterest": 4.91, "dividend": 1.19, "total": 6.55}, {"month": "2026-08", "sparkasse": null, "sparkasseInterest": 0.0, "tradeRepublic": null, "trInterest": null, "dividend": null, "total": null}, {"month": "2026-09", "sparkasse": null, "sparkasseInterest": 0.0, "tradeRepublic": null, "trInterest": null, "dividend": null, "total": null}];
const masterCapitalMetricsV14 = {"monthlyDividend": 1.65, "dailyInterest": 0.18, "stockValue": 768.63, "netWorth": 3936.33, "interestProfit": 39.84, "dailyDividend": 0.05, "stockProfit": 45.9, "dividendProfit": 14.63, "totalProfit": 54.47, "initialCapital": 2386.5, "capitalIncreasePct": 64.94, "capitalDifference": 1549.83, "monthlyPassive": 110.7, "dailyPassive": 0.23};
const requiredCapitalTableV14 = [[0.16, 2595.56], [0.17, 2757.78], [0.18, 2920.0], [0.19, 3082.22], [0.2, 3244.44], [0.21, 3406.67], [0.22, 3568.89], [0.23, 3731.11], [0.24, 3893.33], [0.25, 4055.56], [0.26, 4217.78], [0.27, 4380.0], [0.28, 4542.22], [0.29, 4704.44], [0.3, 4866.67]];

const defaultData = {
  balances: [], incomes: [], fixedCosts: structuredClone(defaultFixedCostsV12), goals: [], amexPaid: {}, capitalHistory: structuredClone(masterCapitalHistoryV14), capitalMetrics: structuredClone(masterCapitalMetricsV14), requiredCapitalTable: structuredClone(requiredCapitalTableV14),
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
  metrics: {currentMonthlyDividend:1.65,currentDailyInterest:0.18,currentDailyDividend:0.05,capitalStart:2386.50,capitalCurrent:3936.33,capitalDiff:1549.83,monthlyCapitalIncrease:110.70,capitalGrowthPct:64.94,currentDailyCapitalIncrease:0.23,interestProfit:39.84,stockProfit:45.90,dividendProfit:14.63,totalProfit:54.47},
  settings: { currency: "EUR", seedVersion:5, trackingStart:"2025-06-01", capitalStart:2386.50, lifetimeStart:"2023-05-01", lifetimeCapitalStart:0 }
};
let data = loadData();
guaranteeMasterData();
localStorage.setItem(STORAGE_KEY,JSON.stringify(data));

function normalizeFixedCostsV19(){
  data.settings=data.settings||{};
  if(Number(data.settings.fixedCostSchemaVersion||0)>=19) return;
  const defaults=new Map(defaultFixedCostsV12.map(x=>[x.id,x]));
  data.fixedCosts=(data.fixedCosts||[]).map(x=>{
    const d=defaults.get(x.id);
    return d ? {...x,day:d.day,frequency:d.frequency,startMonth:d.startMonth,when:d.when} : x;
  });
  data.settings.fixedCostSchemaVersion=19;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
normalizeFixedCostsV19();


function migrateIncomeParentsV22(){
  data.settings=data.settings||{};
  if(Number(data.settings.incomeParentsVersion||0)>=22) return;
  const rows=data.v7?.incomeHistory||data.incomeHistory||[];
  rows.forEach(r=>{
    if(Number(r.parents)===100){
      r.parents=105;
      if("total" in r){
        r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
      }
    }
  });
  data.settings.incomeParentsVersion=22;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
migrateIncomeParentsV22();





const HISTORICAL_INCOME_COSTS_V34={"2025-06": -35.93, "2025-07": -35.93, "2025-08": -35.93, "2025-09": -60.93, "2025-10": -137.08, "2025-11": -920.42, "2025-12": -181.42, "2026-01": -187.42, "2026-02": -191.7, "2026-03": -247.2, "2026-04": -303.7};
function historicalIncomeCostV34(month){
  return Object.prototype.hasOwnProperty.call(HISTORICAL_INCOME_COSTS_V34,month)
    ? Number(HISTORICAL_INCOME_COSTS_V34[month]) : null;
}
function syncHistoricalIncomeCostsV34(){
  const rows=data.v7?.incomeHistory||data.incomeHistory||[];
  rows.forEach(r=>{
    const exact=historicalIncomeCostV34(r.month);
    if(exact!==null){
      r.costs=exact;
      r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+exact;
    }
  });
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
syncHistoricalIncomeCostsV34();

const correctedIncomeFixedCostsV35 = {"2026-05": -240.7, "2026-06": -215.7, "2026-07": -240.7, "2026-08": -215.7, "2026-09": -265.7, "2026-10": -247.2, "2026-11": -240.7, "2026-12": -215.7};
function applyCorrectedIncomeFixedCostsV35(){
  const rows=data.v7?.incomeHistory||data.incomeHistory||[];
  rows.forEach(r=>{
    if(Object.prototype.hasOwnProperty.call(correctedIncomeFixedCostsV35,r.month)){
      r.costs=correctedIncomeFixedCostsV35[r.month];
      r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
    }
  });
  data.settings=data.settings||{};
  data.settings.correctedIncomeFixedCostsVersion=35;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
applyCorrectedIncomeFixedCostsV35();

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

function isPlainObject(v){
  return v && typeof v==="object" && !Array.isArray(v);
}

function itemIdentity(item){
  if(!item || typeof item!=="object") return JSON.stringify(item);
  return String(
    item.id ??
    item.month ??
    item.date ??
    item.name ??
    item.account ??
    item.title ??
    item.label ??
    JSON.stringify(item)
  );
}

function mergeArraysPreservingData(arrays){
  const result=[];
  const index=new Map();

  for(const arr of arrays){
    if(!Array.isArray(arr)) continue;
    for(const item of arr){
      if(!isPlainObject(item)){
        const raw=JSON.stringify(item);
        if(!index.has(raw)){
          index.set(raw,result.length);
          result.push(item);
        }
        continue;
      }

      const key=itemIdentity(item);
      if(!index.has(key)){
        index.set(key,result.length);
        result.push(structuredClone(item));
      }else{
        const pos=index.get(key);
        result[pos]=mergeObjectsPreservingData(result[pos],item);
      }
    }
  }
  return result;
}

function meaningful(v){
  if(v===null || v===undefined || v==="") return false;
  if(Array.isArray(v)) return v.length>0;
  if(isPlainObject(v)) return Object.keys(v).length>0;
  return true;
}

function mergeObjectsPreservingData(base, incoming){
  if(Array.isArray(base) || Array.isArray(incoming)){
    return mergeArraysPreservingData([base,incoming]);
  }
  if(!isPlainObject(base)) return meaningful(incoming) ? structuredClone(incoming) : base;
  if(!isPlainObject(incoming)) return meaningful(base) ? structuredClone(base) : incoming;

  const out=structuredClone(base);
  for(const [key,value] of Object.entries(incoming)){
    if(Array.isArray(value)){
      out[key]=mergeArraysPreservingData([out[key],value]);
    }else if(isPlainObject(value)){
      out[key]=mergeObjectsPreservingData(isPlainObject(out[key])?out[key]:{},value);
    }else if(meaningful(value) || !meaningful(out[key])){
      out[key]=value;
    }
  }
  return out;
}

function looksLikeFinanceData(obj){
  if(!isPlainObject(obj)) return false;
  const keys=[
    "balances","incomes","fixedCosts","goals","assets","financeHistory",
    "metrics","settings","amexPaid","transactions","v7"
  ];
  return keys.some(k=>k in obj);
}

function loadAllStoredCandidates(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return [];
    const parsed=JSON.parse(raw);
    return looksLikeFinanceData(parsed)?[{key:STORAGE_KEY,data:parsed}]:[];
  }catch{return [];}
}

function loadData(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return structuredClone(defaultData);
    const parsed=JSON.parse(raw);
    return looksLikeFinanceData(parsed)
      ? mergeObjectsPreservingData(structuredClone(defaultData),parsed)
      : structuredClone(defaultData);
  }catch{
    return structuredClone(defaultData);
  }
}

function mergeMonthRows(master, existing){
  const map=new Map();
  for(const row of master||[]) map.set(row.month,structuredClone(row));
  for(const row of existing||[]){
    if(!row || !row.month) continue;
    map.set(row.month,mergeObjectsPreservingData(map.get(row.month)||{},row));
  }
  return [...map.values()].sort((a,b)=>String(a.month).localeCompare(String(b.month)));
}

function guaranteeMasterData(){
  data.assets=mergeArraysPreservingData([
    structuredClone(defaultData.assets),
    Array.isArray(data.assets)?data.assets:[]
  ]);
  data.fixedCosts=mergeArraysPreservingData([
    structuredClone(defaultFixedCostsV12),
    Array.isArray(data.fixedCosts)?data.fixedCosts:[]
  ]);
  data.financeHistory=mergeMonthRows(seededHistory,data.financeHistory);
  data.capitalHistory=mergeMonthRows(masterCapitalHistoryV14,data.capitalHistory);
  data.capitalMetrics=mergeObjectsPreservingData(
    structuredClone(masterCapitalMetricsV14),
    isPlainObject(data.capitalMetrics)?data.capitalMetrics:{}
  );
  if(!Array.isArray(data.requiredCapitalTable) || !data.requiredCapitalTable.length){
    data.requiredCapitalTable=structuredClone(requiredCapitalTableV14);
  }
  data.metrics=mergeObjectsPreservingData(
    structuredClone(defaultData.metrics),
    isPlainObject(data.metrics)?data.metrics:{}
  );
  data.settings=mergeObjectsPreservingData(
    structuredClone(defaultData.settings),
    isPlainObject(data.settings)?data.settings:{}
  );
  ensureV7Data();
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

function fixedCostAmountForMonth(ym){
  return fixedForMonth(ym).reduce((s,x)=>s-Math.abs(Number(x.amount)||0),0);
}
function currentIncomeMasterRow(){
  const ym=monthISO();
  return incomeRows().find(x=>x.month===ym) || [...incomeRows()].reverse().find(x=>Number(x.total||0)!==0);
}
function currentAmexMasterRow(){
  const ym=monthISO();
  return amexRows().find(x=>x.month===ym) || [...amexRows()].reverse().find(x=>Number(x.expenses||0)!==0);
}
function cumulativeAmexAverages(){
  const rows=[...amexRows()].sort((a,b)=>a.month.localeCompare(b.month));
  let sum=0;
  return new Map(rows.map((r,i)=>{
    sum+=Math.abs(Number(r.expenses)||0);
    return [r.month,sum/(i+1)];
  }));
}


function dynamicStockProfitV23(){
  const assets=Array.isArray(data.assets)?data.assets:[];
  return assets
    .filter(a=>["stock","stocks","equity","fund","etf"].includes(String(a.type||"").toLowerCase()))
    .reduce((sum,a)=>{
      const current=Number(a.balance||0);
      const invested=Number(a.investedAmount ?? a.costBasis ?? a.purchaseValue ?? current);
      return sum + (current-invested);
    },0);
}

function financeSourceOfTruth(){
  const now=new Date();
  const ym=monthISO();
  const days=daysInMonth(now.getFullYear(),now.getMonth()+1);
  const assets=Array.isArray(data.assets)?data.assets:[];
  const norm=a=>String(a.name||"").toLowerCase();
  const isStock=a=>["stock","stocks","equity","fund","etf"].includes(String(a.type||"").toLowerCase());
  const isCash=a=>["cash","bank","savings"].includes(String(a.type||"").toLowerCase());
  const isTradeRepublicCash=a=>isCash(a)&&(String(a.id||"")==="seed-tr-cash"||norm(a).includes("trade republic"));
  const isSparkasse=a=>isCash(a)&&!isTradeRepublicCash(a)&&(norm(a).includes("sparkasse")||String(a.type||"").toLowerCase()==="bank");

  const cashAssets=assets.filter(isCash);
  const stockAssets=assets.filter(isStock);
  const tradeRepublicCashAssets=cashAssets.filter(isTradeRepublicCash);
  const sparkasseAssets=cashAssets.filter(isSparkasse);
  const otherCashAssets=cashAssets.filter(a=>!isTradeRepublicCash(a)&&!isSparkasse(a));

  const totalWealthValue=assets.reduce((sum,a)=>sum+Number(a.balance||0),0);
  const stockValue=stockAssets.reduce((sum,a)=>sum+Number(a.balance||0),0);
  const tradeRepublicCash=tradeRepublicCashAssets.reduce((sum,a)=>sum+Number(a.balance||0),0);
  const sparkasseBalance=sparkasseAssets.reduce((sum,a)=>sum+Number(a.balance||0),0);

  const monthlyYield=a=>Number(a.balance||0)*(Number(a.rate||0)/100)/365*days;
  const trInterest=tradeRepublicCashAssets.reduce((s,a)=>s+monthlyYield(a),0);
  const sparkasseInterest=sparkasseAssets.reduce((s,a)=>s+monthlyYield(a),0);
  const otherInterest=otherCashAssets.reduce((s,a)=>s+monthlyYield(a),0);
  const monthlyInterest=trInterest+sparkasseInterest+otherInterest;

  // Bei Aktien ist der eingetragene Satz die Dividendenrendite p.a.
  const calculatedStockDividend=stockAssets.reduce((s,a)=>s+monthlyYield(a),0);
  const explicitDividend=stockAssets.reduce((s,a)=>{
    const direct=Number(a.monthlyDividend||a.dividendMonth||0);
    if(direct)return s+direct;
    const annual=Number(a.annualDividend||0);
    return s+(annual?annual/12:0);
  },0);
  const monthlyDividend=explicitDividend||calculatedStockDividend;

  const passiveMonthly=monthlyInterest+monthlyDividend;
  const passiveDaily=days?passiveMonthly/days:0;
  const passiveAnnual=passiveMonthly*12;
  const monthlyFixed=monthlyAverageFixed();
  const fixedCoveragePct=monthlyFixed?passiveMonthly/monthlyFixed*100:0;

  const initialCapital=Number(data.capitalMetrics?.initialCapital||data.settings?.capitalStart||2386.50);
  const capitalDifference=totalWealthValue-initialCapital;
  const capitalIncreasePct=initialCapital?capitalDifference/initialCapital*100:0;

  const historicRows=(data.financeHistory||data.capitalHistory||[]).filter(r=>r.month!==ym);
  const historicalInterestProfit=historicRows.reduce((s,r)=>s+Number(r.sparkasseInterest||0)+Number(r.trInterest||0),0);
  const historicalDividendProfit=historicRows.reduce((s,r)=>s+Number(r.dividend||0),0);
  const interestProfit=historicalInterestProfit+monthlyInterest;
  const dividendProfit=historicalDividendProfit+monthlyDividend;

  return {
    ym,days,assets,cashAssets,stockAssets,totalWealthValue,stockValue,
    tradeRepublicCash,sparkasseBalance,trInterest,sparkasseInterest,otherInterest,
    monthlyInterest,monthlyDividend,passiveMonthly,passiveDaily,passiveAnnual,
    monthlyFixed,fixedCoveragePct,initialCapital,capitalDifference,capitalIncreasePct,
    interestProfit,dividendProfit
  };
}

function liveCapitalHistoryRows(){
  const s=financeSourceOfTruth();
  const base=[...(data.capitalHistory||data.financeHistory||[])];
  const live={
    month:s.ym,
    sparkasse:s.sparkasseBalance,
    sparkasseInterest:s.sparkasseInterest+s.otherInterest,
    tradeRepublic:s.tradeRepublicCash,
    trInterest:s.trInterest,
    dividend:s.monthlyDividend,
    total:s.monthlyInterest+s.monthlyDividend
  };
  const idx=base.findIndex(x=>x.month===s.ym);
  if(idx>=0)base[idx]={...base[idx],...live}; else base.push(live);
  return base.sort((a,b)=>a.month.localeCompare(b.month));
}

function passiveDetails(){
  const g=globalPassiveV38();
  return {
    interest:g.interest,
    dividend:g.dividend,
    monthly:g.monthly,
    daily:g.daily,
    annual:g.annual,
    days:g.days
  };
}
function dynamicAverageSaving(){
  const inc=new Map(incomeRows().map(x=>[x.month,Number(x.salary||0)+Number(x.bonus||0)+Number(x.tips||0)+Number(x.parents||0)+fixedCostAmountForMonth(x.month)]));
  const matches=amexRows().filter(x=>inc.has(x.month));
  if(!matches.length) return {amount:0,rate:0};
  const surplus=matches.map(x=>inc.get(x.month)-Math.abs(Number(x.expenses)||0));
  const amount=surplus.reduce((a,b)=>a+b,0)/surplus.length;
  const avgIncome=matches.reduce((s,x)=>s+inc.get(x.month),0)/matches.length;
  return {amount,rate:avgIncome?amount/avgIncome*100:0};
}


function fixedCostAnnualOccurrences(cost){
  const f=String(cost.frequency||"").toLowerCase();
  if(f==="monthly" || f.includes("monat")) return 12;
  if(f==="bimonthly" || f.includes("alle 2 monate")) return 6;
  if(f==="quarterly" || f.includes("quartal")) return 4;
  if(f==="semiannual" || f.includes("halbjähr") || f.includes("zweimal") || f.includes("2x")) return 2;
  if(f==="annual" || f.includes("jähr") || f.includes("jahr")) return 1;
  return 12;
}
function fixedCostDailyAmount(cost){
  return Math.abs(Number(cost.amount||0))*fixedCostAnnualOccurrences(cost)/365;
}
function totalFixedCostsPerDay(){
  return (data.fixedCosts||[]).filter(x=>x.active!==false).reduce((sum,x)=>sum+fixedCostDailyAmount(x),0);
}
function currentAvailableForFirstGoal(){
  const source=typeof financeSourceOfTruth==="function" ? financeSourceOfTruth() : null;
  if(source && Number.isFinite(Number(source.totalWealthValue))) return Number(source.totalWealthValue);
  return typeof totalWealth==="function" ? Number(totalWealth()||0) : 0;
}
function syncFirstSavingsGoalV22(){
  const rows=Array.isArray(data.priorityGoals)&&data.priorityGoals.length?data.priorityGoals:priorityGoalsV10;
  if(!rows || !rows.length) return rows;
  const available=currentAvailableForFirstGoal();
  rows[0][11]=available;
  const min=Number(rows[0][3]||0), max=Number(rows[0][4]||0);
  rows[0][9]=min ? available/min*100 : 0;
  rows[0][10]=max ? available/max*100 : 0;
  data.priorityGoals=rows;
  return rows;
}


function capitalMonthsSinceT0V37(){
  const startYear=2025, startMonth=6; // Juni 2025
  const now=new Date();
  return Math.max(1,(now.getFullYear()-startYear)*12 + ((now.getMonth()+1)-startMonth));
}
function capitalAveragePerMonthV37(capitalDifference){
  return Number(capitalDifference||0)/capitalMonthsSinceT0V37();
}


function daysInCurrentMonthV38(){
  const now=new Date();
  return new Date(now.getFullYear(),now.getMonth()+1,0).getDate();
}
function monthlyInterestByAssetV38(asset){
  const type=String(asset?.type||"").toLowerCase();
  if(!["cash","bank","savings","tagesgeld"].includes(type)) return 0;
  const balance=Number(asset?.balance||0);
  const annualRate=Number(asset?.rate||0)/100;
  return balance*annualRate/365*daysInCurrentMonthV38();
}
function globalMonthlyInterestV38(){
  return (data.assets||[]).reduce((sum,a)=>sum+monthlyInterestByAssetV38(a),0);
}
function globalMonthlyDividendV38(){
  return (data.assets||[]).reduce((sum,a)=>{
    const type=String(a?.type||"").toLowerCase();
    if(!["stock","stocks","equity","fund","etf","aktie","aktien"].includes(type)) return sum;
    const direct=Number(a.monthlyDividend||a.dividendMonth||0);
    if(direct) return sum+direct;
    const balance=Number(a.balance||0);
    const annualRate=Number(a.rate||0)/100;
    return sum+(balance*annualRate/12);
  },0);
}
function globalPassiveV38(){
  const interest=globalMonthlyInterestV38();
  const dividend=globalMonthlyDividendV38();
  const monthly=interest+dividend;
  const days=daysInCurrentMonthV38();
  return {interest,dividend,monthly,daily:days?monthly/days:0,annual:monthly*12,days};
}
function renderGlobalPassiveV38(){
  const g=globalPassiveV38();
  const values={
    passiveInterestMonth:g.interest,
    passiveDividendMonth:g.dividend,
    passiveTotalDay:g.daily,
    passiveTabMonth:g.monthly,
    passiveTabYear:g.annual,
    passiveMonth:g.monthly,
    passiveYear:g.annual
  };
  Object.entries(values).forEach(([id,val])=>{
    const el=$(id);
    if(!el) return;
    el.textContent=(id==="passiveMonth")?`${fmt(val)}/Monat`
      :(id==="passiveYear")?`${fmt(val)}/Jahr`
      :fmt(val);
  });

  // Shared capital cards and dashboard values
  document.querySelectorAll("[data-global-interest-month]").forEach(el=>el.textContent=fmt(g.interest));
  document.querySelectorAll("[data-global-dividend-month]").forEach(el=>el.textContent=fmt(g.dividend));
  document.querySelectorAll("[data-global-passive-month]").forEach(el=>el.textContent=fmt(g.monthly));
  document.querySelectorAll("[data-global-passive-day]").forEach(el=>el.textContent=fmt(g.daily));
}


function assetDynamicMonthlyV39(asset){
  const type=String(asset?.type||"").toLowerCase();
  if(["cash","bank","savings","tagesgeld"].includes(type)){
    return monthlyInterestByAssetV38(asset);
  }
  if(["stock","stocks","equity","fund","etf","aktie","aktien"].includes(type)){
    return Number(asset?.monthlyDividend||asset?.dividendMonth||0) ||
      (Number(asset?.balance||0)*Number(asset?.rate||0)/100/12);
  }
  return 0;
}
function assetDynamicAnnualV39(asset){
  return assetDynamicMonthlyV39(asset)*12;
}



function capitalRowsV41(){
  const source=typeof financeV26==="function"?financeV26():financeSourceOfTruth();
  const currentMonth=source.ym||monthISO();
  const stored=[...(data.capitalHistory||[])];
  let current=stored.find(r=>r.month===currentMonth);
  if(!current){
    current={month:currentMonth,dividend:null};
    stored.push(current);
    data.capitalHistory=stored;
  }

  // Nur Tagesgeldkonten der Sparkasse und das TR-Tagesgeld automatisch übernehmen.
  const automatic={
    sparkasse:Number(source.sparkasseBalance||0),
    sparkasseInterest:Number(source.sparkasseInterest||0)+Number(source.otherInterest||0),
    tradeRepublic:Number(source.trCashBalance??source.tradeRepublicCash??0),
    trInterest:Number(source.trInterest||0)
  };

  Object.assign(current,automatic);

  // Die reale Dividende wird manuell in der Tabelle gepflegt. Solange keine
  // echte Dividende eingetragen wurde, wird der berechnete Durchschnitt gezeigt.
  const averageDividend=Number(source.monthlyDividend||0);
  const actualDividend=current.actualDividend;
  current.dividend=actualDividend==null?averageDividend:Number(actualDividend);
  current.total=Number(current.sparkasseInterest||0)+Number(current.trInterest||0)+Number(current.dividend||0);

  // Auch historische Summen werden immer aus Zinsen + Dividende berechnet.
  stored.forEach(row=>{
    if(row.month!==currentMonth){
      row.total=Number(row.sparkasseInterest||0)+Number(row.trInterest||0)+Number(row.dividend||0);
    }
  });
  return stored.sort((a,b)=>String(a.month).localeCompare(String(b.month)));
}

function capitalHistoryRowV41(row){
  const current=row.month===monthISO();
  const editing=editingCapitalMonthV40===row.month;
  if(!editing){
    return `<tr>
      <td>${monthLabel(row.month)}</td>
      <td>${row.sparkasse==null?"–":fmt(row.sparkasse)}</td>
      <td>${fmt(row.sparkasseInterest||0)}</td>
      <td>${row.tradeRepublic==null?"–":fmt(row.tradeRepublic)}</td>
      <td>${fmt(row.trInterest||0)}</td>
      <td>${fmt(row.dividend||0)}${current&&row.actualDividend==null?' <small class="muted">Ø</small>':''}</td>
      <td>${fmt(row.total||0)}</td>
      <td><button type="button" class="edit-capital-row-v40" data-month="${row.month}">Bearbeiten</button></td>
    </tr>`;
  }

  const autoCell=(value,label)=>`<td><input class="inline-input" value="${Number(value||0).toFixed(2)}" disabled title="${label} wird automatisch aus Konten & Vermögen übernommen"></td>`;
  const manualCell=(field,value)=>`<td><input class="inline-input capital-row-input-v40" type="number" step="0.01" data-month="${row.month}" data-field="${field}" value="${value==null?'':Number(value).toFixed(2)}"></td>`;

  return `<tr>
    <td>${monthLabel(row.month)}</td>
    ${current?autoCell(row.sparkasse,'Sparkassen-Tagesgeld'):manualCell('sparkasse',row.sparkasse)}
    ${current?autoCell(row.sparkasseInterest,'Sparkassen-Zinsen'):manualCell('sparkasseInterest',row.sparkasseInterest)}
    ${current?autoCell(row.tradeRepublic,'TR-Tagesgeld'):manualCell('tradeRepublic',row.tradeRepublic)}
    ${current?autoCell(row.trInterest,'TR-Zinsen'):manualCell('trInterest',row.trInterest)}
    ${manualCell(current?'actualDividend':'dividend',current?(row.actualDividend??row.dividend):row.dividend)}
    ${autoCell(row.total,'Summe aus Zinsen und Dividende')}
    <td><button type="button" class="save-capital-row-v40" data-month="${row.month}">Speichern</button> <button type="button" class="cancel-capital-row-v40">Abbrechen</button></td>
  </tr>`;
}

function renderCapitalHistoryTableV41(){
  const body=$("capitalMasterBody");
  if(!body)return;
  body.innerHTML=capitalRowsV41().map(capitalHistoryRowV41).join("");
}

let editingCapitalMonthV40=null;
function capitalHistoryRowV40(row){
  const editing=editingCapitalMonthV40===row.month;
  if(!editing){
    return `<tr><td>${monthLabel(row.month)}</td><td>${row.sparkasse==null?"–":fmt(row.sparkasse)}</td><td>${row.sparkasseInterest==null?"–":fmt(row.sparkasseInterest)}</td><td>${row.tradeRepublic==null?"–":fmt(row.tradeRepublic)}</td><td>${row.trInterest==null?"–":fmt(row.trInterest)}</td><td>${row.dividend==null?"–":fmt(row.dividend)}</td><td>${row.total==null?"–":fmt(row.total)}</td><td><button type="button" class="edit-capital-row-v40" data-month="${row.month}">Bearbeiten</button></td></tr>`;
  }
  const fields=["sparkasse","sparkasseInterest","tradeRepublic","trInterest","dividend","total"];
  return `<tr><td>${monthLabel(row.month)}</td>${fields.map(field=>`<td><input class="inline-input capital-row-input-v40" type="number" step="0.01" data-month="${row.month}" data-field="${field}" value="${row[field]==null?"":Number(row[field]).toFixed(2)}"></td>`).join("")}<td><button type="button" class="save-capital-row-v40" data-month="${row.month}">Speichern</button> <button type="button" class="cancel-capital-row-v40">Abbrechen</button></td></tr>`;
}
function renderCapitalHistoryTableV40(){ renderCapitalHistoryTableV41(); }
function saveCapitalHistoryRowV40(month){
  const row=(data.capitalHistory||[]).find(x=>x.month===month);
  if(!row)return;
  document.querySelectorAll(`.capital-row-input-v40[data-month="${month}"]`).forEach(input=>{
    row[input.dataset.field]=input.value===""?null:Number(input.value);
  });
  row.total=Number(row.sparkasseInterest||0)+Number(row.trInterest||0)+Number(month===monthISO()?(row.actualDividend??row.dividend):row.dividend||0);
  editingCapitalMonthV40=null;
  saveData();
}
document.addEventListener("click",event=>{
  const edit=event.target.closest(".edit-capital-row-v40"); if(edit){editingCapitalMonthV40=edit.dataset.month;renderCapitalHistoryTableV40();return;}
  const save=event.target.closest(".save-capital-row-v40"); if(save){saveCapitalHistoryRowV40(save.dataset.month);return;}
  if(event.target.closest(".cancel-capital-row-v40")){editingCapitalMonthV40=null;renderCapitalHistoryTableV40();}
});


function fmtPercentV43(value){
  return `${Number(value||0).toFixed(2).replace(".",",")} %`;
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
  const wealth=totalWealth();
  const amexRow=currentAmexMasterRow(), incomeRow=currentIncomeMasterRow(), p=passiveDetails();
  const expenses=Math.abs(Number(amexRow?.expenses||0));
  const income=incomeRow ? Number(incomeRow.salary||0)+Number(incomeRow.bonus||0)+Number(incomeRow.tips||0)+Number(incomeRow.parents||0)+fixedCostAmountForMonth(incomeRow.month) : 0;
  const passive=p.annual;
  $("totalWealth").textContent=fmt(wealth);
  const allHist=data.assets.flatMap(a=>(a.history||[]).map(h=>({date:h.date,total:null})));
  $("wealthChange").textContent=data.assets.some(a=>(a.history||[]).length>1)?"Kontostände mit Historie":"Noch keine ausreichende Historie";
  $("monthExpenses").textContent=fmt(expenses);
  $("monthIncome").textContent=fmt(income);
  $("monthBalance").textContent=`Monatssaldo: ${fmt(income-expenses)}`;
  $("passiveMonth").textContent=`${fmt(p.monthly)}/Monat`;
  $("passiveYear").textContent=`${fmt(p.annual)}/Jahr`;
  const fixed=monthlyAverageFixed();
  const pct=fixed?Math.min(100,p.monthly/fixed*100):0;
  $("passiveProgress").style.width=`${pct}%`;
  $("breakEvenPassive").textContent=fmtPercentV43(globalFixedCoverageV33 ? globalFixedCoverageV33().percent : 0);
  const withSalary=fixed?Math.min(100,(p.monthly+income)/fixed*100):0;
  $("breakEvenWithSalary").textContent=fixed
    ? `Mit dem in diesem Monat erfassten Gehalt wären ${withSalary.toFixed(2).replace(".",",")} % der durchschnittlichen Fixkosten gedeckt.`
    : "Noch keine aktiven Fixkosten vorhanden.";
  $("assetSummary").innerHTML=data.assets.length?data.assets.map(a=>`
    <div class="list-item"><div><h3>${esc(a.name)}</h3><p>${typeLabel(a.type)} · ${Number(a.rate||0).toFixed(2).replace(".",",")} % p. a.</p></div>
    <strong>${fmt(a.balance)}</strong></div>`).join(""):'<div class="empty">Noch keine Vermögenswerte.</div>';
  const next=[...data.fixedCosts].filter(x=>x.active).map(x=>({...x,next:nextDueDate(x)})).sort((a,b)=>a.next-b.next).slice(0,6);
  $("nextFixedCosts").innerHTML=next.length?next.map(x=>`
    <div class="list-item"><div><h3>${esc(x.name)}</h3><p>${x.next.toLocaleDateString("de-DE")} · ${esc(x.account)}</p></div><strong>${fmt(x.amount)}</strong></div>`).join(""):'<div class="empty">Keine Fixkosten angelegt.</div>';
  const m=data.metrics||{};
  const s=financeSourceOfTruth();
  const c=capitalStats();
  $("interestProfit").textContent=fmt(s.interestProfit);
  $("dailyInterest").textContent=`aktuell ${fmt(s.monthlyInterest/s.days)}/Tag · ${fmt(s.monthlyInterest)}/Monat`;
  $("dividendProfit").textContent=fmt(s.dividendProfit);
  $("monthlyDividend").textContent=`durchschnittlich ${fmt(s.monthlyDividend)}/Monat · ${fmt(s.monthlyDividend/s.days)}/Tag`;
  $("stockProfit").textContent=fmt(m.stockProfit||0);
  $("capitalGrowth").textContent=`${s.capitalIncreasePct.toFixed(2).replace(".",",")} %`;
  $("capitalDelta").textContent=`${s.capitalDifference>=0?"+":""}${fmt(s.capitalDifference)} seit Juni 2025 · Ø ${fmt(capitalAveragePerMonthV37(s.capitalDifference))} pro Monat · aktuelles Vermögen ${fmt(s.totalWealthValue)}`;
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
  const rows=liveCapitalHistoryRows();
  $("financeHistoryBody").innerHTML=rows.map(x=>{
    const future=x.sparkasse===null&&x.tradeRepublic===null;
    return `<tr class="${future?"future-row":""}"><td>${monthLabel(x.month)}</td><td>${x.sparkasse===null?"–":fmt(x.sparkasse)}</td><td>${fmt(x.sparkasseInterest)}</td><td>${x.tradeRepublic===null?"–":fmt(x.tradeRepublic)}</td><td>${x.trInterest===null?"–":fmt(x.trInterest)}</td><td>${x.dividend===null?"–":fmt(x.dividend)}</td><td class="positive">${fmt(x.total)}</td></tr>`;
  }).join("");
  const s=financeSourceOfTruth();
  $("historyTotalProfit").textContent=`Zinsen + Dividenden gesamt: ${fmt(s.interestProfit+s.dividendProfit)}`;
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
  const raw=Number($("assetRate").value||0);
  const trStock=isTradeRepublicStockV24();
  const rate=trStock ? (bal>0 ? raw*12/bal*100 : 0) : raw;
  data.assets.push({
    id:uid(),name:$("assetName").value,type:$("assetType").value,balance:bal,
    rate,monthlyDividend:trStock?raw:0,history:[{date:todayISO(),balance:bal}]
  });
  e.target.reset();
  $("assetRate").value="0";
  updateAssetYieldInputV24();
  saveData();toast("Vermögenswert gespeichert");
});
function renderAssets(){
  $("assetTotal").textContent=fmt(totalWealth());
  $("assetList").innerHTML=data.assets.length?data.assets.map(a=>{
    const annual=Number(a.balance)*Number(a.rate||0)/100;
    const yieldName=a.type==="stocks"?"Dividendenrendite":"Zinssatz";
    const monthlyDividend=isTradeRepublicStockV24(a)?Number(a.monthlyDividend||annual/12):annual/12;
    return `<div class="list-item">
      <div><h3>${esc(a.name)}</h3><p>${typeLabel(a.type)} · ${yieldName}: ${Number(a.rate||0).toFixed(2).replace(".",",")} % p. a.</p>
      <p>${isTradeRepublicStockV24(a)?`Dividende: ${fmt(monthlyDividend)}/Monat · `:"Dynamisch übernommen: "+fmt(annual/12)+"/Monat · "}${fmt(annual)}/Jahr</p></div>
      <div class="item-actions"><strong>${fmt(a.balance)}</strong>
      <button class="secondary" onclick="openAssetUpdate('${a.id}')">Aktualisieren</button>
      <button class="danger" onclick="removeItem('assets','${a.id}')">Löschen</button></div>
    </div>`}).join(""):'<div class="empty">Noch keine Vermögenswerte.</div>';
}
window.openAssetUpdate=id=>{
  const a=data.assets.find(x=>x.id===id);if(!a)return;
  const trStock=isTradeRepublicStockV24(a);
  const currentMonthlyDividend=Number(a.monthlyDividend||((Number(a.balance||0)*Number(a.rate||0)/100)/12)||0);
  openModal(`<h2>${esc(a.name)} aktualisieren</h2>
    <form id="assetUpdateForm" class="form-grid">
      <label>Datum<input id="assetUpdateDate" type="date" value="${todayISO()}" required></label>
      <label>Neuer Stand<input id="assetUpdateBalance" type="number" step="0.01" value="${a.balance}" required></label>
      ${trStock
        ? `<label>Neue Dividende pro Monat (€)<input id="assetUpdateDividendMonth" type="number" min="0" step="0.01" value="${currentMonthlyDividend.toFixed(2)}" required></label>
           <div class="stat"><span>Berechnete Dividendenrendite p. a.</span><strong id="assetUpdateCalculatedYield">${Number(a.rate||0).toFixed(2).replace(".",",")} %</strong></div>`
        : `<label>Neuer Zinssatz p. a. (%)<input id="assetUpdateRate" type="number" min="0" step="0.01" value="${a.rate||0}" required></label>`}
      <button type="submit">Speichern</button>
    </form>`);
  if(trStock){
    const recalc=()=>{
      const balance=Number($("assetUpdateBalance").value||0);
      const monthly=Number($("assetUpdateDividendMonth").value||0);
      const annualYield=balance>0?monthly*12/balance*100:0;
      $("assetUpdateCalculatedYield").textContent=`${annualYield.toFixed(2).replace(".",",")} %`;
    };
    $("assetUpdateBalance").addEventListener("input",recalc);
    $("assetUpdateDividendMonth").addEventListener("input",recalc);
    recalc();
  }
  $("assetUpdateForm").addEventListener("submit",e=>{
    e.preventDefault();
    a.balance=Number($("assetUpdateBalance").value);
    if(trStock){
      a.monthlyDividend=Number($("assetUpdateDividendMonth").value||0);
      a.rate=a.balance>0?a.monthlyDividend*12/a.balance*100:0;
    }else{
      a.rate=Number($("assetUpdateRate").value);
    }
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
      <div class="goal-top"><div><h2>${esc(g.name)}</h2><p class="muted">${fmt(current)} von ${fmt(target)} · automatisch aus Gesamtvermögen</p></div><strong>${pct.toFixed(2).replace(".",",")} %</strong></div>
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
      data=mergeObjectsPreservingData(structuredClone(defaultData),incoming);guaranteeMasterData();saveData();toast("Backup importiert");
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
    localStorage.removeItem(STORAGE_KEY);data=structuredClone(defaultData);guaranteeMasterData();saveData();toast("Alle Daten gelöscht");
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


function daysInMonthKey(ym){
  const [y,m]=ym.split("-").map(Number);
  return new Date(y,m,0).getDate();
}

function ensureV7Data(){
  data.v7=data.v7||{};
  data.v7.incomeHistory=mergeMonthRows(
    structuredClone(defaultIncomeHistoryV7),
    Array.isArray(data.v7.incomeHistory)?data.v7.incomeHistory:[]
  );
  data.v7.amexHistory=mergeMonthRows(
    structuredClone(defaultAmexHistoryV7),
    Array.isArray(data.v7.amexHistory)?data.v7.amexHistory:[]
  );
  if(!Array.isArray(data.v7.fuelEntries) || !data.v7.fuelEntries.length){
    data.v7.fuelEntries=[{id:"fuel-initial",date:"2026-07-01",amount:278.75,note:"Bisheriger Stand"}];
  }
}
function incomeRows(){ ensureV7Data(); return data.v7.incomeHistory; }
function amexRows(){ ensureV7Data(); return data.v7.amexHistory; }
function fuelRows(){ ensureV7Data(); return data.v7.fuelEntries; }
function saveIncomeRow(month){
  const row=incomeRows().find(x=>x.month===month);
  if(!row)return;
  ["salary","bonus","tips","parents"].forEach(key=>{
    const el=document.querySelector(`[data-income-month="${month}"][data-income-field="${key}"]`);
    if(el)row[key]=Number(el.value)||0;
  });
  row.total=incomeTotalV34(row);
  editingIncomeMonth=null;
  saveData();
}
function tradeRepublicCashBalance(){
  const asset=(data.assets||[]).find(a=>{
    const n=String(a.name||"").toLowerCase();
    return n.includes("trade republic") && (n.includes("tagesgeld")||a.type==="cash");
  });
  return Number(asset?.balance||0);
}


let editingIncomeMonth = null;
let editingAmexMonth = null;


function incomeCostForMonthV34(row){
  if(!row) return 0;
  const exact=historicalIncomeCostV34(row.month);
  if(exact!==null) return exact;
  if(Number.isFinite(Number(row.costs))) return Number(row.costs);
  return -fixedForMonthValueV26(row.month);
}
function incomeTotalV34(row){
  if(!row) return 0;
  return Number(row.salary||0)+Number(row.bonus||0)+Number(row.tips||0)+Number(row.parents||0)+incomeCostForMonthV34(row);
}
function renderIncomeRowV9(x){
  const editing=editingIncomeMonth===x.month;
  const fixed=incomeCostForMonthV34(x), sum=incomeTotalV34(x);
  if(!editing)return `<tr><td>${monthLabel(x.month)}</td><td>${fmt(x.salary)}</td><td>${fmt(x.bonus)}</td><td>${fmt(x.tips)}</td><td>${fmt(x.parents)}</td><td>${fmt(fixed)}</td><td><strong>${fmt(sum)}</strong></td><td><button class="edit-income" data-month="${x.month}" type="button">Bearbeiten</button></td></tr>`;
  return `<tr><td>${monthLabel(x.month)}</td>${["salary","bonus","tips","parents"].map(k=>`<td><input class="inline-input" type="number" step="0.01" data-income-month="${x.month}" data-income-field="${k}" value="${Number(x[k]||0).toFixed(2)}"></td>`).join("")}<td>${fmt(fixed)}</td><td><strong>${fmt(sum)}</strong></td><td><button class="save-income" data-month="${x.month}" type="button">Speichern</button> <button class="cancel-income" type="button">Abbrechen</button></td></tr>`;
}

function renderAmexRowV9(x){
  const editing=editingAmexMonth===x.month;
  const avg=cumulativeAmexAverages().get(x.month)||0;
  if(!editing){
    return `<tr>
      <td>${monthLabel(x.month)}</td>
      <td>${fmt(Math.abs(Number(x.expenses||0)))}</td>
      <td>${fmt(avg)}</td>
      <td><button class="edit-amex" data-month="${x.month}" type="button">Bearbeiten</button></td>
    </tr>`;
  }
  return `<tr>
    <td>${monthLabel(x.month)}</td>
    <td><input class="inline-input" type="number" step="0.01" data-amex-month="${x.month}" data-amex-field="expenses" value="${Number(x.expenses||0).toFixed(2)}"></td>
    <td>${fmt(avg)}</td>
    <td><button class="save-amex" data-month="${x.month}" type="button">Speichern</button> <button class="cancel-amex" type="button">Abbrechen</button></td>
  </tr>`;
}

function saveAmexRow(month){
  const row=amexRows().find(x=>x.month===month);
  if(!row)return;
  ["expenses"].forEach(key=>{
    const el=document.querySelector(`[data-amex-month="${month}"][data-amex-field="${key}"]`);
    row[key]=el && el.value!=="" ? Number(el.value) : null;
  });
  editingAmexMonth=null;
  saveData();
}

const priorityGoalsV10 = [[1, "Absicherung", "Polster", 10000, 10000, null, null, null, null, 39.36, 39.36, 3936.33], [2, "Bildung", "Master", 182.1, 370, null, null, null, null, 0, 0, null], [3, "Haus", "Dachzustand prüfen und reparieren", 1500, 5000, null, null, null, null, 0, 0, null], [4, "Haus", "Treppenhaus sanieren", 900, 3063, null, null, null, null, 0, 0, null], [5, "Haus", "Sanierung Bad Erdgeschoss", 5000, 10000, null, null, null, null, 0, 0, null], [6, "Haus", "Renovierung Bad Wohnung", 3000, 7000, null, null, null, null, 0, 0, null], [7, "Haus", "Sanierung Bad Opa", 5000, 10000, null, null, null, null, 0, 0, null], [8, "Bank", "Kredit Deutsche Bildung", 13440, 13790, null, null, null, null, 8.3, 0, null], [9, "Bank", "Raten Vorwerk", 581.97, 529.02, null, null, null, null, 0, 0, null], [10, "Bank", "Kredit ING", 52336.78, 52336.78, 7080, 7080, 590, 590, 0, 0, null], [11, "Bank", "Kredit Bulldog", 45727.88, 45727.88, 7017.12, 7017.12, 584.76, 584.76, 0, 0, null], [12, "Bank", "Kredit Haus", 51436.68, 51436.68, 10277.64, 10277.64, 856.47, 856.47, 0, 0, null], [13, "Scheune", "Wohnung in Scheune sanieren", 180000, 250000, null, null, null, null, 0, 0, null], [14, "Altes Haus", "Architekten/Bauplaner beauftragen", 18000, 103500, null, null, null, null, 0, 0, null], [15, "Altes Haus", "Grundsanierung", 200000, 690000, 16800, 22200, 1400, 1850, 0, 0, null], [16, "Altes Haus", "Automat", 1150, 9200, 534, 7620, 44.5, 635, 0, 0, null], [17, "Altes Haus", "Laden einrichten", 3300, 10000, null, null, null, null, 0, 0, null], [18, "Altes Haus", "Ferienwohnung einrichten", 12000, 25000, null, null, null, null, 0, 0, null], [19, "Altes Haus", "Eventraum einrichten", 10000, 22000, null, null, null, null, 0, 0, null], [20, "Altes Haus", "Büro einrichten", 3200, 11200, null, null, null, null, 0, 0, null], [null, "Haus", "Bodenbeläge Zimmer", 2500, 6000, null, null, null, null, 0, 0, null], [null, "Haus", "Modernisierung Haus Isolation", 37000, 80000, null, null, null, null, 0, 0, null], [null, "Haus", "Modernisierung Haus Heizung", 8000, 23000, 2400, 3600, 200, 300, 0, 0, null], [null, "Scheune", "Stall bauen", 4200, 12900, null, null, null, null, 0, 0, null], [null, "Scheune", "Werkstatt renovieren", 4000, 4800, null, null, null, null, 0, 0, null], [null, "Gewölbekeller", "renovieren", 13500, 22500, null, null, null, null, 0, 0, null], [null, "Eckhaus", "zurückkaufen", 400000, 480000, null, null, null, null, 0, 0, null], [null, "Garten", "Gartenhaus renovieren", 3000, 5000, null, null, null, null, 0, 0, null], [null, "Haustier", "Hund/e", 150, 400, 600, 1800, 50, 150, 0, 0, null], [null, "Haustier", "Pferde", 11000, 24000, 9600, 13200, 800, 1100, 0, 0, null], [null, "Auto", "Audi A3", 22000, 30000, 2640, 3600, 220, 300, 0, 0, null], [null, "Eltern", "Versorgt", 650000, 1100000, null, null, null, null, 0, 0, null], [null, "Gnadenhof", "Land kaufen & bauen", 5913254.39, 18394160, 1218590, 2768939, 101549.17, 230744.92, 0, 0, null], [null, "Strandhaus", "kaufen", 300000, 2500000, null, null, null, null, 0, 0, null], [null, "Herrenhaus", "kaufen", 300000, 1500000, null, null, null, null, 0, 0, null], [null, "Herrenhaus", "sanieren", 90000, 700000, null, null, null, null, 0, 0, null], [null, "Schloss", "kaufen", 300000, 4000000, null, null, null, null, 0, 0, null], [null, "Schloss", "sanieren", 480000, 4500000, 30000, 135000, 2500, 11250, 0, 0, null]];


function reloadAuthoritativeMasterDataV17(){
  data.settings=isPlainObject(data.settings)?data.settings:{};
  if(Number(data.settings.authoritativeMasterVersion||0)>=17) return;

  // Exact supplied capital data and metrics
  data.financeHistory=structuredClone(seededHistory);
  data.capitalHistory=structuredClone(masterCapitalHistoryV14);
  data.capitalMetrics=structuredClone(masterCapitalMetricsV14);
  data.requiredCapitalTable=structuredClone(requiredCapitalTableV14);
  data.metrics=mergeObjectsPreservingData(structuredClone(defaultData.metrics),{
    currentMonthlyDividend:1.65,
    currentDailyInterest:0.18,
    currentDailyDividend:0.05,
    capitalStart:2386.50,
    capitalCurrent:3936.33,
    capitalDiff:1549.83,
    monthlyCapitalIncrease:110.70,
    capitalGrowthPct:64.94,
    currentDailyCapitalIncrease:0.23,
    interestProfit:39.84,
    stockProfit:45.90,
    dividendProfit:14.63,
    totalProfit:54.47
  });

  // Exact supplied income, AMEX and fixed-cost master data
  data.v7=isPlainObject(data.v7)?data.v7:{};
  data.v7.incomeHistory=structuredClone(defaultIncomeHistoryV7);
  data.v7.amexHistory=structuredClone(defaultAmexHistoryV7);
  data.v7.fuelEntries=[{id:"fuel-initial",date:"2026-07-01",amount:278.75,note:"Bisheriger Stand"}];
  data.fixedCosts=structuredClone(defaultFixedCostsV12);

  // Exact supplied savings-goal master table
  data.priorityGoals=structuredClone(priorityGoalsV10);

  // Current account balances matching the supplied current wealth of 3,936.33 EUR
  const balances={
    "seed-sparkasse-giro":0,
    "seed-sparkasse-tg1":590,
    "seed-sparkasse-tg2":10,
    "seed-tr-cash":2567.70,
    "seed-stocks":768.63
  };
  data.assets=structuredClone(defaultData.assets).map(a=>({
    ...a,
    balance:Object.prototype.hasOwnProperty.call(balances,a.id)?balances[a.id]:a.balance
  }));

  data.settings.authoritativeMasterVersion=17;
  data.settings.seedVersion=17;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}


function renderV6(){
  renderCapitalHistoryTableV40();
  const cmc=$("capitalMetricCards");
  if(cmc){
    const m=data.capitalMetrics||{};
    const s=financeSourceOfTruth();
    const items=[
      ["Aktueller Vermögenswert",fmt(s.totalWealthValue)],
      ["Kapital t=0",fmt(s.initialCapital)],
      ["Kapitaldifferenz",fmt(s.capitalDifference)],
      ["Steigerung Durchschnitt pro Monat",fmt(capitalAveragePerMonthV37(s.capitalDifference))],
      ["Kapitalsteigerung",s.capitalIncreasePct.toFixed(2).replace(".",",")+" %"],
      ["Aktueller Aktienwert",fmt(s.stockValue)],
      ["Gewinn Aktien",fmt(dynamicStockProfitV23())],
      ["Gewinn Zinsen",fmt(s.interestProfit)],
      ["Gewinn Dividende",fmt(s.dividendProfit)],
      ["Zinsen aktueller Monat",fmt(globalMonthlyInterestV38())],
      ["Dividende aktueller Monat",fmt(globalMonthlyDividendV38())],
      ["Passiv pro Tag",fmt(globalPassiveV38().daily)],
      ["Passiv pro Monat",fmt(globalPassiveV38().monthly)],
      ["Fixkosten gedeckt",s.fixedCoveragePct.toFixed(2).replace(".",",")+" %"]
    ];
    cmc.innerHTML=items.map(([k,v])=>`<div class="stat-card"><span>${k}</span><strong>${v}</strong></div>`).join("");
  }
  const rcb=$("requiredCapitalBody");
  if(rcb){
    const trCash=tradeRepublicCashBalance();
    rcb.innerHTML=(data.requiredCapitalTable||[]).map(r=>{
      const missing=Math.max(0,Number(r[1]||0)-trCash);
      return `<tr><td>${Math.round(Number(r[0])*100)} Cent</td><td>${missing<=0?'<span class="badge success">erreicht</span>':fmt(missing)+" fehlen"}</td></tr>`;
    }).join("");
  }

  const wealth=totalWealth();
  const validExpenses=amexRows().filter(x=>x.month>="2025-06");
  const avgExp=validExpenses.reduce((s,x)=>s+Math.abs(x.expenses),0)/validExpenses.length;
  const saving=dynamicAverageSaving();
  const avgSaving=saving.amount;
  const savingRate=saving.rate;
  const activeFixed=(data.fixedCosts||[]).filter(x=>x.active!==false);
  const monthlyFixed=activeFixed.reduce((s,x)=>{
    if(x.frequency==="bimonthly")return s+Math.abs(x.amount)/2;
    if(x.frequency==="twice"||x.frequency==="semiannual")return s+Math.abs(x.amount)*2/12;
    if(x.frequency==="monthly")return s+Math.abs(x.amount);
    return s+Math.abs(x.amount)/12;
  },0);
  const passive=passiveDetails();
  const interestDay=passive.interest/passive.days;
  const dividendDay=passive.dividend/passive.days;
  const passiveMonthly=passive.monthly;
  const coverage=monthlyFixed?passiveMonthly/monthlyFixed*100:0;

  const set=(id,val)=>{const el=$(id);if(el)el.textContent=val};
  set("v6TotalWealth",fmt(wealth));
  set("v6AvgSaving",fmt(avgSaving)+"/Monat");
  set("v6SavingRate",savingRate.toFixed(2).replace(".",",")+" %");
  set("v6PassiveMonthly",fmt(passiveMonthly));
  set("v6FixedMonthly",fmt(monthlyFixed));
  set("v6Coverage",coverage.toFixed(2).replace(".",",")+" %");

  const salary2025=incomeRows().filter(x=>x.month.startsWith("2025")).reduce((s,x)=>s+x.salary,0);
  const salary2026=incomeRows().filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.salary,0);
  set("salary2025",fmt(salary2025));
  set("salary2026",fmt(salary2026));
  set("taxAllowanceLeft",fmt(Math.max(0,12096-salary2026)));

  const ih=$("incomeHistoryBody");
  if(ih)ih.innerHTML=incomeRows().map(renderIncomeRowV9).join("");

  const currentAmex=currentAmexMasterRow();
  const currentAvg=currentAmex?cumulativeAmexAverages().get(currentAmex.month)||0:0;
  set("avgExpenses",fmt(Math.abs(Number(currentAmex?.expenses||0))));
  set("avgExpensesDaily",fmt(currentAvg));
  set("avgIncomeDaily",monthLabel(currentAmex?.month||monthISO()));
  set("avgMonthlySaving",fmt(avgSaving));

  const eh=$("expenseHistoryBody");
  if(eh)eh.innerHTML=amexRows().map(renderAmexRowV9).join("");

  set("fixedMonthlyTotal",fmt(monthlyFixed));
  set("fixedYearlyTotal",fmt(monthlyFixed*12));
  set("nextFixedCount",String(activeFixed.length));
  const fl=$("fixedCostListV6");
  if(fl)fl.innerHTML=activeFixed.map(x=>`<div class="list-item">
    <div><h3>${esc(x.name)}</h3><p>Tag ${Math.min(Number(x.day)||1,31)} · ${esc(x.when||frequencyLabel(x.frequency)||"")}</p></div>
    <div class="inline-actions"><div><strong>${fmt(-Math.abs(x.amount))}</strong><br><span class="muted">${fmt(fixedCostDailyAmount(x))} pro Tag</span></div>
    <button class="edit-fixed-day" data-id="${x.id}" type="button">Bearbeiten</button></div>
  </div>`).join("");

  set("passiveInterestMonth",fmt(passive.interest));
  set("passiveDividendMonth",fmt(passive.dividend));
  set("passiveTotalDay",fmt(passive.daily));
  set("passiveTabMonth",fmt(passive.monthly));
  set("passiveTabYear",fmt(passive.annual));
  set("passiveCoverage",financeSourceOfTruth().fixedCoveragePct.toFixed(2).replace(".",",")+" %");
  const pt=$("passiveTargetsBody");
  const trCash=tradeRepublicCashBalance();
  if(pt)pt.innerHTML=passiveCapitalTargetsV6.map(([daily,capital])=>{
    const missing=Math.max(0,capital-trCash);
    return `<tr><td>${fmt(daily)}</td><td>${missing<=0?'<span class="badge success">erreicht</span>':fmt(missing)+" fehlen"}</td></tr>`;
  }).join("");


  const fuels=fuelRows().slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  const fuelTotal=fuels.reduce((s,x)=>s+Number(x.amount||0),0);
  const months=[...new Set(fuels.map(x=>String(x.date).slice(0,7)))];
  const gaps=[];
  for(let i=1;i<fuels.length;i++){
    const gap=(new Date(fuels[i].date)-new Date(fuels[i-1].date))/86400000;
    if(Number.isFinite(gap)&&gap>=0)gaps.push(gap);
  }
  set("fuelCurrentTotal",fmt(fuelTotal));
  set("fuelAvgEntry",fuels.length>=2?fmt(fuelTotal/fuels.length):"Noch zu wenig Daten");
  set("fuelAvgMonth",months.length>=2?fmt(fuelTotal/months.length):"Noch zu wenig Daten");
  set("fuelAvgGap",gaps.length?(gaps.reduce((s,x)=>s+x,0)/gaps.length).toFixed(1).replace(".",",")+" Tage":"Noch zu wenig Daten");
  const fb=$("fuelEntriesBody");
  if(fb)fb.innerHTML=fuels.map(x=>`<tr>
    <td><input class="inline-input fuel-date" data-id="${x.id}" type="date" value="${x.date||""}"></td>
    <td><input class="inline-input fuel-amount" data-id="${x.id}" type="number" step="0.01" value="${Number(x.amount||0).toFixed(2)}"></td>
    <td><input class="inline-input fuel-note" data-id="${x.id}" value="${esc(x.note||"")}"></td>
    <td><button class="save-fuel" data-id="${x.id}" type="button">Speichern</button> <button class="delete-fuel" data-id="${x.id}" type="button">Löschen</button></td>
  </tr>`).join("");


  const pgb=$("priorityGoalsBody");
  if(pgb){
    const goalRows=syncFirstSavingsGoalV22();
    pgb.innerHTML=goalRows.map((r,i)=>`<tr>
      <td>${r[0]??""}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td>
      <td>${r[3]==null?"–":fmt(r[3])}</td><td>${r[4]==null?"–":fmt(r[4])}</td>
      <td>${r[5]==null?"–":fmt(r[5])}</td><td>${r[6]==null?"–":fmt(r[6])}</td>
      <td>${r[7]==null?"–":fmt(r[7])}</td><td>${r[8]==null?"–":fmt(r[8])}</td>
      <td>${r[9]==null?"–":Number(r[9]).toFixed(2).replace(".",",")+" %"}</td>
      <td>${r[10]==null?"–":Number(r[10]).toFixed(2).replace(".",",")+" %"}</td>
      <td>${r[11]==null?"–":fmt(r[11])}</td>
      <td><button class="edit-priority-goal" data-index="${i}" type="button">Bearbeiten</button></td>
    </tr>`).join("");
  }
  const pgf=$("priorityGoalsFoot");
  if(pgf){
    const goalRows=Array.isArray(data.priorityGoals)&&data.priorityGoals.length?data.priorityGoals:priorityGoalsV10;
    const sums=goalRows.reduce((a,r)=>{
      for(let i=3;i<=8;i++)a[i]=(a[i]||0)+(Number(r[i])||0);
      a[11]=(a[11]||0)+(Number(r[11])||0);
      return a;
    },{});
    pgf.innerHTML=`<tr class="total-row">
      <th colspan="3">Summe</th>
      <th>${fmt(sums[3])}</th><th>${fmt(sums[4])}</th>
      <th>${fmt(sums[5])}</th><th>${fmt(sums[6])}</th>
      <th>${fmt(sums[7])}</th><th>${fmt(sums[8])}</th>
      <th>0,04299 %</th><th>0,01134 %</th><th>${fmt(sums[11])}</th>
    </tr>`;
  }

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
    return `<div class="list-item"><div style="width:100%"><div class="milestone-row"><strong>${fmt(target)}</strong><span>${pct.toFixed(2).replace(".",",")} % · ${eta}</span></div><div class="progress"><div style="width:${pct}%"></div></div></div></div>`;
  }).join("");

  const yf=$("yearForecast");
  if(yf){
    const projectedIncome=incomeRows().filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.total,0);
    const projectedExpenses=avgExp*12;
    const projectedPassive=passiveMonthly*12;
    const projectedEnd=wealth+Math.max(0,avgSaving)*(12-new Date().getMonth()-1);
    yf.innerHTML=`
      <div class="stat"><span>Einnahmen 2026</span><strong>${fmt(projectedIncome)}</strong></div>
      <div class="stat"><span>Ausgaben hochgerechnet</span><strong>${fmt(projectedExpenses)}</strong></div>
      <div class="stat"><span>Passiv hochgerechnet</span><strong>${fmt(projectedPassive)}</strong></div>
      <div class="stat"><span>Vermögen Jahresende</span><strong>${fmt(projectedEnd)}</strong></div>`;
  }
}



document.addEventListener("click",e=>{

  const editIncome=e.target.closest(".edit-income");
  if(editIncome){ editingIncomeMonth=editIncome.dataset.month; renderV6(); return; }
  if(e.target.closest(".cancel-income")){ editingIncomeMonth=null; renderV6(); return; }

  const editAmex=e.target.closest(".edit-amex");
  if(editAmex){ editingAmexMonth=editAmex.dataset.month; renderV6(); return; }
  if(e.target.closest(".cancel-amex")){ editingAmexMonth=null; renderV6(); return; }

  const saveAmex=e.target.closest(".save-amex");
  if(saveAmex){ saveAmexRow(saveAmex.dataset.month); return; }

  const incomeBtn=e.target.closest(".save-income");
  if(incomeBtn){ saveIncomeRow(incomeBtn.dataset.month); return; }

  if(e.target.closest("#addFuelEntry")){
    fuelRows().push({id:uid(),date:todayISO(),amount:0,note:""});
    saveData(); return;
  }

  const sf=e.target.closest(".save-fuel");
  if(sf){
    const row=fuelRows().find(x=>x.id===sf.dataset.id);
    if(row){
      row.date=document.querySelector(`.fuel-date[data-id="${row.id}"]`)?.value||row.date;
      row.amount=Number(document.querySelector(`.fuel-amount[data-id="${row.id}"]`)?.value)||0;
      row.note=document.querySelector(`.fuel-note[data-id="${row.id}"]`)?.value||"";
      saveData();
    }
    return;
  }

  const df=e.target.closest(".delete-fuel");
  if(df){
    data.v7.fuelEntries=fuelRows().filter(x=>x.id!==df.dataset.id);
    saveData(); return;
  }
});


// Version 17: reload the supplied master data once, then render every actual tab.
reloadAuthoritativeMasterDataV17();
guaranteeMasterData();
ensureV7Data();
localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
renderAll();


document.addEventListener("click",e=>{
  const fixedBtn=e.target.closest(".edit-fixed-day");
  if(fixedBtn){
    const row=(data.fixedCosts||[]).find(x=>x.id===fixedBtn.dataset.id);
    if(row){
      const val=prompt(`Abbuchungstag für ${row.name} (1–31):`,String(row.day||1));
      if(val!==null){
        const day=Math.max(1,Math.min(31,Number(val)||1));
        row.day=day; saveData(); toast("Abbuchungstag gespeichert");
      }
    }
  }
  const goalBtn=e.target.closest(".edit-priority-goal");
  if(goalBtn){
    const i=Number(goalBtn.dataset.index);
    const rows=Array.isArray(data.priorityGoals)&&data.priorityGoals.length?data.priorityGoals:priorityGoalsV10;
    const r=rows[i];
    if(!r)return;
    const fields=[
      ["Priorität",0],["Kategorie",1],["Unterkategorie",2],["Einmalig min",3],["Einmalig max",4],
      ["LK min p.a.",5],["LK max p.a.",6],["LK min p.m.",7],["LK max p.m.",8]
    ];
    for(const [label,idx] of fields){
      const val=prompt(label,r[idx]??"");
      if(val===null) return;
      r[idx]=[0,3,4,5,6,7,8,11].includes(idx) ? (val===""?null:Number(String(val).replace(",","."))) : val;
    }
    data.priorityGoals=rows; saveData(); toast("Sparziel gespeichert");
  }
});


function isTradeRepublicStockV24(asset){
  const type=String(asset?.type ?? $("assetType")?.value ?? "").toLowerCase();
  const name=String(asset?.name ?? $("assetName")?.value ?? "").toLowerCase();
  return ["stock","stocks","equity","fund","etf","aktie","aktien"].includes(type) && name.includes("trade republic");
}
function updateAssetYieldInputV24(asset=null){
  const input=$("assetRate"), text=$("assetRateLabelText");
  if(!input||!text)return;
  const tr=isTradeRepublicStockV24(asset);
  text.textContent=tr?"Dividende pro Monat":"Zinssatz (%)";
  input.dataset.mode=tr?"monthlyDividend":"rate";
  if(asset){
    input.value=tr ? Number(asset.monthlyDividend||((Number(asset.balance||0)*Number(asset.rate||0)/100)/12)||0).toFixed(2) : Number(asset.rate||0).toFixed(2);
  }
}
["assetType","assetName"].forEach(id=>{const el=$(id);if(el){el.addEventListener("input",()=>updateAssetYieldInputV24());el.addEventListener("change",()=>updateAssetYieldInputV24());}});
setTimeout(()=>updateAssetYieldInputV24(),0);


// Version 26: one authoritative calculation layer for all tabs.
function annualOccurrencesV26(frequency){
  const f=String(frequency||"").toLowerCase();
  if(f==="monthly")return 12;
  if(f==="bimonthly")return 6;
  if(f==="quarterly")return 4;
  if(f==="semiannual"||f==="twice")return 2;
  if(f==="annual"||f==="yearly")return 1;
  return 12;
}
function isStockV26(a){return ["stock","stocks","equity","fund","etf","aktie","aktien"].includes(String(a?.type||"").toLowerCase())}
function isCashV26(a){return ["cash","bank","savings"].includes(String(a?.type||"").toLowerCase())}
function isTRStockV26(a){return isStockV26(a)&&String(a?.name||"").toLowerCase().includes("trade republic")}
function isTRCashV26(a){return isCashV26(a)&&(String(a?.id||"")==="seed-tr-cash"||String(a?.name||"").toLowerCase().includes("trade republic"))}
function isSparkasseV26(a){return isCashV26(a)&&!isTRCashV26(a)&&String(a?.name||"").toLowerCase().includes("sparkasse")}
function currentMonthDaysV26(){const d=new Date();return daysInMonth(d.getFullYear(),d.getMonth()+1)}
function fixedAnnualV26(){return (data.fixedCosts||[]).filter(x=>x.active!==false).reduce((s,x)=>s+Math.abs(Number(x.amount||0))*annualOccurrencesV26(x.frequency),0)}
function fixedMonthlyV26(){return fixedAnnualV26()/12}
function fixedDailyV26(){return fixedAnnualV26()/365}
function fixedForMonthValueV26(ym){return fixedForMonth(ym).reduce((s,x)=>s+Math.abs(Number(x.amount||0)),0)}
function incomeTotalV26(row){return incomeTotalV34(row)}
function currentIncomeV26(){const rows=incomeRows();return rows.find(x=>x.month===monthISO())||[...rows].reverse().find(x=>Number(x.salary||0)||Number(x.bonus||0)||Number(x.tips||0)||Number(x.parents||0))||null}
function currentAmexV26(){const rows=amexRows();return rows.find(x=>x.month===monthISO())||[...rows].reverse().find(x=>Number(x.expenses||0))||null}
function amexCumulativeMapV26(){const rows=[...amexRows()].sort((a,b)=>a.month.localeCompare(b.month));let sum=0;return new Map(rows.map((r,i)=>{sum+=Math.abs(Number(r.expenses||0));return [r.month,sum/(i+1)]}))}
function stockProfitV26(stockValue){
  const explicit=(data.assets||[]).filter(isStockV26).reduce((s,a)=>{
    const basis=Number(a.costBasis??a.investedAmount??a.purchaseValue);
    return s+(Number.isFinite(basis)?Number(a.balance||0)-basis:0);
  },0);
  const hasBasis=(data.assets||[]).filter(isStockV26).some(a=>Number.isFinite(Number(a.costBasis??a.investedAmount??a.purchaseValue)));
  if(hasBasis)return explicit;
  const baseValue=Number(data.capitalMetrics?.stockValue||768.63);
  const baseProfit=Number(data.capitalMetrics?.stockProfit||data.metrics?.stockProfit||45.90);
  return baseProfit+(stockValue-baseValue);
}
function financeV26(){
  const assets=Array.isArray(data.assets)?data.assets:[];
  const days=currentMonthDaysV26();
  const stocks=assets.filter(isStockV26), cash=assets.filter(isCashV26);
  const totalWealth=assets.reduce((s,a)=>s+Number(a.balance||0),0);
  const stockValue=stocks.reduce((s,a)=>s+Number(a.balance||0),0);
  const interestFor=a=>Number(a.balance||0)*Number(a.rate||0)/100/365*days;
  const trCash=cash.filter(isTRCashV26), sparkasse=cash.filter(isSparkasseV26), otherCash=cash.filter(a=>!isTRCashV26(a)&&!isSparkasseV26(a));
  const trInterest=trCash.reduce((s,a)=>s+interestFor(a),0);
  const sparkasseInterest=sparkasse.reduce((s,a)=>s+interestFor(a),0);
  const otherInterest=otherCash.reduce((s,a)=>s+interestFor(a),0);
  const monthlyInterest=trInterest+sparkasseInterest+otherInterest;
  const monthlyDividend=stocks.reduce((s,a)=>{
    const direct=Number(a.monthlyDividend||a.dividendMonth||0);
    return s+(direct||Number(a.balance||0)*Number(a.rate||0)/100/12);
  },0);
  const passiveMonthly=monthlyInterest+monthlyDividend;
  const passiveDaily=passiveMonthly/days;
  const passiveAnnual=passiveMonthly*12;
  const fixedAnnual=fixedAnnualV26(), fixedMonthly=fixedAnnual/12, fixedDaily=fixedAnnual/365;
  const fixedCoveragePct=fixedMonthly?passiveMonthly/fixedMonthly*100:0;
  const initialCapital=Number(data.capitalMetrics?.initialCapital||data.settings?.capitalStart||2386.50);
  const capitalDifference=totalWealth-initialCapital;
  const capitalIncreasePct=initialCapital?capitalDifference/initialCapital*100:0;
  const ym=monthISO();
  const historic=(data.capitalHistory||data.financeHistory||[]).filter(r=>r.month!==ym);
  const interestProfit=historic.reduce((s,r)=>s+Number(r.sparkasseInterest||0)+Number(r.trInterest||0),0)+monthlyInterest;
  const dividendProfit=historic.reduce((s,r)=>s+Number(r.dividend||0),0)+monthlyDividend;
  const stockProfit=stockProfitV26(stockValue);
  return {ym,days,assets,stocks,cash,totalWealth,stockValue,trCashBalance:trCash.reduce((s,a)=>s+Number(a.balance||0),0),sparkasseBalance:sparkasse.reduce((s,a)=>s+Number(a.balance||0),0),trInterest,sparkasseInterest,otherInterest,monthlyInterest,monthlyDividend,passiveMonthly,passiveDaily,passiveAnnual,fixedAnnual,fixedMonthly,fixedDaily,fixedCoveragePct,initialCapital,capitalDifference,capitalIncreasePct,interestProfit,dividendProfit,stockProfit};
}
function liveCapitalRowsV26(){
  const s=financeV26(), rows=[...(data.capitalHistory||data.financeHistory||[])];
  const live={month:s.ym,sparkasse:s.sparkasseBalance,sparkasseInterest:s.sparkasseInterest+s.otherInterest,tradeRepublic:s.trCashBalance,trInterest:s.trInterest,dividend:s.monthlyDividend,total:s.passiveMonthly};
  const i=rows.findIndex(r=>r.month===s.ym); if(i>=0)rows[i]={...rows[i],...live};else rows.push(live);
  return rows.sort((a,b)=>a.month.localeCompare(b.month));
}
function savingsAverageV26(){
  const incomes=new Map(incomeRows().map(r=>[r.month,incomeTotalV26(r)]));
  const rows=amexRows().filter(r=>incomes.has(r.month));
  if(!rows.length)return {amount:0,rate:0};
  const vals=rows.map(r=>incomes.get(r.month)-Math.abs(Number(r.expenses||0)));
  const amount=vals.reduce((a,b)=>a+b,0)/vals.length;
  const incomeAvg=rows.reduce((s,r)=>s+incomes.get(r.month),0)/rows.length;
  return {amount,rate:incomeAvg?amount/incomeAvg*100:0};
}
function syncFirstGoalV26(){
  const rows=Array.isArray(data.priorityGoals)&&data.priorityGoals.length?data.priorityGoals:priorityGoalsV10;
  if(rows.length){const available=financeV26().totalWealth;rows[0][11]=available;rows[0][9]=Number(rows[0][3])?available/Number(rows[0][3])*100:0;rows[0][10]=Number(rows[0][4])?available/Number(rows[0][4])*100:0;data.priorityGoals=rows;}
  return rows;
}
function setTextV26(id,value){const el=$(id);if(el)el.textContent=value}
function renderAuthoritativeV26(){
  const s=financeV26(), income=currentIncomeV26(), amex=currentAmexV26(), amexAmount=Math.abs(Number(amex?.expenses||0)), incomeAmount=incomeTotalV26(income), saving=savingsAverageV26();
  // Dashboard
  setTextV26("totalWealth",fmt(s.totalWealth));
  setTextV26("monthExpenses",fmt(amexAmount));
  setTextV26("monthIncome",fmt(incomeAmount));
  setTextV26("monthBalance",`Monatssaldo: ${fmt(incomeAmount-amexAmount)}`);
  setTextV26("passiveMonth",`${fmt(s.passiveMonthly)}/Monat`); setTextV26("passiveYear",`${fmt(s.passiveAnnual)}/Jahr`);
  setTextV26("breakEvenPassive",`${s.fixedCoveragePct.toFixed(2).replace(".",",")} %`);
  const pp=$("passiveProgress");if(pp)pp.style.width=`${Math.max(0,Math.min(100,s.fixedCoveragePct))}%`;
  setTextV26("breakEvenWithSalary",s.fixedMonthly?`Mit dem aktuellen Einkommen wären ${((s.passiveMonthly+incomeAmount)/s.fixedMonthly*100).toFixed(2).replace(".",",")} % der durchschnittlichen Fixkosten gedeckt.`:"Noch keine aktiven Fixkosten vorhanden.");
  setTextV26("amexMonthTotal",fmt(amexAmount));
  const sel=$("amexMonthSelect");if(sel){const months=amexRows().map(r=>r.month).sort().reverse();sel.innerHTML=months.map(m=>`<option value="${m}">${monthLabel(m)}</option>`).join("");sel.value=amex?.month||months[0]||monthISO();}
  setTextV26("interestProfit",fmt(s.interestProfit));setTextV26("dailyInterest",`aktuell ${fmt(s.monthlyInterest/s.days)}/Tag · ${fmt(s.monthlyInterest)}/Monat`);
  setTextV26("dividendProfit",fmt(s.dividendProfit));setTextV26("monthlyDividend",`durchschnittlich ${fmt(s.monthlyDividend)}/Monat · ${fmt(s.monthlyDividend/s.days)}/Tag`);
  setTextV26("stockProfit",fmt(s.stockProfit));setTextV26("dashboardStockValue",`aktueller Aktienwert: ${fmt(s.stockValue)}`);
  setTextV26("capitalGrowth",`${s.capitalIncreasePct.toFixed(2).replace(".",",")} %`);setTextV26("capitalDelta",`${s.capitalDifference>=0?"+":""}${fmt(s.capitalDifference)} seit Juni 2025 · Ø ${fmt(capitalAveragePerMonthV37(s.capitalDifference))} pro Monat · aktuelles Vermögen ${fmt(s.totalWealth)}`);
  // Dashboard AMEX status selected/current
  const paid=!!data.amexPaid?.[amex?.month]; const status=$("amexStatus");if(status)status.innerHTML=paid?'<span class="badge success">abgebucht</span>':'<span class="badge warn">noch offen · ungefähr am 10. des Folgemonats</span>';
  // Capital history and metric cards
  const rows=liveCapitalRowsV26();
  const fh=$("financeHistoryBody");if(fh)fh.innerHTML=rows.map(x=>`<tr><td>${monthLabel(x.month)}</td><td>${x.sparkasse==null?"–":fmt(x.sparkasse)}</td><td>${fmt(x.sparkasseInterest||0)}</td><td>${x.tradeRepublic==null?"–":fmt(x.tradeRepublic)}</td><td>${fmt(x.trInterest||0)}</td><td>${fmt(x.dividend||0)}</td><td>${fmt(x.total||0)}</td></tr>`).join(""); renderCapitalHistoryTableV41();
  setTextV26("historyTotalProfit",`Zinsen + Dividenden gesamt: ${fmt(s.interestProfit+s.dividendProfit)}`);
  const cm=$("capitalMetricCards");if(cm){const items=[["Aktueller Vermögenswert",fmt(s.totalWealth)],["Kapital t=0",fmt(s.initialCapital)],["Kapitaldifferenz",fmt(s.capitalDifference)],["Steigerung Durchschnitt pro Monat",fmt(capitalAveragePerMonthV37(s.capitalDifference))],["Kapitalsteigerung",s.capitalIncreasePct.toFixed(2).replace(".",",")+" %"],["Aktueller Aktienwert",fmt(s.stockValue)],["Gewinn Aktien",fmt(s.stockProfit)],["Gewinn Zinsen",fmt(s.interestProfit)],["Gewinn Dividende",fmt(s.dividendProfit)],["Zinsen aktueller Monat",fmt(globalMonthlyInterestV38())],["Dividende aktueller Monat",fmt(globalMonthlyDividendV38())],["Passiv pro Tag",fmt(globalPassiveV38().daily)],["Passiv pro Monat",fmt(globalPassiveV38().monthly)],["Fixkosten gedeckt",s.fixedCoveragePct.toFixed(2).replace(".",",")+" %"]];cm.innerHTML=items.map(([k,v])=>`<div class="stat-card"><span>${k}</span><strong>${v}</strong></div>`).join("")}
  // Fixkosten
  setTextV26("fixedMonthlyAverage",`Ø ${fmt(s.fixedMonthly)}/Monat`);setTextV26("fixedCostsDailyTotal",fmt(s.fixedDaily));setTextV26("fixedMonthlyTotal",fmt(s.fixedMonthly));setTextV26("fixedYearlyTotal",fmt(s.fixedAnnual));setTextV26("nextFixedCount",fmt(s.fixedDaily));
  // Income/AMEX analysis
  const ih=$("incomeHistoryBody");if(ih)ih.innerHTML=incomeRows().map(renderIncomeRowV9).join("");
  const amap=amexCumulativeMapV26();setTextV26("avgExpenses",fmt(amexAmount));setTextV26("avgExpensesDaily",fmt(amap.get(amex?.month)||0));setTextV26("avgIncomeDaily",monthLabel(amex?.month||monthISO()));setTextV26("avgMonthlySaving",fmt(saving.amount));
  const eh=$("expenseHistoryBody");if(eh)eh.innerHTML=amexRows().map(r=>{const editing=editingAmexMonth===r.month;return editing?renderAmexRowV9(r):`<tr><td>${monthLabel(r.month)}</td><td>${fmt(Math.abs(Number(r.expenses||0)))}</td><td>${fmt(amap.get(r.month)||0)}</td><td><button class="edit-amex" data-month="${r.month}" type="button">Bearbeiten</button></td></tr>`}).join("");
  // Passive
  setTextV26("passiveInterestMonth",fmt(s.monthlyInterest));setTextV26("passiveDividendMonth",fmt(s.monthlyDividend));setTextV26("passiveTotalDay",fmt(s.passiveDaily));setTextV26("passiveTabMonth",fmt(s.passiveMonthly));setTextV26("passiveTabYear",fmt(s.passiveAnnual));setTextV26("passiveCoverage",s.fixedCoveragePct.toFixed(2).replace(".",",")+" %");
  // Goals
  const goals=syncFirstGoalV26(), gb=$("priorityGoalsBody");if(gb)gb.innerHTML=goals.map((r,i)=>`<tr><td>${r[0]??""}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${r[3]==null?"–":fmt(r[3])}</td><td>${r[4]==null?"–":fmt(r[4])}</td><td>${r[5]==null?"–":fmt(r[5])}</td><td>${r[6]==null?"–":fmt(r[6])}</td><td>${r[7]==null?"–":fmt(r[7])}</td><td>${r[8]==null?"–":fmt(r[8])}</td><td>${r[9]==null?"–":Number(r[9]).toFixed(2).replace(".",",")+" %"}</td><td>${r[10]==null?"–":Number(r[10]).toFixed(2).replace(".",",")+" %"}</td><td>${r[11]==null?"–":fmt(r[11])}</td><td><button class="edit-priority-goal" data-index="${i}" type="button">Bearbeiten</button></td></tr>`).join("");
  // General overview cards
  setTextV26("v6TotalWealth",fmt(s.totalWealth));setTextV26("v6AvgSaving",fmt(saving.amount)+"/Monat");setTextV26("v6SavingRate",saving.rate.toFixed(2).replace(".",",")+" %");setTextV26("v6PassiveMonthly",fmt(s.passiveMonthly));setTextV26("v6FixedMonthly",fmt(s.fixedMonthly));setTextV26("v6Coverage",s.fixedCoveragePct.toFixed(2).replace(".",",")+" %");
}
const renderAllV26Base=renderAll;
renderAll=function(){renderAllV26Base();renderAuthoritativeV26();};
setTimeout(()=>{renderAll();},0);
// AMEX dashboard selector always reads the same master rows as AMEX & Tanken.
function renderAmexCard(){const selected=$("amexMonthSelect")?.value||currentAmexV26()?.month||monthISO();const row=amexRows().find(r=>r.month===selected);setTextV26("amexMonthTotal",fmt(Math.abs(Number(row?.expenses||0))));const paid=!!data.amexPaid?.[selected];const st=$("amexStatus");if(st)st.innerHTML=paid?'<span class="badge success">abgebucht</span>':'<span class="badge warn">noch offen · ungefähr am 10. des Folgemonats</span>';}



function incomeRowsForYearV27(year){
  return incomeRows().filter(r=>String(r.month||"").startsWith(`${year}-`));
}
function incomeGrossBeforeFixedV27(row){
  return Number(row.salary||0)+Number(row.bonus||0)+Number(row.tips||0)+Number(row.parents||0);
}
function incomeAfterFixedV27(row){
  return incomeGrossBeforeFixedV27(row)+fixedCostAmountForMonth(row.month);
}
function forecast2026V28(){
  const rows=incomeRowsForYearV27(2026).sort((a,b)=>a.month.localeCompare(b.month));
  // "Einkommen" uses the same monthly Summe as the income table:
  // salary + bonus + tips + parents - fixed costs due in that month.
  const annualIncome=rows.reduce((sum,r)=>sum+incomeTotalV26(r),0);
  const amex2026=amexRows().filter(r=>String(r.month||"").startsWith("2026-"));
  const annualExpenses=amex2026.reduce((sum,r)=>sum+Math.abs(Number(r.expenses||0)),0);
  const f=financeV26();
  const passiveAnnual=Number(f.passiveAnnual||0);
  const currentMonth=new Date().getMonth()+1;
  const remainingMonths=Math.max(0,12-currentMonth);
  const knownMonthlySurplus=rows.length ? (annualIncome-annualExpenses)/12 : 0;
  const yearEndWealth=Number(f.totalWealth||0)+knownMonthlySurplus*remainingMonths+Number(f.passiveMonthly||0)*remainingMonths;
  return {annualIncome,annualExpenses,passiveAnnual,yearEndWealth};
}
function renderForecastV28(){
  const f=forecast2026V28();
  const yf=$("yearForecast");
  if(!yf)return;
  yf.innerHTML=`
    <div class="stat"><span>Einnahmen 2026</span><strong>${fmt(f.annualIncome)}</strong></div>
    <div class="stat"><span>Ausgaben 2026 (AMEX)</span><strong>${fmt(f.annualExpenses)}</strong></div>
    <div class="stat"><span>Passiv hochgerechnet</span><strong>${fmt(f.passiveAnnual)}</strong></div>
    <div class="stat"><span>Vermögen Jahresende</span><strong>${fmt(f.yearEndWealth)}</strong></div>`;
}
function renderDashboardV28(){
  const currentIncome=currentIncomeV26();
  const currentIncomeValue=incomeTotalV26(currentIncome);
  const currentAmex=currentAmexV26();
  const amexValue=Math.abs(Number(currentAmex?.expenses||0));
  const fixedDaily=financeV26().fixedDaily;
  const surplus=currentIncomeValue-amexValue;
  setTextV26("monthIncome",fmt(currentIncomeValue));
  setTextV26("monthBalance",`Monatsüberschuss: ${fmt(surplus)}`);
  setTextV26("monthExpenses",fmt(fixedDaily));
  document.querySelectorAll("[data-dashboard-income-current]").forEach(el=>el.textContent=fmt(currentIncomeValue));
  document.querySelectorAll("[data-dashboard-fixed-daily]").forEach(el=>el.textContent=fmt(fixedDaily));
}


const __renderAllV27 = renderAll;
renderAll = function(){
  __renderAllV27();
  renderDashboardV28();
  renderForecastV28();
};
setTimeout(()=>{
  renderDashboardV28();
  renderForecastV28();
},0);


// V29: Jahresprognose Einkommen = Summe der Monatsspalte "Summe"
function income2026FromMonthlyTotalsV29(){
  const rows=(incomeRows?incomeRows():[])
    .filter(r=>String(r.month||"").startsWith("2026-"));
  return rows.reduce((s,r)=>{
    if(Number.isFinite(Number(r.total))) return s+Number(r.total);
    return s+Number(r.sum||0);
  },0);
}
if(typeof forecast2026V27==="function"){
  const __forecast2026V27=forecast2026V27;
  forecast2026V27=function(){
    const f=__forecast2026V27();
    f.annualIncome=income2026FromMonthlyTotalsV29();
    return f;
  }
}


function averageMonthlySurplusV30(){
  const incomes=new Map(incomeRows().map(r=>[
    r.month,
    Number.isFinite(Number(r.total)) ? Number(r.total) :
      Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+fixedCostAmountForMonth(r.month)
  ]));
  const rows=amexRows().filter(r=>incomes.has(r.month));
  if(!rows.length)return 0;
  return rows.reduce((sum,r)=>sum+incomes.get(r.month)-Math.abs(Number(r.expenses||0)),0)/rows.length;
}



function passiveForecastSourceV32(){
  const s=globalFinanceMetricsV34();
  const fixedMonthly=s.fixedMonthly;
  const passiveMonthly=s.passiveMonthly;
  const coverage=s.fixedCoveragePct;
  const wealth=Number(s.totalWealth||0);
  const annualRate=wealth?passiveMonthly*12/wealth:0;
  const milestones=[5,10,25,50,75,100].map(targetPct=>{
    const targetPassive=fixedMonthly*targetPct/100;
    const targetWealth=annualRate>0?targetPassive*12/annualRate:Infinity;
    let years=Infinity;
    if(targetWealth<=wealth) years=0;
    else if(annualRate>0&&wealth>0) years=Math.log(targetWealth/wealth)/Math.log(1+annualRate);
    const progress=Math.max(0,Math.min(100,targetWealth>0?wealth/targetWealth*100:0));
    return {targetPct,targetPassive,targetWealth,years,progress};
  });
  return {s,fixedMonthly,passiveMonthly,coverage,wealth,annualRate,milestones};
}
function durationDateLabelV32(years){
  if(!Number.isFinite(years)) return 'nicht erreichbar';
  if(years<=0) return 'bereits erreicht';
  const months=Math.max(1,Math.round(years*12));
  const d=new Date();
  d.setMonth(d.getMonth()+months);
  return new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'numeric',year:'numeric'}).format(d);
}
function renderPassiveForecastV32(){
  const p=passiveForecastSourceV32();
  setTextV26('fixedCostsPassiveCoverage',p.coverage.toFixed(2).replace('.',',')+' %');
  setTextV26('passiveCoverage',p.coverage.toFixed(2).replace('.',',')+' %');
  setTextV26('passiveForecastStartCoverage',p.coverage.toFixed(2).replace('.',',')+' %');
  setTextV26('passiveForecastStartWealth',fmt(p.wealth));
  setTextV26('passiveForecastRate',(p.annualRate*100).toFixed(2).replace('.',',')+' %');
  setTextV26('passiveForecastStartPassive',fmt(p.passiveMonthly));
  const body=$('passiveForecastBody');
  if(body){
    body.innerHTML=p.milestones.map(m=>`<div class="list-item"><div style="width:100%">
      <div class="milestone-row"><strong>${m.targetPct} % der Fixkosten</strong><span>${m.progress.toFixed(2).replace('.',',')} % · ${durationDateLabelV32(m.years)}</span></div>
      <div class="progress"><div style="width:${m.progress}%"></div></div>
      <div class="forecast-details"><span>Benötigtes Vermögen: ${Number.isFinite(m.targetWealth)?fmt(m.targetWealth):'–'}</span><span>Passiv pro Monat: ${fmt(m.targetPassive)}</span></div>
    </div></div>`).join('');
  }
}
const __renderAllV32=renderAll;
renderAll=function(){
  __renderAllV32();
  renderPassiveForecastV32();
};
setTimeout(renderPassiveForecastV32,0);




function globalFinanceMetricsV34(){
  const s=financeV26();
  const fixedMonthly=Number(s.fixedMonthly||0);
  const passiveMonthly=Number(s.passiveMonthly||0);
  const fixedCoveragePct=fixedMonthly?passiveMonthly/fixedMonthly*100:0;
  return {...s,fixedMonthly,passiveMonthly,fixedCoveragePct};
}
function renderGlobalCoverageV34(){
  const g=globalFinanceMetricsV34();
  const text=`${g.fixedCoveragePct.toFixed(2).replace('.',',')} %`;
  ['fixedCostsPassiveCoverage','passiveCoverage','passiveForecastStartCoverage','breakEvenPassive','v6Coverage'].forEach(id=>{
    const el=$(id); if(el) el.textContent=text;
  });
  const bar=$('passiveProgress');
  if(bar) bar.style.width=`${Math.max(0,Math.min(100,g.fixedCoveragePct))}%`;
}

const __renderAllV34=renderAll;
renderAll=function(){
  syncHistoricalIncomeCostsV34();
  __renderAllV34();
  renderGlobalCoverageV34();
};
setTimeout(()=>{syncHistoricalIncomeCostsV34();renderAll();},0);


const correctedIncomeFixedCostsV36={"2026-05": -215.7, "2026-06": -240.7, "2026-07": -215.7, "2026-08": -240.7, "2026-09": -240.7, "2026-10": -272.2, "2026-11": -215.7, "2026-12": -240.7};
(function(){
 const rows=data?.v7?.incomeHistory||data?.incomeHistory||[];
 rows.forEach(r=>{
   if(correctedIncomeFixedCostsV36[r.month]!==undefined){
      r.costs=correctedIncomeFixedCostsV36[r.month];
      r.total=Number(r.salary||0)+Number(r.bonus||0)+Number(r.tips||0)+Number(r.parents||0)+Number(r.costs||0);
   }
 });
 if(data){
   data.settings=data.settings||{};
   data.settings.correctedIncomeFixedCostsVersion=36;
   localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
 }
})();

const __renderAllV38=renderAll;
renderAll=function(){
  __renderAllV38();
  renderGlobalPassiveV38();
};
setTimeout(renderGlobalPassiveV38,0);

const __renderAllV40=renderAll;
renderAll=function(){__renderAllV40();renderCapitalHistoryTableV40();};
setTimeout(renderCapitalHistoryTableV40,0);


function renderAllCoveragePercentagesV43(){
  let pct=0;
  if(typeof globalFixedCoverageV33==="function"){
    pct=Number(globalFixedCoverageV33().percent||0);
  }else if(typeof passiveCoveragePctV31==="function"){
    pct=Number(passiveCoveragePctV31()||0);
  }else if(typeof financeV26==="function"){
    const f=financeV26();
    pct=Number(f.fixedCoveragePct||0);
  }

  const text=fmtPercentV43(pct);
  [
    "fixedCostsPassiveCoverage",
    "passiveForecastStartCoverage",
    "passiveCoverage",
    "breakEvenPassive",
    "v6Coverage",
    "overviewFixedCoverage"
  ].forEach(id=>{
    const el=$(id);
    if(el) el.textContent=text;
  });

  document.querySelectorAll("[data-fixed-coverage-percent]").forEach(el=>{
    el.textContent=text;
  });
}


const __renderAllV43=renderAll;
renderAll=function(){
  __renderAllV43();
  renderAllCoveragePercentagesV43();
};
setTimeout(renderAllCoveragePercentagesV43,0);
