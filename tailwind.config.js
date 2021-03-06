module.exports = {
  // RUN TIME
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      // Custom Colours
      colors: {
        primary: '#cbdce0',
        secondary: '#9bb7bd'
      }
    },
    // Custom Fonts
    fontFamily: { 
      roboto: ['Roboto', 'sans-serif'],
      monstserrat: ['Montserrat', 'sans-serif']
    },
    variants: {
      extend: {}
    }
  },
  plugins: []
}
