console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true


console.log("2" > 1); //true
console.log("02" > 1); //true
console.log("0.2" > 1); //false
console.log("0" > 1); //false

//avoid them
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisions convert null to a number, treating it as 0.
//That why null>=0 is true and null==0 is fal

//avoid them
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//strict check === -> check number as well as datatype  

console.log("2" == 2); //true
console.log("2" === 2); //false