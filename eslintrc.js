module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    // Add other rules as 'off' to disable them
  },
};
