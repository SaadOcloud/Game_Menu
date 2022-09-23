/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'xl':{'max': '1500px'},
        'l':{'max': '1200px'},
        'm':{'max': '800px'},
        's':{'max': '500px'},
        'ml':{'min': '768px'},
      },
      colors:{
        'bls': '#11344687',
        'txtcol':'#0e263487',
        'buttoncol':'#f70505',
        'buttoncola':"#7b1e1d",
        'Box':'#35515d',
        'blueshade':'rgb(17,52,70,.53)',
        'lightblue':'#1F3E51',
        'dullwhite':'#788B96',
        'lightred':'#f80705',
        'darkred':'#7b1e1d',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      }
    }
  },
  plugins: [],
}
