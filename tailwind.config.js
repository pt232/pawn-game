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
          500: "#c5c4c3",
        },
        board: {
          white: "#eeeed2",
          black: "#769656",
        },
      },
      fontFamily: {
        primary: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      boxShadow: {
        button: "0 4px 0 0 #537133",
      },
    },
  },
  plugins: [],
};
