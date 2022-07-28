/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      important: true,
      backgroundColor: {
        mainColor: {
          100:'#a82d49',
        }
      },
      container: {
        lg:'margin:0 auto;',
        md:'margin:0 auto;',
        sm:'margin:0 auto;',
      }
      ,
      colors: {
        mainColor: {
          100:'#a82d49',
        },
        headTxt: {
          100:'#43121d',
        },
        bodyTxt:{
          100:'#555555',
        }
      }
    },
  },
  plugins: [],
}