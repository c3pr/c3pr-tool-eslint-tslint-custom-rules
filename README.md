# c3pr-tool-eslint-tslint-custom-rules

c3pr tool for eslint, tslint and eslint-typescript rules/transformations.

## Notes:

- eslint fixes ONLY work for .ts when they are pure .js; in other words, if they have types, they will not work.
- typescript-eslint: not all rules should work. We'll find out as it goes. 

### TODOS

- eslint and ECMAScript version: the project should specify

- check manually and merge:

| TSLint                      | ESLint                  |
| ---                         | ---                     |
| no-string-throw             | no-throw-literal        |
| no-unused-variable          | no-unused-vars          |
| trailing-comma              | comma-dangle            |
| newline-before-return       | newline-before-return   |
| eofline                     | eol-last                |
| no-consecutive-blank-lines  | no-multiple-empty-lines |
| no-trailing-whitespace      | no-trailing-spaces      |
| object-literal-key-quotes   | quote-props             |
| quotemark                   | quotes                  |
| semicolon                   | semi                    |
| comment-format              | spaced-comment          |
| no-var-keyword              | no-var                  |
| object-literal-shorthand    | object-shorthand        |