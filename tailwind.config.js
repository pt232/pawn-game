const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#537133",
          600: "#77994c",
          500: "#7fa650",
          400: "#95bb4a",
        },
        secondary: {
          900: "#312e2b",
          800: "#3c3936",
          700: "#413e3c",
          600: "#4e4c49",
          500: "#52504d",
          400: "#c5c4c3",
        },
        board: {
          white: "#eeeed2",
          black: "#769656",
        },
      },
      fontFamily: {
        primary: ["Montserrat", ...fontFamily.sans],
      },
      boxShadow: {
        "button-primary": "0 4px 0 0 #537133",
        "button-secondary": "0 4px 0 0 #3c3936",
        "tile-top": "inset 0 -2px 0 0 #eb6150",
        "tile-top-sm": "inset 0 -4px 0 0 #eb6150",
        "tile-bottom": "inset 0 2px 0 0 #eb6150",
        "tile-bottom-sm": "inset 0 4px 0 0 #eb6150",
      },
    },
  },
  plugins: [],
};
