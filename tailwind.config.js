/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        teal: {
          50: '#f0fdfb',
          100: '#e6f7f4',
          200: '#bae8e1',
          300: '#89d4ca',
          400: '#4db3a6',
          500: '#287f71',
          600: '#236b60',
          700: '#1d574f',
          800: '#18433d',
          900: '#132f2c',
        },
        light: {
          100: '#ffffff',
          200: '#fafafa',
          300: '#f4f4f5',
          400: '#e4e4e7',
        },
        dark: {
          100: '#1a1b1e',
          200: '#141517',
          300: '#101012',
          400: '#0c0c0d',
        },
        grey:{
            100: '#FAFBFC',
            200: '#F4F6F8',
            300: '#E5E9F0',
            400: '#D5DDE8',     
            500: "#374151",       
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