const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        "main-title": "8rem",
      },
      lineHeight: {
        xtight: "0.8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
