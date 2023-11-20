module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
   ],
   overrides: [
      {
         env: {
            node: true,
            es6: true,
         },
         files: ['.eslintrc.js'],
         parserOptions: {
            sourceType: 'module',
         },
      },
   ],
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
      'react/prop-types': 'off',
      'import/no-commonjs': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      'react/no-unescaped-entities': 'off',
      'prettier/prettier': [
         'warn',
         {
            endOfLine: 'auto',
         },
      ],
   },
};
