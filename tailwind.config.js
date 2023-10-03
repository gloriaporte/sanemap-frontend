/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./App.js", 
    "./src/components/*.js",
    "./src/pages/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "",
        "primary": "#0668B8",
        "primary-dark": "",
        "secondary-light": "",
        "secondary": "",
        "secondary-dark": "",
        "tertiary-light": "",
        "tertiary": "",
        "tertiary-dark": "",
      },
      border: {
        "primary": "#0668B8",
      }
    },
  },
  plugins: [],
}

