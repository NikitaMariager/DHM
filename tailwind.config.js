module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: " 976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkblue: "#192d54",
        sand: "#f8ede1",
        orange: "#ce762a",
        darkorange: "#744319",
        lightblue: "#3c72d6",
      },
      fontFamily: {
        Mar: ["Marcellus", "serif"],
      },
      borderRadius: {
        70: "70px",
        3: "0px 70px 70px 70px",
        2: "0px 70px 0px 70px",
      },
    },
  },
  plugins: [],
};
