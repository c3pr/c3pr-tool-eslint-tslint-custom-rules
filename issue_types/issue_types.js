/*
code_smell|bug|vulnerability
Issue Types
There are three types of issues:

Bug – A possible syntactic mistake or logic error that will likely break the code and should be fixed as soon as possible.
Vulnerability – A point in the source code that is open to unwanted changes or attacks.
Codesmell – Ambiguous or otherwise confusing constructs that should be avoided or make the code difficult to maintain.
Style - Transformations that enforce consistent style across the codebase.
Stylistic Issues
These rules relate to style guidelines
not option is clearly better than the other, but consistency should be enforced.


* WARNING vs ISSUE vs CODE SMELLS

ESLINT:
Possible Errors     ->                        These rules relate to possible syntax or logic errors in JavaScript code:
Best Practices      -> code_smell             These rules relate to better ways of doing things to help you avoid problems:
Strict Mode         ->                        These rules relate to strict mode directives:
Variables           ->                        These rules relate to variable declarations:
Stylistic Issues    ->                        These rules relate to style guidelines, and are therefore quite subjective:
ECMAScript 6        ->                        These rules relate to ES6, also known as ES2015:

TSLint core rules   ->                        Lint rules encode logic for syntactic & semantic checks of TypeScript source code.
TypeScript-specific ->                        These rules find errors related to TypeScript features:
Functionality       -> code_smell             These rules catch common errors in JS programming or otherwise confusing constructs that are prone to producing bugs:
                        some stylistic issues are code_smell when they are clearly a better option/construct to be followed

Maintainability     ->                        These rules make code maintenance easier:
Style               ->                        These rules enforce consistent style across your codebase:
Format              ->                        These rules enforce consistent use of whitespace and punctuation:
 */

// noinspection ES6ConvertVarToLetConst
module.exports.issue_types = [
    {tool: "TSLint", tool_id: "member-access",                    tool_category: "TypeScript-specific", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "member-ordering",                  tool_category: "TypeScript-specific", new_type: ``},
    {tool: "TSLint", tool_id: "no-inferrable-types",              tool_category: "TypeScript-specific", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "no-internal-module",               tool_category: "TypeScript-specific", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "no-unnecessary-type-assertion",    tool_category: "TypeScript-specific", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "curly",                            tool_category: "Functionality", new_type: 'code_smell'},
    {tool: "TSLint", tool_id: "no-null-keyword",                  tool_category: "Functionality", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "no-return-await",                  tool_category: "Functionality", new_type: ``},
    {tool: "TSLint", tool_id: "no-string-literal",                tool_category: "Functionality", new_type: ``},
    {tool: "TSLint", tool_id: "no-string-throw",                  tool_category: "Functionality", new_type: ``},
    {tool: "TSLint", tool_id: "no-unused-variable",               tool_category: "Functionality", new_type: ``},
    {tool: "TSLint", tool_id: "static-this",                      tool_category: "Functionality", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "array-type",                       tool_category: "Style", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "arrow-return-shorthand",           tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "callable-types",                   tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "file-header",                      tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "interface-over-type-literal",      tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "no-angle-bracket-type-assertion",  tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "no-boolean-literal-compare",       tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "no-unnecessary-initializer",       tool_category: "Style", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "no-unnecessary-qualifier",         tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "one-line",                         tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "ordered-imports",                  tool_category: "Style", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "prefer-method-signature",          tool_category: "Style", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "prefer-while",                     tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "space-within-parens",              tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "trailing-comma",                   tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "switch-final-break",               tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "type-literal-delimiter",           tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "align",                            tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "newline-before-return",            tool_category: "Format", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "eofline",                          tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "indent",                           tool_category: "Format", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "no-irregular-whitespace",          tool_category: "Format", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "number-literal-format",            tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "linebreak-style",                  tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "no-consecutive-blank-lines",       tool_category: "Format", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "no-trailing-whitespace",           tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "prefer-object-spread",             tool_category: "Functionality", new_type: `code_smell`, why: 'code_smell and not style cuz it is a much better construct'},
    {tool: "TSLint", tool_id: "object-literal-key-quotes",        tool_category: "Style", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "quotemark",                        tool_category: "Format", new_type: `code_smell`, why: 'sonar'},
    {tool: "TSLint", tool_id: "semicolon",                        tool_category: "Format", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "typedef-whitespace",               tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "whitespace",                       tool_category: "Format", new_type: ``},
    {tool: "TSLint", tool_id: "space-before-function-paren",      tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "comment-format",                   tool_category: "Style", new_type: ``},
    {tool: "TSLint", tool_id: "arrow-parens",                     tool_category: "Format", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "no-var-keyword",                   tool_category: "Functionality", new_type: `code_smell`},
    {tool: "TSLint", tool_id: "object-literal-shorthand",         tool_category: "Style", new_type: `consistency_style`},
    {tool: "TSLint", tool_id: "prefer-const",                     tool_category: "Maintainability", new_type: ``},
    {tool: "ESLint", tool_id: "no-extra-boolean-cast",            tool_category: "Possible Errors", new_type: ``},
    {tool: "ESLint", tool_id: "no-extra-parens",                  tool_category: "Possible Errors", new_type: ``},
    {tool: "ESLint", tool_id: "no-extra-semi",                    tool_category: "Possible Errors", new_type: ``},
    {tool: "ESLint", tool_id: "no-regex-spaces",                  tool_category: "Possible Errors", new_type: ``},
    {tool: "ESLint", tool_id: "no-unsafe-negation",               tool_category: "Possible Errors", new_type: ``},
    {tool: "ESLint", tool_id: "curly",                            tool_category: "Best Practices", new_type: 'code_smell'},
    {tool: "ESLint", tool_id: "dot-location",                     tool_category: "Best Practices", new_type: `code_smell`},
    {tool: "ESLint", tool_id: "dot-notation",                     tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "eqeqeq",                           tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-else-return",                   tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-extra-bind",                    tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-extra-label",                   tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-floating-decimal",              tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-implicit-coercion",             tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-multi-spaces",                  tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-unused-labels",                 tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "no-useless-return",                tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "wrap-iife",                        tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "yoda",                             tool_category: "Best Practices", new_type: ``},
    {tool: "ESLint", tool_id: "strict",                           tool_category: "Strict Mode", new_type: ``},
    {tool: "ESLint", tool_id: "no-undef-init",                    tool_category: "Variables", new_type: ``},
    {tool: "ESLint", tool_id: "array-bracket-newline",            tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "array-bracket-spacing",            tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "array-element-newline",            tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "block-spacing",                    tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "brace-style",                      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "camelcase",                        tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "capitalized-comments",             tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "comma-dangle",                     tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "comma-spacing",                    tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "comma-style",                      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "computed-property-spacing",        tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "eol-last",                         tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "func-call-spacing",                tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "function-paren-newline",           tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "implicit-arrow-linebreak",         tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "indent",                           tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "jsx-quotes",                       tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "key-spacing",                      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "keyword-spacing",                  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "line-comment-position",            tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "linebreak-style",                  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "lines-around-comment",             tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "lines-between-class-members",      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "multiline-comment-style",          tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "new-parens",                       tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "newline-per-chained-call",         tool_category: "Stylistic Issues", new_type: `code_smell`},
    {tool: "ESLint", tool_id: "no-lonely-if",                     tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "no-multiple-empty-lines",          tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "no-trailing-spaces",               tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "no-unneeded-ternary",              tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "no-whitespace-before-property",    tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "nonblock-statement-body-position", tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "object-curly-newline",             tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "object-curly-spacing",             tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "object-property-newline",          tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "one-var",                          tool_category: "Stylistic Issues", new_type: `code_smell`, why: 'sonar'},
    {tool: "ESLint", tool_id: "one-var-declaration-per-line",     tool_category: "Stylistic Issues", new_type: `code_smell`, why: 'sonar'},
    {tool: "ESLint", tool_id: "operator-assignment",              tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "operator-linebreak",               tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "padded-blocks",                    tool_category: "Stylistic Issues", new_type: `consistency_style`},
    {tool: "ESLint", tool_id: "padding-line-between-statements",  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-object-spread",             tool_category: "Stylistic Issues", new_type: `code_smell`, why: 'code_smell and not style cuz it is a much better construct'},
    {tool: "ESLint", tool_id: "quote-props",                      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "quotes",                           tool_category: "Stylistic Issues", new_type: `code_smell`, why: 'sonar'},
    {tool: "ESLint", tool_id: "semi",                             tool_category: "Stylistic Issues", new_type: `code_smell`},
    {tool: "ESLint", tool_id: "semi-spacing",                     tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "semi-style",                       tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "sort-vars",                        tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "space-before-blocks",              tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "space-before-function-paren",      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "space-in-parens",                  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "space-infix-ops",                  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "space-unary-ops",                  tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "spaced-comment",                   tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "switch-colon-spacing",             tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "template-tag-spacing",             tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "unicode-bom",                      tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "wrap-regex",                       tool_category: "Stylistic Issues", new_type: ``},
    {tool: "ESLint", tool_id: "arrow-body-style",                 tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "arrow-parens",                     tool_category: "ECMAScript 6", new_type: `code_smell`},
    {tool: "ESLint", tool_id: "arrow-spacing",                    tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "generator-star-spacing",           tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "no-confusing-arrow",               tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "no-useless-computed-key",          tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "no-useless-rename",                tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "no-var",                           tool_category: "ECMAScript 6", new_type: `code_smell`},
    {tool: "ESLint", tool_id: "object-shorthand",                 tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-arrow-callback",            tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-const",                     tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-destructuring",             tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-numeric-literals",          tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "prefer-template",                  tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "rest-spread-spacing",              tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "sort-imports",                     tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "symbol-description",               tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "template-curly-spacing",           tool_category: "ECMAScript 6", new_type: ``},
    {tool: "ESLint", tool_id: "yield-star-spacing",               tool_category: "ECMAScript 6", new_type: ``},

    {tool: "ESLint", tool_id: 'custom-no-console',                 tool_category: "none", new_type: "vulnerability"},
    {tool: "ESLint", tool_id: 'custom-simplify-binary-expression', tool_category: "none", new_type: "consistency_style"},
    {tool: "ESLint", tool_id: 'custom-triple-equals',              tool_category: "none", new_type: "code_smell", why: 'maybe bug, but code_smell due to large rejection rate'},
];

