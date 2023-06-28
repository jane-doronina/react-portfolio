/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
        grey: "rgb(80, 80, 80)",
        pink: "rgb(255, 90, 81)",
        green: "rgb(178, 225, 64)",
        yellow: "rgb(209, 168, 8)",
        red: "rgb(254, 0, 80)",
        blue: "rgb(51, 185, 207)",
        brightBlue: "rgb(65, 80, 221)"
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
})
