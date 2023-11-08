module.exports = {
  important: true,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      lightGrey: "#333333",
      lightBlue: "#8DADFD",
      blue: "#1A5AFA",
      moreBlue: "#37425E",
      moreBlue: "#37425E",
      moreBlue: "#37425E",
      darkBackground: "#04060A",
      darkGrey: "#262626",
      lightestGrey: "#929292",
      lightWhite: "#F2F2F2",
      darkWhite: "#C5C5C5",
      greyDarkest: "#B5B5B5",
      btn_color: "#316BFB",
      filter_btn: "#F2F2F2",
      update_time_btn: "#5F5F5F",
      greyestGrey: "#666666",
      lightBlack: "#1D1F22",
      btn_color: "#316BFB",
      filter_btn: "#F2F2F2",
      para_color: "#666666",
      why_learn: "#1E1E1E",
      update_time_btn: "#5F5F5F",
    },
    screens: {
      mobile: "350px",

      // => @media (min-width: 640px) { ... }

      laptop: "1024px",

      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",

      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        vietnam: ["var(--font-vietnam)"],
      },
      screens: {
        small: { min: "320px", max: "600px" },
        medium: { min: "750px", max: "1068px" },
        large: { min: "1069px", max: "1468px" },
        extraLarge: { min: "1469px", max: "2500px" },

        smNew: { min: "320px", max: "600px" },
        mdNew: { min: "601px" },
        lgNew: { min: "1069px" },
        xlNew: { min: "1469px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
