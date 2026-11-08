import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#111317",
        limeAccent: "#C6F432",
        limeHover: "#D4F838",
        aquaAccent: "#00B4D8",
        aquaSecondary: "#06B6D4",
        canvas: "#F8FAFC",
        canvasAlt: "#F1F5F9",
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        card: "22px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;

