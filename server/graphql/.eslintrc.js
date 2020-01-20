module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  plugins: ['babel', 'prettier'],
  extends: ['eslint:recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 0,
    'comma-dangle': ['error', 'only-multiline'],
  },
};
