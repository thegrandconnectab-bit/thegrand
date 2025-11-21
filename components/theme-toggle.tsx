"use client";

import { useEffect, useState } from "react";

const themes = ["light", "dark"] as const;
type Theme = (typeof themes)[number];

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("tgc-theme") as Theme | null;
  if (stored && themes.includes(stored)) return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = getPreferredTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("tgc-theme", nextTheme);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--surface)] text-sm font-medium text-[var(--text-secondary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

