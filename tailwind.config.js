module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          accent: 'var(--color-accent)',
          muted: 'var(--color-muted)'
        }
      },
      backgroundColor: {
        skin: {
          accent: 'var(--color-accent)',
          dark: 'var(--dark)'
        },
      },
      borderColor: {
        skin: {
          accent: 'var(--color-accent)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}