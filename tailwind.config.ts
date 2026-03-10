import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F9F8F6',
        primary: '#2E5C50',
        'primary-dark': '#1E3D35',
        'primary-light': '#4A8070',
        accent: '#D47A5A',
        'accent-dark': '#B5603F',
        text: '#333333',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
