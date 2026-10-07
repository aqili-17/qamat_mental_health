
const QUESTIONS = [
  {
    text: "كيف تشعر الآن؟",
    type: "cards",
    options: [
      { emoji: "😊", label: "سعيد",  w: { bright: 3 } },
      { emoji: "😌", label: "مرتاح", w: { balance: 2, bright: 1 } },
      { emoji: "😐", label: "عادي",  w: { balance: 2 } },
      { emoji: "😔", label: "حزين",  w: { space: 2, heavy: 1 } },
      { emoji: "😣", label: "متوتر", w: { calm: 3 } },
      { emoji: "😴", label: "مرهق",  w: { calm: 2, heavy: 1 } }
    ]
  },
  {
    text: "كيف تصف طاقتك اليوم؟",
    type: "cards",
    options: [
      { emoji: "⚡", label: "عالية",  w: { bright: 2 } },
      { emoji: "🙂", label: "جيدة",   w: { bright: 1, balance: 1 } },
      { emoji: "😐", label: "متوسطة", w: { balance: 2 } },
      { emoji: "🔋", label: "منخفضة", w: { calm: 2, heavy: 1 } }
    ]
  },
  {
    text: "ماذا تحتاج الآن أكثر؟",
    type: "cards",
    options: [
      { emoji: "🌿", label: "راحة",             w: { calm: 2 } },
      { emoji: "💬", label: "شخص أتحدث معه",   w: { space: 3 } },
      { emoji: "🤍", label: "وقت لنفسي",        w: { calm: 2 } },
      { emoji: "🌤️", label: "تغيير جو",         w: { heavy: 1, calm: 1 } },
      { emoji: "✨", label: "شيء يسعدني",       w: { heavy: 1, space: 1 } }
    ]
  },
  {
    text: "كيف كان يومك حتى الآن؟",
    type: "cards",
    options: [
      { emoji: "☀️", label: "جميل", w: { bright: 3 } },
      { emoji: "😊", label: "جيد",  w: { balance: 2, bright: 1 } },
      { emoji: "😐", label: "عادي", w: { balance: 2 } },
      { emoji: "😮‍💨", label: "متعب", w: { heavy: 2, calm: 1 } },
      { emoji: "🌧️", label: "صعب",  w: { heavy: 2, space: 2 } }
    ]
  },
  {
    text: "لو كان شعورك الآن لونًا، ماذا سيكون؟",
    type: "colors",
    options: [
      { color: "#f7d66b", label: "أصفر",    sub: "دفء وإشراق",  w: { bright: 2 } },
      { color: "#f3a56b", label: "برتقالي", sub: "حيوية",        w: { bright: 2 } },
      { color: "#f4a9c0", label: "وردي",    sub: "لطف وحنان",    w: { bright: 1, balance: 1 } },
      { color: "#8cc7a1", label: "أخضر",    sub: "هدوء وسكينة",  w: { calm: 2, balance: 1 } },
      { color: "#82b6e3", label: "أزرق",    sub: "صفاء وعمق",    w: { balance: 1, space: 1 } },
      { color: "#b6a2e3", label: "بنفسجي",  sub: "تأمل",         w: { calm: 1, space: 1 } },
      { color: "#a9b0b8", label: "رمادي",   sub: "ثقل وغموض",    w: { heavy: 2, space: 1 } }
    ]
  }
];

/* ---------------------------------------------------------
   2) النتائج المحتملة
   لتعديل النصوص غيّرها من هنا مباشرة.
   --------------------------------------------------------- */
const RESULTS = {
  bright: {
    emoji: "🌞",
    title: "مزاجك مشرق",
    desc: "يبدو أن مزاجك الآن يميل إلى الإشراق والحيوية، وكأن يومك يحمل لك طاقة لطيفة.",
    tip: "شارك هذه الطاقة مع من حولك بابتسامة أو كلمة طيبة، فقد تكون سبب سعادة لشخص آخر.",
    accent: "#f7d66b"
  },
  balance: {
    emoji: "🌸",
    title: "أنت في حالة توازن",
    desc: "يبدو أن مزاجك الآن يميل إلى الاتزان والهدوء، وأنك تسير بإيقاع مريح.",
    tip: "حافظ على هذا التوازن بعادات صغيرة: شرب الماء، النوم الكافي، ولحظات قصيرة تقضيها مع نفسك.",
    accent: "#f4a9c0"
  },
  calm: {
    emoji: "🌿",
    title: "تحتاج إلى بعض الهدوء",
    desc: "يبدو أن يومك كان مليئًا بالأشياء. قد تكون بحاجة إلى لحظة تلتقط فيها أنفاسك.",
    tip: "خذ لحظة لنفسك، تنفس بعمق ببطء، واسمح لنفسك ببعض الراحة دون استعجال.",
    accent: "#8cc7a1"
  },
  heavy: {
    emoji: "☁️",
    title: "يبدو أن يومك كان ثقيلًا",
    desc: "ربما حمل يومك أشياء أكثر من المعتاد، وهذا أمر يمر به الجميع أحيانًا.",
    tip: "كن لطيفًا مع نفسك اليوم؛ جرّب مشروبًا دافئًا، أو مشيًا قصيرًا، أو شيئًا بسيطًا تحبه.",
    accent: "#a9b0b8"
  },
  space: {
    emoji: "💙",
    title: "تحتاج إلى مساحة واحتواء",
    desc: "ربما تحتاج الآن إلى مساحة هادئة وإلى من يسمعك ويشعر بك.",
    tip: "تحدث مع شخص تثق به، أو اكتب ما تشعر به على ورقة. مشاركة المشاعر تخفف كثيرًا.",
    accent: "#82b6e3"
  }
};

/* عند تساوي النقاط: الأولوية للنتيجة الأكثر احتواءً (الأولى أعلى أولوية) */
const TIE_PRIORITY = ["space", "heavy", "calm", "balance", "bright"];

/* ---------------------------------------------------------
   3) الحالة والعناصر
   --------------------------------------------------------- */
const TOTAL = QUESTIONS.length;
let current = 0;                       // رقم السؤال الحالي (يبدأ من 0)
let answers = new Array(TOTAL).fill(null); // فهرس الخيار المختار لكل سؤال

const $ = (id) => document.getElementById(id);

const screens = {
  intro: $("screen-intro"),
  quiz: $("screen-quiz"),
  result: $("screen-result")
};

const el = {
  start: $("btn-start"),
  prev: $("btn-prev"),
  next: $("btn-next"),
  restart: $("btn-restart"),
  box: $("question-box"),
  title: $("question-title"),
  options: $("options"),
  progressText: $("progress-text"),
  progressFill: $("progress-fill"),
  progressBar: $("progress-bar")
};

/* ---------------------------------------------------------
   4) التنقل بين الشاشات
   --------------------------------------------------------- */
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------------------------------------------------
   5) عرض السؤال
   direction: "next" | "prev" | null  (لتحديد اتجاه الحركة)
   --------------------------------------------------------- */
function renderQuestion(direction) {
  const q = QUESTIONS[current];

  el.title.textContent = q.text;
  el.options.innerHTML = "";
  el.options.className = "options" + (q.type === "colors" ? " colors" : "");

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.setAttribute("role", "radio");

    if (q.type === "colors") {
      const dot = document.createElement("span");
      dot.className = "color-dot";
      dot.style.background = opt.color;
      btn.appendChild(dot);

      const label = document.createElement("span");
      label.textContent = opt.label;
      btn.appendChild(label);

      const sub = document.createElement("span");
      sub.className = "sub";
      sub.textContent = opt.sub;
      btn.appendChild(sub);
    } else {
      const emoji = document.createElement("span");
      emoji.className = "emoji";
      emoji.textContent = opt.emoji;
      btn.appendChild(emoji);

      const label = document.createElement("span");
      label.textContent = opt.label;
      btn.appendChild(label);
    }

    const isSelected = answers[current] === i;
    btn.classList.toggle("selected", isSelected);
    btn.setAttribute("aria-checked", String(isSelected));

    btn.addEventListener("click", () => selectOption(i));
    el.options.appendChild(btn);
  });

  // حركة الانتقال
  el.box.classList.remove("anim-next", "anim-prev");
  if (direction) {
    void el.box.offsetWidth; // إعادة تشغيل الحركة
    el.box.classList.add(direction === "next" ? "anim-next" : "anim-prev");
  }

  updateProgress();
  updateButtons();
}

function selectOption(index) {
  answers[current] = index;

  [...el.options.children].forEach((btn, i) => {
    const on = i === index;
    btn.classList.toggle("selected", on);
    btn.setAttribute("aria-checked", String(on));
  });

  updateButtons();
}

function updateProgress() {
  const n = current + 1;
  el.progressText.textContent = `السؤال ${n} من ${TOTAL}`;
  el.progressFill.style.width = `${(n / TOTAL) * 100}%`;
  el.progressBar.setAttribute("aria-valuenow", String(n));
}

function updateButtons() {
  el.prev.disabled = current === 0;
  el.next.disabled = answers[current] === null; // لا انتقال بدون اختيار
  el.next.textContent = current === TOTAL - 1 ? "عرض النتيجة ✨" : "التالي ←";
}

/* ---------------------------------------------------------
   6) حساب النتيجة (يعتمد فعليًا على الإجابات)
   --------------------------------------------------------- */
function computeResult() {
  const scores = { bright: 0, balance: 0, calm: 0, heavy: 0, space: 0 };

  answers.forEach((ansIndex, qIndex) => {
    const weights = QUESTIONS[qIndex].options[ansIndex].w;
    for (const key in weights) scores[key] += weights[key];
  });

  let best = TIE_PRIORITY[0];
  TIE_PRIORITY.forEach((key) => {
    if (scores[key] > scores[best]) best = key;
  });

  return best;
}

function showResult() {
  const key = computeResult();
  const r = RESULTS[key];

  $("result-emoji").textContent = r.emoji;
  $("result-title").textContent = r.title;
  $("result-desc").textContent = r.desc;
  $("result-tip").textContent = r.tip;
  $("result-card").style.setProperty("--result-accent", r.accent);

  showScreen("result");
}

/* ---------------------------------------------------------
   7) الأحداث
   --------------------------------------------------------- */
el.start.addEventListener("click", () => {
  current = 0;
  answers = new Array(TOTAL).fill(null);
  showScreen("quiz");
  renderQuestion(null);
});

el.next.addEventListener("click", () => {
  if (answers[current] === null) return;

  if (current < TOTAL - 1) {
    current++;
    renderQuestion("next");
  } else {
    showResult();
  }
});

el.prev.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion("prev");
  }
});

el.restart.addEventListener("click", () => {
  current = 0;
  answers = new Array(TOTAL).fill(null);
  showScreen("intro");
});