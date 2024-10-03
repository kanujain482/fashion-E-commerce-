/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        green: {
          500: '#60b084',
          600: '#439771',
        },
        
      },
    },
  },
  plugins: [],
}

