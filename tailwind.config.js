/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        // 'custom-green':'#66bb6a',
        'primary': '#2F1D18',
        'dark': ' #383838',

        'secondary': '#1751F0',
        'secondary-light': '#F5F4FF',
        'secondary-400': '#ECF1FE',
        'green': '#0FA958',
        'purple': '#6C47FF',
        'blue': '#6669FB',
        'red': '#D94545',
        'yellow': '#DB890F',
        'white-light': '#EEF2F5',
        'light': '#EFEFEF',
        'lighter': '#F9F9F9',
        'light-300': '#F8F8F8',
        'light-medium': '#CCCCCC',
        'dark-light': '#999999',
        'dark-lighter': '#666666',
        'dark-400': '#4B4949',
        'dark-500': '#707A8A',
        /* --dark-medium: #555555, */
        'dark-medium': '#525252',
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



