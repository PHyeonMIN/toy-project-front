module.exports = {
    env: {
        // 전역 변수 사용을 정의합니다. 추가하지 않으면 ESLint 규칙에 걸리게 됩니다.
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // 해당 플러그인의 권장 규칙을 사용합니다.
        'plugin:prettier/recommended', // plugin과 eslint-config-prettier 설정을 한번에 합니다.
    ],
    parser: '@typescript-eslint/parser', // ESLint 파서를 지정합니다.
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // JSX를 파싱할 수 있습니다.
        },
        ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
        sourceType: 'module', // import, export를 사용할 수 있습니다.
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier',
        'import',
    ],
    rules: {
        // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'no-nested-ternary': 0,
        'react/prop-types': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                tabWidth: 4,
            },
        ],
        'arrow-body-style': 'error',
        'prefer-arrow-callback': 'off',
        'no-dupe-keys': 'error',
    },
    settings: {
        react: {
            version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
        },
    },
};
