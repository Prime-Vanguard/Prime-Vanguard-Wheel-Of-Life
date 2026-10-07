/**
 * Prime Vanguard Wheel of Mastery.
 * Five-step self assessment, SVG wheel, free 7-day plan, link to the application Form.
 * The page collects and stores nothing. State lives in memory only.
 */
(function () {
  "use strict";

  // Application Form. Only the reel field (entry.1969345638) is ever prefilled.
  var FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSev8ccweWYdOf3ZVeO3ZSEDkCs_EL-gS2_4MCxFsy4phrb1Yg/viewform";
  var FORM_REEL_ENTRY = "entry.1969345638";

  // Canonical pillar order: Faith (axle) first, tie-break follows this order.
  var PILLARS = [
    {
      name: "الإيمان",
      short: "الإيمان",
      metaphor: "المحور",
      question: "إلى أي مدى تحافظ على صلواتك في وقتها؟",
      plan: {
        title: "جبهة الفجر",
        days: [
          "اضبط منبّهًا للفجر ونم مبكرًا، وأدِّ صلاة الفجر في وقتها.",
          "صلِّ الفجر في وقتها، ثم اقرأ أذكار الصباح.",
          "صلِّ الفجر جماعةً إن أمكن، وأخبر أخًا بالتزامك.",
          "حافظ على الفجر، وأضف ركعتين في الضحى.",
          "صلِّ الفجر في وقتها، واقرأ صفحة من القرآن بعده.",
          "صلِّ الفجر، وإن فاتك فاعرف السبب وصحّحه الليلة.",
          "اختم الأسبوع بالفجر في وقته، واكتب ما تغيّر فيك."
        ]
      },
      disclaimer: null
    },
    {
      name: "اللياقة",
      short: "اللياقة",
      metaphor: "الهيكل",
      question: "إلى أي مدى تلتزم بالتمرين بانتظام؟",
      plan: {
        title: "بروتوكول الأربعة لترات والحديد",
        days: [
          "اشرب الماء بانتظام طوال اليوم، والهدف أربعة لترات ما لم ينصحك طبيبك بغير ذلك، وامشِ عشرين دقيقة.",
          "تمرين قوة لجسمك كله مدة أربعين دقيقة، مع بروتين في كل وجبة رئيسية.",
          "الماء والمشي، ونم سبع ساعات على الأقل.",
          "تمرين قوة ثانٍ لجسمك كله.",
          "راحة نشطة: مشي وتمدّد خفيف، مع الماء والبروتين.",
          "تمرين قوة ثالث لجسمك كله.",
          "راجع أسبوعك، واكتب جدول تمارين الأسبوع القادم."
        ]
      },
      disclaimer: "استشر طبيبًا قبل بدء أي برنامج رياضي جديد."
    },
    {
      name: "المال",
      short: "المال",
      metaphor: "الوقود",
      question: "إلى أي مدى تعرف أين تذهب أموالك كل شهر؟",
      plan: {
        title: "الحصن المالي",
        days: [
          "سجّل كل ما أنفقته اليوم، كبيرًا كان أو صغيرًا.",
          "راجع إنفاق آخر سبعة أيام، وصنّفه إلى ضروري وغير ضروري.",
          "اكتب دخلك الشهري ومصروفاتك الثابتة.",
          "اختر مبلغًا صغيرًا ثابتًا للادخار وحوّله فورًا.",
          "اجعل اليوم بلا إنفاق غير ضروري.",
          "تعلّم مفهومًا ماليًا واحدًا من مصدر موثوق، وتأكد أنه موافق للشريعة.",
          "ضع ميزانية شهرية بسيطة، واكتبها في مكان تراه."
        ]
      },
      disclaimer: "محتوى تعليمي مالي فقط، وليس نصيحة مالية معتمدة."
    },
    {
      name: "العقل",
      short: "العقل",
      metaphor: "البوصلة",
      question: "إلى أي مدى تتعلّم مهارة جديدة وتطبّقها فعلًا، لا مجرد المشاهدة؟",
      plan: {
        title: "ساعة المهارة",
        days: [
          "اختر مهارة واحدة تريد إتقانها، واكتب لماذا.",
          "ساعة تعلّم مركّزة دون هاتف.",
          "ساعة تطبيق عملي: أنتج شيئًا ولو كان صغيرًا.",
          "ساعة تعلّم مركّزة دون هاتف.",
          "ساعة تطبيق، ثم اعرض ما أنجزته على أخ.",
          "اقرأ عشرين صفحة من كتاب مفيد.",
          "راجع ما أنجزته، وحدّد خطوتك التالية."
        ]
      },
      disclaimer: null
    },
    {
      name: "الإرث والأخوّة",
      short: "الإرث",
      metaphor: "الوجهة",
      question: "إلى أي مدى لديك إخوة يحاسبونك ويسندونك؟",
      plan: {
        title: "حبل نجاة الإخوة",
        days: [
          "اكتب أسماء ثلاثة إخوة يسندونك، وثلاثة يمكنك أن تسندهم.",
          "اتصل بأخ لم تكلّمه منذ مدة، واسأل عن حاله.",
          "ساعد أخًا في أمر محدد.",
          "اطلب من أخ أن يحاسبك على هدف واحد هذا الأسبوع.",
          "اتصل بأحد أفراد أسرتك.",
          "تصدّق بما تيسّر.",
          "راجع من ساعدت ومن ساعدك، وحدّد ما ستستمر عليه."
        ]
      },
      disclaimer: null
    }
  ];

  var TOTAL = PILLARS.length;
  var AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
  var scores = [0, 0, 0, 0, 0];
  var step = 0;
  var advanceTimer = null;

  function $(id) {
    return document.getElementById(id);
  }

  function toAr(value) {
    return String(value).replace(/\d/g, function (d) {
      return AR_DIGITS.charAt(d);
    });
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // Analytics hook. No vendor script is loaded. Never pass scores or personal data.
  function track(name) {
    try {
      window.dispatchEvent(new CustomEvent("pv:event", { detail: { name: name } }));
      if (typeof window.pvTrack === "function") window.pvTrack(name);
    } catch (e) {
      /* ignore */
    }
  }

  // Reel ID from ?utm_content=reel03_hookA, otherwise "direct".
  function getReelId() {
    try {
      var value = new URLSearchParams(window.location.search).get("utm_content") || "";
      return /^[A-Za-z0-9_-]{1,40}$/.test(value) ? value : "direct";
    } catch (e) {
      return "direct";
    }
  }

  function applyUrl() {
    return FORM_URL + "?usp=pp_url&" + FORM_REEL_ENTRY + "=" + encodeURIComponent(getReelId());
  }

  // ---------- Wheel (SVG radar) ----------
  var SVG_NS = "http://www.w3.org/2000/svg";
  var CX = 160;
  var CY = 160;
  var RADIUS = 100;
  var LABEL_RADIUS = 134;

  function svgEl(name, attrs) {
    var el = document.createElementNS(SVG_NS, name);
    for (var key in attrs) el.setAttribute(key, attrs[key]);
    return el;
  }

  function polar(index, radius) {
    var angle = ((-90 + index * (360 / TOTAL)) * Math.PI) / 180;
    return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
  }

  function createWheel(svg) {
    var i;
    for (i = 2; i <= 10; i += 2) {
      var pts = [];
      for (var k = 0; k < TOTAL; k++) {
        var p = polar(k, (RADIUS * i) / 10);
        pts.push(p.x.toFixed(1) + "," + p.y.toFixed(1));
      }
      svg.appendChild(svgEl("polygon", { class: "ring", points: pts.join(" ") }));
    }
    var dots = [];
    var labels = [];
    for (i = 0; i < TOTAL; i++) {
      var end = polar(i, RADIUS);
      svg.appendChild(svgEl("line", { class: "axis", x1: CX, y1: CY, x2: end.x, y2: end.y }));
    }
    var shape = svgEl("polygon", { class: "shape", points: "" });
    svg.appendChild(shape);
    var spoke = svgEl("line", { class: "spoke", x1: CX, y1: CY, x2: CX, y2: CY, visibility: "hidden" });
    svg.appendChild(spoke);
    for (i = 0; i < TOTAL; i++) {
      var e = polar(i, RADIUS);
      var dot = svgEl("circle", { class: "dot", cx: e.x, cy: e.y, r: 4 });
      svg.appendChild(dot);
      dots.push(dot);
      var lp = polar(i, LABEL_RADIUS);
      var anchor = lp.x < CX - 8 ? "end" : lp.x > CX + 8 ? "start" : "middle";
      var label = svgEl("text", { class: "label", x: lp.x, y: lp.y + 4, "text-anchor": anchor });
      label.textContent = PILLARS[i].short;
      svg.appendChild(label);
      labels.push(label);
    }

    var current = [0, 0, 0, 0, 0];
    var raf = null;

    function draw(values, flat) {
      var pts = [];
      for (var j = 0; j < TOTAL; j++) {
        var p = polar(j, (RADIUS * values[j]) / 10);
        pts.push(p.x.toFixed(1) + "," + p.y.toFixed(1));
      }
      shape.setAttribute("points", pts.join(" "));
      for (var m = 0; m < TOTAL; m++) {
        var isFlat = m === flat;
        dots[m].setAttribute("class", isFlat ? "dot flat" : "dot");
        dots[m].setAttribute("r", isFlat ? 5.5 : 4);
        labels[m].setAttribute("class", isFlat ? "label flat" : "label");
      }
      if (flat >= 0) {
        var tip = polar(flat, (RADIUS * values[flat]) / 10);
        spoke.setAttribute("x2", tip.x);
        spoke.setAttribute("y2", tip.y);
        spoke.setAttribute("visibility", "visible");
      } else {
        spoke.setAttribute("visibility", "hidden");
      }
    }

    return {
      set: function (target, flat) {
        if (raf) cancelAnimationFrame(raf);
        var from = current.slice();
        var to = target.slice();
        if (reducedMotion()) {
          current = to;
          draw(current, flat);
          return;
        }
        var start = null;
        function frame(ts) {
          if (start === null) start = ts;
          var t = Math.min((ts - start) / 500, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          current = from.map(function (v, idx) {
            return v + (to[idx] - v) * eased;
          });
          draw(current, t === 1 ? flat : -1);
          if (t < 1) raf = requestAnimationFrame(frame);
          else current = to;
        }
        raf = requestAnimationFrame(frame);
      }
    };
  }

  var liveWheel;
  var resultWheel;

  // ---------- Assessment ----------
  function show(el, visible) {
    if (visible) el.removeAttribute("hidden");
    else el.setAttribute("hidden", "");
  }

  function scrollTo(el) {
    try {
      el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
    } catch (e) {
      el.scrollIntoView();
    }
  }

  function buildScale() {
    var scale = $("scale");
    for (var n = 1; n <= 10; n++) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = toAr(n);
      btn.setAttribute("data-value", n);
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", toAr(n) + " من ١٠");
      btn.addEventListener("click", onPick);
      scale.appendChild(btn);
    }
  }

  function renderStep() {
    var p = PILLARS[step];
    $("step-title").textContent = p.name;
    $("step-metaphor").textContent = "(" + p.metaphor + ")";
    $("step-question").textContent = p.question;
    $("step-count").textContent = "السؤال " + toAr(step + 1) + " من " + toAr(TOTAL);
    var bar = document.querySelector(".progress");
    bar.setAttribute("aria-valuenow", step);
    $("progress-fill").style.inlineSize = (step / TOTAL) * 100 + "%";
    var buttons = $("scale").children;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", scores[step] === i + 1 ? "true" : "false");
    }
    liveWheel.set(scores, -1);
  }

  function onPick(e) {
    var value = parseInt(e.currentTarget.getAttribute("data-value"), 10);
    if (advanceTimer) clearTimeout(advanceTimer);
    scores[step] = value;
    var buttons = $("scale").children;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", i + 1 === value ? "true" : "false");
    }
    liveWheel.set(scores, -1);
    track("pillar_done_" + (step + 1));
    advanceTimer = setTimeout(function () {
      if (step < TOTAL - 1) {
        step++;
        renderStep();
        $("step-title").focus({ preventScroll: true });
      } else {
        finish();
      }
    }, 260);
  }

  function startAssessment() {
    scores = [0, 0, 0, 0, 0];
    step = 0;
    show($("hero"), false);
    show($("result"), false);
    show($("assessment"), true);
    renderStep();
    track("assessment_start");
    scrollTo($("assessment"));
    $("step-title").focus({ preventScroll: true });
  }

  function goBack() {
    if (advanceTimer) clearTimeout(advanceTimer);
    if (step === 0) {
      show($("assessment"), false);
      show($("hero"), true);
      scrollTo($("hero"));
      return;
    }
    step--;
    renderStep();
    $("step-title").focus({ preventScroll: true });
  }

  // ---------- Result ----------
  function band(score) {
    if (score <= 3) return "حرجة";
    if (score <= 6) return "مهتزّة";
    return "متينة";
  }

  function finish() {
    var sum = 0;
    var flat = 0;
    for (var i = 0; i < TOTAL; i++) {
      sum += scores[i];
      // Strictly lower wins, so ties go to the earlier pillar (Faith first).
      if (scores[i] < scores[flat]) flat = i;
    }
    var average = sum / TOTAL;
    var lowest = scores[flat];
    var balanced = lowest >= 8;
    var pillar = PILLARS[flat];

    $("score-value").textContent = toAr(average.toFixed(1)) + "/" + toAr(10);
    $("flat-line").innerHTML = "";
    var lead = document.createTextNode(balanced ? "أضعف أركانك: " : "الإطار المثقوب: ");
    var name = document.createElement("span");
    name.className = "flat-name";
    name.textContent = pillar.name;
    $("flat-line").appendChild(lead);
    $("flat-line").appendChild(name);
    $("band-line").textContent = "الحالة: " + band(lowest) + " (" + toAr(lowest) + "/" + toAr(10) + ")";
    $("truth-line").textContent = balanced
      ? "عجلتك متوازنة. حافظ عليها وارفع أضعف أركانها."
      : "إطار واحد مثقوب يوقف العجلة كلها.";

    var disclaimer = $("result-disclaimer");
    if (pillar.disclaimer) {
      disclaimer.textContent = pillar.disclaimer;
      show(disclaimer, true);
    } else {
      show(disclaimer, false);
    }

    $("plan-heading").textContent = "خطتك لسبعة أيام: " + pillar.plan.title;
    $("plan-days").innerHTML = "";
    pillar.plan.days.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      $("plan-days").appendChild(li);
    });
    // The plan is intro-ed with the pillar name.
    var note = document.querySelector(".plan-note");
    note.textContent = "هذه الخطة مجانية ولا تتطلب أي بيانات. ابدأ تحدّي الأيام السبعة المناسب لركن " + pillar.name + ".";

    $("copy-reminder").textContent =
      "اكتب نتيجتك في نموذج التقديم: درجتك " +
      toAr(average.toFixed(1)) +
      "/" +
      toAr(10) +
      "، والإطار المثقوب هو " +
      pillar.name +
      ".";

    var svg = $("wheel-result");
    svg.setAttribute(
      "aria-label",
      "مخطط عجلتك. متوسط الدرجات " + toAr(average.toFixed(1)) + " من ١٠. أضعف الأركان: " + pillar.name
    );

    show($("assessment"), false);
    show($("result"), true);
    $("progress-fill").style.inlineSize = "100%";
    track("assessment_complete");
    scrollTo($("result"));
    $("result-title").focus({ preventScroll: true });
    resultWheel.set(scores, balanced ? -1 : flat);
  }

  function init() {
    liveWheel = createWheel($("wheel-live"));
    resultWheel = createWheel($("wheel-result"));
    buildScale();

    var url = applyUrl();
    ["apply-btn", "apply-btn-2"].forEach(function (id) {
      var a = $(id);
      a.setAttribute("href", url);
      a.addEventListener("click", function () {
        track("apply_click");
      });
    });

    $("start-btn").addEventListener("click", startAssessment);
    $("back-btn").addEventListener("click", goBack);
    $("restart-btn").addEventListener("click", startAssessment);

    track("page_view");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
