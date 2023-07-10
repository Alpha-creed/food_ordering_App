/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans:["Open Sans",...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
    "compilerOptions": {
      "esModuleInterop": true,
      "moduleResolution": "Node"
    },
}

