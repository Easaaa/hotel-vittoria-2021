module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        como: {
          DEFAULT: '#527763',
          50: '#D0DFD7',
          100: '#C1D4CA',
          200: '#A3BFB0',
          300: '#84AB96',
          400: '#67957C',
          500: '#527763',
          600: '#3D594A',
          700: '#283B31',
          800: '#141C18',
          900: '#000000',
        },
        peach: {
          DEFAULT: '#FFC09A',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFE0CD',
          500: '#FFC09A',
          600: '#FFA067',
          700: '#FF8034',
          800: '#FF6101',
          900: '#CD4D00',
        },
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
      height: {
        'h-100': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
