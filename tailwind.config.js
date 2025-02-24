/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
}

