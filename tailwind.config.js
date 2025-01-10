/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursize: ["Pacifico", "Sriracha", "cursive"],
        cursize2: ["Sriracha", "cursive"],
      },
    },
  },
  plugins: [],
};
