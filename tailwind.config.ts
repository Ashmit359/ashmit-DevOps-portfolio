import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0C0F12",
          900: "#12161B",
          800: "#1A2029",
          700: "#242B36",
          600: "#333D4B",
          500: "#4C5867",
          400: "#79879A",
          300: "#A9B4C0",
          200: "#D3D9E0",
          100: "#EEF1F4",
        },
        signal: {
          DEFAULT: "#E8A33D",
          bright: "#F5B94C",
          dim: "#8A631F",
        },
        wire: {
          DEFAULT: "#3FA7A0",
          bright: "#57C9C1",
        },
        alert: {
          DEFAULT: "#C1554A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};

export default config;
