import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  ignores: ['dist'],
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  extends: [js.configs.recommended],
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
