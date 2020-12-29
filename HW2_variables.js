/* Homework #2: Variables and Constants */

/*

***What is HOISTING in JS?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
Moving all declarations to the top of the current scope (to the top of the current script or the current function). In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.


***What are the differences between let, const and var? When would each be appropriate too use?

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program. Variables declared Locally (inside a function) have Function Scope. Variables declared with the let keyword can have Block Scope.
Variables declared inside a block {} cannot be accessed from outside the block.

1) var declarations are globally scoped or function scoped while let and const are block scoped.
2) var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
3) They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
4) While var and let can be declared without being initialized, const must be initialized during declaration.

The problem with var declaration:

Redefining a variable during code execution may be a desired behavior, however, it can be problematic if one does not realize that the var variable being redefined at any moment has already been used before in the code. This can lead to erratic behavior or bugs in the program. This is why the new declaration let is preferred. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. Redeclaring a variable inside a block will also redeclare the variable outside the block so redeclaring a variable using the let keyword can solve this problem because redeclaring a variable inside a block will not redeclare the variable outside the block */

/* CODE EXAMPLES */

//var
//PROBLEM WITH var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"
//This becomes a problem when you do not realize that a variable greeter has already been defined before

//let
let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined
//using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped.

//const
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error