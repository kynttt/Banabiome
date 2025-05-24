/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here based on the Figma design
        primary: '#689C1D',
        secondary: '#F8EC58',
        accent: '#F8F9FE',
      },
      fontFamily: {
        // Add your custom fonts here based on the Figma design
        sans: ['Satoshi', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 