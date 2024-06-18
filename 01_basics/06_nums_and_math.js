const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber1 = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1123.8966

console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); // Indian nummber system

//++++++++++++++++++ Maths ++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); //|-4| = 4
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(3, 6, 9, 8, 5));
console.log(Math.max(3, 6, 9, 8, 5));

console.log(Math.random()); //gives value between 0 and 1
console.log((Math.random()*10)+1);



