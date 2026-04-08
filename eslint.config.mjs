import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginNext from '@next/eslint-plugin-next'
import globals from 'globals'

/**
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  js.configs.recommended,
  eslintConfigPrettier,

  {
    plugins: {
      '@next/next': pluginNext,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.nodeBuiltin,
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'build/**', 'next-env.d.ts'],
  },
]
