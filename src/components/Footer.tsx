export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-faint sm:flex-row">
        <p className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-gradient text-[0.7rem]">
            ✦
          </span>
          Showcase — built with React, Vite &amp; Tailwind
        </p>
        <p>© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
