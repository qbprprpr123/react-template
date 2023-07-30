module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'import/no-unresolved': 'off',
    'consistent-return': 0,
    'import/prefer-default-export': 'off',
    'object-curly-newline': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-unused-vars': 2,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'no-plusplus': 0,
    'no-tabs': 0,
    'import/no-cycle': 0,
    'default-param-last': 0,
    'react/no-v-text-v-html-on-component': 0,
    'react/no-reserved-component-names': 0,
    'no-promise-executor-return': 0,
    'no-unsafe-optional-chaining': 0,
    'max-classes-per-file': 0,
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
