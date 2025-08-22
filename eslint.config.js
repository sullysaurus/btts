import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-unused-css-selector': 'warn',
      'astro/prefer-class-list-directive': 'warn',
    },
  },
];
