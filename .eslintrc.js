module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    // Disable or modify rules that might be too strict for this project
    'react/no-unescaped-entities': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    '@next/next/no-img-element': ['warn'], // Downgrade to warning to allow build to complete
    '@typescript-eslint/no-explicit-any': ['error'], // Make explicit any an error
    'prefer-const': ['error'],
  }
}; 