/* =========================
   1. 연예인 데이터 설정
   (이미지는 images/ 폴더에 넣고 경로를 맞춰주세요)
========================= */
const NAMES = [
['고민시', 'p/고민시.jpg'],
['고보결', 'p/고보결.jpg'],
['고윤정', 'p/고윤정.jpg'],
['고현정', 'p/고현정.jpg'],
['공효진', 'p/공효진.jpg'],
['곽선영', 'p/곽선영.jpg'],
['김고은', 'p/김고은.jpg'],
['김민정', 'p/김민정.jpg'],
['김민하', 'p/김민하.jpg'],
['김서형', 'p/김서형.jpg'],
['김소연', 'p/김소연.jpg'],
['김수진', 'p/김수진.jpg'],
['김용지', 'p/김용지.jpg'],
['김정난', 'p/김정난.jpg'],
['김지원', 'p/김지원.jpg'],
['김태리', 'p/김태리.jpg'],
['김향기', 'p/김향기.jpg'],
['김현주', 'p/김현주.jpg'],
['김혜수', 'p/김혜수.jpg'],
['김혜윤', 'p/김혜윤.jpg'],
['김혜준', 'p/김혜준.jpg'],
['김효진', 'p/김효진.jpg'],
['김희애', 'p/김희애.jpg'],
['남지현', 'p/남지현.jpg'],
['노윤서', 'p/노윤서.jpg'],
['노정의', 'p/노정의.jpg'],
['라미란', 'p/라미란.jpg'],
['류혜영', 'p/류혜영.jpg'],
['문가영', 'p/문가영.jpg'],
['문근영', 'p/문근영.jpg'],
['문소리', 'p/문소리.jpg'],
['문채원', 'p/문채원.jpg'],
['박규영', 'p/박규영.jpg'],
['박보영', 'p/박보영.jpg'],
['박세완', 'p/박세완.jpg'],
['박은빈', 'p/박은빈.jpg'],
['박지현', 'p/박지현.jpg'],
['배두나', 'p/배두나.jpg'],
['서지혜', 'p/서지혜.jpg'],
['서현진', 'p/서현진.jpg'],
['송혜교', 'p/송혜교.jpg'],
['수애', 'p/수애.jpg'],
['수현', 'p/수현.jpg'],
['신민아', 'p/신민아.jpg'],
['신혜선', 'p/신혜선.jpg'],
['심달기', 'p/심달기.jpg'],
['염혜란', 'p/염혜란.jpg'],
['오연서', 'p/오연서.jpg'],
['오연수', 'p/오연수.jpg'],
['우희진', 'p/우희진.jpg'],
['유인영', 'p/유인영.jpg'],
['윤세아', 'p/윤세아.jpg'],
['이다희', 'p/이다희.jpg'],
['이보영', 'p/이보영.jpg'],
['이성경', 'p/이성경.jpg'],
['이수경', 'p/이수경.jpg'],
['이영애', 'p/이영애.jpg'],
['이주명', 'p/이주명.jpg'],
['이주빈', 'p/이주빈.jpg'],
['이하늬', 'p/이하늬.jpg'],
['임수정', 'p/임수정.jpg'],
['임지연', 'p/임지연.jpg'],
['임진아', 'p/임진아.jpg'],
['장영남', 'p/장영남.jpg'],
['전종서', 'p/전종서.jpg'],
['전지현', 'p/전지현.jpg'],
['전혜진', 'p/전혜진.jpg'],
['정수빈', 'p/정수빈.jpg'],
['정유미', 'p/정유미.jpg'],
['정은채', 'p/정은채.jpg'],
['조보아', 'p/조보아.jpg'],
['주보영', 'p/주보영.jpg'],
['진경', 'p/진경.jpg'],
['진서연', 'p/진서연.jpg'],
['차주영', 'p/차주영.jpg'],
['천우희', 'p/천우희.jpg'],
['최강희', 'p/최강희.jpg'],
['최희서', 'p/최희서.jpg'],
['하윤경', 'p/하윤경.jpg'],
['하지원', 'p/하지원.jpg'],
['한예리', 'p/한예리.jpg'],
['한지민', 'p/한지민.jpg'],
['한지현', 'p/한지현.jpg'],
['한효주', 'p/한효주.jpg'],
  // 원하는 사람을 ['이름', '이미지경로'] 형태로 계속 추가하세요!
];

const A = NAMES.map((x, i) => ({
  id: i,
  name: x[0],
  image: x[1]
}));

/* =========================
   2. 한국어 텍스트 정의
========================= */
const TEXT = {
  ko: {
    homeTitle: "나만의 한국 연예인<br><strong>얼굴 이상형 TOP9 👑</strong>",
    homeLead: "직감으로 선택하여 나만의 이상형 TOP9을 결정하세요.",
    startPre: "시작하기",
    next: "다음 →",
    preDoneTitle: "예선 완료!",
    selectedFaces: "선택한 인원은 총",
    people: "명입니다.",
    goMainDescription: "다음은 1:1 비교를 진행하는 '본선'입니다.",
    goMain: "🔥 본선으로 이동",
    mainDoneTitle: "본선 완료!",
    mainDoneText2: "결승 후보 18명을 가리는 '최종전'으로 이동합니다.",
    goLast: "⚔️ 최종전으로 이동",
    lastTitle: "본선 최종전",
    lastHint: "결승에 진출시킬 후보를 선택하세요",
    finalistsTitle: "결승 진출자 18명 결정!",
    finalistsText: "이제 1:1 대결입니다.<br>1위부터 9위까지 최종 TOP9을 결정합니다.",
    goFinal: "👑 결승으로 이동",
    finalTitle: "결승 TOP9 선발 중",
    finalQuestionDynamic: "누가 더 마음에 드나요?",
    resultTitle: "나만의<br><strong>얼굴 이상형 TOP9</strong> 👑",
    copyResult: "결과 복사하기",
    redo: "다시 하기",
    maxThree: "한 화면당 최대 3명까지 선택할 수 있습니다.",
    chooseOther: "다른 후보를 선택해주세요.",
    copied: "결과가 복사되었습니다 ♡",
    copyFail: "복사 실패"
  }
};

let LANG = "ko";

/* =========================
   3. 게임 상태
========================= */
let S = {
  pre: [],
  candidates: [],
  score: {},
  round: 1,
  pairs: [],
  pi: 0,
  first: null,
  finalists: [],
  lastPairs: [],
  li: 0,
  ranking: [],
  finalRuns: [],
  finalNextRuns: [],
  finalRunIndex: 0,
  finalJob: null
};

const $ = s => document.querySelector(s);
const screens = ["home", "pre", "preDone", "main", "mainDone", "last", "finalists", "final", "result"];

function show(id) {
  screens.forEach(x => {
    const el = $("#" + x);
    if (el) el.classList.toggle("hidden", x !== id);
  });
  window.scrollTo(0, 0);
}

function toast(t) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = t;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1400);
}

function get(id) {
  return A.find(a => a.id === Number(id));
}

function card(id, cls = "card") {
  const a = get(id);
  if (!a) return "";
  return `
    <button class="${cls}" data-id="${a.id}" type="button">
      <div class="photo">
        <img src="${a.image}" alt="${a.name}" onerror="this.style.display='none'">
      </div>
      <div class="name">${a.name}</div>
    </button>
  `;
}

function resultCard(id, rank) {
  const a = get(id);
  if (!a) return "";
  return `
    <div class="card">
      <span class="rankBadge">${rank}</span>
      <div class="photo">
        <img src="${a.image}" alt="${a.name}" onerror="this.style.display='none'">
      </div>
      <div class="name">${a.name}</div>
    </div>
  `;
}

/* =========================
   4. 진행 로직 (예선/본선/결승)
========================= */
let groups = [];
let gi = 0;
let picked = [];

function makeGroups() {
  groups = [];
  let i = 0;
  while (i < A.length) {
    const left = A.length - i;
    const n = (left === 6 || left % 4 === 3) ? 3 : 4;
    groups.push(A.slice(i, i + n));
    i += n;
  }
}

function startPre() {
  makeGroups();
  gi = 0;
  S.pre = [];
  renderPre();
  show("pre");
}

function renderPre() {
  const g = groups[gi];
  if (!g) return;

  $("#preTitle").textContent = `예선 ${gi + 1} / ${groups.length}`;
  picked = [];
  const grid = $("#preGrid");

  if (grid) {
    grid.innerHTML = g.map(a => card(a.id)).join("");
    document.querySelectorAll("#preGrid .card").forEach(x => {
      x.onclick = () => {
        const id = Number(x.dataset.id);
        if (picked.includes(id)) {
          picked = picked.filter(v => v !== id);
          x.classList.remove("selected");
        } else if (picked.length < 3) {
          picked.push(id);
          x.classList.add("selected");
        } else {
          toast(TEXT.ko.maxThree);
        }
        $("#preCount").textContent = `선택 ${picked.length} / 3`;
      };
    });
  }
  $("#preCount").textContent = `선택 0 / 3`;
}

$("#preNext").onclick = () => {
  S.pre.push(...picked);
  gi++;
  if (gi < groups.length) {
    renderPre();
  } else {
    S.candidates = [...new Set(S.pre)];
    $("#preN").textContent = S.candidates.length;
    show("preDone");
  }
};

function pairList(ids) {
  const x = [...ids].sort(() => Math.random() - 0.5);
  const p = [];
  for (let i = 0; i < x.length - 1; i += 2) p.push([x[i], x[i + 1]]);
  if (x.length % 2) p.push([x[x.length - 1], x[0]]);
  return p;
}

function startMain() {
  S.score = {};
  S.candidates.forEach(id => S.score[id] = 0);
  S.round = 1;
  prepareMain();
  show("main");
}

function prepareMain() {
  const sorted = [...S.candidates].sort((a, b) => S.score[b] - S.score[a] || a - b);
  S.pairs = S.round === 1 ? pairList(S.candidates) : pairList(sorted);
  S.pi = 0;
  S.first = null;
  renderMain();
}

function renderMain() {
  if (S.pi >= S.pairs.length) {
    if (S.round < 3) {
      S.round++;
      prepareMain();
    } else {
      show("mainDone");
    }
    return;
  }
  const p = S.pairs[S.pi];
  $("#mainTitle").textContent = `ROUND ${S.round} / 3`;
  $("#mainProgress").textContent = `${S.pi + 1} / ${S.pairs.length}`;
  $("#mainPrompt").textContent = S.first === null ? "① 가장 좋아하는 얼굴은?" : "② 그다음 좋아하는 얼굴은?";
  
  const pair = $("#mainPair");
  pair.innerHTML = p.map(id => card(id, "duel")).join("");
  document.querySelectorAll("#mainPair .duel").forEach(x => {
    x.onclick = () => mainPick(Number(x.dataset.id));
  });
}

function mainPick(id) {
  if (S.first === null) {
    S.first = id;
    renderMain();
    return;
  }
  if (id === S.first) {
    toast(TEXT.ko.chooseOther);
    return;
  }
  S.score[S.first] += 2;
  S.score[id] += 1;
  S.pi++;
  S.first = null;
  renderMain();
}

function startLast() {
  const sorted = [...S.candidates].sort((a, b) => S.score[b] - S.score[a] || a - b);
  S.finalists = sorted.slice(0, Math.min(18, sorted.length));
  const b = S.finalists.slice(Math.max(0, S.finalists.length - 6));
  S.lastPairs = pairList(b);
  S.li = 0;
  S.first = null;
  renderLast();
  show("last");
}

function renderLast() {
  if (S.li >= S.lastPairs.length) {
    finishLast();
    return;
  }
  const p = S.lastPairs[S.li];
  const pair = $("#lastPair");
  pair.innerHTML = p.map(id => card(id, "duel")).join("");
  document.querySelectorAll("#lastPair .duel").forEach(x => {
    x.onclick = () => lastPick(Number(x.dataset.id));
  });
}

function lastPick(id) {
  if (S.first === null) {
    S.first = id;
    return;
  }
  if (id === S.first) {
    toast(TEXT.ko.chooseOther);
    return;
  }
  S.score[S.first] += 4;
  S.score[id] += 2;
  S.li++;
  S.first = null;
  renderLast();
}

function finishLast() {
  const sorted = [...S.candidates].sort((a, b) => S.score[b] - S.score[a] || a - b);
  S.finalists = sorted.slice(0, Math.min(18, sorted.length));
  show("finalists");
}

function startFinal() {
  S.ranking = [];
  S.finalRuns = S.finalists.map(id => [id]);
  S.finalNextRuns = [];
  S.finalRunIndex = 0;
  S.finalJob = null;
  show("final");
  nextFinal();
}

function beginNextFinalLevel() {
  if (S.finalRuns.length <= 1) {
    S.ranking = S.finalRuns[0].slice(0, 9);
    return result();
  }
  S.finalNextRuns = [];
  S.finalRunIndex = 0;
  S.finalJob = null;
  nextFinal();
}

function nextFinal() {
  if (S.finalRuns.length <= 1) {
    S.ranking = S.finalRuns[0].slice(0, 9);
    return result();
  }
  if (S.finalRunIndex >= S.finalRuns.length) {
    S.finalRuns = S.finalNextRuns;
    return beginNextFinalLevel();
  }
  if (!S.finalJob) {
    const left = S.finalRuns[S.finalRunIndex];
    const right = S.finalRuns[S.finalRunIndex + 1];
    if (!right) {
      S.finalNextRuns.push(left.slice());
      S.finalRunIndex += 2;
      return nextFinal();
    }
    S.finalJob = { left: [...left], right: [...right], i: 0, j: 0, out: [] };
  }
  const j = S.finalJob;
  if (j.i >= j.left.length) {
    j.out.push(...j.right.slice(j.j));
    S.finalNextRuns.push(j.out);
    S.finalRunIndex += 2;
    S.finalJob = null;
    return nextFinal();
  }
  if (j.j >= j.right.length) {
    j.out.push(...j.left.slice(j.i));
    S.finalNextRuns.push(j.out);
    S.finalRunIndex += 2;
    S.finalJob = null;
    return nextFinal();
  }

  const a = j.left[j.i];
  const b = j.right[j.j];
  const pair = $("#finalPair");
  pair.innerHTML = [card(a, "duel"), card(b, "duel")].join("");
  document.querySelectorAll("#finalPair .duel").forEach(x => {
    x.onclick = () => finalPick(Number(x.dataset.id));
  });
}

function finalPick(id) {
  const j = S.finalJob;
  if (!j) return;
  const a = j.left[j.i];
  const b = j.right[j.j];
  if (id === a) {
    j.out.push(a);
    j.i++;
  } else if (id === b) {
    j.out.push(b);
    j.j++;
  } else {
    return;
  }
  nextFinal();
}

/* ==========================================
   5. 최종 결과 렌더링 (1위 중앙 + 팔각형배치)
========================================== */
function result() {
  const ids = S.ranking.slice(0, 9);
  const grid = $("#resultGrid");

  if (grid) {
    const top1 = ids[0];
    const others = ids.slice(1, 9);

    let html = `
      <div class="resultWheel">
        <!-- 가운데 1위 (팔각형 자르기 적용) -->
        <div class="wheel-center">
          ${resultCard(top1, 1)}
        </div>
        
        <!-- 2위 ~ 9위 둘레 배치 -->
    `;

    others.forEach((id, idx) => {
      const rank = idx + 2;
      html += `
        <div class="wheel-item pos-${rank}">
          ${resultCard(id, rank)}
        </div>
      `;
    });

    html += `</div>`;
    grid.innerHTML = html;
  }

  show("result");
}

async function copyResult() {
  const text = "나만의 한국 연예인 얼굴 이상형 TOP9\n" +
    S.ranking.slice(0, 9).map((id, i) => `${i + 1}위 ${get(id).name}`).join("\n");
  try {
    await navigator.clipboard.writeText(text);
    toast(TEXT.ko.copied);
  } catch (e) {
    toast(TEXT.ko.copyFail);
  }
}

function resetAll() {
  show("home");
}