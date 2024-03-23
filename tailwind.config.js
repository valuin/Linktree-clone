/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'background': '#141414',
        'grey': '#1F1F1F',
        'button-grey': '#333',
        'primary-green': '#c5f82a'
      },
      height: {
        '600' : '600px',
        '650': '650px',
        '700': '700px'
      },
      width: {
        '300' : '300px',
        '375': '375px',
        '400': '400px'
      }
    },
  },
  plugins: [],
}

