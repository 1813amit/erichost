module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          600: "#656d76",
          900: "#000000",
          "900_28": "#00000028",
          "900_47": "#00000047",
          "900_49": "#00000049",
          "900_7f": "#0000007f",
        },
        blue_gray: { 900: "#333333" },
        gray: { 50: "#f4f5ff", 100: "#f2f3ff", 500: "#a2a2a2", 600: "#69727d", "500_72": "#a2a2a272" },
        green: { 800: "#0f9c28" },
        indigo: { 50: "#e5e7ff", 300: "#828be2", 500: "#4246c9" },
        white: { a700: "#fbfffc", a700_01: "#ffffff" },
        gray_shadow: "#00000029",
      },
      boxShadow: {
        xs: "0 0 4px 0 #00000028",
        sm: "0 2px 4px -3px #0000007f",
        md: "0 0 4px 0 #0000007f",
        lg: "0 0 3px 0 #00000047",
        xl: "0 0 3px 0 #00000049",
        "2xl": "0 0 13px 5px #00000029",
      },
      fontFamily: { poppins: "Poppins", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
