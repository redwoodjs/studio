// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
export default {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
  tailwindConfig: './web/config/tailwind.config.js',
  plugins: [await import('prettier-plugin-tailwindcss')],
}
