module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
};
