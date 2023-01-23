module.exports = {
    // Common structure
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 4, {
        'SwitchCase': 1,
    }],
    'max-statements-per-line': ['error', {'max': 1}],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {
        'max': 1,
        'maxBOF': 0,
        'maxEOF': 0
    }],
    'semi': 'off',
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'space-in-parens': ['error', 'never'],
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': ['warn'],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'curly': ['error', 'all'],
    '@typescript-eslint/padding-line-between-statements': ['error',
        {'blankLine': 'always', 'prev': 'if', 'next': '*'},
        {'blankLine': 'never', 'prev': 'if', 'next': 'if'},
        {'blankLine': 'always', 'prev': '*', 'next': 'return'},
        {'blankLine': 'never', 'prev': 'if', 'next': 'break'},

        {'blankLine': 'always', 'prev': '*', 'next': 'switch'},
        {'blankLine': 'always', 'prev': 'switch', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'try'},
        {'blankLine': 'always', 'prev': 'try', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'const'},
        {'blankLine': 'always', 'prev': 'const', 'next': '*'},
        {'blankLine': 'always', 'prev': '*', 'next': 'let'},
        {'blankLine': 'always', 'prev': 'let', 'next': '*'},
        {'blankLine': 'any', 'prev': 'const', 'next': 'let'},
        {'blankLine': 'any', 'prev': 'let', 'next': 'const'},
        {'blankLine': 'any', 'prev': 'const', 'next': 'const'},
        {'blankLine': 'any', 'prev': 'let', 'next': 'let'},

        {'blankLine': 'always', 'prev': '*', 'next': 'while'},
        {'blankLine': 'always', 'prev': 'while', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'for'},
        {'blankLine': 'always', 'prev': 'for', 'next': '*'},

        {'blankLine': 'never', 'prev': '*', 'next': 'case'},
        {'blankLine': 'never', 'prev': 'case', 'next': '*'},

        {'blankLine': 'never', 'prev': '*', 'next': 'default'},
        {'blankLine': 'never', 'prev': 'default', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'class'},
        {'blankLine': 'always', 'prev': 'class', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'function'},
        {'blankLine': 'always', 'prev': 'function', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'interface'},
        {'blankLine': 'always', 'prev': 'interface', 'next': '*'},

        {'blankLine': 'always', 'prev': '*', 'next': 'type'},
        {'blankLine': 'always', 'prev': 'type', 'next': '*'},
        {'blankLine': 'never', 'prev': 'type', 'next': 'type'},
    ],

    // Imports
    'import/newline-after-import': ['error', {
        'count': 1,
    }],
    'import/no-internal-modules': ['error', {
        'forbid': ['**/index'],
    }],
    'no-duplicate-imports': ['error'],
    'modules-newline/import-declaration-newline': ['error'],

    // Variables
    '@typescript-eslint/naming-convention': [
        'error',
        {
            'selector': ['variable'],
            'format': ['PascalCase', 'camelCase', 'UPPER_CASE'],
            'leadingUnderscore': 'allow'
        },
        {
            'selector': ['function'],
            'format': ['camelCase']
        },
        {
            'selector': ['parameter', 'classProperty', 'objectLiteralProperty', 'objectLiteralMethod', 'typeProperty', 'typeMethod'],
            'format': ['camelCase', 'UPPER_CASE'],
            'leadingUnderscore': 'allowSingleOrDouble',
            'filter': {
                'regex': '.*_id.*',
                'match': false,
            },
        },
        {
            'selector': ['enum', 'enumMember'],
            'format': ['UPPER_CASE'],
        },
        {
            'selector': ['class'],
            'format': ['PascalCase'],
        },
        {
            'selector': ['interface', 'typeAlias', 'typeParameter'],
            'format': ['PascalCase'],
            'custom': {
                'regex': '^I\\w+$',
                'match': true
            }
        }
    ],
    '@typescript-eslint/no-unused-vars': ['warn', {
        'argsIgnorePattern': '_',
    }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
    'one-var': ['error', 'never'],
    'camelcase': ['error', {
        'properties': 'always',
    }],
    'init-declarations': ['error', 'always'],

    // Interfaces
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/no-empty-interface': ['warn', {
        'allowSingleExtends': true,
    }],
    '@typescript-eslint/prefer-function-type': ['error'],

    // Enums
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],

    // Objects
    'object-shorthand': ['error', 'always'],
    'object-property-newline': ['error'],
    'key-spacing': ['error', {'mode': 'strict'}],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'tuples': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'enums': 'always-multiline',
        'generics': 'always-multiline',
        'functions': 'never'
    }],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'comma-style': ['error', 'last', {'exceptions': {'ObjectPattern': false}}],
    'object-curly-newline': ['error', {
        'ObjectExpression': {
            'minProperties': 1,
            'multiline': true,
            'consistent': true,
        },
        'ObjectPattern': {
            'minProperties': 1,
            'multiline': true,
            'consistent': true,
        },
        'ImportDeclaration': {
            'minProperties': 1,
            'multiline': true,
            'consistent': true,
        },
    }],

    // Arrays
    'array-bracket-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],

    // Functions
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', {
        'named': 'never',
        'anonymous': 'never',
        'asyncArrow': 'always',
    }],
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'arrow-spacing': ['error', {'before': true, 'after': true}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],

    // Syntax structure
    'operator-linebreak': ['error', 'after'],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'newline-per-chained-call': ['error'],
    'padded-blocks': ['error', 'never'],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-useless-rename': ['error'],
    'justinanastos/switch-braces': ['error'],
    'no-restricted-syntax': [
        'error',
        'WithStatement',
        'BinaryExpression[operator=\'in\']',
    ],

    // Other
    '@typescript-eslint/ban-ts-comment': 'off',
};
