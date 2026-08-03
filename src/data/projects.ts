/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — this is the single source of truth for the showcase.
 *  Add, remove or reorder entries and both the grid AND the
 *  detail pages update themselves. Each tile links to
 *  `#/project/<slug>`, so keep every `slug` unique.
 * ─────────────────────────────────────────────────────────────
 */
export type Project = {
  /** URL slug — must be unique. Used in `#/project/<slug>`. */
  slug: string;
  title: string;
  /** Short one-liner shown under the title */
  tagline: string;
  /** Card description (1–2 sentences) */
  description: string;
  /** Tech / topic tags rendered as chips on the card */
  tags: string[];
  /** Two emoji work great as a lightweight placeholder "cover" */
  emoji: string;
  /** Any CSS gradient — used for the card's + detail cover accent */
  accent: string;
  /** Optional badge, e.g. "In progress", "New", "Research" */
  badge?: string;
  /**
   * Optional cover image, as a path inside the `public/` folder
   * (e.g. "projects/verifai/cover.png"). When set, it replaces the
   * emoji + gradient on both the card and the detail hero.
   */
  cover?: string;

  /* ---------- Detail page ---------- */
  year: string;
  role: string;
  /** One paragraph per array item */
  overview: string[];
  /** Bullet-point highlights */
  highlights: string[];
  /** Full tech stack shown in the sidebar */
  stack: string[];
  /**
   * Detail-page gallery. Each item shows a real image when `image` is set
   * (a path inside `public/`, e.g. "projects/verifai/1.png"); otherwise it
   * falls back to the `emoji` placeholder.
   */
  gallery: { image?: string; emoji?: string; caption: string }[];
  links: {
    demo?: string;
    link?: string;
    description?: string;
  };
  footnotes?: string;
};

export const projects: Project[] = [
  {
    slug: "verifai",
    title: "VERIFAI",
    tagline: "Stress-testing ML models for responsible AI",
    description:
      "A tool to evaluate pretrained models on text, image and tabular data — probing where they can be trusted and where they fail before they reach the real world.",
    tags: ["Python", "Machine Learning", "Responsible AI"],
    emoji: "🔍",
    accent: "linear-gradient(135deg, #8b5cf6, #3884ff)",
    badge: "Research",
    year: "2023",
    role: "Research & Development",
    overview: [
      "VERIFAI is a prototype tool from my master's research for stress-testing pretrained machine learning models across text, image and tabular classification tasks. It brings model behaviour, robustness and explainability into one place, so teams can see where a model can be trusted — and where it can't.",
      "The use cases were deliberately high-stakes: skin-cancer images, medical reviews and heart-disease records. When a model might inform a medical decision, understanding its failure modes matters as much as its raw accuracy.",
    ],
    highlights: [
      "Evaluates image, NLP and tabular models (Xception, DistilBERT, Random Forest) in one workflow",
      "Centred on responsible AI: robustness, explainability and failure analysis",
      "Built around real, high-stakes datasets (skin cancer, medical text, heart disease)",
      "Foundation for my thesis on responsible AI in the medical field",
    ],
    stack: ["Python", "TensorFlow", "scikit-learn", "DistilBERT", "Pandas"],
    gallery: [
      { emoji: "🖼️", caption: "Image models" },
      { emoji: "📝", caption: "NLP models" },
      { emoji: "📋", caption: "Tabular models" },
    ],
    links: { link: "#" },

  },
  {
    slug: "konverter",
    title: "Konverter",
    tagline: "Convert data between formats, without the friction",
    description:
      "A focused utility for converting files and data between formats — built to remove a small, repetitive annoyance from a daily workflow.",
    tags: ["Python", "TypeScript", "Tooling"],
    emoji: "🔄",
    accent: "linear-gradient(135deg, #fbbf24, #f472b6)",
    badge: "Tooling",
    year: "2024",
    role: "Solo project",
    overview: [
      "Konverter is a small, focused tool for converting data between formats quickly and predictably. It grew out of a recurring task that was just annoying enough to be worth automating properly.",
      "The emphasis is on doing one thing well: clear input, clear output, sensible defaults and no surprises. (Placeholder copy — refine with the real story and screenshots.)",
    ],
    highlights: [
      "Converts between formats with sensible defaults",
      "Small, single-purpose and easy to reason about",
      "Built to fit into an existing workflow",
      "Placeholder highlight — replace with the real details",
    ],
    stack: ["Python", "TypeScript"],
    gallery: [
      { emoji: "📥", caption: "Input" },
      { emoji: "⚙️", caption: "Convert" },
      { emoji: "📤", caption: "Output" },
    ],
    links: { link: "#" },
  },
  {
    slug: "medical-data-study",
    title: "Medical Data Study",
    tagline: "Predicting outcomes from clinical data",
    description:
      "An exploratory study on real medical datasets — from data analysis and visualisation to models that predict clinical outcomes.",
    tags: ["Python", "Pandas", "scikit-learn"],
    emoji: "🩺",
    accent: "linear-gradient(135deg, #34d399, #22d3ee)",
    badge: "Case Study",
    year: "2026",
    role: "Data Analysis & Modeling",
    overview: [
      "A study working with real medical data end to end: cleaning and exploring the datasets, visualising the patterns that matter, and training models to predict clinical outcomes.",
      "As much about careful analysis and honest reporting as about accuracy — understanding the data, its limits and its biases before drawing conclusions. (Placeholder copy — refine with the real story and screenshots.)",
    ],
    highlights: [
      "Exploratory data analysis and visualisation of clinical datasets",
      "Predictive models for medical outcomes",
      "Reports and plots communicating the findings",
      "Placeholder highlight — replace with the real details",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    gallery: [
      { emoji: "🧹", caption: "Data cleaning" },
      { emoji: "📈", caption: "Analysis & plots" },
      { emoji: "🧠", caption: "Prediction models" },
    ],
    links: { link: "#" },
  },
  {
    slug: "samson",
    title: "Samson Data Platform",
    tagline: "From field sensor to actionable insight",
    description:
      "A cloud-native platform that ingests IoT sensor data, stores it and surfaces ML-based statistics through a web dashboard.",
    tags: ["Django", "Docker", "IoT"],
    emoji: "🌾",
    accent: "linear-gradient(135deg, #fff582, #76f65c)",
    badge: "Research",
    year: "2023-2025",
    role: "Full-stack & Data",
    overview: [
      "Samson is a modular platform for managing farm data, built as a set of Docker services. A Django + PostGIS backend serves the API, while an MQTT client pulls sensor readings from The Things Network and stores them for analysis.",
      "On top of the data sits a React dashboard that turns raw sensor streams into ML-based statistics and farm-management tools — a full path from field sensor to actionable insight.",
    ],
    highlights: [
      "Containerised microservices: Django/PostGIS API, PostgreSQL, MQTT client, CouchDB",
      "Ingests live IoT sensor data via The Things Network (LoRaWAN / MQTT)",
      "React dashboard with ML-based statistics and farm management",
      "Cloud-native, reproducible setup via Docker Compose",
      "Probability model linking degree-day accumulation to pest lifecycle stages", 
      "based on 10+ years of field-sampling data (2013–2024) Public forecasting dashboard supporting real-world pest-control decisions for orchard growers"
    ],
    stack: ["Django", "Docker", "PostGIS", "PostgreSQL", "MQTT", "React"],
    cover: "/projects/samson/login-background.png",
    gallery: [
      { image: "/projects/samson/1.png", caption: "This bar chart visualizes the probability of green stink bug nymph hatching as predicted by the model. The color scale is based on cumulative degree days for the year 2025 and indicates the urgency of potential control measures. On April 21, 2025, with 219.7 DD, the model predicted that the calculated threshold would be exceeded. This is based on calculations from recent years."},
      { emoji: "🗺️", caption: "Geospatial data" },
      { emoji: "📊", caption: "ML statistics" },
    ],
    links: { link: "https://samson-projekt.de", description: "Project Website" },
    footnotes: "In collaboration with Fraunhofer IFAM, TUHH, and Esteburg Obstbauzentrum Jork, funded by the German Federal Ministry of Food and Agriculture"
  },
];

/** Look up a single project by its slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
