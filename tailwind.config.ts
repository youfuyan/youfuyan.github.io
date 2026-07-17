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
        ink: "#151714",
        muted: "#5d6674",
        line: "#d8dde4",
        paper: "#f4f5f7",
        surface: "#ffffff",
        accent: "#315bd6",
        "accent-soft": "#eaf0ff",
        success: "#0f766e",
        "success-soft": "#ecfdf5",
        "dark-muted": "#aeb7c4",
        "dark-line": "#343834",
        research: "#e8f0eb",
      },
      fontFamily: {
        display: ["Georgia", '"Times New Roman"', "serif"],
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
