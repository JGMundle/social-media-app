/** @type {import('tailwindcss').Config} */
const constants = require("../TikTokWeb/src/config/constants")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default_red: "#fe2c56"
      }
    },
  },
  plugins: [],
}

