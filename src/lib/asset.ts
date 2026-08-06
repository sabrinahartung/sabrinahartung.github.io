/**
 * Resolve a path that lives in the `public/` folder into a URL that works
 * regardless of the site's base path (a root user site *or* a project
 * subpath). Always pass paths relative to `public/`, e.g.:
 *
 *   asset("projects/verifai/cover.png")  →  "/projects/verifai/cover.png"
 *
 * Vite copies everything in `public/` to the site root at build time, so
 * dropping an image in `public/projects/…` is all you need.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

/** True when a media path points at a video (rendered as a looping <video>). */
export function isVideo(path: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogv)$/i.test(path);
}
