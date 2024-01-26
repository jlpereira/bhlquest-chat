/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        main: [
          'Inter',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      colors: {
        base: {
          background: withOpacity('--base-background-color'),
          border: withOpacity('--base-border-color')
        },

        primary: {
          color: withOpacity('--primary-color'),
          text: withOpacity('--primary-text-color')
        },

        secondary: {
          color: withOpacity('--secondary-color'),
          text: withOpacity('--secondary-text-color')
        }
      }
    }
  },
  plugins: []
}
