module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900_0f": "#0000000f",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_28": "#00000028",
        },
        white: {
          A700: "#ffffff",
          A700_a2: "#ffffffa2",
          A700_7e: "#ffffff7e",
          A700_19: "#ffffff19",
          A700_75: "#ffffff75",
          A700_90: "#ffffff90",
        },
        colors: "#ffffffff",
        gray: { 400: "#c3c5c4", 700: "#616160", "400_87": "#c3c5c487" },
        light_blue: {
          300: "#44c1ef",
          "300_54": "#43c1ef54",
          "300_33": "#44c1ef33",
        },
        yellow: {
          700: "#f7bf23",
          "700_59": "#f7be2259",
          "700_63": "#f7bf2363",
        },
        blue_gray: {
          400: "#8c8c8c",
          800: "#2c3862",
          "800_00": "#2c386200",
          "800_90": "#2c386290",
          "900_14": "#28334a14",
        },
        red: { A700: "#d90000" },
      },
      boxShadow: {
        bs: "0px 0px  20px 0px #28334a14",
        bs3: "0px 4px  9px 0px #0000000c",
        bs2: "0px 0px  20px 0px #00000028",
        bs1: "0px 10px  40px 6px #0000000f",
        bs4: "0px 10px  20px 0px #00000019",
      },
      fontFamily: {
        dinnextltarabic: "DIN Next LT Arabic",
        lato: "Lato",
        dmsans: "DM Sans",
        cairo: "Cairo",
        inter: "Inter",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#2c386200,#2c3862)",
        gradient1: "linear-gradient(124deg ,#2c386200,#2c3862)",
        gradient2: "linear-gradient(180deg ,#2c386290,#2c386290)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
