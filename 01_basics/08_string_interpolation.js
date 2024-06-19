/*
String interpolation is a great programming language feature that allows injecting variables, function calls, and arithmetic expressions directly into a string. 
String interpolation was absent in JavaScript before ES6. 
String interpolation is a new feature of ES6, that can make multi-line strings without the need for an escape character. 
We can use apostrophes and quotes easily so that they can make our strings and therefore our code easier to read as well. 
*/

/*
These are some of the reasons to use string interpolation over string concatenation. 
Lets understand the string interpolation with examples.
*/

// String Concatenation 
function myInfo(fname, lname, country) { 
    return "My name is " + fname + " " + lname + ". "
            + country + " is my favorite country."; 
} 
console.log(myInfo("john", "doe", "India")); 
/*
In string concatenation, it is hard to maintain strings as they grow large it becomes tedious and complex. 
In order to make it readable, the developer has to maintain all the whitespaces. 
This is where ES6 comes to the rescue with String interpolation. 
In JavaScript, the template literals (strings wrapped in backticks ` `) and ${expression} as placeholders perform the string interpolation. Now we can write the above myInfo function with string interpolation.
*/

// String Interpolation 
function myInfo(fname, lname, country) { 
    return `My name is ${fname} ${lname}. ${country} is my favorite country`; 
} 
console.log(myInfo("john", "doe", "India")); 


function isEven(x) { 
    console.log(`x is ${x%2 === 0 ? 'even' : 'odd'}`); 
} 
isEven(4); // x is even 