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

- add if missing typescript-eslint auto-fixable rules:

| Done | Name                                              | Description                                                                                                        |
|  --- | ---                                               | ---                                                                                                                |
|  [ ] | @typescript-eslint/array-type                     | Requires using either T[] or Array<T> for                                                                          |
|  [x] | @typescript-eslint/ban-types                      | Enforces that types will not to be used                                                                            |
|  [ ] | @typescript-eslint/consistent-type-definitions    | Consistent with type definition either interface or type                                                           |
|  [ ] | @typescript-eslint/func-call-spacing              | Require or disallow spacing between function identifiers and their invocations                                     |
|  [ ] | @typescript-eslint/indent                         | Enforce consistent indentation                                                                                     |
|  [ ] | @typescript-eslint/member-delimiter-style         | Require a specific member delimiter style for interfaces and type literals                                         |
|  [ ] | @typescript-eslint/no-array-constructor           | Disallow generic Array constructors                                                                                |
|  [ ] | @typescript-eslint/no-extra-parens                | Disallow unnecessary parentheses                                                                                   |
|  [ ] | @typescript-eslint/no-inferrable-types            | Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean       |
|  [ ] | @typescript-eslint/no-unnecessary-qualifier       | Warns when a namespace qualifier is unnecessary                                                                    |
|  [ ] | @typescript-eslint/no-unnecessary-type-assertion  | Warns if a type assertion does not change the type of an expression                                                |
|  [ ] | @typescript-eslint/prefer-function-type           | Use function types instead of interfaces with call signatures                                                      |
|  [ ] | @typescript-eslint/prefer-includes                | Enforce includes method over indexOf method                                                                        |
|  [ ] | @typescript-eslint/prefer-namespace-keyword       | Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules        |
|  [ ] | @typescript-eslint/prefer-string-starts-ends-with | Enforce the use of String#startsWith and String#endsWithinstead of other equivalent methods of checking substrings |
|  [ ] | @typescript-eslint/semi                           | Require or disallow semicolons instead of ASI                                                                      |
|  [ ] | @typescript-eslint/type-annotation-spacing        | Require consistent spacing around type annotations                                                                 |