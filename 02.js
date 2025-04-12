//THE DIFFERENCE BETWEEN THE VAR LET AND CONST KEYWORDS
/*
*VAR:
- Was used in JavaScript before ES6.
-var is function scoped, meaning that it is only accessible within the function in which it is declared.
-var adds itself to the window object, which means that it can be accessed globally.
*/
function abcd()
{
    for(var i=0;i<5;i++)
    {
        console.log(i)
    }
    console.log(i) //
}
abcd()
console.log("-------------------------------------------")
// The variable i is declared using var, which means it is function scoped. It is accessible outside the for loop but within the function abcd().

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
*LET&CONST:
- Introduced in ES6.
- let const is block scoped, meaning that it is only accessible within the block in which it is declared.
- let const does not add itself to the window object, which means that it cannot be accessed globally.
*/
function example() {
    for (let j = 0; j < 5; j++) {
        console.log(j); // j is accessible here
    }
    // console.log(j); // Uncommenting this will throw a ReferenceError because j is block scoped

    const x = 10;
    if (true) {
        const x = 20; // This x is block scoped and different from the outer x
        console.log(x); // 20
    }
    console.log(x); // 10
}
example();

