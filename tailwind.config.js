/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#00f6d8', // Neon Turquoise
          glow: '#00f6d8',
          dark: '#00c4ac',
        },
        military: {
          DEFAULT: '#1c2b1c',
          light: '#2a3d2a',
          accent: '#3e523e',
        },
        dark: {
          DEFAULT: '#000000',
          900: '#050505',
          800: '#0A0A0A', // Card bg
          700: '#121212',
        },
      },
      backgroundImage: {
        'hex-pattern': "url(\"data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10z' fill='%231c2b1c' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'grid-pattern': "linear-gradient(to right, #1c2b1c 1px, transparent 1px), linear-gradient(to bottom, #1c2b1c 1px, transparent 1px)",
      },
      animation: {
        'radar-spin': 'radar-spin 4s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'radar-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 246, 216, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 10px rgba(0, 246, 216, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
