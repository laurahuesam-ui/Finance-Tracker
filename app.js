
const STORAGE_KEY = "finanzenPwaV1";
const defaultData = {
  balances: [], incomes: [], fixedCosts: [], assets: [], goals: [],
  amexPaid: {}, settings: { currency: "EUR" }
};
let data = loadData();
if(!data.balances)data.balances=[];
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
function monthLabel(ym){
  const [y,m]=ym.split("-").map(Number);
  return new Intl.DateTimeFormat("de-DE",{month:"long",year:"numeric"}).format(new Date(y,m-1,1));
}
function renderAll(){
  renderDashboard();renderBalances();renderFixed();renderIncome();renderAssets();renderGoals();renderAmexMonths();
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

$("fixedForm").addEventListener("submit",e=>{
  e.preventDefault();
  data.fixedCosts.push({id:uid(),name:$("fixedName").value,amount:Number($("fixedAmount").value),day:Number($("fixedDay").value),frequency:$("fixedFrequency").value,startMonth:$("fixedStartMonth").value,account:$("fixedAccount").value,active:true});
  e.target.reset();$("fixedDay").value=1;$("fixedStartMonth").value=monthISO();saveData();toast("Fixkosten gespeichert");
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
  const cur=Number($("goalCurrent").value);
  data.goals.push({id:uid(),name:$("goalName").value,target:Number($("goalTarget").value),current:cur,targetDate:$("goalDate").value,history:[{date:todayISO(),value:cur}]});
  e.target.reset();saveData();toast("Sparziel gespeichert");
});
function renderGoals(){
  $("goalList").innerHTML=data.goals.length?data.goals.map(g=>{
    const target=Number(g.target), current=Number(g.current), remaining=target-current;
    const pct=target===0?(current===0?100:0):Math.max(0,Math.min(100,current/target*100));
    const monthsLeft=Math.max(.03,(new Date(g.targetDate+"T12:00:00")-new Date())/(1000*60*60*24*30.4375));
    const required=remaining/monthsLeft;
    const hist=[...(g.history||[])].sort((a,b)=>a.date.localeCompare(b.date));
    let avg=null, estimated=null;
    if(hist.length>=2){
      const first=hist[0],last=hist[hist.length-1];
      const months=Math.max(.03,(new Date(last.date+"T12:00:00")-new Date(first.date+"T12:00:00"))/(1000*60*60*24*30.4375));
      avg=(Number(last.value)-Number(first.value))/months;
      if(avg>0&&remaining>0){estimated=new Date();estimated.setDate(estimated.getDate()+remaining/avg*30.4375)}
    }
    return `<article class="panel goal-card">
      <div class="goal-top"><div><h2>${esc(g.name)}</h2><p class="muted">${fmt(current)} von ${fmt(target)}</p></div><strong>${pct.toFixed(1).replace(".",",")} %</strong></div>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="goal-stats">
        <div class="stat"><span>Wunschdatum</span><strong>${new Date(g.targetDate+"T12:00:00").toLocaleDateString("de-DE")}</strong></div>
        <div class="stat"><span>Nötig pro Monat</span><strong>${fmt(required)}</strong></div>
        <div class="stat"><span>Aus Historie</span><strong>${avg===null?"Noch nicht berechenbar":fmt(avg)+"/Monat"}</strong></div>
        <div class="stat"><span>Geschätztes Ziel</span><strong>${estimated?estimated.toLocaleDateString("de-DE"):remaining<=0?"Erreicht":"Noch nicht berechenbar"}</strong></div>
      </div>
      <div class="button-row" style="margin-top:.9rem">
        <button onclick="openGoalUpdate('${g.id}')">Fortschritt eintragen</button>
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
      <label>Aktueller Stand<input id="goalUpdateValue" type="number" step="0.01" value="${g.current}" required></label>
      <label>Wunschdatum<input id="goalUpdateTargetDate" type="date" value="${g.targetDate}" required></label>
      <button type="submit">Speichern</button>
    </form>`);
  $("goalUpdateForm").addEventListener("submit",e=>{
    e.preventDefault();g.current=Number($("goalUpdateValue").value);g.targetDate=$("goalUpdateTargetDate").value;
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
  download(`finanzen-backup-${todayISO()}.json`,JSON.stringify({version:1,exportedAt:new Date().toISOString(),data},null,2),"application/json");
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
renderAll();
