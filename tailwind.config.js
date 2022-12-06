/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        offwhite: '#dadaed',
        black: '#0a0a12',
        darkblue: '#02033b',
        blue: '#020254'
      },
      fontFamily: {
        Montserrat: ["Monteserrat", "sans-serif"]
      }

    },
  },
  plugins: [],
}
