/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#4ade80',
          600: '#22c55e',
          700: '#16a34a',
        },
      },
    },
  },
  plugins: [],
}
