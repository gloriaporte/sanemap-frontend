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
        "light": "#F4F9DD",
        "primary-light": "#033e6e",
        "primary": "#0668B8",
        "primary-dark": "#69a4d4",
        "secondary-light": "#566583",
        "secondary": "#7C91BC",
        "secondary-dark": "#a3b2d0",
        "tertiary-light": "#a1aaa8",
        "tertiary": "#E6F4F1",
        "tertiary-dark": "#edf7f5"
      },
      border: {
        "primary-light": "#033e6e",
        "primary": "#0668B8",
        "primary-dark": "#69a4d4",
        "secondary-light": "#566583",
        "secondary": "#7C91BC",
        "secondary-dark": "#a3b2d0",
        "tertiary-light": "#a1aaa8",
        "tertiary": "#E6F4F1",
        "tertiary-dark": "#edf7f5"
      }
    },
  },
  plugins: [],
}

