/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['"Airbnb"', 'sans-serif']
      },
    extend: {
      colors: {
        primary: '#EFC81A'
      },
      width: {
        '3/10': '30%'
      }
    },
  },
  plugins: [],
}

