/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      robot :[ "Roboto", 'sans-serif'],
      mont :[ "Montserrat", 'sans-serif'],
    }
  },
  plugins: [],
}

