//Execution Context
/*
It is the imaginary box that holds the variables and functions. It is created when a function is invoked. It contains the following:
1. Variable Object: It holds the variables and functions defined in the function.
2. Scope Chain: It is the chain of variable objects that are accessible to the function. It is created when a function is defined.
3. This Keyword: It refers to the object that is executing the function. It is created when a function is invoked.
4. Arguments Object: It holds the arguments passed to the function. It is created when a function is invoked.
5. Call Stack: It is the stack of execution contexts that are created when a function is invoked.
6. Lexical Environment: It is the environment in which the function is defined. It is created when a function is defined.
7. Closure: It is the combination of a function and its lexical environment. It is created when a function is defined.
*/
// Example of Execution Context and Closure
function outerFunction() {
    var outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the inner function
    }

    return innerFunction; // Returning the inner function
}
outerFunction()(); // This will log 'I am outside!' to the console

//Example2:
function abcd()
{
    var a=12
    function def()
    {
        var b=12
    }
}
//We cannot access b outside the function def because it is not in the scope of the function abcd. It is only accessible within the function def. This is called closure.
//This is due to lexical scoping. Lexical scoping means that a function's scope is determined by its position in the source code. In other words, a function can access variables from its own scope and from the scopes of any parent functions.
/*
Lexical Environment:
It is the environment in which the function is defined. It is created when a function is defined. It contains its scope and scope chain. It is used to create closures.
*/
// Example of Lexical Environment
var a=[1,2,3,4,5]
var b=[...a]
b.pop()
console.log(a,b) 
//Similarly we can copy objects using spread operator
var obj={a:1,b:2,c:3}
var obj2={...obj}
obj2.a=10
console.log(obj,obj2)