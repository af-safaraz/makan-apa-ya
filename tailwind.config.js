/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dela-gothic": ["Dela Gothic One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF8D47",
        secondary: "#ffc96f",
        "secondary-dark": "#dba54b",
        tertiary: "#FAEEE0",
        "tertiary-dark": "#F2E2CF",
        "tertiary-darker": "#d1c2b0",
        "tertiary-700": "#695c4d",
      },
      screens: {
        "2xs": "376px",
        "3xs": "321px",
      },
      keyframes: {
        moveText: {
          "0%": { "margin-top": "0" },
          "25%": { "margin-top": "0" },
          "50%": { "margin-top": "-40px" },
          "60%": { "margin-top": "-40px" },
          "100%": { "margin-top": "0" },
        },
        moveTextMobile: {
          "0%": { "margin-top": "0" },
          "25%": { "margin-top": "0" },
          "50%": { "margin-top": "-36px" },
          "60%": { "margin-top": "-36px" },
          "100%": { "margin-top": "0" },
        },
      },
      animation: {
        "rolling-text": "moveText 10s infinite",
        "rolling-text-mobile": "moveTextMobile 10s infinite",
      },
    },
  },
  plugins: [],
};
