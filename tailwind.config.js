/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        dancing: "'Dancing Script', cursive",
        caveat: "'Caveat', cursive"
      }
    },
  },
  plugins: [require("daisyui")],
}

