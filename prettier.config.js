/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-tailwindcss')],
}
