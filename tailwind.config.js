/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', 'system-ui', 'sans-serif'],
      },
      colors: {
        spotify: {
          green: '#1DB954',
          lightgreen: '#1ed760',
          dark: '#121212',
          darker: '#0a0a0a',
        },
        youtube: {
          red: '#FF0000',
          lightred: '#ff4444',
          dark: '#0f0f0f',
          darker: '#080808',
        },
        instagram: {
          pink: '#E1306C',
          purple: '#833AB4',
          orange: '#F77737',
          magenta: '#d6249f',
          dark: '#5B51D8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'spin-slow': 'spin 1.2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
