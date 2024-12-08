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
        // "tertiary-dark": "#efe1d1",
        "tertiary-darker": "#d1c2b0",
        "tertiary-700": "#695c4d",
      },
    },
  },
  plugins: [],
};
