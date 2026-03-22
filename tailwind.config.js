/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bright Neon Green - Primary accent color
        neon: {
          DEFAULT: '#00FF41',
          50: '#E6FFE6',
          100: '#CCFFCC',
          200: '#99FF99',
          300: '#66FF66',
          400: '#33FF33',
          500: '#00FF41',
          600: '#00CC33',
          700: '#009926',
          800: '#006619',
          900: '#00330C',
        },
        // Off-White / Soft White - Background sections
        offwhite: {
          DEFAULT: '#F8F9FA',
          50: '#FFFFFF',
          100: '#F8F9FA',
          200: '#F1F3F4',
          300: '#E8EAED',
          400: '#DADCE0',
          500: '#BDC1C6',
        },
        // Light Gray - Secondary backgrounds
        lightgray: {
          DEFAULT: '#E8EAED',
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
        },
        // Medium Dark Gray - Secondary text
        mediumgray: {
          DEFAULT: '#5F6368',
          50: '#9AA0A6',
          100: '#80868B',
          200: '#5F6368',
          300: '#4A4D52',
          400: '#35383C',
          500: '#202124',
        },
        // Dark Gray / Almost Black - Main background
        darkgray: {
          DEFAULT: '#121212',
          50: '#5F6368',
          100: '#4A4D52',
          200: '#35383C',
          300: '#2D2E30',
          400: '#1F1F1F',
          500: '#121212',
          600: '#0D0D0D',
          700: '#080808',
          800: '#040404',
          900: '#000000',
        },
        // Legacy aliases for compatibility
        primary: '#00FF41',
        accent: '#00FF41',
        background: '#121212',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Futura', 'Futura PT', 'Century Gothic', 'system-ui', 'sans-serif'],
        futura: ['Futura', 'Futura PT', 'Century Gothic', 'system-ui', 'sans-serif'],
        display: ['Futura', 'Futura PT', 'Century Gothic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



