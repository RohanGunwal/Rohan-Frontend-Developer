/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      zen: "Zen Dots",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        1: "400px 400px 100px",
      },
      height: {
        100: "28rem",
      },
    },
  },
  plugins: [],
};
