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
console.log((Math.random()*10)); //it can give value such as 0.6 if the original value is 0.06
console.log((Math.random()*10)+1); //to avoid such case add 1 to it
console.log(Math.floor(Math.random()*10)+1); //gives single number i.e. round of

const min=10
const max=20 // we need random value in our provided range

console.log(Math.floor((Math.random())));
//Math.floor - single digit value ; Math.random - random value ; 

console.log(Math.floor((Math.random()*(max-min+1))+min)); // it will give accurate result we needed
//20-10+1=11 ; 0.1*11 = 1.1 ; 1.1+10= 11.1; Math.floor(11.1)=11

//whay + min? why not any other value such as +min-1
console.log(Math.floor((Math.random()*(max-min+1))+min-1)); // also gives 9 as answer 


