/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Simplified content path
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        geist: ['var(--font-geist-sans)'],
        instrument: ['var(--font-instrument-serif)'],
      },
      colors: {
        newgreen: {
          DEFAULT: '#419057',
          light: 'rgba(65, 144, 87, 0.7)',
          dark: '#377a49',
        },
      }
    },
  },
  plugins: [],
}