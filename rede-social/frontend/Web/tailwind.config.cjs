/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    colors: {
      transparent: "transparent",
      black: "#0f0f0e",
      white: "#ffffff",
      primary: '#f77909',
      primaryLight: '#fed32e',
      primaryDark: '#f25802',
      secondary: '#7b4200',
      secondaryLight: '#fc8800',
      secondaryDark: '#e76c1e',
      textOnP: '#ffffff',
      textOnS: "#000000",
      error: '#B00020',
      close: '#ef5350',
      background: '#fafafa',
      lineBg: "#E8E8E8",
      hoverBg: '#F5F5F5'
    },
    extend: {
    }
  },
  plugins: [],
}
