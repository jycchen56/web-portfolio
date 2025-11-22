/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'jerry-bg': '#FAF7F2',      // The Cream Background
        'jerry-green': '#06272A',   // The "Stroke" / Main Text Color
        'jerry-blue': '#132B45',    // Navbar Text / Subtitle Color
      },
      fontFamily: {
        serif: ['"Lastik"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}