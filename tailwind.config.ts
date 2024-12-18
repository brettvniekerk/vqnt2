import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        lato: ["var(--font-lato)"]
      },
      screens: {
        "3xl": "2000px"
      },
      colors: {
        "app-black": "#000000",
        "app-white": "#ffffff"
      }
    }
  },
  plugins: [
    require("tailwind-heropatterns")({
      patterns: ["graph-paper"],
      colors: {
        default: "#ffffff"
      },
      opacity: {
        default: "0.1"
      }
    })
  ]
} satisfies Config;

export default config;
