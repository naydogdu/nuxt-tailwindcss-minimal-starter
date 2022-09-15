const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: '28rem',
      md: '48rem',
      lg: '68rem',
      xl: '80rem',
      '2xl': '96rem',
      'max-2xl': {'raw': '(min-width:96rem)'},
      'max-xl': {'raw': '(min-width:80rem)'},
      'max-lg': {'raw': '(min-width:68rem)'},
      'max-md': {'raw': '(min-width:48rem)'},
      'max-sm': {'raw': '(min-width:28rem)'},
      'print': {'raw': 'print'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#feeceb',
        100: '#fcd9d8',
        150: '#fbc6c4',
        200: '#f9b3b1',
        250: '#f8a09d',
        300: '#f68c89',
        350: '#f57976',
        400: '#f36662',
        450: '#f2534f',
        500: '#f0403b',
        550: '#d83a35',
        600: '#c0332f',
        650: '#a82d29',
        700: '#902623',
        750: '#78201e',
        800: '#601a18',
        850: '#481312',
        900: '#300d0c',
        950: '#180606'
      },
      secondary: {
        50: '#ebebeb',
        100: '#d6d6d6',
        150: '#c2c2c2',
        200: '#adadad',
        250: '#999999',
        300: '#858585',
        350: '#707070',
        400: '#5c5c5c',
        450: '#474747',
        500: '#333333',
        550: '#2e2e2e',
        600: '#292929',
        650: '#242424',
        700: '#1f1f1f',
        750: '#1a1a1a',
        800: '#141414',
        850: '#0f0f0f',
        900: '#0a0a0a',
        950: '#050505'
      },
      success: {
        50: '#e8f9e8',
        100: '#d1f3d2',
        150: '#baedbb',
        200: '#a3e7a4',
        250: '#8de28e',
        300: '#76dc77',
        350: '#5fd660',
        400: '#48d049',
        450: '#31ca33',
        500: '#1ac41c',
        550: '#17b019',
        600: '#159d16',
        650: '#128914',
        700: '#107611',
        750: '#0d620e',
        800: '#0a4e0b',
        850: '#083b08',
        900: '#052706',
        950: '#031403'
      },
      warning: {
        50: '#fff5e6',
        100: '#ffeacc',
        150: '#ffe0b3',
        200: '#ffd699',
        250: '#ffcc80',
        300: '#ffc166',
        350: '#ffb74d',
        400: '#ffad33',
        450: '#ffa21a',
        500: '#ff9800',
        550: '#e68900',
        600: '#cc7a00',
        650: '#b36a00',
        700: '#995b00',
        750: '#804c00',
        800: '#663d00',
        850: '#4c2e00',
        900: '#331e00',
        950: '#190f00'
      },
      danger: {
        50: '#f7eaeb',
        100: '#efd4d7',
        150: '#e7bfc3',
        200: '#dfaaaf',
        250: '#d8959b',
        300: '#d07f87',
        350: '#c86a73',
        400: '#c0555f',
        450: '#b83f4b',
        500: '#b02a37',
        550: '#9e2632',
        600: '#8d222c',
        650: '#7b1d27',
        700: '#6a1921',
        750: '#58151c',
        800: '#461116',
        850: '#350d10',
        900: '#23080b',
        950: '#120405'
      },
      black: '#22242C',
      white: '#FFFFFF',
      light: '#F9F9F9',
      gray: {
        // Default
        lightest: 'hsla(168, 2%, 50%, .05)',
        lighter: 'hsla(168, 2%, 50%, .15)',
        light: 'hsla(168, 2%, 50%, .25)',
        DEFAULT: 'hsla(168, 2%, 50%, .35)',
        dark: 'hsla(168, 2%, 50%, .5)',
        darker: 'hsla(168, 2%, 50%, .75)',
        darkest: 'hsla(168, 2%, 50%, 1)',

        // Opaque
        50: '#f3f3f2',
        100: '#e8e7e6',
        150: '#dcdbd9',
        200: '#d1cfcc',
        250: '#c5c3c0',
        300: '#b9b6b3',
        350: '#aeaaa6',
        400: '#a29e99',
        450: '#97928d',
        500: '#8b8680',
        550: '#7d7973',
        600: '#6f6b66',
        650: '#615e5a',
        700: '#53504d',
        750: '#464340',
        800: '#383633',
        850: '#2a2826',
        900: '#1c1b1a',
        950: '#0e0d0d'
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}