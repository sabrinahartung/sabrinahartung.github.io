import { useEffect, useState } from "react";

/**
 * Tiny hash-based router — perfect for GitHub Pages (no server rewrites).
 *
 *   #/               → home
 *   #projects        → home, browser scrolls to the #projects section
 *   #/project/<slug> → project detail page
 *
 * Only `#/project/<slug>` is treated as a "route"; every other hash is a
 * normal in-page anchor and resolves to the home view.
 */
export type Route = { name: "home" } | { name: "project"; slug: string };

function parse(): Route {
  const match = window.location.hash.match(/^#\/project\/(.+)$/);
  if (match) return { name: "project", slug: decodeURIComponent(match[1]) };
  return { name: "home" };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

/** Navigate to a project detail page. */
export function goToProject(slug: string) {
  window.location.hash = `#/project/${encodeURIComponent(slug)}`;
}
