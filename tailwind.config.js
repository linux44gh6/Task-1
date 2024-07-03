/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        font1:"Inter",
      },
      colors:{
        color1:'#D9EFFA',
        color2:'#C7DBE5',
        color3:'#FBFBFB'
      }
    },
  },
  plugins: [require('daisyui')],
}