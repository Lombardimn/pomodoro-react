/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'background': {
          light: '#FFFFFF',
          dark: '#1F2937',
          degraded: '#d1d5db'
        },
        'text': {
          light: '#111827',
          dark: '#DFD8DF',
          degraded: '#4b5563'
        },
        'text-accent': {
          light: '#3ED9C9',
          dark: '#41D9BD',
        },
        'hover': {
          light: '#A855F7',
          dark: '#D3A9FA',
        }
      },
      fontSize: {
        xxs: ['.5rem', '.75rem']
      }
    },
  },
  plugins: [],
}

