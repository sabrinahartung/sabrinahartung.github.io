import { useEffect, useRef } from "react";
import { asset, isVideo } from "../lib/asset";

export type LightboxImage = { image?: string; caption: string };

/**
 * Full-screen image viewer. Controlled by the parent via `index`:
 * a number opens the viewer at that image, `null` closes it.
 * Supports Escape to close, ←/→ to navigate, backdrop click to dismiss,
 * and locks body scroll while open.
 */
export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight")
        onNavigate((index + 1) % images.length);
      else if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);

    // Lock background scroll while the viewer is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open) return null;

  const current = images[index];
  const many = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption || "Image viewer"}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/80 p-4 backdrop-blur-xl"
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="glass-strong absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-white/20"
      >
        ✕
      </button>

      {/* Previous */}
      {many && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          className="glass-strong absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-ink transition-colors hover:bg-white/20"
        >
          ←
        </button>
      )}

      {/* Image + caption (clicks inside must not close) */}
      <figure
        onClick={(e) => e.stopPropagation()}
        className="animate-rise-in flex max-h-full max-w-full flex-col items-center gap-3"
      >
        {isVideo(current.image!) ? (
          <video
            src={asset(current.image!)}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-glass"
          />
        ) : (
          <img
            src={asset(current.image!)}
            alt={current.caption}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-glass"
          />
        )}
        <figcaption className="flex max-w-2xl items-center gap-3 text-sm text-white/85">
          <span>{current.caption}</span>
          {many && (
            <span className="flex-none text-white/50">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {/* Next */}
      {many && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          className="glass-strong absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-ink transition-colors hover:bg-white/20"
        >
          →
        </button>
      )}
    </div>
  );
}
