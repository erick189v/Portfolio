/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'AFC8AD': '#AFC8AD',
        '88AB8E': '#88AB8E',
        'EEE7DA': '#EEE7DA',
        'F2F1EB': '#F2F1EB',
      },
    },
  },
  plugins: [],
}
