//Read -
// https://262.ecma-international.org/5.1/#sec-11.4.3

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution. 
//  Primitive

//  7 types : String, Number, Boolean, null(empty - tanhai), undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number
console.log(typeof scoreValue) //number

const isLoggedIn = false //Boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol

console.log(typeof id) //symbol
console.log(typeof anotherId) //symbol

console.log(id === anotherId); //false
console.log(id) //Symbol(123)
console.log(anotherId) //Symbol(123)

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros) //object

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj) //object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); //function

