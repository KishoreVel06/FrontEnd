import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#07110d",
        forest: "#0d2b1f",
        emeraldDeep: "#124d35",
        antiqueGold: "#d7b56d",
        champagne: "#f3dfb6",
        pearl: "#f7f3ea"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(18,77,53,.12)",
        gold: "0 0 0 1px rgba(215,181,109,.24), 0 20px 60px rgba(18,77,53,.10)"
      }
    }
  },
  plugins: []
};

export default config;