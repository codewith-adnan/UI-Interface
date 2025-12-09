/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        default: "var(--default-color)",
        heading: "var(--heading-color)",
        accent: "var(--accent-color)",
        surface: "var(--surface-color)",
        contrast: "var(--contrast-color)",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
        nav: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}