let score1="33"
console.log(score1)
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2="33abc"
console.log(score2)
console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3=null
console.log(score3)
console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4=undefined
console.log(score4)
console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score5=true
console.log(score5)
console.log(typeof score5);
console.log(typeof(score5));

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

/*
Conversion to number
string -> "33" => 33
string -> "33abc" => NaN
object -> null => 0
undefined -> undefined => NaN
boolean -> true => 1 / false => 0
*/

let isLoggedIn = 0
console.log(isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true
10 => true
"Pratik" => true
"0" => true
" " => true
0 => false
"" => false
*/

let someNumber = 33
console.log(someNumber)
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);