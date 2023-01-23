module.exports = {
    // Imports

    'simple-import-sort/imports': ['error', {
        'groups': [
            ['^\\u0000'],
            ['^./types$', '.*types.*'],
            ['^\\w'],
            ['^config'],
            ['^tools$', '^tools\/.'],
            ['^helpers$', '^helpers\/.'],
            ['^instances\/.'],
            ['../'],
            ['./'],
        ],
    }],
};
