# ✦ Showcase Template

A modern one-pager for presenting your projects — with a frosted-glass look,
purple/blue tones, the **Ubuntu** (headlines) and **Poppins** (body) typefaces,
and subtle animations.

Built with **Vite + React + TypeScript + Tailwind CSS v3**, ready to deploy to
**GitHub Pages**. Every project tile is clickable and opens its own detail page
(hash routing, no server config required).

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run build     # production build → dist/
npm run preview   # preview the build locally
```

## ✏️ Customising

Almost everything lives in a handful of places:

| What                   | Where                                                   |
| ---------------------- | ------------------------------------------------------- |
| **Projects + details** | `src/data/projects.ts`                                  |
| **Colors**             | `src/index.css` → `:root` (CSS variables)               |
| **Fonts**              | `index.html` (Google Fonts link) + `tailwind.config.js` |
| **Copy / sections**    | `src/components/*.tsx`                                   |
| **Navigation**         | `src/components/Navbar.tsx`                              |

### Projects & detail pages

All content — cards *and* detail pages — comes from the `projects` array in
`src/data/projects.ts`. Each entry has a unique `slug` that becomes its URL:

```
#/project/<slug>
```

Fill in `overview`, `highlights`, `stack`, `gallery` and `links` for the detail
page; the grid tile uses `title`, `tagline`, `description`, `tags`, `emoji`,
`accent` and the optional `badge`. Add or remove entries and both the grid and
the detail routes update automatically.

### Project images

Every project can use **real images** instead of the emoji placeholders:

- `cover` — a card + detail hero image
- `gallery[].image` — real screenshots in the detail gallery

Drop the files into `public/projects/…` and reference them by a path relative
to `public/` (e.g. `cover: "projects/verifai/cover.png"`). If `cover` is
omitted the emoji + gradient is used, and each gallery item falls back to its
`emoji` when it has no `image`. See `public/projects/README.md` for details and
sizing tips.

### Recoloring

All colors are CSS variables in the `:root` block of `src/index.css` (stored as
`R G B` triples). Change them once, everywhere updates:

```css
--violet: 139 92 246; /* primary purple    */
--azure: 56 132 255; /* secondary blue     */
--orchid: 217 130 255; /* pink-purple accent */
```

## 🌐 Deploying to GitHub Pages

1. **Set the `base` to your repo name.** In `vite.config.ts`:

   ```ts
   base: command === "build" ? "/showcase-template/" : "/",
   ```

   Replace `showcase-template` with your actual repository name. (For a
   `<user>.github.io` repo or a custom domain, set it to `"/"`.)

2. **Push** to the `main` branch.

3. In the repo settings under **Settings → Pages**, choose **"GitHub Actions"**
   as the source.

The included workflow (`.github/workflows/deploy.yml`) builds and publishes on
every push. Your site will be live at `https://<user>.github.io/<repo>/`.

> Because routing is hash-based (`#/project/...`), deep links and page reloads
> work on GitHub Pages without any 404 workarounds.

## ♿ Details

- Respects `prefers-reduced-motion` (animations are reduced).
- Fully responsive, including a mobile menu.
- Scroll-reveal via `IntersectionObserver`, no extra JS bundle.
- Clickable tiles → per-project detail pages with shareable URLs.

---

Have fun! ✨
