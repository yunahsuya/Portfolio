// eslint.config.js
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      js,
      vue: pluginVue,
    },
    extends: [
      js.configs.recommended,
      pluginVue.configs['flat/recommended'],
    ],
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  eslintPluginPrettierRecommended,
]
