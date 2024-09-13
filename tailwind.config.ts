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
        sans: ["var(--font-inter)"]
      },
      screens: {
        "3xl": "2000px"
      },
      colors: {
        "vqnt2-black": "#000000",
        "vqnt2-white": "#ffffff"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
