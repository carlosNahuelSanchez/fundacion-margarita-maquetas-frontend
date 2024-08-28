/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    backgroundImage: {
      'custom-svg': "url('src/fondoLandingPage.svg')",
    }
  },
  },
  plugins: [],
  };
