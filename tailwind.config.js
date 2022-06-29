/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F1D18',
        'dark': ' #383838',
      },
      fontFamily: {
        'title': ['Nooa Semiserif', 'serif']
      },
      fontSize: {
        '3xl': ['1.75rem', '2.25rem'],
        '7xl': ['4.375rem', '1']
      }
    },
  },
  plugins: [],
}



