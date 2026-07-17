/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#FBF3EC',
          100: '#F3E2D2',
          200: '#E5C2A4',
          300: '#D6A176',
          400: '#C58B3A',
          500: '#8B4513',
          600: '#7A3B10',
          700: '#68320E',
          800: '#57290B',
          900: '#452009',
        },
        secondary: {
          DEFAULT: '#C58B3A',
          50: '#FDF8EF',
          100: '#FAEED4',
          200: '#F4DCA9',
          300: '#EEC97E',
          400: '#E9B75E',
          500: '#C58B3A',
          600: '#A5722E',
          700: '#855A24',
          800: '#65421A',
          900: '#452B11',
        },
        accent: {
          DEFAULT: '#F4E4C1',
          100: '#FAF2DF',
          200: '#F4E4C1',
          300: '#EFD49B',
          400: '#E9C475',
          500: '#E2B450',
        },
        cream: '#FAFAFA',
        ink: '#222222',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(139, 69, 19, 0.18)',
        card: '0 8px 30px -10px rgba(139, 69, 19, 0.15)',
        glow: '0 0 60px -15px rgba(197, 139, 58, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
    },
  },
  plugins: [],
};
