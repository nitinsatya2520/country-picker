export const countries = [
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" }
];

export const courses = ["MS in CS", "MBA", "Data Science", "Nursing", "Arts"];

export const countryDetails = {
  DE: {
    tuition: "Low / Mostly Free (Public)",
    jobs: "Moderate for English speakers",
    pr: "Takes 4–6 years, knowledge of German needed",
    cost: "€850–€1,100/month",
    parttime: "120 full days or 240 half-days/year",
  },
  AU: {
    tuition: "AUD 25,000–45,000/year",
    jobs: "Good demand in tech, healthcare, trades",
    pr: "2–3 years post-study + PR options available",
    cost: "AUD 1,500–2,200/month",
    parttime: "40 hrs/fortnight + unlimited during breaks",
  },
  US: {
    tuition: "USD 20,000–60,000/year",
    jobs: "Excellent in tech but competitive",
    pr: "H1B → Green Card (lengthy, uncertain)",
    cost: "USD 1,500–3,000/month",
    parttime: "Strict on-campus only during study",
  },
  CA: {
    tuition: "CAD 18,000–35,000/year",
    jobs: "Good demand in tech, trades, healthcare",
    pr: "Easier and faster (Express Entry)",
    cost: "CAD 1,200–2,000/month",
    parttime: "Up to 20 hrs/week during semester",
  },
  UK: {
    tuition: "GBP 15,000–35,000/year",
    jobs: "Good in finance, IT, healthcare",
    pr: "5+ years work visa → ILR",
    cost: "GBP 1,200–2,000/month",
    parttime: "20 hrs/week during semester",
  },
  IE: {
    tuition: "EUR 10,000–25,000/year",
    jobs: "Strong in tech and pharma",
    pr: "2–5 years with work permit",
    cost: "EUR 1,000–1,800/month",
    parttime: "20 hrs/week during semester",
  },
  NZ: {
    tuition: "NZD 20,000–40,000/year",
    jobs: "Moderate in tech, trades, healthcare",
    pr: "2–3 years post-study visa → PR",
    cost: "NZD 1,200–1,800/month",
    parttime: "20 hrs/week during semester",
  },
};
export const questions = [
  // 🎓 Academic Questions
  {
    question: "Select your desired course:",
    key: "course",
    type: "select",
    icon: "🎓",
    category: "academic",
    options: courses,
    weights: {
      DE: [2, 0, 2, 0, 0], AU: [2, 2, 2, 3, 1], US: [3, 3, 3, 1, 1],
      CA: [2, 2, 3, 2, 1], UK: [2, 3, 3, 2, 1], IE: [2, 2, 3, 1, 1], NZ: [2, 2, 2, 3, 1],
    },
    adminWeightsVisible: true,
  },
  {
    question: "Which type of student are you?",
    key: "studentType",
    type: "select",
    icon: "📊",
    category: "academic",
    options: ["Below Average", "Average", "Top Student"],
    weights: {
      DE: [0, 1, 2], AU: [1, 2, 3], US: [1, 2, 4], CA: [1, 2, 3], UK: [1, 2, 3], IE: [1, 2, 3], NZ: [1, 2, 3],
    },
    adminWeightsVisible: true,
  },
  {
    question: "Are you confident in your coding/technical skills?",
    key: "tech",
    type: "boolean",
    icon: "💻",
    category: "academic",
    weights: {
      DE: 1, AU: 2, US: 3, CA: 2, UK: 2, IE: 2, NZ: 2,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Are you looking for research opportunities (MS/PhD level)?",
    key: "research",
    type: "boolean",
    icon: "🔬",
    category: "academic",
    weights: {
      DE: 4, AU: 3, US: 4, CA: 3, UK: 3, IE: 2, NZ: 2,
    },
    adminWeightsVisible: true,
  },

  // 💰 Financial Questions
  {
    question: "How much financial support do you have from family?",
    key: "financial",
    type: "select",
    icon: "💰",
    category: "financial",
    options: ["None", "Partial", "Full"],
    weights: {
      DE: [0, 2, 4], AU: [0, 1, 2], US: [0, 0.5, 1], CA: [0, 1, 2], UK: [0, 0.5, 1], IE: [0, 1, 2], NZ: [0, 1, 2],
    },
    adminWeightsVisible: true,
  },
  {
    question: "Will you be applying for an education loan?",
    key: "loan",
    type: "boolean",
    icon: "🏦",
    category: "financial",
    weights: {
      DE: -1, AU: 0, US: -2, CA: -1, UK: -1, IE: -1, NZ: -1,
    },
    adminWeightsVisible: true,
  },
  {
    question: "How important is low tuition/affordable education for you?",
    key: "lowtuition",
    type: "select",
    icon: "🎟️",
    category: "financial",
    options: ["Not Important", "Somewhat Important", "Very Important"],
    weights: {
      DE: [0, 2, 4], AU: [1, 2, 3], US: [0, 1, 2], CA: [1, 2, 3], UK: [0, 1, 2], IE: [1, 2, 3], NZ: [1, 2, 3],
    },
    adminWeightsVisible: true,
  },

  // 🌏 Lifestyle & Adaptability
  {
    question: "Do you want an English-speaking environment?",
    key: "english",
    type: "boolean",
    icon: "🗣️",
    category: "lifestyle",
    weights: {
      DE: 0, AU: 2, US: 2, CA: 2, UK: 2, IE: 2, NZ: 2,
    },
    adminWeightsVisible: true,
  },
  {
    question: "How flexible are you in adjusting to new culture?",
    key: "culture",
    type: "select",
    icon: "🌐",
    category: "lifestyle",
    options: ["Low", "Medium", "High"],
    weights: {
      DE: [0, 1, 2], AU: [0, 2, 4], US: [0, 2, 4], CA: [0, 2, 4], UK: [0, 2, 4], IE: [0, 2, 4], NZ: [0, 2, 4],
    },
    adminWeightsVisible: true,
  },
  {
    question: "Do you prefer a cold or warm climate?",
    key: "climate",
    type: "select",
    icon: "☀️❄️",
    category: "lifestyle",
    options: ["Cold", "Moderate", "Warm"],
    weights: {
      DE: [1, 2, 0], AU: [0, 2, 3], US: [1, 2, 2], CA: [3, 2, 0], UK: [2, 2, 1], IE: [2, 2, 1], NZ: [1, 2, 2],
    },
    adminWeightsVisible: true,
  },

  // 🛠️ Practical Aspects
  {
    question: "Can you work part-time jobs during study?",
    key: "parttime",
    type: "boolean",
    icon: "🛠️",
    category: "practical",
    weights: {
      DE: 1, AU: 2, US: 1, CA: 2, UK: 2, IE: 2, NZ: 2,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Can you speak or are willing to learn German?",
    key: "german",
    type: "boolean",
    icon: "🇩🇪",
    category: "practical",
    weights: {
      DE: 2, AU: 0, US: 0, CA: 0, UK: 0, IE: 0, NZ: 0,
    },
    adminWeightsVisible: true,
  },

  // 🧭 Goals & Preferences
  {
    question: "Is your main goal: Settle Abroad (PR)?",
    key: "prgoal",
    type: "boolean",
    icon: "🧭",
    category: "goal",
    weights: {
      DE: 1, AU: 3, US: 0, CA: 3, UK: 2, IE: 2, NZ: 3,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Do you need a smooth PR/citizenship process?",
    key: "prneed",
    type: "boolean",
    icon: "🛂",
    category: "goal",
    weights: {
      DE: 1, AU: 3, US: -1, CA: 3, UK: 1, IE: 2, NZ: 3,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Are you okay with immigration/visa risk?",
    key: "risk",
    type: "boolean",
    icon: "⚠️",
    category: "goal",
    weights: {
      DE: 1, AU: 3, US: -2, CA: 3, UK: 2, IE: 3, NZ: 3,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Are you looking for a strong Indian student community abroad?",
    key: "indians",
    type: "boolean",
    icon: "👥",
    category: "goal",
    weights: {
      DE: 2, AU: 3, US: 3, CA: 3, UK: 3, IE: 2, NZ: 2,
    },
    adminWeightsVisible: true,
  },
  {
    question: "Do you want your degree to have global job opportunities?",
    key: "globaldegree",
    type: "boolean",
    icon: "🌍",
    category: "goal",
    weights: {
      DE: 2, AU: 3, US: 4, CA: 3, UK: 4, IE: 3, NZ: 3,
    },
    adminWeightsVisible: true,
  },
];
