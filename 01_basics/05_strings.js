const name = "Pratik"
const repoCount = 50
//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//console.log('Hello my name is ${name} and my repo count is ${repoCount}');

//look at the double quotes properly 
// ---> `...` should be use
// ---> '...' not this

const gameName = new String('pratik21')

console.log(gameName[0]); //p
console.log(gameName.__proto__); //(2 _ are there) {}

console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //PRATIK21
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf("t")); //3

const newString = gameName.substring(0, 4) // last value i.e. charAt(4) is not included
console.log(newString); //prat

const anotherString = gameName.slice(-1, 8) //1
console.log(anotherString);
//Use of Slice
//(.. , 9) idhar 9 matlab 0 to 8, 9 include nahi hoga
//(-1, 8) matlab 0 to 7 element consider kiye i.e. p to 1
// aur -1 matlab last is ginna shuru karo -1 -> 1, -2 -> 2, -3 -> k

const str = "Learning JavaScript";
const slicedStr = str.slice(-8); // "JavaScript" (startIndex is -8, endIndex is omitted)
console.log(slicedStr);

const newStringOne="  pratik    "
console.log(newStringOne.trim()) //remove start and end space

const url = "https://hitesh.com/hitesh%20choudhary"
// browse spaces nahi samajta vo space ke jagah %20 dal deta hai

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const newStringTwo = "pratik-1-jik"
console.log(newStringTwo.split('-'));

