/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
       
        tl:{ min: '0px', max: '375px' },
        xs: { min: '376px', max: '768px' },
      },
    },
  },
  plugins: [],
}