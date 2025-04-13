
/*
//Higher-order functions: A function that takes one or more functions as arguments or returns a function as its result. It is a function that operates on other functions.
*/
//Example of higher-order functions:
function abcd(a){
    a();
    return function()
{
    console.log("hello")    
}}
abcd(function(){console.log("Jay")})()

//forEach loop: It is a example of higher-order function. It is used to iterate over arrays and array-like objects. It executes a provided function once for each array element.
// It is not a standard loop and is not supported in all browsers. It is a method of the Array prototype.
var arr = [1, 2, 3, 4, 5];  
arr.forEach(function (element, index) {
    console.log("Element: " + element + ", Index: " + index);
});

//---------------------------------------------------------------------------------------------------------------------------------------

/*
-The constructor funcyion is used when we want to create multiple objects of the same type.
-It is a special type of function that is used to create objects. It is called a constructor because it constructs an object.
-'this' keyword is used to refer to the current object. It is used to access the properties and methods of the object.
-It is used to create instance variables. It is used to create properties of the object.
-The code below is an example of a constructor function.
*/ 
function mouldOfbuiscuit(color)
{
    this.width=12
    this.height=10
    this.color=color
    this.taste="sweet"
}
color="pink"
let b1=new mouldOfbuiscuit()
console.log(b1.width) //12
let b2=new mouldOfbuiscuit()
console.log(b2.height) //10 
let b3=new mouldOfbuiscuit(color)
console.log(b3.color) //brown   
let b4=new mouldOfbuiscuit()
console.log(b4.taste) //sweet
