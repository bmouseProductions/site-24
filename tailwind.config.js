/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    backgroundSize: {
      '400': '350px',
      '600': '500px',
    }
  },
  plugins: [],
}