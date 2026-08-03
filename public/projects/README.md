# Project images

Drop your project images in here (a subfolder per project keeps things tidy):

```
public/projects/verifai/cover.png
public/projects/verifai/1.png
public/projects/verifai/2.png
```

Then reference them in `src/data/projects.ts` — paths are **relative to
`public/`**, so leave off the `public/` prefix:

```ts
{
  slug: "verifai",
  // …
  cover: "projects/verifai/cover.png",     // card + detail hero image
  gallery: [
    { image: "projects/verifai/1.png", caption: "Image models" },
    { image: "projects/verifai/2.png", caption: "NLP models" },
    { emoji: "📋", caption: "Tabular models" }, // emoji still works as a fallback
  ],
}
```

If `cover` is omitted, the card/detail hero falls back to the emoji + gradient.
Each gallery item shows its `image` when set, otherwise its `emoji`.

**Tips**

- Covers look best around **16:9** (e.g. 1200×675). They're cropped with
  `object-cover`, so the center stays visible.
- Gallery thumbnails are small and square-ish — anything works.
- Use `.webp` or compressed `.png` / `.jpg` to keep the page fast.
