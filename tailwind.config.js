/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rT: "Roboto-Thin",
        rR: "Roboto-Regular",
        rL: "Roboto-Light",
        rB: "Roboto-Bold",
        rM: "Roboto-Medium",
        rC: "Roboto-Condensed",
      }
    },
  },
  plugins: [],
}