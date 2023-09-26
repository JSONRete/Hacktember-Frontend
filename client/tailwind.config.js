/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Custom Fonts Here
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      colors: {
        // Add Custom Colors Here // 
        primary: "",
        secondary: "",
        accent: "",
        error: "",
      },
    },
  },
  plugins: [],
}
