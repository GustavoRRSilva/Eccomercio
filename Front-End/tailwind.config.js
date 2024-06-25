/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#0056D2",
        gold: "#FFC107",
        white:"#FFF",
        ice:"#E1EEFC"
      },
    },
  },
  extend: {},
  plugins: [],
};
