/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          50: '#f6f8fa',
          100: '#e1e4e8',
          200: '#d1d5da',
          300: '#959da5',
          400: '#6a737d',
          500: '#586069',
          600: '#444d56',
          700: '#2f363d',
          800: '#24292e',
          900: '#1b1f23',
        }
      }
    },
  },
  plugins: [],
}
