let eslint = {
    "member-access": `Requires explicit visibility declarations for class members`,
    "member-ordering": `Member ordering`,
    "no-inferrable-types": `Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean`,
    "no-internal-module": `Disallows internal module`,
    "no-unnecessary-type-assertion": `Warns if a type assertion does not change the type of an expression`,
    "curly": `Braces for if/for/do/while statements`,
    "no-null-keyword": `Disallows use of the null keyword literal`,
    "no-return-await": `Disallows unnecessary return await`,
    "no-string-literal": `Forbids unnecessary string literal property access. Allows obj["prop-erty"] (can’t be a regular property access). Disallows obj["property"] (should be obj.property)`,
    "no-string-throw": `Flags throwing plain strings or concatenations of strings`,
    "no-unused-variable": `Disallows unused imports, variables, functions and private class members`,
    "static-this": `Ban the use of this in static methods`,
    "array-type": `Requires using either ‘T[]’ or ‘Array`,
    "arrow-return-shorthand": `Suggests to convert () => { return x; } to () => x`,
    "callable-types": `An interface or literal type with just a call signature can be written as a function type`,
    "file-header": `A certain header comment for all files, matched by a regular expression`,
    "interface-over-type-literal": `Prefer an interface declaration over a type literal (type T = { ... })`,
    "no-angle-bracket-type-assertion": `Requires the use of as Type for type assertions instead of <Type>`,
    "no-boolean-literal-compare": `Warns on comparison to a boolean literal, as in x === true`,
    "no-unnecessary-initializer": `Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’`,
    "no-unnecessary-qualifier": `Warns when a namespace qualifier (A.x) is unnecessary`,
    "one-line": `Requires the specified tokens to be on the same line as the expression preceding them`,
    "ordered-imports": `Requires that import statements be alphabetized and grouped`,
    "prefer-method-signature": `Prefer foo(): void over foo: () => void in interfaces and types`,
    "prefer-while": `Prefer while loops instead of for loops without an initializer and incrementor`,
    "space-within-parens": `Spaces within parentheses or disallow them. Empty parentheses () are always allowed`,
    "trailing-comma": `Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters`,
    "switch-final-break": `Checks whether the final clause of a switch statement ends in break;`,
    "type-literal-delimiter": `Checks that type literal members are separated by semicolons. Enforces a trailing semicolon for multiline type literals`,
    "align": `Vertical alignment`,
    "newline-before-return": `Blank line before return when not the only line in the block`,
    "eofline": `Ensures the file ends with a newline`,
    "indent": `Indentation with tabs or spaces`,
    "no-irregular-whitespace": `Disallow irregular whitespace within a file, including strings and comments`,
    "number-literal-format": `Checks that decimal literals should begin with ‘0.’ instead of just ‘.’, and should not end with a trailing ‘0’`,
    "linebreak-style": `A consistent linebreak style`,
    "no-consecutive-blank-lines": `Disallows one or more blank lines in a row`,
    "no-trailing-whitespace": `Disallows trailing whitespace at the end of a line`,
    "prefer-object-spread": `Use the ES2018 object spread operator over Object.assign() where appropriate`,
    "object-literal-key-quotes": `Consistent object literal property quote style`,
    "quotemark": `Quote character for string literals`,
    "semicolon": `Consistent semicolon usage at the end of every statement`,
    "typedef-whitespace": `Requires or disallows whitespace for type definitions`,
    "whitespace": `Whitespace style conventions`,
    "space-before-function-paren": `Require or disallow a space before function parenthesis`,
    "comment-format": `Formatting rules for single-line comments`,
    "arrow-parens": `Requires parentheses around the parameters of arrow function definitions`,
    "no-var-keyword": `Disallows usage of the var keyword`,
    "object-literal-shorthand": `Enforces/disallows use of ES6 object literal shorthand`,
    "prefer-const": `Requires that variable declarations use const instead of let and var if possible`
};

const fs = require('fs');
for ([rule, desc] of Object.entries(eslint)) {
    const template = `tool_id: "tslint:${rule}"
extensions: ["js", "ts"]
tags: ["JavaScript", "TypeScript"]
default_weight: 200 # let eslint rules run first

command: 'echo "{\\"jsRules\\":{\\"${rule}\\":true},\\"rules\\":{\\"${rule}\\":true}}" > /c3pr/temp/tslint.json && tslint --fix -c /c3pr/temp/tslint.json "#{filename}"'

pr_title: ${desc}
pr_body: |
  See: https://palantir.github.io/tslint/rules/${rule}/
`;
    fs.writeFileSync(`${__dirname}/tools/tslint-${rule}.yml`, template)
}