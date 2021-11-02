module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "main-title": "16rem",
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
