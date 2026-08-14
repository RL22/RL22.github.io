import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // `dark` is the lightest terracotta that clears WCAG AA (4.5:1) with
        // white text at body size — 5.42:1. DEFAULT is 4.16:1 and must not
        // carry white text; `darker` (7.11:1) is the hover step above `dark`.
        brand: { DEFAULT: "#C0614A", light: "#D4745E", dark: "#A5523D", darker: "#8A4433" },
        cream: "#F5EFE6",
        "cream-dark": "#EDE4D8",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;