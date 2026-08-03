import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook.
 *
 * Attach the returned ref to any container. Every descendant carrying the
 * `.reveal` class (plus an optional inline `transitionDelay`) fades + rises
 * into view the first time it enters the viewport. Elements are only revealed
 * once, so scrolling back up keeps them in place.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(".reveal");

    // No IntersectionObserver (or reduced motion handled via CSS) → show all.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
