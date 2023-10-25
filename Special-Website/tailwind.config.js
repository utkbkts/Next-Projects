/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        singerOverlay: "url(/public/assets/hero/singer-overlay.png)",
        news: "url(/public/assets/newsletter/bg.png)",
      },
      fontFamily: {
        Alex: ["var(--font-alex)", "sans-serif"],
        Montser: ["var(--font-montser)", "sans-serif"],
      },
      colors: {
        primary: "#06062A",
        secondary: "#151538",
        tartiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
