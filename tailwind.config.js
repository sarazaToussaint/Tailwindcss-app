/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
  },

  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },

  plugins: [],
}

