/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        molina: "#009ea0",
        light: "#f8f9fa",
        ground: "#edf1f7",
        text: "##222b45",
      }
    },
  },
  plugins: [],
}

