/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Frosted-glass palette — deep purple/blue night, driven by CSS vars.
        // Tweak these in src/index.css :root to re-skin the whole site.
        night: "rgb(var(--night) / <alpha-value>)", // page background base
        violet: "rgb(var(--violet) / <alpha-value>)", // primary purple accent
        azure: "rgb(var(--azure) / <alpha-value>)", // secondary blue accent
        orchid: "rgb(var(--orchid) / <alpha-value>)", // pink-purple highlight
        // Text
        ink: "rgb(var(--ink) / <alpha-value>)", // headings / high contrast
        mist: "rgb(var(--mist) / <alpha-value>)", // body copy
        faint: "rgb(var(--faint) / <alpha-value>)", // muted / captions
      },
      fontFamily: {
        // Ubuntu for headlines, Poppins for body copy (loaded in index.html).
        display: ['"Ubuntu"', "system-ui", "sans-serif"],
        body: ['"Poppins"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 8, 45, 0.37)",
        "glow-violet": "0 0 40px -8px rgb(var(--violet) / 0.55)",
        "glow-azure": "0 0 40px -8px rgb(var(--azure) / 0.55)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, rgb(var(--violet)), rgb(var(--azure)))",
      },
      keyframes: {
        // Slow drifting background blobs
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -8%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Scroll-reveal entrance
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Animated gradient sweep for headline text
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 32s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "rise-in": "rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 6s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
