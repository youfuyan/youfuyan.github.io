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
        ink: "#0A0C0E",
        bone: "#EDE7DC",
        amber: "#E8913C",
        teal: "#65A4A8",
        noir: "#0A0C0E",
        "noir-soft": "#101317",
        muted: "#5d6674",
        line: "#d8dde4",
        paper: "#f4f5f7",
        surface: "#ffffff",
        accent: "#315bd6",
        "accent-soft": "#eaf0ff",
        success: "#0f766e",
        "success-soft": "#ecfdf5",
        "dark-muted": "#aeb7c4",
        "dark-line": "rgba(237, 231, 220, 0.13)",
        research: "#e8f0eb",
      },
      fontFamily: {
        display: ['"Arial"', '"Helvetica Neue"', "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", '"Liberation Mono"', "monospace"],
      },
      boxShadow: {
        subtle: "0 14px 36px rgba(15, 23, 42, 0.07)",
        lift: "0 18px 42px rgba(15, 23, 42, 0.11)",
      },
    },
  },
  plugins: [],
};

export default config;
