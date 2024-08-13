/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  // ...
}
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        gray: colors.neutral,
      }
    },
  },
  // ...
}