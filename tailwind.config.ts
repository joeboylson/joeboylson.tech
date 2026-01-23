import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        "tag-bg": "var(--color-tag-bg)",
        "tag-text": "var(--color-tag-text)",
        "label-bg": "var(--color-label-bg)",
        "label-text": "var(--color-label-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
