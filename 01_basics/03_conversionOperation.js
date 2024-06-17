/* 
// Conversion of Datatypes

let score1="33"
console.log(score1) //33
console.log(typeof score1); //string
console.log(typeof(score1)); //string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //33

let score2="33abc"
console.log(score2) //33abc
console.log(typeof score2); //string
console.log(typeof(score2)); //string

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN

let score3=null
console.log(score3) //null
console.log(typeof score3); //object
console.log(typeof(score3)); //object

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); //NaN

let score4=undefined
console.log(score4) //undefined
console.log(typeof score4); //undefined
console.log(typeof(score4)); //undefined

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); //NaN

let score5=true
console.log(score5) //true
console.log(typeof score5); //boolean
console.log(typeof(score5)); //boolean

let valueInNumber5 = Number(score5) 
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //1

// Conversion to number
// string -> "33" => 33
// string -> "33abc" => NaN
// object -> null => 0
// undefined -> undefined => NaN
// boolean -> true => 1 / false => 0

let isLoggedIn = 0
console.log(isLoggedIn) //0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //false

// 1 => true
// 10 => true
// "Pratik" => true
// "0" => true
// " " => true
// 0 => false
// "" => false

let someNumber = 33
console.log(someNumber) //33
let stringNumber = String(someNumber)
console.log(typeof stringNumber); //string
console.log(stringNumber); //33

*/

//*********** Operations **********//
let value = 3
let negValue = -value
console.log(negValue);

console.log("Algebraic Operations")
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 ="hello"
let str2 ="Pratik"
let str3 = str1+str2
console.log(str3)

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
// the above code is suitable for questions not for real life coding

console.log((3+4)*5%3); //2
//write code properly using brackets

console.log(true); //true
console.log(+true); //1
console.log(+""); //0
//console.log(true+); //error
//console.log(""+); //error

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

//read-
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


