/* ======================= SAMPLE DATA ======================= */
/* Field reference:
   record_id         – unique ID of this muster/leave entry, e.g. "R001"
   staff_id          – unique ID of the staff member, e.g. "S001" (names can repeat, IDs never do)
   staff_name        – staff member's display name
   date              – date of the entry, YYYY-MM-DD
   status             – "Present" | "Absent" | "On Leave" | "Half Day"
   leave_type        – "Casual Leave" | "Sick Leave" | "Earned Leave" | "Unpaid Leave" | null
                        (null when the day was not a leave day, i.e. Present/Absent)
   days_taken        – leave days consumed by this entry (0.5 for Half Day). null = not recorded (data gap)
   balance_remaining – staff member's combined annual leave balance immediately after this entry.
                        null = not recorded on the muster sheet for this entry (data gap)
*/
const ENTITLEMENT = 24; // annual combined leave entitlement per staff member, in days

const RECORDS = [
  {record_id:"R001",staff_id:"S001",staff_name:"Arun Kumar",date:"2026-06-01",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R002",staff_id:"S001",staff_name:"Arun Kumar",date:"2026-06-05",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:23},
  {record_id:"R003",staff_id:"S001",staff_name:"Arun Kumar",date:"2026-06-15",status:"On Leave",leave_type:"Sick Leave",days_taken:2,balance_remaining:21},
  {record_id:"R004",staff_id:"S001",staff_name:"Arun Kumar",date:"2026-07-10",status:"Present",leave_type:null,days_taken:null,balance_remaining:21},
  {record_id:"R038",staff_id:"S001",staff_name:"Arun Kumar",date:"2026-07-17",status:"Present",leave_type:null,days_taken:null,balance_remaining:21},

  {record_id:"R005",staff_id:"S002",staff_name:"Divya Ramesh",date:"2026-06-02",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R006",staff_id:"S002",staff_name:"Divya Ramesh",date:"2026-06-10",status:"On Leave",leave_type:"Earned Leave",days_taken:3,balance_remaining:21},
  {record_id:"R007",staff_id:"S002",staff_name:"Divya Ramesh",date:"2026-06-20",status:"Absent",leave_type:null,days_taken:null,balance_remaining:21},
  {record_id:"R008",staff_id:"S002",staff_name:"Divya Ramesh",date:"2026-07-05",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:20},

  {record_id:"R009",staff_id:"S003",staff_name:"Meera Nair",date:"2026-06-03",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R010",staff_id:"S003",staff_name:"Meera Nair",date:"2026-06-12",status:"On Leave",leave_type:"Sick Leave",days_taken:1,balance_remaining:23},
  {record_id:"R011",staff_id:"S003",staff_name:"Meera Nair",date:"2026-06-25",status:"Half Day",leave_type:"Casual Leave",days_taken:0.5,balance_remaining:22.5},
  {record_id:"R012",staff_id:"S003",staff_name:"Meera Nair",date:"2026-07-08",status:"On Leave",leave_type:"Earned Leave",days_taken:4,balance_remaining:18.5},
  {record_id:"R039",staff_id:"S003",staff_name:"Meera Nair",date:"2026-07-18",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:17.5},

  {record_id:"R013",staff_id:"S004",staff_name:"Meera Nayar",date:"2026-06-04",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R014",staff_id:"S004",staff_name:"Meera Nayar",date:"2026-06-14",status:"On Leave",leave_type:"Casual Leave",days_taken:2,balance_remaining:22},
  {record_id:"R015",staff_id:"S004",staff_name:"Meera Nayar",date:"2026-06-28",status:"Absent",leave_type:null,days_taken:null,balance_remaining:22},
  {record_id:"R016",staff_id:"S004",staff_name:"Meera Nayar",date:"2026-07-09",status:"On Leave",leave_type:"Sick Leave",days_taken:1,balance_remaining:21},

  {record_id:"R017",staff_id:"S005",staff_name:"Rahul Sen",date:"2026-06-06",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R018",staff_id:"S005",staff_name:"Rahul Sen",date:"2026-06-16",status:"On Leave",leave_type:"Earned Leave",days_taken:5,balance_remaining:null},
  {record_id:"R019",staff_id:"S005",staff_name:"Rahul Sen",date:"2026-06-27",status:"Present",leave_type:null,days_taken:null,balance_remaining:19},
  {record_id:"R020",staff_id:"S005",staff_name:"Rahul Sen",date:"2026-07-11",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:18},

  {record_id:"R021",staff_id:"S006",staff_name:"Priya Iyer",date:"2026-06-07",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R022",staff_id:"S006",staff_name:"Priya Iyer",date:"2026-06-17",status:"On Leave",leave_type:"Sick Leave",days_taken:3,balance_remaining:21},
  {record_id:"R023",staff_id:"S006",staff_name:"Priya Iyer",date:"2026-06-29",status:"Half Day",leave_type:"Earned Leave",days_taken:0.5,balance_remaining:20.5},
  {record_id:"R024",staff_id:"S006",staff_name:"Priya Iyer",date:"2026-07-12",status:"Present",leave_type:null,days_taken:null,balance_remaining:20.5},
  {record_id:"R040",staff_id:"S006",staff_name:"Priya Iyer",date:"2026-07-19",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:19.5},

  {record_id:"R025",staff_id:"S007",staff_name:"Suresh Babu",date:"2026-06-08",status:"Absent",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R026",staff_id:"S007",staff_name:"Suresh Babu",date:"2026-06-18",status:"On Leave",leave_type:"Casual Leave",days_taken:2,balance_remaining:22},
  {record_id:"R027",staff_id:"S007",staff_name:"Suresh Babu",date:"2026-06-30",status:"Present",leave_type:null,days_taken:null,balance_remaining:22},
  {record_id:"R028",staff_id:"S007",staff_name:"Suresh Babu",date:"2026-07-13",status:"On Leave",leave_type:"Unpaid Leave",days_taken:3,balance_remaining:22},

  {record_id:"R029",staff_id:"S008",staff_name:"Kavitha Raman",date:"2026-06-09",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R030",staff_id:"S008",staff_name:"Kavitha Raman",date:"2026-06-19",status:"On Leave",leave_type:"Earned Leave",days_taken:6,balance_remaining:18},
  {record_id:"R031",staff_id:"S008",staff_name:"Kavitha Raman",date:"2026-07-01",status:"On Leave",leave_type:"Sick Leave",days_taken:2,balance_remaining:16},
  {record_id:"R032",staff_id:"S008",staff_name:"Kavitha Raman",date:"2026-07-14",status:"Present",leave_type:null,days_taken:null,balance_remaining:16},

  {record_id:"R033",staff_id:"S009",staff_name:"Joseph Thomas",date:"2026-06-11",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R034",staff_id:"S009",staff_name:"Joseph Thomas",date:"2026-06-21",status:"On Leave",leave_type:"Casual Leave",days_taken:1,balance_remaining:23},
  {record_id:"R035",staff_id:"S009",staff_name:"Joseph Thomas",date:"2026-07-02",status:"Absent",leave_type:null,days_taken:null,balance_remaining:23},
  {record_id:"R036",staff_id:"S009",staff_name:"Joseph Thomas",date:"2026-07-15",status:"On Leave",leave_type:"Earned Leave",days_taken:2,balance_remaining:21},

  // Deliberate case: only ONE record exists for this staff member (no related entries when opened)
  {record_id:"R037",staff_id:"S010",staff_name:"Anitha George",date:"2026-07-16",status:"On Leave",leave_type:"Sick Leave",days_taken:1,balance_remaining:23},

  // Staff member who has run their entitlement all the way down to zero
  {record_id:"R041",staff_id:"S011",staff_name:"Ganesh Pillai",date:"2026-06-13",status:"Present",leave_type:null,days_taken:null,balance_remaining:24},
  {record_id:"R042",staff_id:"S011",staff_name:"Ganesh Pillai",date:"2026-06-23",status:"On Leave",leave_type:"Earned Leave",days_taken:12,balance_remaining:12},
  {record_id:"R043",staff_id:"S011",staff_name:"Ganesh Pillai",date:"2026-07-03",status:"On Leave",leave_type:"Sick Leave",days_taken:8,balance_remaining:4},
  {record_id:"R044",staff_id:"S011",staff_name:"Ganesh Pillai",date:"2026-07-20",status:"On Leave",leave_type:"Casual Leave",days_taken:4,balance_remaining:0},
];

/* ======================= APP STATE ======================= */
const state = {
  loadPhase: "loading", // loading | loaded | error
  search: "",
  statusFilter: "",
  leaveFilter: "",
  activeStat: "", // "" | "absentToday" | "onLeaveToday" | "presentToday" | "exhausted"
  forceErrorNext: false,
};

const MUSTER_DATE = RECORDS.reduce((max, r) => (r.date > max ? r.date : max), RECORDS[0].date);

function fmtDate(d){
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-GB", {day:"2-digit", month:"short", year:"numeric"});
}

/* ======================= DERIVED HELPERS ======================= */
function recordsForStaff(staffId){
  return RECORDS.filter(r => r.staff_id === staffId).sort((a,b) => a.date.localeCompare(b.date));
}

function staffSummary(staffId){
  const recs = recordsForStaff(staffId);
  let totalTaken = 0;
  let hasMissingDays = false;
  recs.forEach(r => {
    if (r.leave_type && r.leave_type !== "Unpaid Leave") {
      if (r.days_taken === null || r.days_taken === undefined) hasMissingDays = true;
      else totalTaken += r.days_taken;
    }
  });
  // latest recorded balance (most recent record with a non-null balance)
  let latestBalance = null;
  for (let i = recs.length - 1; i >= 0; i--) {
    if (recs[i].balance_remaining !== null && recs[i].balance_remaining !== undefined) {
      latestBalance = recs[i].balance_remaining;
      break;
    }
  }
  const calculatedBalance = ENTITLEMENT - totalTaken;
  const verified = latestBalance !== null && !hasMissingDays && Math.abs(calculatedBalance - latestBalance) < 0.01;
  return { recs, totalTaken, latestBalance, calculatedBalance, verified, hasMissingDays };
}

function isExhausted(staffId){
  const s = staffSummary(staffId);
  return s.latestBalance !== null && s.latestBalance <= 0;
}

function uniqueStaffIds(){
  return [...new Set(RECORDS.map(r => r.staff_id))];
}

/* ======================= RENDER: STATS ======================= */
function renderStats(){
  const todays = RECORDS.filter(r => r.date === MUSTER_DATE);
  const presentToday = todays.filter(r => r.status === "Present").length;
  const absentToday = todays.filter(r => r.status === "Absent").length;
  const onLeaveToday = todays.filter(r => r.status === "On Leave" || r.status === "Half Day").length;
  const exhaustedCount = uniqueStaffIds().filter(isExhausted).length;

  const items = [
    {key:"presentToday", cls:"green", n:presentToday, l:"Present today"},
    {key:"absentToday", cls:"red", n:absentToday, l:"Absent today"},
    {key:"onLeaveToday", cls:"amber", n:onLeaveToday, l:"On leave today"},
    {key:"exhausted", cls:"red", n:exhaustedCount, l:"Exhausted entitlement"},
  ];
  const el = document.getElementById("stats");
  el.innerHTML = items.map(it => `
    <button type="button" class="stat ${it.cls} ${state.activeStat===it.key?'active':''}" data-stat="${it.key}">
      <span class="n">${it.n}</span>
      <span class="l">${it.l}</span>
    </button>
  `).join("");
  el.querySelectorAll("[data-stat]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeStat = state.activeStat === btn.dataset.stat ? "" : btn.dataset.stat;
      renderAll();
    });
  });
  document.getElementById("musterDateLabel").textContent = fmtDate(MUSTER_DATE);
}

/* ======================= FILTERING ======================= */
function getFiltered(){
  let list = RECORDS.slice();

  if (state.activeStat === "presentToday") list = list.filter(r => r.date === MUSTER_DATE && r.status === "Present");
  if (state.activeStat === "absentToday") list = list.filter(r => r.date === MUSTER_DATE && r.status === "Absent");
  if (state.activeStat === "onLeaveToday") list = list.filter(r => r.date === MUSTER_DATE && (r.status === "On Leave" || r.status === "Half Day"));
  if (state.activeStat === "exhausted") list = list.filter(r => isExhausted(r.staff_id));

  if (state.statusFilter) list = list.filter(r => r.status === state.statusFilter);
  if (state.leaveFilter) list = list.filter(r => r.leave_type === state.leaveFilter);

  const q = state.search.trim().toLowerCase();
  if (q) {
    list = list.filter(r =>
      r.staff_name.toLowerCase().includes(q) ||
      r.staff_id.toLowerCase().includes(q) ||
      r.record_id.toLowerCase().includes(q)
    );
  }
  return list.sort((a,b) => b.date.localeCompare(a.date));
}

/* ======================= RENDER: LIST ======================= */
function statusBadge(status){
  const map = {
    "Present": {cls:"present", icon:"✓"},
    "Absent": {cls:"absent", icon:"✕"},
    "On Leave": {cls:"leave", icon:"▲"},
    "Half Day": {cls:"half", icon:"◐"},
  };
  const m = map[status] || {cls:"", icon:""};
  return `<span class="badge ${m.cls}">${m.icon} ${status}</span>`;
}

function renderList(){
  const body = document.getElementById("listBody");
  const countPill = document.getElementById("countPill");

  if (state.loadPhase === "loading") {
    countPill.textContent = "loading…";
    body.innerHTML = Array.from({length:5}).map(() => `<div class="skeleton-row"></div>`).join("");
    return;
  }

  if (state.loadPhase === "error") {
    countPill.textContent = "—";
    body.innerHTML = `
      <div class="state-box">
        <span class="icon">⚠</span>
        <h3>Couldn't load the register</h3>
        <p>The connection to the muster sheet failed. Check your connection and try again.</p>
        <button class="retry-btn" id="retryBtn" type="button">Retry</button>
      </div>`;
    document.getElementById("retryBtn").addEventListener("click", () => loadData(false));
    return;
  }

  const filtered = getFiltered();
  countPill.textContent = `Showing ${filtered.length} of ${RECORDS.length} records`;

  if (filtered.length === 0) {
    body.innerHTML = `
      <div class="state-box">
        <span class="icon">🔍</span>
        <h3>No records match</h3>
        <p>Try a different name, staff ID, or clear the active filters.</p>
        <button class="retry-btn" id="clearBtn" type="button">Clear filters</button>
      </div>`;
    document.getElementById("clearBtn").addEventListener("click", () => {
      state.search = ""; state.statusFilter = ""; state.leaveFilter = ""; state.activeStat = "";
      document.getElementById("searchInput").value = "";
      document.getElementById("statusFilter").value = "";
      document.getElementById("leaveFilter").value = "";
      renderAll();
    });
    return;
  }

  body.innerHTML = filtered.map(r => `
    <button type="button" class="row" data-id="${r.record_id}">
      <div class="name" data-label="Staff">
        <b>${r.staff_name}</b>
        <span>${r.staff_id} · ${r.record_id}</span>
      </div>
      <div data-label="Date">${fmtDate(r.date)}</div>
      <div data-label="Status">${statusBadge(r.status)}</div>
      <div data-label="Leave type" class="muted">${r.leave_type || "—"}</div>
      <div data-label="Days" class="num">${r.days_taken === null || r.days_taken === undefined ? "—" : r.days_taken}</div>
      <div data-label="Balance" class="num">${r.balance_remaining === null || r.balance_remaining === undefined ? "—" : r.balance_remaining}</div>
    </button>
  `).join("");

  body.querySelectorAll(".row").forEach(row => {
    row.addEventListener("click", () => openDetail(row.dataset.id));
  });
}

/* ======================= RENDER: DETAIL ======================= */
function openDetail(recordId){
  const rec = RECORDS.find(r => r.record_id === recordId);
  if (!rec) return;
  const summary = staffSummary(rec.staff_id);
  const others = summary.recs.filter(r => r.record_id !== recordId);

  let verifyLine;
  if (summary.hasMissingDays || summary.latestBalance === null) {
    verifyLine = `<div class="verify-line warn">⚠ Balance can't be fully verified — some entries for this staff member are missing data.</div>`;
  } else if (summary.verified) {
    verifyLine = `<div class="verify-line ok">✓ Recorded balance matches the calculated total.</div>`;
  } else {
    verifyLine = `<div class="verify-line warn">⚠ Recorded balance (${summary.latestBalance}) differs from the calculated total (${summary.calculatedBalance}) — worth checking by hand.</div>`;
  }

  const box = document.getElementById("detailBox");
  box.innerHTML = `
    <div class="detail-head">
      <div>
        <h2>${rec.staff_name}</h2>
        <div class="sid">${rec.staff_id} · viewing ${rec.record_id}</div>
      </div>
      <button class="close-btn" id="closeDetail" aria-label="Close">✕</button>
    </div>

    <div class="summary-card">
      <div class="item">
        <span class="n">${summary.latestBalance === null ? "—" : summary.latestBalance}</span>
        <span class="l">Leave balance (days)</span>
      </div>
      <div class="item">
        <span class="n">${summary.totalTaken}</span>
        <span class="l">Leave taken on record</span>
      </div>
      <div class="item">
        <span class="n">${summary.recs.length}</span>
        <span class="l">Muster entries on file</span>
      </div>
    </div>
    ${verifyLine}

    <div class="field-grid">
      <div><div class="f-l">Record ID</div><div class="f-v num">${rec.record_id}</div></div>
      <div><div class="f-l">Date</div><div class="f-v">${fmtDate(rec.date)}</div></div>
      <div><div class="f-l">Status</div><div class="f-v">${statusBadge(rec.status)}</div></div>
      <div><div class="f-l">Leave type</div><div class="f-v">${rec.leave_type || "—"}</div></div>
      <div><div class="f-l">Days taken (this entry)</div><div class="f-v num">${rec.days_taken === null || rec.days_taken === undefined ? "— not recorded" : rec.days_taken}</div></div>
      <div><div class="f-l">Balance after this entry</div><div class="f-v num">${rec.balance_remaining === null || rec.balance_remaining === undefined ? "— not recorded" : rec.balance_remaining}</div></div>
    </div>

    <div class="related-block">
      <h3>Other entries for ${rec.staff_name} (${rec.staff_id})</h3>
      ${others.length === 0
        ? `<div class="none-related">This is the only record on file for this staff member.</div>`
        : others.map(o => `
          <div class="related-item">
            <span>${fmtDate(o.date)} · ${o.record_id}</span>
            <span>${statusBadge(o.status)}</span>
          </div>
        `).join("")
      }
    </div>
  `;
  document.getElementById("closeDetail").addEventListener("click", closeDetail);
  document.getElementById("overlay").classList.add("show");
}

function closeDetail(){
  document.getElementById("overlay").classList.remove("show");
}
document.getElementById("overlay").addEventListener("click", (e) => {
  if (e.target.id === "overlay") closeDetail();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDetail();
});

/* ======================= EVENTS ======================= */
document.getElementById("searchInput").addEventListener("input", (e) => {
  state.search = e.target.value;
  renderList();
});
document.getElementById("statusFilter").addEventListener("change", (e) => {
  state.statusFilter = e.target.value;
  renderList();
});
document.getElementById("leaveFilter").addEventListener("change", (e) => {
  state.leaveFilter = e.target.value;
  renderList();
});
document.getElementById("simErrorBtn").addEventListener("click", () => {
  state.forceErrorNext = true;
  loadData(true);
});

/* ======================= LOAD SIMULATION ======================= */
function loadData(forceErrorFlagAlreadySet){
  state.loadPhase = "loading";
  renderList();
  const willError = state.forceErrorNext;
  state.forceErrorNext = false;
  setTimeout(() => {
    state.loadPhase = willError ? "error" : "loaded";
    renderAll();
  }, 650);
}

function renderAll(){
  renderStats();
  renderList();
}

loadData(false);