// npm install postcss-cli autoprefixer

module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]
  }