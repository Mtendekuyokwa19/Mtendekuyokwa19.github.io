/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      fontFamily: {
        JetBrains: ['JetBrains Mono', 'sans-serif'],
        Quicksand: ['Quicksand', 'sans-serif']
        , Serif: ['DM Serif Text', 'sans-serif']
        , Alfa: ['Alfa Slab One', 'sans-serif']

      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',

      'headerGreen': '#a3bd8d',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'everNav': '#232a2d',
      'everbg': "#141b1e",
      'catWhite': '#eff1f5',
      'catNav': ' #ccd0da  ',
      'everNavText': '#b3b9b8',
      ...colors
    },
  },
  plugins: [],
}
