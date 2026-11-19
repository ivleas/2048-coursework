module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'indent': ['error', 2],
    'no-extra-semi': 'error',
    'no-var': 'error',
    'semi': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}