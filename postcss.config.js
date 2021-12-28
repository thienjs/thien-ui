module.exports = {
  plugins: [
     require('postcss-import'),
     require('tailwindcss')({ config: './tailwind/index.js' }),
     require('postcss-nested'),
     require('autoprefixer'),
  ],
}