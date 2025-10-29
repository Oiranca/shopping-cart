module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        IntersectionObserver: 'readonly',
        Element: 'readonly',
        NodeList: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
      },
    },
    rules: {
      // Basic code quality rules
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-duplicate-imports': 'error',

      // Code style
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],

      // Best practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-return-assign': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }],

      // Variables
      'no-var': 'error',
      'prefer-const': 'error',
      'no-global-assign': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],

      // Modern JavaScript
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'object-shorthand': 'error',
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'script',
      globals: {
        module: 'writable',
        require: 'readonly',
      },
    },
  },
];
