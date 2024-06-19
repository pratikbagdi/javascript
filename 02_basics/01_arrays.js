//array
/*
Shallow Copy stores the references of objects to the original memory address.  
Shallow Copy reflects changes made to the new/copied object in the original object.
A shallow copy is faster.

Deep copy stores copies of the object’s value.
Deep copy doesn’t reflect changes made to the new/copied object in the original object.
Deep copy is comparatively slower.
*/

//Array uses deep copy

const myArr1=[0, 1, 2, 3, 4, 5]
console.log(myArr1[0]); 

const myHeros = ["spiderman", "batman", 1, 3]
console.log(myHeros[3]); 

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

//Array methods
const myArr = [0, 1, 2, 3, 4, 5]
myArr.push(6)
console.log(myArr);

myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr);

myArr.unshift(9) //insert value at start of array
console.log(myArr);

myArr.shift() //remove the value from the start of array
console.log(myArr);

console.log(myArr.includes(4)); //true - boolean
console.log(myArr.includes(9)); //false - boolean

console.log(myArr.indexOf(3)) // 3
console.log(myArr.indexOf(7)) // -1

const newArr=myArr.join() // change type to string
console.log(myArr);
console.log(typeof myArr);
console.log(typeof newArr);
console.log(newArr); //0,1,2,3,4,5,6



console.log("A ", myArr);

//slice - Do not manipulate original array
//(1, 3)- include index 1, 2
//give the element at that index
const myn1 = myArr.slice(1, 3)
console.log("slice ",myn1) 

console.log("B ", myArr);

//splice - Manipulate original array
//(1, 3)- include index 1, 2, 3
//give the element at that index and also remove that element from original array
const myn2 = myArr.splice(1, 3)
console.log("splice ",myn2)

console.log("C ", myArr);


