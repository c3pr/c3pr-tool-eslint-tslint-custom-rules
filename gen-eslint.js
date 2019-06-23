let eslint = {
    "no-extra-boolean-cast": "disallow unnecessary boolean casts",
    "no-extra-parens": "disallow unnecessary parentheses",
    "no-extra-semi": "disallow unnecessary semicolons",
    "no-regex-spaces": "disallow multiple spaces in regular expressions",
    "no-unsafe-negation": "disallow negating the left operand of relational operators",
    "curly": "enforce consistent brace style for all control statements",
    "dot-location": "enforce consistent newlines before and after dots",
    "dot-notation": "enforce dot notation whenever possible",
    "eqeqeq": "require the use of === and !==",
    "no-else-return": "disallow else blocks after return statements in if statements",
    "no-extra-bind": "disallow unnecessary calls to .bind()",
    "no-extra-label": "disallow unnecessary labels",
    "no-floating-decimal": "disallow leading or trailing decimal points in numeric literals",
    "no-implicit-coercion": "disallow shorthand type conversions",
    "no-multi-spaces": "disallow multiple spaces",
    "no-unused-labels": "disallow unused labels",
    "no-useless-return": "disallow redundant return statements",
    "wrap-iife": "require parentheses around immediate function invocations",
    "yoda": "require or disallow “Yoda” conditions",
    "no-undef-init": "disallow initializing variables to undefined",
    "array-bracket-newline": "enforce linebreaks after opening and before closing array brackets",
    "array-bracket-spacing": "enforce consistent spacing inside array brackets",
    "array-element-newline": "enforce line breaks after each array element",
    "block-spacing": "disallow or enforce spaces inside of blocks after opening block and before closing block",
    "brace-style": "enforce consistent brace style for blocks",
    "camelcase": "enforce camelcase naming convention",
    "capitalized-comments": "enforce or disallow capitalization of the first letter of a comment",
    "comma-dangle": "require or disallow trailing commas",
    "comma-spacing": "enforce consistent spacing before and after commas",
    "comma-style": "enforce consistent comma style",
    "computed-property-spacing": "enforce consistent spacing inside computed property brackets",
    "eol-last": "require or disallow newline at the end of files",
    "func-call-spacing": "require or disallow spacing between function identifiers and their invocations",
    "function-paren-newline": "enforce consistent line breaks inside function parentheses",
    "implicit-arrow-linebreak": "enforce the location of arrow function bodies",
    "indent": "enforce consistent indentation",
    "jsx-quotes": "enforce the consistent use of either double or single quotes in JSX attributes",
    "key-spacing": "enforce consistent spacing between keys and values in object literal properties",
    "keyword-spacing": "enforce consistent spacing before and after keywords",
    "line-comment-position": "enforce position of line comments",
    "linebreak-style": "enforce consistent linebreak style",
    "lines-around-comment": "require empty lines around comments",
    "lines-between-class-members": "require or disallow an empty line between class members",
    "multiline-comment-style": "enforce a particular style for multiline comments",
    "new-parens": "require parentheses when invoking a constructor with no arguments",
    "newline-per-chained-call": "require a newline after each call in a method chain",
    "no-lonely-if": "disallow if statements as the only statement in else blocks",
    "no-multiple-empty-lines": "disallow multiple empty lines",
    "no-trailing-spaces": "disallow trailing whitespace at the end of lines",
    "no-unneeded-ternary": "disallow ternary operators when simpler alternatives exist",
    "no-whitespace-before-property": "disallow whitespace before properties",
    "nonblock-statement-body-position": "enforce the location of single-line statements",
    "object-curly-newline": "enforce consistent line breaks inside braces",
    "object-curly-spacing": "enforce consistent spacing inside braces",
    "object-property-newline": "enforce placing object properties on separate lines",
    "one-var": "enforce variables to be declared either together or separately in functions",
    "one-var-declaration-per-line": "require or disallow newlines around variable declarations",
    "operator-assignment": "require or disallow assignment operator shorthand where possible",
    "operator-linebreak": "enforce consistent linebreak style for operators",
    "padded-blocks": "require or disallow padding within blocks",
    "padding-line-between-statements": "require or disallow padding lines between statements",
    "prefer-object-spread": "disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.",
    "quote-props": "require quotes around object literal property names",
    "quotes": "enforce the consistent use of either backticks, double, or single quotes",
    "semi": "require or disallow semicolons instead of ASI",
    "semi-spacing": "enforce consistent spacing before and after semicolons",
    "semi-style": "enforce location of semicolons",
    "sort-vars": "require variables within the same declaration block to be sorted",
    "space-before-blocks": "enforce consistent spacing before blocks",
    "space-before-function-paren": "enforce consistent spacing before function definition opening parenthesis",
    "space-in-parens": "enforce consistent spacing inside parentheses",
    "space-infix-ops": "require spacing around infix operators",
    "space-unary-ops": "enforce consistent spacing before or after unary operators",
    "spaced-comment": "enforce consistent spacing after the // or /* in a comment",
    "switch-colon-spacing": "enforce spacing around colons of switch statements",
    "template-tag-spacing": "require or disallow spacing between template tags and their literals",
    "unicode-bom": "require or disallow Unicode byte order mark (BOM)",
    "wrap-regex": "require parenthesis around regex literals",
    "arrow-body-style": "require braces around arrow function bodies",
    "arrow-parens": "require parentheses around arrow function arguments",
    "arrow-spacing": "enforce consistent spacing before and after the arrow in arrow functions",
    "generator-star-spacing": "enforce consistent spacing around * operators in generator functions",
    "no-confusing-arrow": "disallow arrow functions where they could be confused with comparisons",
    "no-useless-computed-key": "disallow unnecessary computed property keys in object literals",
    "no-useless-rename": "disallow renaming import, export, and destructured assignments to the same name",
    "no-var": "require let or const instead of var",
    "object-shorthand": "require or disallow method and property shorthand syntax for object literals",
    "prefer-arrow-callback": "require using arrow functions for callbacks",
    "prefer-const": "require const declarations for variables that are never reassigned after declared",
    "prefer-destructuring": "require destructuring from arrays and/or objects",
    "prefer-numeric-literals": "disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals",
    "prefer-template": "require template literals instead of string concatenation",
    "rest-spread-spacing": "enforce spacing between rest and spread operators and their expressions",
    "sort-imports": "enforce sorted import declarations within modules",
    "symbol-description": "require symbol descriptions",
    "template-curly-spacing": "require or disallow spacing around embedded expressions of template strings",
    "yield-star-spacing": "require or disallow spacing around the * in yield* expressions"
};

const fs = require('fs');
for ([rule, desc] of Object.entries(eslint)) {
    const template = `tool_id: "eslint:${rule}"
extensions: ["js"]
tags: ["JavaScript"]

command: 'eslint --fix #{filename} --no-eslintrc --env "es6" --env "node" --parser-options "{ecmaVersion: 2018}" --rule "{${rule}: \\"error\\"}"'

pr_title: ${desc}
pr_body: |
  See: https://eslint.org/docs/rules/${rule}
`;
    fs.writeFileSync(`eslint-${rule}.yml`, template)
}