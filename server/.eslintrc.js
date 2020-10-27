module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: 'error',
    'no-console': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
  },
};
