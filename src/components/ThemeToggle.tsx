import { useState } from "react";

type Theme = "light" | "dark";

/**
 * Where an explicit choice is saved. Must match the key read by the inline
 * script in index.html. (Renamed from "theme": the old key was also written
 * automatically on page load, so it can't tell a real choice from a default.)
 */
const THEME_STORAGE_KEY = "theme-choice";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.dataset.theme as Theme) || "dark";
}

/**
 * Light/dark toggle. The initial theme is set before paint by the inline
 * script in index.html (saved choice → DEFAULT_THEME). This button flips it
 * and saves the choice, only on click, so visitors who never touch it
 * always get the default.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore (e.g. private mode) */
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-10 w-10 place-items-center rounded-lg text-lg text-ink transition-colors hover:bg-hairline/10"
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
