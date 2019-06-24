let tslint = {
    // "arrow-parens": {title: `Requires parentheses around the parameters of arrow function definitions`, rules_args: `true`},
    // "callable-types": {title: `An interface or literal type with just a call signature can be written as a function type`, rules_args: `true`},
    // "curly": {title: `Braces for if/for/do/while statements`, rules_args: `true`},
    // "indent": {title: `Indentation with tabs or spaces`, rules_args: `true`},
    // "interface-over-type-literal": {title: `Prefer an interface declaration over a type literal (type T = { ... })`, rules_args: `true`},
    // "linebreak-style": {title: `A consistent linebreak style`, rules_args: `true`},
    // "prefer-const": {title: `Requires that variable declarations use const instead of let and var if possible`, rules_args: `true`},
    // "prefer-method-signature": {title: `Prefer foo(): void over foo: () => void in interfaces and types`, rules_args: `true`},
    // "prefer-object-spread": {title: `Use the ES2018 object spread operator over Object.assign() where appropriate`, rules_args: `true`},
    // "space-before-function-paren": {title: `Require or disallow a space before function parenthesis`, rules_args: `true`},
    "align": {title:  `Vertical alignment`, rules_args: `true`},
    "array-type": {title: `Requires using either ‘T[]’ or ‘Array`, rules_args: `[true,"array"]`},
    "arrow-return-shorthand": {title: `Suggests to convert () => { return x; } to () => x`, rules_args: `true`},
    "comment-format": {title: `Formatting rules for single-line comments`, rules_args: `true`},
    "eofline": {title: `Ensures the file ends with a newline`, rules_args: `true`},
    "file-header": {title: `A certain header comment for all files, matched by a regular expression`, rules_args: `true`},
    "member-access": {title: `Requires explicit visibility declarations for class members`, rules_args: `true`},
    "member-ordering": {title: `Member ordering`, rules_args: `true`},
    "newline-before-return": {title: `Blank line before return when not the only line in the block`, rules_args: `true`},
    "no-angle-bracket-type-assertion": {title: `Requires the use of as Type for type assertions instead of <Type>`, rules_args: `true`},
    "no-boolean-literal-compare": {title: `Warns on comparison to a boolean literal, as in x === true`, rules_args: `true`},
    "no-consecutive-blank-lines": {title: `Disallows one or more blank lines in a row`, rules_args: `true`},
    "no-inferrable-types": {title: `Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean`, rules_args: `true`},
    "no-internal-module": {title: `Disallows internal module`, rules_args: `true`},
    "no-irregular-whitespace": {title: `Disallow irregular whitespace within a file, including strings and comments`, rules_args: `true`},
    "no-null-keyword": {title: `Disallows use of the null keyword literal`, rules_args: `true`},
    "no-return-await": {title: `No need to use return await inside async functions`, rules_args: `true`, body: `An \`async\` function always wraps the return value in a \`Promise\`. Using \`return await\` just adds extra time before the overreaching promise is resolved without changing the semantics.`},
    "no-string-literal": {title: `Forbids unnecessary string literal property access. Allows obj["prop-erty"] (can’t be a regular property access). Disallows obj["property"] (should be obj.property)`, rules_args: `true`},
    "no-string-throw": {title: `Flags throwing plain strings or concatenations of strings`, rules_args: `true`},
    "no-trailing-whitespace": {title: `Disallows trailing whitespace at the end of a line`, rules_args: `true`},
    "no-unnecessary-initializer": {title: `Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’`, rules_args: `true`},
    "no-unnecessary-qualifier": {title: `Warns when a namespace qualifier (A.x) is unnecessary`, rules_args: `true`},
    "no-unnecessary-type-assertion": {title: `Warns if a type assertion does not change the type of an expression`, rules_args: `true`},
    "no-unused-variable": {title: `Disallows unused imports, variables, functions and private class members`, rules_args: `true`},
    "no-var-keyword": {title: `Disallows usage of the var keyword`, rules_args: `true`},
    "number-literal-format": {title: `Checks that decimal literals should begin with ‘0.’ instead of just ‘.’, and should not end with a trailing ‘0’`, rules_args: `true`},
    "object-literal-key-quotes": {title: `Consistent object literal property quote style`, rules_args: `true`},
    "object-literal-shorthand": {title: `Enforces/disallows use of ES6 object literal shorthand`, rules_args: `true`},
    "one-line": {title: `Requires the specified tokens to be on the same line as the expression preceding them`, rules_args: `true`},
    "ordered-imports": {title: `Requires that import statements be alphabetized and grouped`, rules_args: `true`},
    "prefer-while": {title: `Prefer while loops instead of for loops without an initializer and incrementor`, rules_args: `true`},
    "quotemark": {title: `Quote character for string literals`, rules_args: `true`},
    "semicolon": {title: `Consistent semicolon usage at the end of every statement`, rules_args: `true`},
    "space-within-parens": {title: `Spaces within parentheses or disallow them. Empty parentheses () are always allowed`, rules_args: `true`},
    "static-this": {title: `Ban the use of this in static methods`, rules_args: `true`},
    "switch-final-break": {title: `Checks whether the final clause of a switch statement ends in break;`, rules_args: `true`},
    "trailing-comma": {title: `Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters`, rules_args: `true`},
    "typedef-whitespace": {title: `Requires or disallows whitespace for type definitions`, rules_args: `true`},
    "type-literal-delimiter": {title: `Checks that type literal members are separated by semicolons. Enforces a trailing semicolon for multiline type literals`, rules_args: `true`},
    "whitespace": {title: `Whitespace style conventions`, rules_args: `true`},
};

const fs = require('fs');
for ([rule, {title, rules_args, body}] of Object.entries(tslint)) {
    const template = `tool_id: "tslint:${rule}"
extensions: ["js", "ts"]
tags: ["JavaScript", "TypeScript"]
default_weight: 200 # let eslint rules run first

command: 'echo "{\\"jsRules\\":{\\"${rule}\\":${rules_args.replace(/"/g, '\\"')}},\\"rules\\":{\\"${rule}\\":${rules_args.replace(/"/g, '\\"')}}}" > /c3pr/temp/tslint.json && tslint --fix -c /c3pr/temp/tslint.json "#{filename}"'

pr_title: ${title}
pr_body: |
  ${body ? body + '\n\n  ' : ''}See: https://palantir.github.io/tslint/rules/${rule}/
`.replace(/\n/g, '\r\n');
    if (fs.existsSync(`${__dirname}/tools/${rule}.yml`)) {
        fs.appendFileSync(`${__dirname}/tools/${rule}.yml`, '\r\n - ' + template);
        fs.unlinkSync(`${__dirname}/tools/tslint-${rule}.yml`);
    } else {
        fs.unlinkSync(`${__dirname}/tools/tslint-${rule}.yml`);
        fs.writeFileSync(`${__dirname}/tools/${rule}-TSLINT.yml`, template)
        // fs.writeFileSync(`${__dirname}/tools/tslint-${rule}.yml`, template)
    }
}