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
  /** Optional badge, e.g. "In progress", "New", "Award winner" */
  badge?: string;

  /* ---------- Detail page ---------- */
  year: string;
  role: string;
  /** One paragraph per array item */
  overview: string[];
  /** Bullet-point highlights */
  highlights: string[];
  /** Full tech stack shown in the sidebar */
  stack: string[];
  /** Placeholder "screenshots" — swap for real images later */
  gallery: { emoji: string; caption: string }[];
  links: {
    demo?: string;
    code?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "aurora-dashboard",
    title: "Aurora Dashboard",
    tagline: "Real-time analytics, beautifully packaged",
    description:
      "A dashboard framework with live charts, a dark glass look and composable widgets. Fully responsive and keyboard-friendly.",
    tags: ["React", "TypeScript", "D3", "WebSockets"],
    emoji: "📊",
    accent: "linear-gradient(135deg, #8b5cf6, #3884ff)",
    badge: "New",
    year: "2025",
    role: "Design & Frontend",
    overview: [
      "Aurora is a widget-based dashboard toolkit built for teams that need to make sense of streaming data without waiting on a data engineer. Every panel is a self-contained component that you can drag, resize and configure at runtime.",
      "The goal was to make real-time feel calm rather than chaotic — smooth transitions between states, sensible empty states, and a color system that stays readable whether you're glancing at it or staring for hours.",
    ],
    highlights: [
      "Live WebSocket data with automatic reconnection and back-pressure handling",
      "Composable widgets: charts, tables, KPIs and maps share one layout engine",
      "Fully keyboard-navigable, with visible focus states throughout",
      "Themeable via CSS variables — light, dark and high-contrast out of the box",
    ],
    stack: ["React", "TypeScript", "D3", "WebSockets", "Vite", "Zustand"],
    gallery: [
      { emoji: "📈", caption: "Live metrics overview" },
      { emoji: "🧩", caption: "Widget configuration" },
      { emoji: "🌗", caption: "Light & dark themes" },
    ],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "nimbus-notes",
    title: "Nimbus Notes",
    tagline: "Notes that think along",
    description:
      "A fast Markdown note app with offline support, full-text search and optional AI summaries of your entries.",
    tags: ["Vite", "IndexedDB", "PWA"],
    emoji: "📝",
    accent: "linear-gradient(135deg, #3884ff, #22d3ee)",
    year: "2024",
    role: "Full-stack",
    overview: [
      "Nimbus is a local-first note-taking app: everything lives in your browser first and syncs when it can. It stays instant even with thousands of notes because search runs entirely on-device.",
      "An optional AI layer can summarise long notes, suggest tags and surface related entries — but it's strictly opt-in, and the app is fully usable without ever going online.",
    ],
    highlights: [
      "Local-first storage with IndexedDB and background sync",
      "Instant full-text search across your entire vault",
      "Installable PWA that works completely offline",
      "Optional, privacy-respecting AI summaries and tag suggestions",
    ],
    stack: ["Vite", "TypeScript", "IndexedDB", "Service Workers", "Web Crypto"],
    gallery: [
      { emoji: "🔍", caption: "Instant search" },
      { emoji: "📴", caption: "Offline-ready" },
      { emoji: "✨", caption: "AI summaries" },
    ],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "pixel-forge",
    title: "Pixel Forge",
    tagline: "A 2D game engine in the browser",
    description:
      "A lightweight editor for building retro platformers — tilemap editor, physics and one-click export as a standalone HTML file.",
    tags: ["Canvas", "TypeScript", "WebAudio"],
    emoji: "🕹️",
    accent: "linear-gradient(135deg, #d982ff, #8b5cf6)",
    badge: "In progress",
    year: "2025",
    role: "Solo project",
    overview: [
      "Pixel Forge lets you build small platformers directly in the browser — paint a tilemap, drop in entities, tweak the physics, and hit play. No install, no build step.",
      "When you're happy, export the whole game as a single self-contained HTML file you can host anywhere. It's designed for game jams and teaching, where speed and shareability matter more than raw power.",
    ],
    highlights: [
      "Tile-based level editor with layers and autotiling",
      "Deterministic 2D physics tuned for tight platformer feel",
      "Built-in chiptune-style sound effects via the Web Audio API",
      "Export to a single standalone HTML file — no dependencies",
    ],
    stack: ["TypeScript", "Canvas 2D", "Web Audio", "Vite"],
    gallery: [
      { emoji: "🗺️", caption: "Tilemap editor" },
      { emoji: "🏃", caption: "Physics playtest" },
      { emoji: "📦", caption: "One-file export" },
    ],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "verdant",
    title: "Verdant",
    tagline: "Your digital plant companion",
    description:
      "Reminds you to water, tracks growth with photos and suggests care routines. Gentle animations, friendly UI.",
    tags: ["React Native", "Expo", "SQLite"],
    emoji: "🌿",
    accent: "linear-gradient(135deg, #34d399, #3884ff)",
    year: "2024",
    role: "Design & Mobile",
    overview: [
      "Verdant is a calm little companion for people who love plants but forget the details. It learns each plant's rhythm and nudges you at the right time instead of nagging on a fixed schedule.",
      "A photo timeline makes progress feel tangible — swipe back through months and watch a cutting turn into a full plant. The whole thing works offline and stores everything on your device.",
    ],
    highlights: [
      "Smart watering reminders based on species and season",
      "Photo growth timeline with side-by-side comparisons",
      "Offline-first, with local SQLite storage",
      "Warm, low-stress UI with soft micro-animations",
    ],
    stack: ["React Native", "Expo", "SQLite", "Reanimated"],
    gallery: [
      { emoji: "💧", caption: "Care reminders" },
      { emoji: "📸", caption: "Growth timeline" },
      { emoji: "🌱", caption: "Plant profiles" },
    ],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "cadence",
    title: "Cadence",
    tagline: "Music practice with a system",
    description:
      "A practice tracker for musicians with a metronome, scale library and stats that make your progress visible.",
    tags: ["Next.js", "WebAudio", "Charts"],
    emoji: "🎼",
    accent: "linear-gradient(135deg, #f472b6, #8b5cf6)",
    year: "2023",
    role: "Full-stack",
    overview: [
      "Cadence turns fuzzy practice sessions into something you can actually see. Log what you work on, and the app builds a picture of where your time goes and where you're improving.",
      "It bundles the tools you reach for anyway — a precise metronome, a searchable scale and chord library, and gentle streak tracking — so you spend less time fiddling and more time playing.",
    ],
    highlights: [
      "Sample-accurate metronome with custom time signatures",
      "Searchable library of scales, modes and chord shapes",
      "Practice stats and streaks visualised over time",
      "Session goals that adapt to how much you actually play",
    ],
    stack: ["Next.js", "TypeScript", "Web Audio", "Recharts", "Postgres"],
    gallery: [
      { emoji: "🥁", caption: "Metronome" },
      { emoji: "🎹", caption: "Scale library" },
      { emoji: "📊", caption: "Progress stats" },
    ],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "orbit-cli",
    title: "Orbit CLI",
    tagline: "Dev tools that spark joy",
    description:
      "A pretty command-line toolbox for scaffolding projects, with interactive prompts and colorful output.",
    tags: ["Node.js", "TypeScript", "CLI"],
    emoji: "🚀",
    accent: "linear-gradient(135deg, #fbbf24, #f472b6)",
    year: "2023",
    role: "Solo project",
    overview: [
      "Orbit is the scaffolding tool I always wished existed — it asks a few friendly questions and spins up a fully wired project with your preferred stack, linting and CI already in place.",
      "It's built to be extended: templates are plain folders with a small manifest, so teams can share their own conventions without writing a single line of plugin code.",
    ],
    highlights: [
      "Interactive prompts with sensible, remembered defaults",
      "Template system based on plain folders + a tiny manifest",
      "Colorful, readable output with helpful next-step hints",
      "Zero-config CI and linting wired up from the first commit",
    ],
    stack: ["Node.js", "TypeScript", "Ink", "Prompts"],
    gallery: [
      { emoji: "⌨️", caption: "Interactive prompts" },
      { emoji: "🎨", caption: "Colorful output" },
      { emoji: "🧱", caption: "Custom templates" },
    ],
    links: { code: "#" },
  },
];

/** Look up a single project by its slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
