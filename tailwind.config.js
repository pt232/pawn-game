/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: "#312e2b",
        },
        board: {
          white: "#eeeed2",
          black: "#769656",
        },
      },
    },
  },
  plugins: [],
};
