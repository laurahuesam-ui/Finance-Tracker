
const defaultIncomeHistoryV7 = [{"month": "2025-06", "salary": 426.53, "bonus": 50, "tips": 150, "parents": 100, "costs": -35.93, "total": 790.6}, {"month": "2025-07", "salary": 237.31, "bonus": 50, "tips": 125, "parents": 100, "costs": -35.93, "total": 591.38}, {"month": "2025-08", "salary": 599.89, "bonus": 50, "tips": 200, "parents": 100, "costs": -35.93, "total": 1013.96}, {"month": "2025-09", "salary": 617.17, "bonus": 50, "tips": 200, "parents": 100, "costs": -60.93, "total": 1006.24}, {"month": "2025-10", "salary": 667.81, "bonus": 50, "tips": 250, "parents": 100, "costs": -137.08, "total": 1030.73}, {"month": "2025-11", "salary": 719.6, "bonus": 50, "tips": 225, "parents": 100, "costs": -920.42, "total": 274.18}, {"month": "2025-12", "salary": 761.84, "bonus": 50, "tips": 250, "parents": 100, "costs": -181.42, "total": 1065.42}, {"month": "2026-01", "salary": 735.94, "bonus": 50, "tips": 225, "parents": 100, "costs": -187.42, "total": 923.52}, {"month": "2026-02", "salary": 506.8, "bonus": 50, "tips": 125, "parents": 100, "costs": -191.7, "total": 590.1}, {"month": "2026-03", "salary": 595.92, "bonus": 50, "tips": 225, "parents": 100, "costs": -247.2, "total": 723.72}, {"month": "2026-04", "salary": 920.26, "bonus": 50, "tips": 300, "parents": 100, "costs": -303.7, "total": 1066.56}, {"month": "2026-05", "salary": 1014.08, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1248.38}, {"month": "2026-06", "salary": 514.92, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 749.22}, {"month": "2026-07", "salary": 679.5, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 913.8}, {"month": "2026-08", "salary": 910.0, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1144.3}, {"month": "2026-09", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1074.3}, {"month": "2026-10", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1074.3}, {"month": "2026-11", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1074.3}, {"month": "2026-12", "salary": 840.0, "bonus": 50, "tips": 300, "parents": 100, "costs": -215.7, "total": 1074.3}];

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


const defaultFixedCostsV12 = fixedCostsV6.map((x,i)=>({
  id:"fixed-master-"+i,
  name:x.name,
  amount:x.amount,
  day:1,
  frequency:
    x.frequency==="twice" ? "semiannual" :
    x.frequency==="bimonthly" ? "bimonthly" :
    x.frequency==="yearly" ? "annual" :
    x.frequency,
  startMonth:"2026-01",
  account:"Standard",
  active:true,
  when:x.when
}));

const passiveCapitalTargetsV6 = [
[0.16,2595.56],[0.17,2757.78],[0.18,2920.00],[0.19,3082.22],[0.20,3244.44],
[0.21,3406.67],[0.22,3568.89],[0.23,3731.11],[0.24,3893.33],[0.25,4055.56],
[0.26,4217.78],[0.27,4380.00],[0.28,4542.22],[0.29,4704.44],[0.30,4866.67]
];


const STORAGE_KEY = "finanzenPwa";
const LEGACY_STORAGE_KEYS = ["finanzenPwaV10","finanzenPwaV9","finanzenPwaV8","finanzenPwaV7","finanzenPwaV6","finanzenPwaV5","finanzenPwaV4","finanzenPwaV3","finanzenData","financePwa","financeData"];
const APP_VERSION = 17;
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
  const candidates=[];
  const seen=new Set();

  const known=[
    STORAGE_KEY,
    ...LEGACY_STORAGE_KEYS,
    "finanzenPwaV2","finanzenPwaV1",
    "finanzen-pwa","finanzen_pwa","financeTrackerData",
    "financeTracker","finanzTracker","finanzdaten"
  ];

  for(const key of known){
    if(!key || seen.has(key)) continue;
    seen.add(key);
    try{
      const parsed=JSON.parse(localStorage.getItem(key));
      if(looksLikeFinanceData(parsed)) candidates.push({key,data:parsed});
    }catch{}
  }

  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key || seen.has(key)) continue;
    seen.add(key);
    try{
      const parsed=JSON.parse(localStorage.getItem(key));
      if(looksLikeFinanceData(parsed)) candidates.push({key,data:parsed});
    }catch{}
  }

  return candidates;
}

function loadData(){
  try{
    const candidates=loadAllStoredCandidates();

    // Mit den Standard-Stammdaten beginnen und anschließend ALLE gefundenen
    // Speicherstände zusammenführen. Ein leerer neuer Speicherstand kann
    // dadurch keinen älteren vollständigen Datensatz mehr verdrängen.
    let merged=structuredClone(defaultData);

    // Ältere Versionen zuerst, aktueller dauerhafter Schlüssel zuletzt.
    const ordered=candidates.sort((a,b)=>{
      if(a.key===STORAGE_KEY) return 1;
      if(b.key===STORAGE_KEY) return -1;
      return String(a.key).localeCompare(String(b.key),undefined,{numeric:true});
    });

    for(const candidate of ordered){
      merged=mergeObjectsPreservingData(merged,candidate.data);
    }

    // Speicherkopie vor der Migration sichern.
    if(candidates.length){
      try{
        localStorage.setItem(
          "finanzenPwaMigrationBackup",
          JSON.stringify({
            createdAt:new Date().toISOString(),
            sources:candidates.map(x=>x.key),
            data:merged
          })
        );
      }catch{}
    }

    localStorage.setItem(STORAGE_KEY,JSON.stringify(merged));
    return merged;
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
  ["salary","bonus","tips","parents","costs"].forEach(key=>{
    const el=document.querySelector(`[data-income-month="${month}"][data-income-field="${key}"]`);
    if(el)row[key]=Number(el.value)||0;
  });
  row.total=row.salary+row.bonus+row.tips+row.parents+row.costs;
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

function renderIncomeRowV9(x){
  const editing = editingIncomeMonth === x.month;
  if(!editing){
    return `<tr>
      <td>${monthLabel(x.month)}</td>
      <td>${fmt(x.salary)}</td>
      <td>${fmt(x.bonus)}</td>
      <td>${fmt(x.tips)}</td>
      <td>${fmt(x.parents)}</td>
      <td>${fmt(x.costs)}</td>
      <td><strong>${fmt(x.salary+x.bonus+x.tips+x.parents+x.costs)}</strong></td>
      <td><button class="edit-income" data-month="${x.month}" type="button">Bearbeiten</button></td>
    </tr>`;
  }
  return `<tr>
    <td>${monthLabel(x.month)}</td>
    ${["salary","bonus","tips","parents","costs"].map(k=>`<td><input class="inline-input" type="number" step="0.01" data-income-month="${x.month}" data-income-field="${k}" value="${Number(x[k]||0).toFixed(2)}"></td>`).join("")}
    <td><strong>${fmt(x.salary+x.bonus+x.tips+x.parents+x.costs)}</strong></td>
    <td><button class="save-income" data-month="${x.month}" type="button">Speichern</button> <button class="cancel-income" type="button">Abbrechen</button></td>
  </tr>`;
}

function renderAmexRowV9(x){
  const editing=editingAmexMonth===x.month;
  if(!editing){
    return `<tr>
      <td>${monthLabel(x.month)}</td><td>${fmt(x.expenses)}</td>
      <td>${x.average==null?"–":fmt(x.average)}</td>
      <td>${x.expenseDay==null?"–":fmt(x.expenseDay)}</td>
      <td>${x.incomeDay==null?"–":fmt(x.incomeDay)}</td>
      <td>${x.passiveDay==null?"–":fmt(x.passiveDay)}</td>
      <td>${x.netDay==null?"–":fmt(x.netDay)}</td>
      <td>${x.saving==null?"–":fmt(x.saving)}</td>
      <td><button class="edit-amex" data-month="${x.month}" type="button">Bearbeiten</button></td>
    </tr>`;
  }
  return `<tr>
    <td>${monthLabel(x.month)}</td>
    ${["expenses","average","expenseDay","incomeDay","passiveDay","netDay","saving"].map(k=>`<td><input class="inline-input" type="number" step="0.01" data-amex-month="${x.month}" data-amex-field="${k}" value="${x[k]==null?"":Number(x[k]).toFixed(2)}"></td>`).join("")}
    <td><button class="save-amex" data-month="${x.month}" type="button">Speichern</button> <button class="cancel-amex" type="button">Abbrechen</button></td>
  </tr>`;
}

function saveAmexRow(month){
  const row=amexRows().find(x=>x.month===month);
  if(!row)return;
  ["expenses","average","expenseDay","incomeDay","passiveDay","netDay","saving"].forEach(key=>{
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
  const cmb=$("capitalMasterBody");
  if(cmb){
    cmb.innerHTML=(data.capitalHistory||[]).map(x=>`<tr>
      <td>${monthLabel(x.month)}</td>
      <td>${x.sparkasse==null?"–":fmt(x.sparkasse)}</td>
      <td>${x.sparkasseInterest==null?"–":fmt(x.sparkasseInterest)}</td>
      <td>${x.tradeRepublic==null?"–":fmt(x.tradeRepublic)}</td>
      <td>${x.trInterest==null?"–":fmt(x.trInterest)}</td>
      <td>${x.dividend==null?"–":fmt(x.dividend)}</td>
      <td>${x.total==null?"–":fmt(x.total)}</td>
    </tr>`).join("");
  }
  const cmc=$("capitalMetricCards");
  if(cmc){
    const m=data.capitalMetrics||{};
    const items=[
      ["Aktueller Vermögenswert",fmt(m.netWorth||0)],
      ["Kapital t=0",fmt(m.initialCapital||0)],
      ["Kapitaldifferenz",fmt(m.capitalDifference||0)],
      ["Kapitalsteigerung",Number(m.capitalIncreasePct||0).toFixed(2).replace(".",",")+" %"],
      ["Aktueller Aktienwert",fmt(m.stockValue||0)],
      ["Gewinn Aktien",fmt(m.stockProfit||0)],
      ["Gewinn Zinsen",fmt(m.interestProfit||0)],
      ["Gewinn Dividende",fmt(m.dividendProfit||0)],
      ["Zinsen pro Tag",fmt(m.dailyInterest||0)],
      ["Dividende pro Tag",fmt(m.dailyDividend||0)],
      ["Dividende pro Monat",fmt(m.monthlyDividend||0)],
      ["Passiv pro Tag",fmt(m.dailyPassive||0)],
      ["Passiv pro Monat",fmt(m.monthlyPassive||0)]
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
  const avgSaving=validExpenses.reduce((s,x)=>s+Number(x.saving||0),0)/validExpenses.length;
  const avgIncome=incomeRows().reduce((s,x)=>s+x.total,0)/incomeRows().length;
  const savingRate=avgIncome ? avgSaving/avgIncome*100 : 0;
  const activeFixed=(data.fixedCosts||[]).filter(x=>x.active!==false);
  const monthlyFixed=activeFixed.reduce((s,x)=>{
    if(x.frequency==="bimonthly")return s+Math.abs(x.amount)/2;
    if(x.frequency==="twice"||x.frequency==="semiannual")return s+Math.abs(x.amount)*2/12;
    if(x.frequency==="monthly")return s+Math.abs(x.amount);
    return s+Math.abs(x.amount)/12;
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

  const salary2025=incomeRows().filter(x=>x.month.startsWith("2025")).reduce((s,x)=>s+x.salary,0);
  const salary2026=incomeRows().filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.salary,0);
  set("salary2025",fmt(salary2025));
  set("salary2026",fmt(salary2026));
  set("taxAllowanceLeft",fmt(Math.max(0,12096-salary2026)));

  const ih=$("incomeHistoryBody");
  if(ih)ih.innerHTML=incomeRows().map(renderIncomeRowV9).join("");

  set("avgExpenses",fmt(avgExp));
  const avgDailyExp=validExpenses.reduce((s,x)=>s+Math.abs(x.expenses)/daysInMonthKey(x.month),0)/validExpenses.length;
  const avgDailyIncome=validExpenses.filter(x=>x.incomeDay).reduce((s,x)=>s+x.incomeDay,0)/validExpenses.filter(x=>x.incomeDay).length;
  set("avgExpensesDaily",fmt(avgDailyExp));
  set("avgIncomeDaily",fmt(avgDailyIncome));
  set("avgMonthlySaving",fmt(avgSaving));

  const eh=$("expenseHistoryBody");
  if(eh)eh.innerHTML=amexRows().map(renderAmexRowV9).join("");

  set("fixedMonthlyTotal",fmt(monthlyFixed));
  set("fixedYearlyTotal",fmt(monthlyFixed*12));
  set("nextFixedCount",String(activeFixed.length));
  const fl=$("fixedCostListV6");
  if(fl)fl.innerHTML=activeFixed.map(x=>`<div class="list-item"><div><h3>${esc(x.name)}</h3><p>${esc(x.when||frequencyLabel(x.frequency)||"")}</p></div><strong>${fmt(-Math.abs(x.amount))}</strong></div>`).join("");

  set("passiveInterestDay",fmt(interestDay));
  set("passiveDividendDay",fmt(dividendDay));
  set("passiveTabMonth",fmt(passiveMonthly));
  set("passiveTabYear",fmt(passiveMonthly*12));
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
    const goalRows=Array.isArray(data.priorityGoals)&&data.priorityGoals.length?data.priorityGoals:priorityGoalsV10;
    pgb.innerHTML=goalRows.map(r=>`<tr>
      <td>${r[0]??""}</td>
      <td>${esc(r[1])}</td>
      <td>${esc(r[2])}</td>
      <td>${r[3]==null?"–":fmt(r[3])}</td>
      <td>${r[4]==null?"–":fmt(r[4])}</td>
      <td>${r[5]==null?"–":fmt(r[5])}</td>
      <td>${r[6]==null?"–":fmt(r[6])}</td>
      <td>${r[7]==null?"–":fmt(r[7])}</td>
      <td>${r[8]==null?"–":fmt(r[8])}</td>
      <td>${r[9]==null?"–":Number(r[9]).toFixed(2).replace(".",",")+" %"}</td>
      <td>${r[10]==null?"–":Number(r[10]).toFixed(2).replace(".",",")+" %"}</td>
      <td>${r[11]==null?"–":fmt(r[11])}</td>
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
    return `<div class="list-item"><div style="width:100%"><div class="milestone-row"><strong>${fmt(target)}</strong><span>${pct.toFixed(1).replace(".",",")} % · ${eta}</span></div><div class="progress"><div style="width:${pct}%"></div></div></div></div>`;
  }).join("");

  const yf=$("yearForecast");
  if(yf){
    const projectedIncome=incomeRows().filter(x=>x.month.startsWith("2026")).reduce((s,x)=>s+x.total,0);
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
