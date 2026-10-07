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
  var PILLARS_AR = [
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

  var PILLARS_EN = [
    {
      name: "Faith",
      short: "Faith",
      metaphor: "The Axle",
      question: "How consistently do you pray on time?",
      plan: {
        title: "The Fajr Front",
        days: [
          "Set a Fajr alarm, sleep early, and pray Fajr on time.",
          "Pray Fajr on time, then read the morning adhkar.",
          "Pray Fajr in congregation if you can, and tell a brother about your commitment.",
          "Hold Fajr, and add two rak'ahs of Duha.",
          "Pray Fajr on time and read one page of the Quran after it.",
          "Pray Fajr. If you miss it, find out why and fix it tonight.",
          "Close the week with Fajr on time, and write down what has changed in you."
        ]
      },
      disclaimer: null
    },
    {
      name: "Fitness",
      short: "Fitness",
      metaphor: "The Frame",
      question: "How consistently do you train?",
      plan: {
        title: "The Four Liters and Iron Protocol",
        days: [
          "Drink water steadily through the day, aiming for four liters unless your doctor advises otherwise, and walk twenty minutes.",
          "A full-body strength session of forty minutes, with protein at every main meal.",
          "Water and a walk, and sleep at least seven hours.",
          "A second full-body strength session.",
          "Active rest: walking and light stretching, with water and protein.",
          "A third full-body strength session.",
          "Review your week and write next week's training schedule."
        ]
      },
      disclaimer: "Consult a physician before starting any new program."
    },
    {
      name: "Finance",
      short: "Finance",
      metaphor: "The Fuel",
      question: "How well do you know where your money goes each month?",
      plan: {
        title: "The Financial Fortress",
        days: [
          "Record everything you spent today, big or small.",
          "Review the last seven days of spending and sort it into needed and unneeded.",
          "Write down your monthly income and fixed expenses.",
          "Pick a small fixed amount to save and transfer it right away.",
          "Make today a day with no unnecessary spending.",
          "Learn one financial concept from a trusted source, and check that it is Shariah-compliant.",
          "Set a simple monthly budget and write it where you will see it."
        ]
      },
      disclaimer: "Financial education only \u2014 not certified financial advice."
    },
    {
      name: "Intellect",
      short: "Intellect",
      metaphor: "The Compass",
      question: "How often do you learn a new skill and actually apply it, not just watch?",
      plan: {
        title: "The Skill Hour",
        days: [
          "Choose one skill you want to master and write down why.",
          "One focused hour of learning, phone away.",
          "One hour of hands-on practice: produce something, even if it is small.",
          "One focused hour of learning, phone away.",
          "One hour of practice, then show what you made to a brother.",
          "Read twenty pages of a useful book.",
          "Review what you achieved and decide your next step."
        ]
      },
      disclaimer: null
    },
    {
      name: "Legacy & Brotherhood",
      short: "Legacy",
      metaphor: "The Destination",
      question: "How many brothers hold you accountable and support you?",
      plan: {
        title: "The Brotherhood Lifeline",
        days: [
          "Write the names of three brothers who support you and three you can support.",
          "Call a brother you have not spoken to in a while and ask how he is.",
          "Help a brother with one specific thing.",
          "Ask a brother to hold you accountable to one goal this week.",
          "Call a member of your family.",
          "Give what charity you can.",
          "Review who you helped and who helped you, and decide what you will keep doing."
        ]
      },
      disclaimer: null
    }
  ];
  var PILLARS = PILLARS_AR;
  var lang = "ar";

  var TOTAL = PILLARS.length;
  var AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
  var scores = [0, 0, 0, 0, 0];
  var step = 0;
  var advanceTimer = null;

  function $(id) {
    return document.getElementById(id);
  }

  // Arabic-Indic digits in Arabic, Western digits in English.
  function num(value) {
    if (lang !== "ar") return String(value);
    return String(value).replace(/\d/g, function (d) {
      return AR_DIGITS.charAt(d);
    });
  }

  function t(ar, en) {
    return lang === "ar" ? ar : en;
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // Analytics hook. No vendor script is loaded. Never pass scores or personal data.
  function track(name) {
    try {
      window.dispatchEvent(new CustomEvent("pv:event", { detail: { name: name } }));
      if (typeof window.pvTrack === "function") window.pvTrack(name);
      if (window.umami && typeof window.umami.track === "function") window.umami.track(name);
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

    function relabel() {
      for (var q = 0; q < TOTAL; q++) labels[q].textContent = PILLARS[q].short;
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
      relabel: relabel,
      redraw: function (flat) {
        draw(current, flat);
      },
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

  function scaleLabel(n) {
    return t(num(n) + " من ١٠", n + " out of 10");
  }

  function relabelScale() {
    var buttons = $("scale").children;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = num(i + 1);
      buttons[i].setAttribute("aria-label", scaleLabel(i + 1));
    }
  }

  function buildScale() {
    var scale = $("scale");
    for (var n = 1; n <= 10; n++) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = num(n);
      btn.setAttribute("data-value", n);
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", scaleLabel(n));
      btn.addEventListener("click", onPick);
      scale.appendChild(btn);
    }
  }

  function renderStep() {
    var p = PILLARS[step];
    $("step-title").textContent = p.name;
    $("step-metaphor").textContent = "(" + p.metaphor + ")";
    $("step-question").textContent = p.question;
    $("step-count").textContent = t("السؤال " + num(step + 1) + " من " + num(TOTAL), "Question " + (step + 1) + " of " + TOTAL);
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
    resultShown = false;
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
    if (score <= 3) return t("حرجة", "Critical");
    if (score <= 6) return t("مهتزّة", "Shaky");
    return t("متينة", "Solid");
  }

  var resultShown = false;

  function finish() {
    show($("assessment"), false);
    show($("result"), true);
    resultShown = true;
    $("progress-fill").style.inlineSize = "100%";
    track("assessment_complete");
    renderResult();
    scrollTo($("result"));
    $("result-title").focus({ preventScroll: true });
  }

  function renderResult() {
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

    $("score-value").textContent = num(average.toFixed(1)) + "/" + num(10);
    $("flat-line").innerHTML = "";
    var lead = document.createTextNode(
      balanced ? t("أضعف أركانك: ", "Weakest pillar: ") : t("الإطار المثقوب: ", "Your flat tire: ")
    );
    var name = document.createElement("span");
    name.className = "flat-name";
    name.textContent = pillar.name;
    $("flat-line").appendChild(lead);
    $("flat-line").appendChild(name);
    $("band-line").textContent =
      t("الحالة: ", "Status: ") + band(lowest) + " (" + num(lowest) + "/" + num(10) + ")";
    $("truth-line").textContent = balanced
      ? t("عجلتك متوازنة. حافظ عليها وارفع أضعف أركانها.", "Your wheel is balanced. Keep it that way and lift your weakest pillar.")
      : t("إطار واحد مثقوب يوقف العجلة كلها.", "One flat tire stops the whole wheel.");

    var disclaimer = $("result-disclaimer");
    if (pillar.disclaimer) {
      disclaimer.textContent = pillar.disclaimer;
      show(disclaimer, true);
    } else {
      show(disclaimer, false);
    }

    $("plan-heading").textContent = t("خطتك لسبعة أيام: ", "Your 7-day plan: ") + pillar.plan.title;
    $("plan-days").innerHTML = "";
    pillar.plan.days.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      $("plan-days").appendChild(li);
    });
    // The plan is intro-ed with the pillar name.
    var note = document.querySelector(".plan-note");
    note.textContent = t(
      "هذه الخطة مجانية ولا تتطلب أي بيانات. ابدأ تحدّي الأيام السبعة المناسب لركن " + pillar.name + ".",
      "This plan is free and needs no data. Start the 7-day challenge for " + pillar.name + "."
    );

    $("copy-reminder").textContent = t(
      "اكتب نتيجتك في نموذج التقديم: درجتك " + num(average.toFixed(1)) + "/" + num(10) + "، والإطار المثقوب هو " + pillar.name + ".",
      "Enter your result in the application form: your score is " + average.toFixed(1) + "/10, and your flat tire is " + pillar.name + "."
    );

    var svg = $("wheel-result");
    svg.setAttribute(
      "aria-label",
      t(
        "مخطط عجلتك. متوسط الدرجات " + num(average.toFixed(1)) + " من ١٠. أضعف الأركان: " + pillar.name,
        "Your wheel chart. Average score " + average.toFixed(1) + " out of 10. Weakest pillar: " + pillar.name
      )
    );
    resultWheel.set(scores, balanced ? -1 : flat);
  }

  // ---------- Language ----------
  var EN = {
    skip: "Skip to content",
    hero_title: "Where is the flat tire in your life?",
    hero_lead: "Rate yourself across five pillars in two minutes and see your wheel as it really is. Your weakest point is what stops it from rolling.",
    start: "Start your wheel assessment",
    micro: "Free \u2022 No sign-up \u2022 Two minutes",
    noscript: "This assessment needs JavaScript enabled in your browser.",
    back: "Back",
    anc1: "1 = Absent",
    anc3: "5 = Sometimes yes, sometimes no",
    anc5: "10 = Steady every day",
    result_title: "Your result",
    score_label: "Your wheel average",
    honesty: "This is a self-assessment for awareness, not a diagnosis.",
    apply_h: "Ready to stop walking alone?",
    apply_btn: "Apply to join",
    step1: "Submit your application.",
    step2: "A team member will message you on WhatsApp for a short text chat.",
    step3: "If you are a fit, we welcome you and start your journey.",
    honest: "Membership in the private community is by application and subscription only, to protect the quality of the brotherhood.",
    price: "Subscription: 1000 EGP per month.",
    restart: "Retake the assessment",
    strip_h: "Five pillars, one wheel",
    strip_lead: "Faith is the axle and the other pillars are the spokes. Each has its role, and if one breaks, the whole wheel stops.",
    pc_plan: "Your free 7-day plan",
    pc1_role: "The Axle",
    pc1_name: "Faith & Spiritual Commitment",
    pc1_desc: "The center that holds the wheel together. If your relationship with Allah is weak, every other area of your life will eventually wobble.",
    pc1_plan: "The Fajr Front",
    pc2_role: "The Frame",
    pc2_name: "Fitness & Physical Armor",
    pc2_desc: "The vessel that carries your mission. You cannot carry a heavy legacy in a weak body.",
    pc2_plan: "The Four Liters and Iron Protocol",
    pc3_role: "The Fuel",
    pc3_name: "Finance & Wealth Building",
    pc3_desc: "The resources that protect your family, fund your ventures, and let you give Sadaqah and Zakat.",
    pc3_plan: "The Financial Fortress",
    pc4_role: "The Compass",
    pc4_name: "Intellect & Personal Development",
    pc4_desc: "The mindset, emotional intelligence and continuous learning that let you navigate challenges and set your direction.",
    pc4_plan: "The Skill Hour",
    pc5_role: "The Destination",
    pc5_name: "Legacy & Brotherhood",
    pc5_desc: "Your impact on the Ummah, your contribution to your community, and the brothers you lift along the way.",
    pc5_plan: "The Brotherhood Lifeline",
    strip_cta_text: "Not sure which pillar is your flat tire?",
    strip_cta: "Find out in two minutes",
    founder_h: "A word from the founder",
    founder_p: "I will not sell you an illusion. Prime Vanguard is at its beginning, and we are building it with brothers who believe discipline is built by structure and brotherhood, not temporary hype. If that is you, apply.",
    founder_sig: "\u2014 Founder, Prime Vanguard",
    faq_h: "Frequently asked questions",
    q1: "Is the community free?",
    a1: "The WhatsApp community is free and opens to you after you apply. The private in-app community is paid by subscription.",
    q2: "How long does the assessment take?",
    a2: "About two minutes. Five questions, no sign-up.",
    q3: "What happens to my data?",
    a3: "This page collects no data and stores nothing. You enter your details only in the application form, if you decide to apply.",
    q4: "Who reviews my application?",
    a4: "A member of the Prime Vanguard team, through a short text chat on WhatsApp. No voice calls.",
    q5: "How much does membership cost?",
    a5: "1000 EGP per month, and membership is by application only.",
    legal_fin: "Financial education only \u2014 not certified financial advice.",
    legal_fit: "Consult a physician before starting any new program.",
    legal_copy: "\u00a9 2026 Prime Vanguard. All rights reserved."
  };
  var AR = {};
  var TITLE = { ar: "Prime Vanguard | عجلة الإتقان", en: "Prime Vanguard | Wheel of Mastery" };

  function captureArabic() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (!(key in AR)) AR[key] = nodes[i].textContent;
    }
  }

  function initialLang() {
    try {
      return new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "ar";
    } catch (e) {
      return "ar";
    }
  }

  function applyLang(next, fromToggle) {
    lang = next;
    PILLARS = lang === "en" ? PILLARS_EN : PILLARS_AR;
    var root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
    document.title = TITLE[lang];

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      nodes[i].textContent = lang === "en" ? EN[key] : AR[key];
    }

    var btn = $("lang-btn");
    btn.textContent = lang === "en" ? "العربية" : "English";
    btn.setAttribute("lang", lang === "en" ? "ar" : "en");
    btn.setAttribute("aria-label", lang === "en" ? "التبديل إلى العربية" : "Switch to English");
    document.querySelector(".progress").setAttribute("aria-label", t("تقدّم التقييم", "Assessment progress"));
    $("wheel-result").setAttribute("aria-label", t("مخطط عجلتك", "Your wheel chart"));
    $("score-value").setAttribute("dir", "ltr");

    liveWheel.relabel();
    resultWheel.relabel();
    relabelScale();
    if (!$("assessment").hasAttribute("hidden")) renderStep();
    if (resultShown) renderResult();

    if (fromToggle) {
      try {
        var u = new URL(window.location.href);
        if (lang === "en") u.searchParams.set("lang", "en");
        else u.searchParams.delete("lang");
        history.replaceState(null, "", u.pathname + u.search + u.hash);
      } catch (e) {
        /* ignore */
      }
      track("language_" + lang);
    }
  }

  function init() {
    captureArabic();
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
    $("strip-cta").addEventListener("click", function (e) {
      e.preventDefault();
      startAssessment();
    });
    $("back-btn").addEventListener("click", goBack);
    $("restart-btn").addEventListener("click", startAssessment);
    $("lang-btn").addEventListener("click", function () {
      applyLang(lang === "en" ? "ar" : "en", true);
    });
    if (initialLang() === "en") applyLang("en", false);

    track("page_view");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
