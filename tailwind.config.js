module.exports = {
  purge: ['./src/pages/**/*.{js,mdx,ts,jsx,tsx}', './src/components/**/*.{js,mdx,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
