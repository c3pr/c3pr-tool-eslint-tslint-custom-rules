let eslint = {
    "no-extra-boolean-cast": "Unnecessary boolean casts",
    "no-extra-parens": "Unnecessary parentheses",
    "no-extra-semi": "Unnecessary semicolons",
    "no-regex-spaces": "Multiple spaces in regular expressions",
    "no-unsafe-negation": "Negating the left operand of relational operators",
    "curly": "Consistent brace style for all control statements",
    "dot-location": "Consistent newlines before and after dots",
    "dot-notation": "Use dot notation whenever possible",
    "eqeqeq": "Use === and !==",
    "no-else-return": "else blocks after return statements in if statements",
    "no-extra-bind": "Unnecessary calls to .bind()",
    "no-extra-label": "Unnecessary labels",
    "no-floating-decimal": "Leading or trailing decimal points in numeric literals",
    "no-implicit-coercion": "Shorthand type conversions",
    "no-multi-spaces": "Multiple spaces",
    "no-unused-labels": "Unused labels",
    "no-useless-return": "Redundant return statements",
    "wrap-iife": "Parentheses around immediate function invocations",
    "yoda": "require or disallow “Yoda” conditions",
    "no-undef-init": "Initializing variables to undefined",
    "array-bracket-newline": "Linebreaks after opening and before closing array brackets",
    "array-bracket-spacing": "Consistent spacing inside array brackets",
    "array-element-newline": "Line breaks after each array element",
    "block-spacing": "disallow or enforce spaces inside of blocks after opening block and before closing block",
    "brace-style": "Consistent brace style for blocks",
    "camelcase": "Camelcase naming convention",
    "capitalized-comments": "enforce or disallow capitalization of the first letter of a comment",
    "comma-dangle": "require or disallow trailing commas",
    "comma-spacing": "Consistent spacing before and after commas",
    "comma-style": "Consistent comma style",
    "computed-property-spacing": "Consistent spacing inside computed property brackets",
    "eol-last": "require or disallow newline at the end of files",
    "func-call-spacing": "require or disallow spacing between function identifiers and their invocations",
    "function-paren-newline": "Consistent line breaks inside function parentheses",
    "implicit-arrow-linebreak": "Location of arrow function bodies",
    "indent": "Consistent indentation",
    "jsx-quotes": "Consistent use of either double or single quotes in JSX attributes",
    "key-spacing": "Consistent spacing between keys and values in object literal properties",
    "keyword-spacing": "Consistent spacing before and after keywords",
    "line-comment-position": "Position of line comments",
    "linebreak-style": "Consistent linebreak style",
    "lines-around-comment": "Empty lines around comments",
    "lines-between-class-members": "require or disallow an empty line between class members",
    "multiline-comment-style": "Style for multiline comments",
    "new-parens": "Parentheses when invoking a constructor with no arguments",
    "newline-per-chained-call": "A newline after each call in a method chain",
    "no-lonely-if": "If statements as the only statement in else blocks",
    "no-multiple-empty-lines": "Multiple empty lines",
    "no-trailing-spaces": "Trailing whitespace at the end of lines",
    "no-unneeded-ternary": "Ternary operators when simpler alternatives exist",
    "no-whitespace-before-property": "Whitespace before properties",
    "nonblock-statement-body-position": "Location of single-line statements",
    "object-curly-newline": "Consistent line breaks inside braces",
    "object-curly-spacing": "Consistent spacing inside braces",
    "object-property-newline": "Placing object properties on separate lines",
    "one-var": "Variables to be declared either together or separately in functions",
    "one-var-declaration-per-line": "require or disallow newlines around variable declarations",
    "operator-assignment": "require or disallow assignment operator shorthand where possible",
    "operator-linebreak": "Consistent linebreak style for operators",
    "padded-blocks": "require or disallow padding within blocks",
    "padding-line-between-statements": "require or disallow padding lines between statements",
    "prefer-object-spread": "Using Object.assign with an object literal as the first argument and prefer the use of object spread instead",
    "quote-props": "Quotes around object literal property names",
    "quotes": "The consistent use of either backticks, double, or single quotes",
    "semi": "require or disallow semicolons instead of ASI",
    "semi-spacing": "Consistent spacing before and after semicolons",
    "semi-style": "Location of semicolons",
    "sort-vars": "Variables within the same declaration block to be sorted",
    "space-before-blocks": "Consistent spacing before blocks",
    "space-before-function-paren": "Consistent spacing before function definition opening parenthesis",
    "space-in-parens": "Consistent spacing inside parentheses",
    "space-infix-ops": "Spacing around infix operators",
    "space-unary-ops": "Consistent spacing before or after unary operators",
    "spaced-comment": "Consistent spacing after the // or /* in a comment",
    "switch-colon-spacing": "Spacing around colons of switch statements",
    "template-tag-spacing": "require or disallow spacing between template tags and their literals",
    "unicode-bom": "require or disallow Unicode byte order mark (BOM)",
    "wrap-regex": "Parenthesis around regex literals",
    "arrow-body-style": "Braces around arrow function bodies",
    "arrow-parens": "Parentheses around arrow function arguments",
    "arrow-spacing": "Consistent spacing before and after the arrow in arrow functions",
    "generator-star-spacing": "Consistent spacing around * operators in generator functions",
    "no-confusing-arrow": "Arrow functions where they could be confused with comparisons",
    "no-useless-computed-key": "Unnecessary computed property keys in object literals",
    "no-useless-rename": "Renaming import, export, and destructured assignments to the same name",
    "no-var": "Use let or const instead of var",
    "object-shorthand": "Or disallow method and property shorthand syntax for object literals",
    "prefer-arrow-callback": "Using arrow functions for callbacks",
    "prefer-const": "Const declarations for variables that are never reassigned after declared",
    "prefer-destructuring": "Destructuring from arrays and/or objects",
    "prefer-numeric-literals": "parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals",
    "prefer-template": "Template literals instead of string concatenation",
    "rest-spread-spacing": "Spacing between rest and spread operators and their expressions",
    "sort-imports": "Sorted import declarations within modules",
    "symbol-description": "Symbol descriptions",
    "template-curly-spacing": "require or disallow spacing around embedded expressions of template strings",
    "yield-star-spacing": "require or disallow spacing around the * in yield* expressions"
};

const fs = require('fs');
for ([rule, desc] of Object.entries(eslint)) {
    const template = `tool_id: "eslint:${rule}"
extensions: ["js"]
tags: ["JavaScript"]
default_weight: 100

command: 'eslint --fix "#{filename}" --no-eslintrc --env "es6" --env "node" --parser-options "{ecmaVersion: 2018}" --rule "{${rule}: \\"error\\"}"'

pr_title: ${desc}
pr_body: |
  See: https://eslint.org/docs/rules/${rule}
`;
    fs.writeFileSync(`${__dirname}/tools/eslint-${rule}.yml`, template)
}