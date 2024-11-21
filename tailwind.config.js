/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/*.html'],
  theme: {
    screens: {},

    fontFamily: {
      'sans': ['Gilroy-ExtraBold'],
    },
    
    extend: {

      backgroundImage: {
        'main': "url('src/images/main.jfif')"
      },
      colors: {
        blurButton: '#1C1C1C8F',
        button: '#1C1C1C',
        darkText: '#1E1E1E',
        blurPink: '#DC02C373',
        caseBlue: '#2039D2',
      }

      
    },
  },
  plugins: [],
}

