/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  
  /*O ocnteudo q ele vai ler */
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  /*Fazer rodar, minuto 48:50 Aula 4*/
  theme: {
    // colocar a fonte google
    fontFamily: {
      sans:["inter", "sans-serif"],
    },
    extend: {}
  },
  plugins: [],
}

/*https://tailwindcss.com/docs/installation/using-postcss ===> PRA INSTALAR*/
/*Tailwind CSS IntelliSense ==> Extensão */