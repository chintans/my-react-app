/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          50: '#f1fcf3',
          100: '#dcfce1',
          200: '#bbf7c8',
          300: '#86ef9c',
          400: '#4ade6c',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          100: '#1a1b1e',
          200: '#141517',
          300: '#101012',
          400: '#0c0c0d',
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} 