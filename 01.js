//word vs keyword
//Jay:word
//for:keyword

//variables ands constants
//A variable is used to store data that can be changed during the execution of a program.
//A constant is used to store data that cannot be changed during the execution of a program.

//Hoisting:It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution i.e. 'var a' moves to line 1.
console.log(a); 
var a=12

// primitives
//reference=[],{},()(anything that have braces are reference types)

//In reference types, when copying a value, its reference is copied, not the value itself. This means that if you change the value of one variable, the other variable will also change because they both point to the same object in memory.
//In primitive types, when copying a value, the value itself is copied. This means that if you change the value of one variable, the other variable will not change because they are two separate values in memory.

var a=12
var b=a
console.log(a,b) 
b=b+2
console.log(a,b)

var arr=[1,2,3,4,5]
var brr=arr
brr.pop();
if("")
    {
        console.log("apple")
    } 
else
    {
        console.log("banana")
    }

/*for(var i=0;i<11;i++)
    {
        console.log(i);
    } */  

/*for(var i=25;i<=50;i++)
    {
        console.log(i);
    }*/   
/* a=10
while(a<20)
{
    console.log(a);
    a++;
}*/

//Functions

function jay()
{
    console.log("hello world")
}
for(var i=0;i<5;i++)
jay()
/*
Arguments are the values passed to the function when it is called.
Parameters are the variables that are used to accept the arguments in the function definition.
*/
function add(a,b)
{
    console.log(a+b)
}
add(2,3)
add(5,6)
add(9,10)
/*
In the above example, 'a' and 'b' are parameters, and 2,3,5,6,9,10 are arguments.
*/

//Arrays=It is a data structure that can store multiple values in a single variable. It is a collection of elements, each identified by an index or key.


//Push: It adds one or more elements to the end of an array and returns the new length of the array.
//Pop: It removes the last element from an array and returns that element. This method changes the length of the array.
//Shift: It removes the first element from an array and returns that element. This method changes the length of the array.
//Unshift: It adds one or more elements to the beginning of an array and returns the new length of the array.
//Splice: It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.

var arr=[1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.splice(2,1)
console.log(arr)

//splice(removal)
let fruits1 = ["apple", "banana", "mango", "orange"];
let removed = fruits.splice(1, 2); // from index 1, remove 2 elements
console.log(fruits1); // ["apple", "orange"]
console.log(removed); // ["banana", "mango"]

//splice(addition)
let fruits2 = ["apple", "orange"];
fruits2.splice(1, 0, "banana", "mango"); // from index 1, remove 0, add 2 elements
console.log(fruits2); // ["apple", "banana", "mango", "orange"]

//splice(replacement)
let fruits3 = ["apple", "banana", "mango"];
fruits3.splice(1, 1, "kiwi"); // remove 1 element at index 1, insert "kiwi"
console.log(fruits3); // ["apple", "kiwi", "mango"]

//Objects
//An object is a collection of properties, where each property is defined as a key-value pair. The key is a string (or Symbol) that identifies the property, and the value can be any data type, including other objects or functions.
