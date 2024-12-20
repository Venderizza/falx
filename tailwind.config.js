/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    screens: {
      'ssm': '425px',

      'smm': '475px',

      'sm': '910px',

      'md': '960px',

      'my2': '1073px',
      
      'my': '1230px',

      'my3': '1363px',

      'my4' : '1560px',

      'lg': '1630px',
    },

    fontFamily: {
      'sans': ['Gilroy-SemiBold', 'Gilroy-Light'],
    },
    
    extend: {

      backgroundImage: {
        main: "url('/src/images/test.jpg')"
      },
      colors: {
        blurButton: '#1C1C1C8F',
        button: '#1C1C1C',
        darkText: '#1E1E1E',
        blurPink: '#DC02C373',
        opacity0: '#FFFFFF00',
        caseBlue: '#2039D2',
      }

      
    },
  },
  plugins: [],
}

