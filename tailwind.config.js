/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      lg: { max: "1023px" },
      sm: { max: "767px"}
    },
    extend: {
      colors: {
        molina: "#009ea0"
      }
    },
  },
  plugins: [],
}

