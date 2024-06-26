module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'no-console': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-unused-expressions': 'off',
  },
};
