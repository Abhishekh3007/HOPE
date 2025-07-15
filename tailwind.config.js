/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0A2463',
          900: '#081B4D',
        },
        cyan: {
          400: '#00F5FF',
          500: '#00E5F0',
        },
        blue: {
          500: '#3E92CC',
          600: '#2563EB',
        },
        teal: {
          400: '#14B8A6',
          500: '#0D9488',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'dna-assembly': 'dna-assembly 3s ease-out forwards',
        'typewriter': 'typewriter 4s steps(40, end) forwards',
        'sonar-ripple': 'sonar-ripple 1.5s infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'ecg-pulse': 'ecg-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 245, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.8)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'dna-assembly': {
          '0%': { letterSpacing: '-0.5em', opacity: '0' },
          '40%': { letterSpacing: '-0.5em', opacity: '0' },
          '100%': { letterSpacing: 'normal', opacity: '1' },
        },
        'sonar-ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'ecg-pulse': {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.2)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 245, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 245, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};