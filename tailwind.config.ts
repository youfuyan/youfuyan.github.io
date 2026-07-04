import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#526070",
        line: "#d9e1ea",
        paper: "#f8fafc",
        accent: "#1d4ed8",
        "accent-soft": "#e9f0ff",
      },
      boxShadow: {
        subtle: "0 18px 60px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
