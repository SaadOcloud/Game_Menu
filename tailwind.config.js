/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      flex: {
        '2': '2 1',
        '3': '3 1',
        '6': '6 1',
      },
      screens:{
        'xl':{'max': '1500px'},
        'l':{'max': '1200px'},
        'm':{'max': '800px'},
        's':{'max': '500px'},
        'sm':{'max':'386px'},
        'xs':{'max': '300px'},
        'ml':{'min': '768px'},
      },
      colors:{
        'bls': '#11344687',
        'txtcol':'#0e263487',
        'buttoncol':'#f70505',
        'buttoncola':"#7b1e1d",
        'greenshade':'#0A1821',
        'darkgreenshade':'#0E2634',
        'lightgreenshade':'#2D4955',
        'lightred':'#f80705',
        'darkred':'#7b1e1d',
        'Box':'#35515d',
        'bgc':'rgb(17,52,70,.53)',
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
