/**
 * Prime Vanguard Wheel of Life - Main JavaScript
 * Handles interactive wheel assessment, chart rendering, and data persistence
 */

// Pillar Data
const pillars = [
  {
    id: "faith",
    name: "Faith & Spiritual Commitment",
    subtitle: "The Axle",
    icon: "🕌",
    color: "#D4AF37",
    description:
      "The center that holds the wheel together. If your relationship with Allah is weak, every other area of your life will eventually wobble and collapse.",
    pvRole:
      "Foundation for all other pillars. Without this, nothing else sustains.",
    priority: 1,
  },
  {
    id: "fitness",
    name: "Fitness & Physical Armor",
    subtitle: "The Chassis",
    icon: "💪",
    color: "#10B981",
    description:
      "The physical vessel. You cannot carry a heavy legacy in a weak body.",
    pvRole: "Daily discipline, weekly check-ins, customized workout plans.",
    priority: 2,
  },
  {
    id: "finance",
    name: "Finance & Wealth Building",
    subtitle: "The Fuel",
    icon: "💰",
    color: "#3B82F6",
    description:
      "The resources required to protect your family, fund your ventures, and give Sadaqah/Zakat.",
    pvRole: "Thundr portfolio reviews, DCA execution, financial education.",
    priority: 3,
  },
  {
    id: "personal",
    name: "Personal Development & Intellect",
    subtitle: "The Navigation",
    icon: "🧠",
    color: "#A855F7",
    description:
      "The mindset, emotional intelligence, and continuous learning required to navigate challenges.",
    pvRole: "Curated resources, expert courses, weekly challenges.",
    priority: 4,
  },
  {
    id: "legacy",
    name: "Legacy & Brotherhood",
    subtitle: "The Destination",
    icon: "🤝",
    color: "#EF4444",
    description:
      "Your impact on the Ummah, your contribution to the community, and the brothers you elevate along the way.",
    pvRole: "Mandatory help rule, accountability pods, venture access.",
    priority: 5,
  },
];

// Default scores
const defaultScores = {
  faith: 5,
  fitness: 5,
  finance: 5,
  personal: 5,
  legacy: 5,
};

// Challenge Library
const challengeLibrary = {
  faith: {
    quick: [
      {
        name: "Fajr Frontline",
        duration: "5 days",
        difficulty: "Easy",
        description: "Pray Fajr on time every day",
        successCriteria: "5 consecutive days",
      },
      {
        name: "Wudu Before Bed",
        duration: "7 days",
        difficulty: "Easy",
        description: "Prepare wudu before sleeping",
        successCriteria: "7 consecutive days",
      },
      {
        name: "Morning Adhkar",
        duration: "3 days",
        difficulty: "Easy",
        description: "Recite morning adhkar after Fajr",
        successCriteria: "3 consecutive days",
      },
    ],
    weekly: [
      {
        name: "Quran Consistency",
        duration: "1 week",
        difficulty: "Medium",
        description: "Read 1 page of Quran daily",
        successCriteria: "7 pages completed",
      },
      {
        name: "Dhuha Prayer",
        duration: "1 week",
        difficulty: "Medium",
        description: "Pray Dhuha (2-12 rakats)",
        successCriteria: "5+ days completed",
      },
      {
        name: "Night Prayer",
        duration: "1 week",
        difficulty: "Hard",
        description: "Pray Tahajjud at least once",
        successCriteria: "3+ nights completed",
      },
    ],
    monthly: [
      {
        name: "Ramadan Prep",
        duration: "1 month",
        difficulty: "Hard",
        description: "Build consistent prayer habits",
        successCriteria: "90% prayers on time",
      },
      {
        name: "Quran Juz",
        duration: "1 month",
        difficulty: "Medium",
        description: "Complete 1 Juz of Quran",
        successCriteria: "1 Juz completed",
      },
    ],
  },
  fitness: {
    quick: [
      {
        name: "Hydration Kickstart",
        duration: "3 days",
        difficulty: "Easy",
        description: "Drink 3L water daily",
        successCriteria: "3 consecutive days",
      },
      {
        name: "Morning Walk",
        duration: "5 days",
        difficulty: "Easy",
        description: "15-minute walk before breakfast",
        successCriteria: "5 consecutive days",
      },
      {
        name: "No Sugar",
        duration: "3 days",
        difficulty: "Medium",
        description: "Eliminate added sugar",
        successCriteria: "3 consecutive days",
      },
    ],
    weekly: [
      {
        name: "4-Liter Protocol",
        duration: "1 week",
        difficulty: "Medium",
        description: "Drink 4L water daily + protein targets",
        successCriteria: "7 days completed",
      },
      {
        name: "Iron Protocol",
        duration: "1 week",
        difficulty: "Hard",
        description: "Train 4x this week",
        successCriteria: "4 workouts completed",
      },
      {
        name: "Step Challenge",
        duration: "1 week",
        difficulty: "Medium",
        description: "Hit 10k steps daily",
        successCriteria: "5+ days at 10k steps",
      },
    ],
    monthly: [
      {
        name: "Strength Foundation",
        duration: "1 month",
        difficulty: "Hard",
        description: "Consistent 4x weekly training",
        successCriteria: "16+ workouts",
      },
      {
        name: "Body Recomp",
        duration: "1 month",
        difficulty: "Hard",
        description: "Hit protein + training targets",
        successCriteria: "80% compliance",
      },
    ],
  },
  finance: {
    quick: [
      {
        name: "Expense Audit",
        duration: "2 days",
        difficulty: "Easy",
        description: "Review last 7 days of spending",
        successCriteria: "Complete audit",
      },
      {
        name: "Savings Transfer",
        duration: "1 day",
        difficulty: "Easy",
        description: "Transfer 10% to savings",
        successCriteria: "Transfer completed",
      },
      {
        name: "No Spend Day",
        duration: "3 days",
        difficulty: "Medium",
        description: "Zero spending days",
        successCriteria: "3 no-spend days",
      },
    ],
    weekly: [
      {
        name: "Thundr Audit",
        duration: "1 week",
        difficulty: "Medium",
        description: "Analyze 1 stock + execute DCA",
        successCriteria: "1 analysis + 1 DCA",
      },
      {
        name: "Budget Review",
        duration: "1 week",
        difficulty: "Easy",
        description: "Track all expenses",
        successCriteria: "100% expense tracking",
      },
      {
        name: "Income Stream",
        duration: "1 week",
        difficulty: "Hard",
        description: "Research 1 new income source",
        successCriteria: "Research completed",
      },
    ],
    monthly: [
      {
        name: "Investment Routine",
        duration: "1 month",
        difficulty: "Medium",
        description: "Execute monthly DCA strategy",
        successCriteria: "4 DCA executions",
      },
      {
        name: "Financial Literacy",
        duration: "1 month",
        difficulty: "Medium",
        description: "Complete 1 finance course/book",
        successCriteria: "Course completed",
      },
    ],
  },
  personal: {
    quick: [
      {
        name: "Monk Mode Morning",
        duration: "3 days",
        difficulty: "Medium",
        description: "90 mins phone-free deep work",
        successCriteria: "3 consecutive days",
      },
      {
        name: "Reading Session",
        duration: "5 days",
        difficulty: "Easy",
        description: "Read 20 pages daily",
        successCriteria: "100 pages total",
      },
      {
        name: "Journaling",
        duration: "3 days",
        difficulty: "Easy",
        description: "Write morning journal",
        successCriteria: "3 consecutive days",
      },
    ],
    weekly: [
      {
        name: "Deep Work Week",
        duration: "1 week",
        difficulty: "Hard",
        description: "4hrs deep work daily, phone-free",
        successCriteria: "20+ hours deep work",
      },
      {
        name: "Skill Building",
        duration: "1 week",
        difficulty: "Medium",
        description: "Dedicate 1hr daily to new skill",
        successCriteria: "7 hours practice",
      },
      {
        name: "Course Module",
        duration: "1 week",
        difficulty: "Medium",
        description: "Complete 1 course module",
        successCriteria: "Module completed",
      },
    ],
    monthly: [
      {
        name: "Book Mastery",
        duration: "1 month",
        difficulty: "Medium",
        description: "Read 1 non-fiction book",
        successCriteria: "Book completed",
      },
      {
        name: "Skill Acquisition",
        duration: "1 month",
        difficulty: "Hard",
        description: "Complete beginner course",
        successCriteria: "Course completed",
      },
    ],
  },
  legacy: {
    quick: [
      {
        name: "Brotherhood Lifeline",
        duration: "1 week",
        difficulty: "Easy",
        description: "Help one brother this week",
        successCriteria: "1 brother helped",
      },
      {
        name: "Family Check-in",
        duration: "3 days",
        difficulty: "Easy",
        description: "Call 1 family member daily",
        successCriteria: "3 calls made",
      },
      {
        name: "Sadaqah",
        duration: "1 day",
        difficulty: "Easy",
        description: "Give charity today",
        successCriteria: "Charity given",
      },
    ],
    weekly: [
      {
        name: "Mentorship Session",
        duration: "1 week",
        difficulty: "Medium",
        description: "Mentor someone for 1hr",
        successCriteria: "Session completed",
      },
      {
        name: "Community Event",
        duration: "1 week",
        difficulty: "Medium",
        description: "Attend or organize community event",
        successCriteria: "Event attended/organized",
      },
      {
        name: "Family Time",
        duration: "1 week",
        difficulty: "Easy",
        description: "Quality time with family",
        successCriteria: "3+ quality sessions",
      },
    ],
    monthly: [
      {
        name: "Impact Project",
        duration: "1 month",
        difficulty: "Hard",
        description: "Lead a community initiative",
        successCriteria: "Project completed",
      },
      {
        name: "Brotherhood Deepen",
        duration: "1 month",
        difficulty: "Medium",
        description: "Strengthen 3 brother relationships",
        successCriteria: "3 relationships deepened",
      },
    ],
  },
};

// Action Items Database
const actionItems = {
  faith: {
    immediate: [
      "Set 3 alarms for Fajr",
      "Prepare wudu before bed",
      "Place Quran in visible location",
    ],
    weekly: [
      "Complete 5 prayers on time",
      "Read 1 Juz",
      "Attend Friday prayer at mosque",
    ],
    resources: [
      'Book: "Purification of the Soul"',
      "App: Muslim Pro",
      "Podcast: The Daily Reminder",
    ],
    pitfalls: [
      "Oversleeping",
      "Inconsistent sleep schedule",
      "Phone distraction in prayer",
    ],
  },
  fitness: {
    immediate: [
      "Schedule workout times",
      "Meal prep for 3 days",
      "Buy water bottle",
    ],
    weekly: [
      "Train 4x this week",
      "Hit protein targets daily",
      "Sleep 7+ hours nightly",
    ],
    resources: [
      "App: MyFitnessPal",
      'Book: "Bigger Leaner Stronger"',
      "Channel: Jeff Nippard",
    ],
    pitfalls: ["Skipping workouts", "Poor sleep", "Inconsistent nutrition"],
  },
  finance: {
    immediate: [
      "Review bank statements",
      "Set up automatic savings",
      "Cancel unused subscriptions",
    ],
    weekly: [
      "Track all expenses",
      "Execute DCA investment",
      "Review financial goals",
    ],
    resources: [
      "App: Thundr",
      'Book: "The Intelligent Investor"',
      "Podcast: The Investor Podcast",
    ],
    pitfalls: [
      "Emotional spending",
      "Lifestyle inflation",
      "No investment strategy",
    ],
  },
  personal: {
    immediate: [
      "Identify top skill to learn",
      "Set up distraction-free workspace",
      "Buy reading material",
    ],
    weekly: [
      "Complete 1 course module",
      "Read 50 pages",
      "Practice skill 1hr daily",
    ],
    resources: [
      "Platform: Coursera/Udemy",
      'Book: "Deep Work"',
      "App: Notion for organization",
    ],
    pitfalls: [
      "Social media distraction",
      "Lack of focus",
      "Inconsistent practice",
    ],
  },
  legacy: {
    immediate: [
      "Identify 3 brothers to help",
      "Call family members",
      "Research local charities",
    ],
    weekly: [
      "Mentor someone",
      "Attend community event",
      "Give regular sadaqah",
    ],
    resources: [
      'Book: "Legacy" by James Kerr',
      "Local community centers",
      "Islamic charities",
    ],
    pitfalls: [
      "Self-focus over others",
      "Inconsistent engagement",
      "Lack of follow-through",
    ],
  },
};

// Scores state - load from localStorage or use defaults
let scores = loadScoresFromStorage();

// Chart instance
let masteryChart = null;

/**
 * Load scores from localStorage
 * @returns {Object} Scores object
 */
function loadScoresFromStorage() {
  try {
    const saved = localStorage.getItem("pvWheelScores");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Failed to load scores from localStorage:", e);
  }
  return { ...defaultScores };
}

/**
 * Save scores to localStorage
 */
function saveScoresToStorage() {
  try {
    localStorage.setItem("pvWheelScores", JSON.stringify(scores));
  } catch (e) {
    console.warn("Failed to save scores to localStorage:", e);
  }
}

/**
 * Reset scores to default values
 */
function resetScores() {
  if (confirm("Are you sure you want to reset all scores to default values?")) {
    scores = { ...defaultScores };
    saveScoresToStorage();
    updateAllScores();
    generateInsights();
  }
}

/**
 * Initialize the application
 */
function init() {
  initMobileMenu();
  initChart();
  renderSliders();
  renderPillars();
  initSmoothScroll();
  initWindowResize();
  initResetButton();
  initDynamicNavbar();
  initActiveNavLinks();
  initScrollProgress();

  // Initial insights generation
  generateInsights();
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

  if (!mobileMenuBtn || !closeMenuBtn || !mobileMenu) return;

  // Create backdrop if it doesn't exist
  if (!mobileMenuBackdrop) {
    const backdrop = document.createElement("div");
    backdrop.id = "mobileMenuBackdrop";
    backdrop.className = "mobile-menu-backdrop";
    document.body.appendChild(backdrop);
  }

  const backdrop = document.getElementById("mobileMenuBackdrop");

  function openMenu() {
    mobileMenu.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100vh";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";
  }

  mobileMenuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
      setTimeout(() => window.dispatchEvent(new Event("scroll")), 250);
    });
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });

  // Keyboard navigation for mobile menu links (arrow keys)
  mobileMenu.addEventListener("keydown", (e) => {
    const navLinks = Array.from(mobileMenu.querySelectorAll('a[href^="#"]'));
    const currentLink = document.activeElement;
    const currentIndex = navLinks.indexOf(currentLink);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % navLinks.length;
      navLinks[nextIndex].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        currentIndex <= 0 ? navLinks.length - 1 : currentIndex - 1;
      navLinks[prevIndex].focus();
    }
  });
}

/**
 * Initialize Chart.js radar chart
 */
function initChart() {
  const ctx = document.getElementById("masteryChart");
  if (!ctx) return;

  try {
    masteryChart = new Chart(ctx.getContext("2d"), {
      type: "radar",
      data: {
        labels: pillars.map((p) => p.subtitle),
        datasets: [
          {
            label: "Your Mastery",
            data: Object.values(scores),
            backgroundColor: "rgba(212, 175, 55, 0.2)",
            borderColor: "#D4AF37",
            borderWidth: 2,
            pointBackgroundColor: "#D4AF37",
            pointBorderColor: "#0F172A",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2,
              color: "#64748B",
              backdropColor: "transparent",
              font: {
                size:
                  window.innerWidth < 640
                    ? 10
                    : window.innerWidth < 1024
                      ? 11
                      : 12,
              },
            },
            grid: {
              color: "rgba(212, 175, 55, 0.15)",
            },
            angleLines: {
              color: "rgba(212, 175, 55, 0.2)",
            },
            pointLabels: {
              color: "#D4AF37",
              font: {
                size:
                  window.innerWidth < 640
                    ? 10
                    : window.innerWidth < 1024
                      ? 11
                      : 12,
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1E293B",
            titleColor: "#D4AF37",
            bodyColor: "#F8FAFC",
            borderColor: "#D4AF37",
            borderWidth: 1,
          },
        },
      },
    });
  } catch (error) {
    console.error("Failed to initialize chart:", error);
  }
}

/**
 * Render slider controls for each pillar
 */
function renderSliders() {
  const container = document.getElementById("slidersContainer");
  if (!container) return;

  container.innerHTML = pillars
    .map(
      (pillar) => `
        <div class="glass-card rounded-xl p-4 sm:p-5 pillar-card" id="card-${pillar.id}">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div class="text-xl sm:text-2xl flex-shrink-0">${pillar.icon}</div>
                    <div class="min-w-0 flex-1">
                        <h4 class="font-bold text-white text-xs sm:text-sm truncate">${pillar.name}</h4>
                        <p class="text-[10px] sm:text-xs" style="color: ${pillar.color}">${pillar.subtitle}</p>
                    </div>
                </div>
                <div class="text-right flex-shrink-0 ml-2">
                    <div class="text-xl sm:text-2xl font-bold score-display" id="score-${pillar.id}" style="color: ${pillar.color}">${scores[pillar.id]}</div>
                    <div class="text-[10px] sm:text-xs text-gray-500">/ 10</div>
                </div>
            </div>
            <input type="range" min="1" max="10" value="${scores[pillar.id]}" 
                   class="pv-slider" 
                   data-pillar="${pillar.id}"
                   aria-label="${pillar.name} score">
            <div class="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-2">
                <span>Weak</span>
                <span>Moderate</span>
                <span>Mastery</span>
            </div>
        </div>
    `,
    )
    .join("");

  // Add event listeners to sliders
  container.querySelectorAll(".pv-slider").forEach((slider) => {
    slider.addEventListener("input", handleSliderInput);
  });

  // Update initial card styling
  updateAllCardStyling();
}

/**
 * Handle slider input with debouncing
 */
let sliderTimeout;
function handleSliderInput(e) {
  const pillarId = e.target.dataset.pillar;
  const value = parseInt(e.target.value);

  // Update score immediately for UI responsiveness
  scores[pillarId] = value;
  document.getElementById(`score-${pillarId}`).textContent = value;
  updateCardStyling(pillarId, value);

  // Debounce chart update and insights
  clearTimeout(sliderTimeout);
  sliderTimeout = setTimeout(() => {
    updateChart();
    updateOverallScore();
    generateInsights();
    saveScoresToStorage();
  }, 150);
}

/**
 * Update chart data
 */
function updateChart() {
  if (!masteryChart) return;

  masteryChart.data.datasets[0].data = Object.values(scores);
  masteryChart.update("none");
}

/**
 * Update overall score display
 */
function updateOverallScore() {
  const avg = Object.values(scores).reduce((a, b) => a + b, 0) / 5;
  const scoreEl = document.getElementById("overallScore");
  const labelEl = document.getElementById("scoreLabel");

  if (scoreEl) scoreEl.textContent = avg.toFixed(1);

  if (labelEl) {
    if (avg < 4) labelEl.textContent = "Critical - Immediate action required";
    else if (avg < 6)
      labelEl.textContent = "Developing - Focus on weak pillars";
    else if (avg < 8) labelEl.textContent = "Growing - Solid foundation";
    else labelEl.textContent = "Mastery - Elite level";
  }
}

/**
 * Update card styling based on score
 */
function updateCardStyling(pillarId, value) {
  const card = document.getElementById(`card-${pillarId}`);
  const scoreEl = document.getElementById(`score-${pillarId}`);

  if (!card || !scoreEl) return;

  card.classList.remove("weak");
  if (value <= 3) {
    card.classList.add("weak");
    scoreEl.style.color = "#EF4444";
  } else if (value <= 6) {
    scoreEl.style.color = "#D4AF37";
  } else {
    scoreEl.style.color = "#10B981";
  }
}

/**
 * Update all card styling
 */
function updateAllCardStyling() {
  Object.entries(scores).forEach(([pillarId, value]) => {
    updateCardStyling(pillarId, value);
  });
}

/**
 * Update all scores in the UI
 */
function updateAllScores() {
  // Update slider values
  document.querySelectorAll(".pv-slider").forEach((slider) => {
    const pillarId = slider.dataset.pillar;
    slider.value = scores[pillarId];
  });

  // Update score displays
  Object.entries(scores).forEach(([pillarId, value]) => {
    const scoreEl = document.getElementById(`score-${pillarId}`);
    if (scoreEl) scoreEl.textContent = value;
  });

  // Update chart
  updateChart();

  // Update overall score
  updateOverallScore();

  // Update card styling
  updateAllCardStyling();
}

/**
 * Render pillars grid
 */
function renderPillars() {
  const grid = document.getElementById("pillarsGrid");
  if (!grid) return;

  grid.innerHTML = pillars
    .map(
      (pillar) => `
        <div class="glass-card rounded-2xl p-5 sm:p-6 hover:scale-105 transition-transform">
            <div class="text-3xl sm:text-4xl mb-3 sm:mb-4">${pillar.icon}</div>
            <div class="text-[10px] sm:text-xs font-semibold mb-2" style="color: ${pillar.color}">${pillar.subtitle.toUpperCase()}</div>
            <h4 class="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">${pillar.name}</h4>
            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">${pillar.description}</p>
            <div class="pt-3 sm:pt-4 border-t border-[#D4AF37]/20">
                <div class="text-[10px] sm:text-xs text-[#D4AF37] font-semibold mb-1">PV Role:</div>
                <p class="text-[10px] sm:text-xs text-gray-400">${pillar.pvRole}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

/**
 * Generate insights based on scores
 */
function generateInsights() {
  const panel = document.getElementById("insightsPanel");
  const content = document.getElementById("insightsContent");

  if (!panel || !content) return;

  // Calculate wheel health metrics
  const scoreValues = Object.values(scores);
  const averageScore =
    scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;
  const variance =
    scoreValues.reduce((a, b) => a + Math.pow(b - averageScore, 2), 0) /
    scoreValues.length;
  const standardDeviation = Math.sqrt(variance);

  // Determine mastery tier
  let masteryTier = "Novice";
  if (averageScore >= 8) masteryTier = "Master";
  else if (averageScore >= 6) masteryTier = "Journeyman";
  else if (averageScore >= 4) masteryTier = "Apprentice";

  // Identify weak pillars (below threshold)
  const weakThreshold = 6;
  const weakPillars = Object.entries(scores)
    .filter(([id, score]) => score < weakThreshold)
    .sort((a, b) => {
      // Sort by score first, then by priority
      if (a[1] !== b[1]) return a[1] - b[1];
      const pillarA = pillars.find((p) => p.id === a[0]);
      const pillarB = pillars.find((p) => p.id === b[0]);
      return pillarA.priority - pillarB.priority;
    });

  // Identify strongest pillar
  const strongest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  const strongPillar = pillars.find((p) => p.id === strongest[0]);

  // Classify severity
  const getSeverity = (score) => {
    if (score <= 3)
      return { label: "CRITICAL", color: "#EF4444", class: "warning-pulse" };
    if (score <= 5) return { label: "WEAK", color: "#F59E0B", class: "" };
    return { label: "MODERATE", color: "#3B82F6", class: "" };
  };

  // Generate report HTML
  let html = `
        <!-- Wheel Health Overview -->
        <div class="p-3 sm:p-4 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
            <div class="flex items-center justify-between mb-2">
                <div class="text-[10px] sm:text-xs text-[#D4AF37] font-semibold">📊 WHEEL HEALTH</div>
                <div class="text-[10px] sm:text-xs text-gray-400">Balance: ${standardDeviation.toFixed(1)}</div>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-2xl sm:text-3xl font-bold gradient-text">${averageScore.toFixed(1)}/10</div>
                <div>
                    <div class="text-xs sm:text-sm font-bold text-white">${masteryTier} Tier</div>
                    <div class="text-[10px] sm:text-xs text-gray-400">${weakPillars.length > 0 ? `${weakPillars.length} pillar${weakPillars.length > 1 ? "s" : ""} needs attention` : "Well-balanced"}</div>
                </div>
            </div>
        </div>
    `;

  // Weaknesses Section
  if (weakPillars.length > 0) {
    html += `<div class="mb-4">`;
    weakPillars.forEach(([id, score], index) => {
      const pillar = pillars.find((p) => p.id === id);
      const severity = getSeverity(score);
      const actions = actionItems[id];
      const challenges = challengeLibrary[id];

      html += `
                <div class="p-3 sm:p-4 rounded-lg bg-[${severity.color}]/10 border border-[${severity.color}]/30 mb-3 ${severity.class}">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">${pillar.icon}</span>
                            <div>
                                <div class="text-xs sm:text-sm font-bold text-white">${pillar.name}</div>
                                <div class="text-[10px] sm:text-xs text-gray-400">${pillar.subtitle}</div>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm font-bold text-[${severity.color}]">${score}/10</div>
                            <div class="text-[10px] text-[${severity.color}]">${severity.label}</div>
                        </div>
                    </div>
                    
                    ${
                      index === 0
                        ? `
                    <div class="mt-3 p-2 rounded bg-[#0F172A]/50">
                        <div class="text-[10px] sm:text-xs font-semibold text-[#D4AF37] mb-1">🎯 PRIMARY FOCUS - Week 1</div>
                        <div class="text-xs text-gray-300 mb-2">${pillar.description}</div>
                        
                        <div class="text-[10px] sm:text-xs font-semibold text-white mb-1">Quick Win Challenge:</div>
                        <div class="text-xs text-[#D4AF37] mb-2">${challenges.quick[0].name} - ${challenges.quick[0].description}</div>
                        
                        <div class="text-[10px] sm:text-xs font-semibold text-white mb-1">Immediate Actions:</div>
                        <ul class="text-[10px] sm:text-xs text-gray-300 space-y-1">
                            ${actions.immediate.map((action) => `<li>• ${action}</li>`).join("")}
                        </ul>
                        
                        <div class="mt-2 text-[10px] sm:text-xs">
                            <span class="text-[#D4AF37] font-semibold">Resources:</span> ${actions.resources.join(", ")}
                        </div>
                        
                        <div class="mt-1 text-[10px] text-gray-400">
                            <span class="text-[#EF4444]">⚠️ Avoid:</span> ${actions.pitfalls.join(", ")}
                        </div>
                    </div>
                    `
                        : `
                    <div class="mt-2 text-[10px] sm:text-xs text-gray-400">
                        Address in Week ${index + 1} while maintaining Week 1 habits
                    </div>
                    `
                    }
                </div>
            `;
    });
    html += `</div>`;
  }

  // Strength Section
  html += `
        <div class="p-3 sm:p-4 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 mb-4">
            <div class="text-[10px] sm:text-xs text-[#10B981] font-semibold mb-2">✓ YOUR STRONGEST PILLAR</div>
            <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">${strongPillar.icon}</span>
                <div>
                    <div class="text-sm font-bold text-white">${strongPillar.name}</div>
                    <div class="text-xs text-gray-400">Score: <span class="text-[#10B981] font-bold">${strongest[1]}/10</span></div>
                </div>
            </div>
            <div class="text-[10px] sm:text-xs text-gray-300">
                <strong class="text-white">Leverage this strength:</strong> Use your ${strongPillar.subtitle.toLowerCase()} to support brothers who struggle in this area. In Prime Vanguard, your strength becomes your brother's support system.
            </div>
        </div>
    `;

  // 30-Day Plan
  if (weakPillars.length > 0) {
    const primaryWeak = weakPillars[0];
    const primaryPillar = pillars.find((p) => p.id === primaryWeak[0]);
    const primaryChallenges = challengeLibrary[primaryWeak[0]];

    html += `
            <div class="p-3 sm:p-4 rounded-lg bg-[#0F172A]/50 border border-[#D4AF37]/20">
                <div class="text-[10px] sm:text-xs text-[#D4AF37] font-semibold mb-3">📅 YOUR 30-DAY PV CONTRACT</div>
                
                <div class="space-y-3">
                    <div class="border-l-2 border-[#EF4444] pl-3">
                        <div class="text-xs font-bold text-white mb-1">Week 1: Foundation</div>
                        <div class="text-[10px] sm:text-xs text-gray-300 mb-1">Focus exclusively on ${primaryPillar.subtitle}</div>
                        <div class="text-[10px] text-[#D4AF37]">${primaryChallenges.quick[0].name}</div>
                    </div>
                    
                    ${
                      weakPillars.length > 1
                        ? `
                    <div class="border-l-2 border-[#F59E0B] pl-3">
                        <div class="text-xs font-bold text-white mb-1">Week 2-3: Expansion</div>
                        <div class="text-[10px] sm:text-xs text-gray-300 mb-1">Add secondary weakness while maintaining Week 1</div>
                        <div class="text-[10px] text-[#D4AF37]">${challengeLibrary[weakPillars[1][0]].quick[0].name}</div>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="border-l-2 border-[#10B981] pl-3">
                        <div class="text-xs font-bold text-white mb-1">Week 4: Integration</div>
                        <div class="text-[10px] sm:text-xs text-gray-300 mb-1">Use strong pillars to support new habits</div>
                        <div class="text-[10px] text-[#D4AF37]">Brotherhood accountability check-ins</div>
                    </div>
                </div>
            </div>
        `;
  }

  // Critical Warning
  if (weakPillars.length > 0 && weakPillars[0][1] <= 3) {
    const criticalPillar = pillars.find((p) => p.id === weakPillars[0][0]);
    html += `
            <div class="mt-4 p-3 sm:p-4 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/50 warning-pulse">
                <div class="text-[10px] sm:text-xs text-[#EF4444] font-semibold mb-1">🚨 CRITICAL INTERVENTION REQUIRED</div>
                <div class="text-xs sm:text-sm text-gray-300">
                    Your ${criticalPillar.subtitle} score of ${weakPillars[0][1]}/10 indicates a critical foundation issue. 
                    In Prime Vanguard, this triggers immediate intervention from your Pod Leader and management team. 
                    <strong class="text-white">You cannot build a legacy on a broken foundation.</strong>
                </div>
            </div>
        `;
  }

  content.innerHTML = html;
  panel.classList.remove("hidden");
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        const header = document.getElementById("mainHeader");
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
        });
      }
    });
  });
}

/**
 * Initialize window resize handler for chart
 */
function initWindowResize() {
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (masteryChart) {
        // Update font sizes based on screen width
        const fontSize =
          window.innerWidth < 640 ? 10 : window.innerWidth < 1024 ? 11 : 12;
        masteryChart.options.scales.r.ticks.font.size = fontSize;
        masteryChart.options.scales.r.pointLabels.font.size = fontSize;
        masteryChart.resize();
      }
    }, 250);
  });
}

/**
 * Initialize reset button
 */
function initResetButton() {
  // Add reset button to the insights panel if it doesn't exist
  const insightsPanel = document.getElementById("insightsPanel");
  if (insightsPanel && !document.getElementById("resetScoresBtn")) {
    const resetBtn = document.createElement("button");
    resetBtn.id = "resetScoresBtn";
    resetBtn.className =
      "mt-4 px-4 py-2 rounded-lg border border-[#EF4444]/40 text-[#EF4444] text-xs sm:text-sm font-semibold hover:bg-[#EF4444]/10 transition";
    resetBtn.textContent = "Reset All Scores";
    resetBtn.addEventListener("click", resetScores);
    insightsPanel.appendChild(resetBtn);
  }
}

/**
 * Initialize dynamic navbar effect on scroll with hide-on-scroll for desktop
 */
function initDynamicNavbar() {
  const header = document.getElementById("mainHeader");
  if (!header) return;

  let lastScrollY = 0;
  let isHidden = false;

  const updateHeaderHeight = () => {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`,
    );
  };

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;
    const isScrollingDown = currentScrollY > lastScrollY;
    const headerHeight = header.offsetHeight;

    // Apply glassmorphism on scroll
    if (currentScrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Hide-on-scroll for desktop only (md breakpoint 768px+)
    if (window.innerWidth >= 768) {
      // Hide header when scrolling down past header height + 50px threshold
      if (isScrollingDown && currentScrollY > headerHeight + 50 && !isHidden) {
        header.classList.add("hidden-navbar");
        header.style.willChange = "top";
        isHidden = true;
      }
      // Show header when scrolling up
      else if (!isScrollingDown && isHidden) {
        header.classList.remove("hidden-navbar");
        header.style.willChange = "auto";
        isHidden = false;
      }
    } else {
      // Reset on mobile
      if (isHidden) {
        header.classList.remove("hidden-navbar");
        header.style.willChange = "auto";
        isHidden = false;
      }
    }

    lastScrollY = currentScrollY;
  };

  // Set initial header height
  updateHeaderHeight();

  // Update on window resize
  window.addEventListener("resize", () => {
    updateHeaderHeight();
    if (window.innerWidth < 768) {
      if (isHidden) {
        header.classList.remove("hidden-navbar");
        header.style.willChange = "auto";
        isHidden = false;
      }
    }
  });

  // Initial check
  handleScroll();

  // Add scroll listener with throttle using requestAnimationFrame
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/**
 * Initialize active nav link highlighting based on scroll position with dynamic offset
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const header = document.getElementById("mainHeader");

  // Calculate dynamic offset based on header height
  const getScrollOffset = () => {
    const headerHeight = header ? header.offsetHeight : 80;
    return headerHeight + 20; // Add 20px buffer
  };

  const updateActiveLink = () => {
    const scrollY = window.pageYOffset;
    const scrollOffset = getScrollOffset();
    let found = false;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - scrollOffset;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        found = true;
        // Update desktop nav
        navLinks.forEach((link) => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          }
        });

        // Update mobile nav
        mobileNavLinks.forEach((link) => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          }
        });
      }
    });

    // If no section is in view and we've reached the bottom, highlight the last section.
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    if (!found && scrollY >= maxScrollY - 10) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        const lastSectionId = lastSection.getAttribute("id");
        if (lastSectionId) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
            if (link.getAttribute("href") === `#${lastSectionId}`) {
              link.classList.add("active");
              link.setAttribute("aria-current", "page");
            }
          });
          mobileNavLinks.forEach((link) => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
            if (link.getAttribute("href") === `#${lastSectionId}`) {
              link.classList.add("active");
              link.setAttribute("aria-current", "page");
            }
          });
        }
      }
    } else if (!found && scrollY < getScrollOffset()) {
      const firstLink = navLinks[0];
      if (firstLink) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        });
        mobileNavLinks.forEach((link) => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        });
        firstLink.classList.add("active");
        firstLink.setAttribute("aria-current", "page");
        const firstMobileLink = mobileNavLinks[0];
        if (firstMobileLink) {
          firstMobileLink.classList.add("active");
          firstMobileLink.setAttribute("aria-current", "page");
        }
      }
    }
  };

  // Initial check on page load
  updateActiveLink();

  // Add scroll listener with throttle
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  // Recalculate on resize
  window.addEventListener("resize", updateActiveLink);
}

/**
 * Initialize scroll progress bar with ARIA updates
 */
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;

    // Update ARIA attributes for accessibility
    progressBar.setAttribute("aria-valuenow", Math.round(progress));
  };

  // Initial update
  updateProgress();

  // Add scroll listener with throttle
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
