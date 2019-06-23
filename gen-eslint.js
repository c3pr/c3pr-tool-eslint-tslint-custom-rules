let eslint = {
    "no-extra-boolean-cast": {title: "Remove unnecessary boolean casts", rules_args: `\\"error\\"`},
    "no-extra-parens": {title: "Remove unnecessary parentheses", rules_args: `\\"error\\"`},
    "no-extra-semi": {title: "Remove unnecessary semicolons", rules_args: `\\"error\\"`},
    "no-regex-spaces": {title: "Remove multiple spaces in regular expressions", rules_args: `\\"error\\"`},
    "no-unsafe-negation": {title: "Negating the left operand of relational operators", rules_args: `\\"error\\"`},
    "curly": {title: "Consistent brace style for all control statements", rules_args: `\\"error\\"`},
    "dot-location": {title: "Consistent newlines before and after dots", rules_args: `\\"error\\"`},
    "dot-notation": {title: "Use dot notation whenever possible", rules_args: `\\"error\\"`},
    "eqeqeq": {title: "Use === and !==", rules_args: `\\"error\\"`},
    "no-else-return": {title: "else blocks after return statements in if statements", rules_args: `\\"error\\"`},
    "no-extra-bind": {title: "Unnecessary calls to .bind()", rules_args: `\\"error\\"`},
    "no-extra-label": {title: "Unnecessary labels", rules_args: `\\"error\\"`},
    "no-floating-decimal": {title: "Leading or trailing decimal points in numeric literals", rules_args: `\\"error\\"`},
    "no-implicit-coercion": {title: "Shorthand type conversions", rules_args: `\\"error\\"`},
    "no-multi-spaces": {title: "Multiple spaces", rules_args: `\\"error\\"`},
    "no-unused-labels": {title: "Unused labels", rules_args: `\\"error\\"`},
    "no-useless-return": {title: "Redundant return statements", rules_args: `\\"error\\"`},
    "wrap-iife": {title: "Parentheses around immediate function invocations", rules_args: `\\"error\\"`},
    "yoda": {title: "require or disallow “Yoda” conditions", rules_args: `\\"error\\"`},
    "no-undef-init": {title: "Initializing variables to undefined", rules_args: `\\"error\\"`},
    "array-bracket-newline": {title: "Linebreaks after opening and before closing array brackets", rules_args: `\\"error\\"`},
    "array-bracket-spacing": {title: "Consistent spacing inside array brackets", rules_args: `\\"error\\"`},
    "array-element-newline": {title: "Line breaks after each array element", rules_args: `\\"error\\"`},
    "block-spacing": {title: "disallow or enforce spaces inside of blocks after opening block and before closing block", rules_args: `\\"error\\"`},
    "brace-style": {title: "Consistent brace style for blocks", rules_args: `\\"error\\"`},
    "camelcase": {title: "Camelcase naming convention", rules_args: `\\"error\\"`},
    "capitalized-comments": {title: "enforce or disallow capitalization of the first letter of a comment", rules_args: `\\"error\\"`},
    "comma-dangle": {title: "require or disallow trailing commas", rules_args: `\\"error\\"`},
    "comma-spacing": {title: "Consistent spacing before and after commas", rules_args: `\\"error\\"`},
    "comma-style": {title: "Consistent comma style", rules_args: `\\"error\\"`},
    "computed-property-spacing": {title: "Consistent spacing inside computed property brackets", rules_args: `\\"error\\"`},
    "eol-last": {title: "require or disallow newline at the end of files", rules_args: `\\"error\\"`},
    "func-call-spacing": {title: "require or disallow spacing between function identifiers and their invocations", rules_args: `\\"error\\"`},
    "function-paren-newline": {title: "Consistent line breaks inside function parentheses", rules_args: `\\"error\\"`},
    "implicit-arrow-linebreak": {title: "Location of arrow function bodies", rules_args: `\\"error\\"`},
    "indent": {title: "Consistent indentation", rules_args: `\\"error\\"`},
    "jsx-quotes": {title: "Consistent use of either double or single quotes in JSX attributes", rules_args: `\\"error\\"`},
    "key-spacing": {title: "Consistent spacing between keys and values in object literal properties", rules_args: `\\"error\\"`},
    "keyword-spacing": {title: "Consistent spacing before and after keywords", rules_args: `\\"error\\"`},
    "line-comment-position": {title: "Position of line comments", rules_args: `\\"error\\"`},
    "linebreak-style": {title: "Consistent linebreak style", rules_args: `\\"error\\"`},
    "lines-around-comment": {title: "Empty lines around comments", rules_args: `\\"error\\"`},
    "lines-between-class-members": {title: "require or disallow an empty line between class members", rules_args: `\\"error\\"`},
    "multiline-comment-style": {title: "Style for multiline comments", rules_args: `[\\"error\\", \\"starred-block\\"]`, body: `Use block comments instead of consecutive line comments.

  Additionally, block comments should have an aligned * character before each line.`},
    "new-parens": {title: "Parentheses when invoking a constructor with no arguments", rules_args: `\\"error\\"`},
    "newline-per-chained-call": {title: "A newline after each call in a method chain", rules_args: `\\"error\\"`},
    "no-lonely-if": {title: "If statements as the only statement in else blocks", rules_args: `\\"error\\"`},
    "no-multiple-empty-lines": {title: "Multiple empty lines", rules_args: `\\"error\\"`},
    "no-trailing-spaces": {title: "Trailing whitespace at the end of lines", rules_args: `\\"error\\"`},
    "no-unneeded-ternary": {title: "Ternary operators when simpler alternatives exist", rules_args: `\\"error\\"`},
    "no-whitespace-before-property": {title: "Whitespace before properties", rules_args: `\\"error\\"`},
    "nonblock-statement-body-position": {title: "Location of single-line statements", rules_args: `\\"error\\"`},
    "object-curly-newline": {title: "Consistent line breaks inside braces", rules_args: `\\"error\\"`},
    "object-curly-spacing": {title: "Consistent spacing inside braces", rules_args: `\\"error\\"`},
    "object-property-newline": {title: "Placing object properties on separate lines", rules_args: `\\"error\\"`},
    "one-var": {title: "Variables to be declared either together or separately in functions", rules_args: `\\"error\\"`},
    "one-var-declaration-per-line": {title: "require or disallow newlines around variable declarations", rules_args: `\\"error\\"`},
    "operator-assignment": {title: "require or disallow assignment operator shorthand where possible", rules_args: `\\"error\\"`},
    "operator-linebreak": {title: "Consistent linebreak style for operators", rules_args: `\\"error\\"`},
    "padded-blocks": {title: "require or disallow padding within blocks", rules_args: `\\"error\\"`},
    "padding-line-between-statements": {title: "require or disallow padding lines between statements", rules_args: `\\"error\\"`},
    "prefer-object-spread": {title: "Using Object.assign with an object literal as the first argument and prefer the use of object spread instead", rules_args: `\\"error\\"`},
    "quote-props": {title: "Quotes around object literal property names", rules_args: `\\"error\\"`},
    "quotes": {title: "The consistent use of either backticks, double, or single quotes", rules_args: `\\"error\\"`},
    "semi": {title: "require or disallow semicolons instead of ASI", rules_args: `\\"error\\"`},
    "semi-spacing": {title: "Consistent spacing before and after semicolons", rules_args: `\\"error\\"`},
    "semi-style": {title: "Location of semicolons", rules_args: `\\"error\\"`},
    "sort-vars": {title: "Variables within the same declaration block to be sorted", rules_args: `\\"error\\"`},
    "space-before-blocks": {title: "Consistent spacing before blocks", rules_args: `\\"error\\"`},
    "space-before-function-paren": {title: "Consistent spacing before function definition opening parenthesis", rules_args: `\\"error\\"`},
    "space-in-parens": {title: "Consistent spacing inside parentheses", rules_args: `\\"error\\"`},
    "space-infix-ops": {title: "Spacing around infix operators", rules_args: `\\"error\\"`},
    "space-unary-ops": {title: "Consistent spacing before or after unary operators", rules_args: `\\"error\\"`},
    "spaced-comment": {title: "Consistent spacing after the // or /* in a comment", rules_args: `\\"error\\"`},
    "switch-colon-spacing": {title: "Spacing around colons of switch statements", rules_args: `\\"error\\"`},
    "template-tag-spacing": {title: "require or disallow spacing between template tags and their literals", rules_args: `\\"error\\"`},
    "unicode-bom": {title: "require or disallow Unicode byte order mark (BOM)", rules_args: `\\"error\\"`},
    "wrap-regex": {title: "Parenthesis around regex literals", rules_args: `\\"error\\"`},
    "arrow-body-style": {title: "Braces around arrow function bodies", rules_args: `\\"error\\"`},
    "arrow-parens": {title: "Parentheses around arrow function arguments", rules_args: `\\"error\\"`},
    "arrow-spacing": {title: "Consistent spacing before and after the arrow in arrow functions", rules_args: `\\"error\\"`},
    "generator-star-spacing": {title: "Consistent spacing around * operators in generator functions", rules_args: `\\"error\\"`},
    "no-confusing-arrow": {title: "Arrow functions where they could be confused with comparisons", rules_args: `\\"error\\"`},
    "no-useless-computed-key": {title: "Unnecessary computed property keys in object literals", rules_args: `\\"error\\"`},
    "no-useless-rename": {title: "Renaming import, export, and destructured assignments to the same name", rules_args: `\\"error\\"`},
    "no-var": {title: "Use let or const instead of var", rules_args: `\\"error\\"`},
    "object-shorthand": {title: "Or disallow method and property shorthand syntax for object literals", rules_args: `\\"error\\"`},
    "prefer-arrow-callback": {title: "Using arrow functions for callbacks", rules_args: `\\"error\\"`},
    "prefer-const": {title: "Const declarations for variables that are never reassigned after declared", rules_args: `\\"error\\"`},
    "prefer-destructuring": {title: "Destructuring from arrays and/or objects", rules_args: `\\"error\\"`},
    "prefer-numeric-literals": {title: "parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals", rules_args: `\\"error\\"`},
    "prefer-template": {title: "Template literals instead of string concatenation", rules_args: `\\"error\\"`},
    "rest-spread-spacing": {title: "Spacing between rest and spread operators and their expressions", rules_args: `\\"error\\"`},
    "sort-imports": {title: "Sorted import declarations within modules", rules_args: `\\"error\\"`},
    "symbol-description": {title: "Symbol descriptions", rules_args: `\\"error\\"`},
    "template-curly-spacing": {title: "require or disallow spacing around embedded expressions of template strings", rules_args: `\\"error\\"`},
    "yield-star-spacing": {title: "require or disallow spacing around the * in yield* expressions", rules_args: `\\"error\\"`},
};

const fs = require('fs');
for ([rule, desc] of Object.entries(eslint)) {
    const template = `tool_id: "eslint:${rule}"
extensions: ["js"]
tags: ["JavaScript"]
default_weight: 100

command: 'eslint --fix "#{filename}" --no-eslintrc --env "es6" --env "node" --parser-options "{ecmaVersion: 2018}" --rule "{${rule}: ${desc.rules_args}}"'

pr_title: ${desc.title}
pr_body: |
  ${desc.body  ? desc.body + '\n\n  ' : ''}See: https://eslint.org/docs/rules/${rule}
`;
    fs.writeFileSync(`${__dirname}/tools/eslint-${rule}.yml`, template)
}

for ([rule, desc] of Object.entries(eslint)) {
    const template = `tool_id: "typescript-eslint:${rule}"
extensions: ["js", "ts"]
tags: ["JavaScript", "TypeScript"]
default_weight: 300 # prefer eslint and tslint over this

command: 'eslint --fix "#{filename}"  --parser "@typescript-eslint/parser" --plugin "@typescript-eslint" --rule "{@typescript-eslint/${rule}: ${desc.rules_args}}"'

pr_title: ${desc.title}
pr_body: |
  ${desc.body  ? desc.body + '\n\n  ' : ''}See: https://eslint.org/docs/rules/${rule}
`;
    fs.writeFileSync(`${__dirname}/tools/typescript-eslint-${rule}.yml`, template)
}