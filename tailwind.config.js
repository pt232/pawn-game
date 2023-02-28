const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: "#312e2b",
          500: "#c5c4c3",
        },
        board: {
          white: "#eeeed2",
          black: "#769656",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
