/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Setting default project font to Nunito
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'shaded-black': '#111517',
        'slate-black': '#2B3844',
        'main-black': '#202C36',
        'font-light': '#FFFFFF',
      },
      gridTemplateColumns: {
        2: '1fr 2fr',
      },
    },
  },
  plugins: [],
};
