/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./css/**/*.{css,js}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4f7df3',
        'pale-blue': '#c2d3ff',
        'light-red': '#ff5263',
        'gray': '#969696',
        'very-dark-blue': '#151f29',
      },
      width: {
        // 'profile': '4rem',
        // 'stars_width': '100%',
      },
      height: {
        // 'stars_height': '4rem',
      },
      screens: {
        '3xs': '0px',
        '2xs': '380px',
        'xs': '480px', // extra small screens
        'sm': '640px', // small screens
        'md': '768px', // medium screens
        'lg': '1024px', // large screens
        'xl': '1280px', // extra large screens
        '2xl': '1536px', // double extra large screens
      },
      fontSize: {
        'h1': '1.7rem',
        'p1': '1rem',
        'btn': '0.8rem',
        'min': '0.'
      },
    },
  },
  plugins: [],
}

