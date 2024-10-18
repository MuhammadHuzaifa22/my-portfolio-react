/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'text-sm': '1px 1px 0 rgba(255, 255, 255, 0.5)',
    'text-md': '2px 2px 0 rgba(255, 255, 255, 0.3)',
    'text-lg': '3px 3px 0 rgba(255, 255, 255, 0.2)',
    'text-xl': '4px 4px 0 rgba(255, 255, 255, 0.1)',
    extend: {
      screens: {
        'xxs': '360px', 
      },
    },
  },
  plugins: [
    require('daisyui'),
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 0 rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 0 rgba(255, 255, 255, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 0 rgba(255, 255, 255, 0.2)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 0 rgba(255, 255, 255, 0.1)',
        },
      })
    }
  ],
}


