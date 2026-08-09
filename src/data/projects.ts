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
  /**
   * Optional interactive "coverage" diagram (e.g. metrics, features, topics).
   * Each category becomes a clickable segment; its `items` show in a panel.
   * Omit the field entirely to hide the diagram for a project.
   */
  metrics?: MetricNode[];
};

export type MetricNode = {
  /** Node label (branch name or leaf metric name) */
  name: string;
  /** Optional one-line description (mainly for leaf metrics) */
  description?: string;
  /** Optional accent color; descendants inherit the nearest ancestor's color */
  color?: string;
  /** Child nodes; leaf metrics omit this */
  children?: MetricNode[];
};

export const projects: Project[] = [
  {
    slug: "verifai",
    title: "VERIFAI",
    tagline: "Stress-testing ML models for responsible AI",
    description:
      "A framework to evaluate models across text, image, tabular data and large language models, probing where they can be trusted and where they fail before they reach the real world.",
    tags: ["Responsible AI", "LLMs", "Python", "Hugging Face"],
    emoji: "🔍",
    accent: "linear-gradient(135deg, #8b5cf6, #3884ff)",
    badge: "Research",
    year: "2020-2026",
    role: "Research & Development",
    overview: [
      "VERIFAI is a prototype tool from my master's research for stress-testing pretrained machine learning models across text, image and tabular classification tasks. It brings model behaviour, robustness and explainability into one place, so teams can see where a model can be trusted, and where it can't.",
      "The use cases were deliberately high-stakes: skin-cancer images, medical reviews and heart-disease records. When a model might inform a medical decision, understanding its failure modes matters as much as its raw accuracy.",
      "A second, larger repository, the VERIFAI Test Lab, grew that prototype into a full evaluation platform (FastAPI backend, React frontend, Dockerised for CPU or GPU). Its biggest addition is support for large language models: they can be called through the Hugging Face Inference API or loaded locally with Transformers, then probed with the same responsible-AI lens, namely bias and toxicity, privacy (membership-inference), robustness and explainability.",
    ],
    highlights: [
      "Evaluates image, NLP and tabular models (Xception, DistilBERT, Random Forest) in one workflow",
      "Centred on responsible AI: robustness, explainability and failure analysis",
      "Built around real, high-stakes datasets (skin cancer, medical text, heart disease)",
      "Foundation for my thesis on responsible AI in the medical field",
      "Extended into the VERIFAI Test Lab , a FastAPI + React platform, Dockerised for CPU/GPU with live evaluation runs over WebSockets",
      "Adds large-language-model support, either via the Hugging Face Inference API or loaded locally with Transformers (PyTorch)",
      "Responsible-AI metrics for generative NLP: bias & toxicity, membership-inference (privacy), robustness and explainability",
    ],
    stack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "FastAPI",
      "React",
      "Docker",
      "MongoDB",
    ],
    metrics: [
      {
        name: "Prototype: classification models",
        description:
          "Image, text & tabular classifiers (skin cancer, medical reviews, heart disease).",
        color: "#8b5cf6",
        children: [
          {
            name: "Fairness",
            children: [
              {
                name: "Statistical Parity",
                description:
                  "Equal positive-prediction rates across groups.",
              },
              {
                name: "Disparate Impact",
                description:
                  "Ratio of favourable outcomes between groups.",
              },
              {
                name: "Group performance",
                description: "Accuracy / F1 compared per demographic group.",
              },
            ],
          },
          {
            name: "Explainability",
            children: [
              { name: "SHAP", description: "Shapley-value feature attributions." },
              { name: "LIME", description: "Local surrogate explanations." },
              {
                name: "Integrated Gradients",
                description: "Attribution along the input → baseline path.",
              },
              {
                name: "Quantus checks",
                description:
                  "Faithfulness, robustness & sparseness of the explanations themselves.",
              },
            ],
          },
          {
            name: "Privacy",
            children: [
              {
                name: "Shadow-model MIA",
                description:
                  "Membership inference via shadow models (Privacy Meter).",
              },
              {
                name: "Population MIA",
                description: "Population-based membership-inference attack.",
              },
            ],
          },
          {
            name: "Robustness (security)",
            children: [
              {
                name: "FGSM / PGD / DeepFool",
                description: "Gradient-based adversarial attacks via ART.",
              },
              {
                name: "Text adversarial (TextAttack)",
                description: "Perturbation attacks on text classifiers.",
              },
              {
                name: "Image & tabular robustness",
                description: "Accuracy / success rate under perturbation.",
              },
            ],
          },
          {
            name: "Performance",
            children: [
              {
                name: "Accuracy / F1",
                description: "Standard classification quality.",
              },
              {
                name: "Precision / Recall",
                description: "Per-class error trade-offs.",
              },
              {
                name: "Confusion matrix",
                description: "Full breakdown of predictions vs. ground truth.",
              },
            ],
          },
        ],
      },
      {
        name: "Extension: generative LLMs",
        description:
          "Large language models via the Hugging Face API or local Transformers.",
        color: "#3884ff",
        children: [
          {
            name: "Fairness & bias",
            children: [
              {
                name: "Adversarial Bias",
                description: "Bias surfaced by adversarially chosen prompts.",
              },
              {
                name: "Demographic Bias",
                description: "Differences in outputs across demographic groups.",
              },
              {
                name: "Hate-speech Bias",
                description:
                  "Tendency to generate hate speech, compared across groups.",
              },
              {
                name: "Regard",
                description:
                  "The sentiment / regard the model expresses toward different groups.",
              },
              {
                name: "Toxicity",
                description:
                  "Toxic or offensive generations (Perspective / ToxiGen classifiers).",
              },
            ],
          },
          {
            name: "Performance & quality",
            children: [
              {
                name: "BLEU",
                description:
                  "n-gram overlap with a reference generation / translation quality.",
              },
              {
                name: "ROUGE",
                description: "Recall-oriented overlap summarisation quality.",
              },
              {
                name: "Perplexity",
                description:
                  "How confidently the model predicts text, a proxy for fluency.",
              },
            ],
          },
          {
            name: "Privacy",
            children: [
              {
                name: "Membership Inference (neighborhood)",
                description:
                  "Can an attacker tell if a text was in the training data? (neighborhood method)",
              },
              {
                name: "Membership Inference (attack)",
                description:
                  "Classic membership-inference attack on model outputs.",
              },
            ],
          },
          {
            name: "Robustness & security",
            children: [
              {
                name: "GCG Adversarial Attack",
                description:
                  "Greedy Coordinate Gradient attack probing the jailbreak robustness of LLMs.",
              },
            ],
          },
        ],
      },
    ],
    cover: "/projects/verifai/verifai-logo-small.png",
    gallery: [
      { image: "/projects/verifai/select_model.png", caption: "..."},
      { image: "/projects/verifai/select_metrics.png", caption: "..."},
      { image: "/projects/verifai/regard_prompt_analysis.png", caption: "..."},
      { image: "/projects/verifai/regard_attribute_level_analysis.png", caption: "..."},
    ],
    links: { link: "https://www.researchgate.net/profile/Sabrina-Hartung", description: "Research Papers" },
  },
  // {
  //   slug: "konverter",
  //   title: "Konverter",
  //   tagline: "Convert AI Agents between systems",
  //   description:
  //     "A focused utility for converting files and data between formats — built to remove a small, repetitive annoyance from a daily workflow.",
  //   tags: ["Python", "TypeScript", "Tooling"],
  //   emoji: "🔄",
  //   accent: "linear-gradient(135deg, #fbbf24, #f472b6)",
  //   badge: "Tooling",
  //   year: "2024",
  //   role: "Solo project",
  //   overview: [
  //     "Konverter is a small, focused tool for converting data between formats quickly and predictably. It grew out of a recurring task that was just annoying enough to be worth automating properly.",
  //     "The emphasis is on doing one thing well: clear input, clear output, sensible defaults and no surprises. (Placeholder copy — refine with the real story and screenshots.)",
  //   ],
  //   highlights: [
  //     "Converts between formats with sensible defaults",
  //     "Small, single-purpose and easy to reason about",
  //     "Built to fit into an existing workflow",
  //     "Placeholder highlight — replace with the real details",
  //   ],
  //   stack: ["Python", "TypeScript"],
  //   gallery: [
  //     { emoji: "📥", caption: "Input" },
  //     { emoji: "⚙️", caption: "Convert" },
  //     { emoji: "📤", caption: "Output" },
  //   ],
  //   links: { link: "#" },
  // },
  {
    slug: "skin-lesion-classifier",
    title: "HAM10000 Skin Lesion Classifier",
    tagline: "Dermatoscopic skin-lesion classification in the browser",
    description:
      "A deep-learning web app that sorts dermatoscopic images into the seven HAM10000 lesion types: melanoma, carcinomas, benign moles and more with a full per-class probability breakdown.",
    tags: ["Computer Vision", "Deep Learning", "Streamlit", "Python"],
    emoji: "🔬",
    accent: "linear-gradient(135deg, #34d399, #22d3ee)",
    badge: "Live demo",
    year: "2026",
    role: "ML / Computer Vision",
    overview: [
      "An interactive web app that classifies dermatoscopic skin-lesion images into the seven diagnostic categories of the HAM10000 dataset from melanoma and basal-cell carcinoma to benign keratoses and moles. Upload an image (or pick one of the built-in examples) and the model returns its top prediction, a confidence score and the full probability distribution across every class.",
      "The interesting challenge is the data itself: HAM10000 is heavily imbalanced, benign nevi dominate while melanoma is comparatively rare, so the work focused as much on honest evaluation as on headline accuracy. A ResNet, fine-tuned with transfer learning, does the classification, and the app deliberately surfaces the model's uncertainty instead of hiding it behind a single label.",
      "It's deployed as a Streamlit app, so anyone can try it live in the browser, no setup required, and the full model-training code is open-sourced on GitHub.",
    ],
    highlights: [
      "Classifies dermatoscopic images into the 7 HAM10000 lesion classes (incl. melanoma, BCC, benign keratoses, nevi)",
      "ResNet fine-tuned with transfer learning on the imbalanced ~10k-image HAM10000 dataset",
      "Surfaces top prediction, confidence and the full per-class probability distribution",
      "Built-in example images and instant, in-browser inference via Streamlit",
      "Full model-training pipeline (data prep → training → export) open-sourced on GitHub",
      "Emphasis on honest evaluation under class imbalance, not just top-line accuracy",
    ],
    stack: ["Python", "PyTorch", "ResNet (transfer learning)", "Streamlit", "NumPy", "Pillow"],
    gallery: [
            { image: "/projects/skin-lesion-classifier/skin-lesion-classifier.mp4", caption: "Screen Capture of the Skin Lesion Classifier App"},
    ],
    links: {
      demo: "https://ham10000-skin-lesion-classification-sabrinahartung.streamlit.app/",
      link: "https://github.com/sabrinahartung/ham10000-skin-lesion-classification",
      description: "Source code (training)",
    },
    footnotes:
      "This is a Research / portfolio project, not a medical device and not intended for diagnostic use.",
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
      "On top of the data sits a React dashboard that turns raw sensor streams into ML-based statistics and farm-management tools, a full path from field sensor to actionable insight.",
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
      { image: "/projects/samson/api-screenshot.png", caption: "API Endpoints"},
    ],
    links: { link: "https://samson-projekt.de", description: "Project Website" },
    footnotes: "In collaboration with Fraunhofer IFAM, TUHH, and Esteburg Obstbauzentrum Jork, funded by the German Federal Ministry of Food and Agriculture"
  },
];

/** Look up a single project by its slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
