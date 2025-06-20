/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#1D6CB6",
        secondary: "#FF1734",
      }
    },
  },
  plugins: [],
}

