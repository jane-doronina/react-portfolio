/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        white: "#ffffff",
        lightGrey: "rgb(241, 241, 241)",
        darkGrey: "rgb(42, 42, 42)",
        mediumDarkGrey: "rgb(56, 56, 56)",
        grey: "rgb(80, 80, 80)"
      },
      fontFamily: {
        jost: ['Jost', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
