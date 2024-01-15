### Nodejs runtime

Ryan Dahl (born 1981) is an American software engineer who is best known for creating the Node. js JavaScript runtime as well as the Deno JavaScript/TypeScript runtime.

### Scope
Scope is the accessibility during runtime of variables, functions, or objects in a particular part of your code.
- **Global scope**
When we define a variable outside of all document functions, it is in the Global scope and is accessible to all available functions.
- **Function scope**
When we define a variable inside a function, we can only access the variable inside the function.
- **Block Scope**
When we define a variable inside a block, we can only access the variable inside that block. We can achieve this with let and const.


|Var   |Let  | Const  |
|---|---|---|
| Function Scope |Block Scope   |Block Scope   |
|Redeclaration allowed   |Redeclaration not allowed   |Redeclaration not allowed     |
|Can be used before declaration   |Can't be used before declaration   |Can't be used before declaration    |
| Hoisting allowed | Hoisting not allowed | Hoisting not allowed

[Blog](https://www.educative.io/answers/difference-between-var-let-and-const-keyword-in-javascript)