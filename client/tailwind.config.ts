/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        instrument: [
          'var(--font-instrument-serif)',
          'serif',
          'Georgia',
          'Times New Roman',
        ],
      },
    },
    colors: {
      green: '#419057',
    },
  },
  plugins: [],
}
