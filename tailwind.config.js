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
        DEFAULT: '#363636'
      }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      robo: ['Roborotica'],
      piru: ['Pirulen']
    },
    letterSpacing: {
      short: '-.03em',
      mid: '.075em',
      wide: '.1em',
      verywide: '.2em'
    },
    strokeWidth: {
      '1/2': '0.5'
    },
    animation: {
      'spin-once': 'spin 1.5s linear',
      'spin-4ever': 'spin 1.5s linear infinite'
    }
  },
  variants: {
    extend: {
      animation: ['hover']
    }
  }
}
