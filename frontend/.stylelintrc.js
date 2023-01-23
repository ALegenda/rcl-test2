module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-scss',
    ],
    rules: {
        'at-rule-no-unknown': null,
        'color-named': 'never',
        'font-weight-notation': 'numeric',
        'number-max-precision': 6,
        'unit-allowed-list': ['px', '%', 'deg', 'vh', 'em', 'turn'],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-single-line-max-declarations': 0,
        'selector-class-pattern': '^[a-z]+[A-Za-z0-9]*',
        'font-family-name-quotes': 'always-unless-keyword',
        'string-quotes': 'single',
        'selector-attribute-quotes': 'always',
        'indentation': 4,
        'no-empty-first-line': true,
        'at-rule-empty-line-before': 'never',
        'color-hex-length': 'long',
        'property-no-unknown': [true, {
            ignoreProperties: ['user-drag'],
        }],
        'selector-type-no-unknown': [true, {
            'ignoreTypes': ['/.*/'],
        }],
        'declaration-empty-line-before': ['always', {
            ignore: ["after-comment", "after-declaration", "first-nested", "inside-single-line-block"]
        }],
        'no-descending-specificity': null,

        'scss/at-rule-no-unknown': true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': '^[a-z]+[A-Za-z0-9]*',
        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-after': ['always', {
            'except': ['last-nested', 'before-comment', 'before-dollar-variable'],
        }],
        'scss/dollar-variable-empty-line-before': ['always', {
            'except': ['first-nested', 'after-comment', 'after-dollar-variable'],
        }],
        'scss/dollar-variable-pattern': '^[a-z]+[A-Za-z0-9]*',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/selector-nest-combinators': 'always',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/no-duplicate-dollar-variables': true,
    },
};
