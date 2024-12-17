/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // 'xs': '480px',
        // '3xl': '1600px',

        xs: { min: '376px', max: '767px' },
        tl:{ min: '0px', max: '375px' },
        sm: { min: '768px', max: '5200px' },
      },
    },
  },
  plugins: [],
}