module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff'
      },
      black: {
        DEFAULT: '#000000'
      },
      blue: {
        DEFAULT: '#0024fe'
      },
      red: {
        DEFAULT: '#fe0000'
      },
      green: {
        DEFAULT: '#04d435'
      },
      pink: {
        DEFAULT: '#fd2bff'
      },
      gray: {
        DEFAULT: '#151515'
      }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      robo: ['Roborotica'],
      piru: ['Pirulen']
    },
    letterSpacing: {
      mid: '.075em',
      wide: '.1em',
      verywide: '.2em'
    },
    strokeWidth: {
      '1/2': '0.5'
    }
  },
  variants: {
    extend: {
      animation: ['hover']
    }
  }
}
