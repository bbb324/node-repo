module.exports = {
    'parserOptions': {
        'ecmaVersion': 2015,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'env': {
        'es2021': true,
        'node': true
    },

    'plugins': [
        'import',
        'node',
        'promise'
    ],
    rules: { 
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'comma-spacing': ['error', { before:false, after: true }],
        'no-undef': ['error'],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'object-curly-spacing': ['error', 'always'],
        semi: ['error', 'always'], // 必须在语句后面加分号
        // quotes: [error, double],// 字符串没有使用单引号
        quotes: ['error', 'single'], // 字符串没有使用单引号
        'no-console': ['error', { allow: ['log', 'warn'] }], // 允许使用console.log()
    }
};