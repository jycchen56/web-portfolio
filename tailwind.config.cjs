/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#233A36',
        accent: '#5E45B1',
        paper: '#F5F1E9',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
