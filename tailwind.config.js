// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coinbaseBlue:{
          DEFAULT:'#1652F0'
        },
        coinbaseGreen:{
          DEFAULT:'#05B169'
        }
      }
    },
  },
  fontFamily: {
    display: ['Graphik'],
    sans: ['Graphik']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}