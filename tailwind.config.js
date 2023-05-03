/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cBlack': '#0b0c10',
        'cAshen': '#1f2833',
        'cGray': '#c5c6c7',
        'cSky': '#66fcf1',
        'cCyan': '#45a29e',
      },
    },
  },
  plugins: [],
}

