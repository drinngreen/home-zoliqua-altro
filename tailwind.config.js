/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6',
          dark: '#115e59',
        }
      },
      animation: {
        'modalIn': 'modalIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fadeIn': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        modalIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9) translateY(20px)'
          },
          '60%': {
            transform: 'scale(1.02) translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};