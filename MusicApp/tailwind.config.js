/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'spotify-grey':'#121212',
        'spotify-green':'#1AD35E',
      },
      background1:{
        'background1':'flex pl-10 pr-10 flex-col items-center bg-gradient-to-b from-spotify-grey from-90% to-gray-500 h-screen',
      },
    },
  },
  plugins: [],
}