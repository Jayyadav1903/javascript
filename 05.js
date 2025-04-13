//foreach, forin

/*
forEach() loop is used to iterate over arrays and array-like objects. It executes a provided function once for each array element.
It is not a standard loop and is not supported in all browsers. It is a method of the Array prototype.
*/
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index) {
    console.log("Element: " + element + ", Index: " + index);
});
var a=[1, 2, 3, 4, 5]
a.forEach(function(val,index){
    console.log("Value:"+(val+2)+" "+"Index:"+index)
}
)

/*
forIn() loop is used to iterate over the properties of an object. It iterates over all enumerable properties of an object, including inherited properties.
It is a standard loop and is supported in all browsers.
*/

var obj={
    name:"Jay",
    age:20,
    city:"Delhi"
}
for( var key in obj)
    {
    console.log(key+":"+obj[key])
    }
    
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

/*
//Callback function:A code snippet that executes after a set time or after a certain event occurs. It is a function that is passed as an argument to another function and is executed after the completion of that function.
 It is used to handle asynchronous operations in JavaScript. It allows you to execute a function after a certain event occurs or after a certain time delay.
 It is a way to ensure that certain code is executed only after a specific task has been completed.
*/
setTimeout(function()
 {
    console.log("This message is displayed after 2 seconds.");
 }, 2000); // This will execute the function after 2 seconds


/*
First-class functions: A function that can be treated like any other value. It can be assigned to a variable, passed as an argument to another function, or returned from another function.
It is a fundamental concept in JavaScript and allows for higher-order functions, which are functions that can take other functions as arguments or return functions as their result.
It allows for more flexible and reusable code.
*/
//Example of first-class functions:
function abcd(a){
a();
}
abcd(function(){console.log("hello")})

