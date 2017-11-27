const BROWSERS = ['last 2 versions'];

module.exports = {
  plugins: {
    'postcss-easy-import': { glob: true },
    'postcss-simple-vars': true,
    'postcss-nested': true,
    'postcss-mixins': true,
    stylelint: true,
    autoprefixer: { browsers: BROWSERS },
    'postcss-normalize': { browsers: BROWSERS, forceImport: true },
    'postcss-sorting': true,
    'postcss-reporter': {
      clearMessages: true,
      throwError: true,
    },
  },
};
