/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      1214: ["12px", "14px"],
      1215: ["12px", "15px"],
      1217: ["12px", "17px"],
      1220: ["12px", "20px"],
      1236: ["12px", "36px"],
      1316: ["13px", "16px"],
      1418: ["14px", "18px"],
      1516: ["15px", "16px"],
      1520: ["15px", "20px"],
      1524: ["15px", "24px"],
      1536: ["15px", "36px"],
      1618: ["16px", "18px"],
      1716: ["17px", "16px"],
      1720: ["17px", "20px"],
      1722: ["17px", "22px"],
      1748: ["17px", "48px"],
      1836: ["18px", "36px"],
      2024: ["20px", "24px"],
      2048: ["20px", "48px"],
      2428: ["24px", "28px"],
      2832: ["28px", "32px"],
      3238: ["32px", "38px"],
    },
    extend: {
      screens: {
        min901: { min: "901px" },
        max500: { max: "500px" },
        max700: { max: "700px" },
        max900: { max: "900px" },
        max1075: { max: "1075px" },
        max1260: { max: "1260px" },
      },
      colors: {
        primary: "#2374e1",

        primaryIcon: "#050505",
        secondaryIcon: "#65676b",
        primaryText: "#050505",
        secondaryText: "#65676b",
        space: "#f0f2f5",
        surface: "white",

        // dark
        primaryIconDark: "#e4e6eb",
        secondaryIconDark: "#b0b3b8",
        primaryTextDark: "#ffffff",
        secondaryTextDark: "#abafb4",
        spaceDark: "#18191a",
        surfaceDark: "#242526",

        supportDark: "#3a3b3c",

        // button
        primaryBtnBg: "#2374e1",
        onPrimaryBtn: "#42b72a",
        secondaryBtnBg: "green",
        onSecondaryBtn: "#fff",
        normalBtn: "#e4e6eb",
        normalBtnDark: "#3a3b3c",
        onNormalBtnBg: "#e4e6ea",

        support: "#f0f2f5",

        // auth
        border: "#dadde1",
        bgAuthentication: "#ccc",
        textAuth: "#1c1e21",

        //
        divider: "#ced0d4",
        dividerDark: "#333",
      },
    },
  },
  plugins: [],
};
