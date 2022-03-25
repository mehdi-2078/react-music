module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-base',
    ],
    parserOptions: {
        // Required for certain syntax usages
        ecmaVersion: 2020,
    },
    plugins: [
        'react',
        'react-hooks',
        'eslint-plugin-simple-import-sort',
        'no-async-without-await',
        // '@emotion',
    ],
    rules: {
        'no-async-without-await/no-async-without-await': 'warn',
        'import/prefer-default-export': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'warn',
        'array-callback-return': 'off',
        'consistent-return': 'off',
        'react/prop-types': 'off',
        'no-undef': 'error',
        'no-undefined': 'warn',
        'react/jsx-filename-extension': 0,
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/destructuring-assignment': 0,
        'no-param-reassign': 0,
        'react/jsx-props-no-spreading': 'off',
        indent: 0,
        'global-require': 0,
        'linebreak-style': 0,
        'arrow-body-style': 0,
        // '@emotion/jsx-import': 'error',
        // '@emotion/no-vanilla': 'error',
        // '@emotion/import-from-emotion': 'error',
        // '@emotion/styled-import': 'error',

        semi: [
            'error',
            'always',
        ],
        quotes: [
            'error',
            'single',
        ],

    },
};
