
//read about Array.of Array.from Array.isArray

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //push work on existing array
console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//it take that array as a single element
console.log(marvel_heros[3][1]); //flash

const marvel_heros1 = ["thor", "ironman", "spiderman"]
const dc_heros1 = ["superman", "flash", "batman"]
const all_heros = marvel_heros1.concat(dc_heros1)
//concat need to store in new variable
console.log(all_heros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Use of "Spread Operator" in recommended to combine array
const marvel_heros2 = ["thor", "ironman", "spiderman"]
const dc_heros2 = ["superman", "flash", "batman"]
const all_new_heros = [...marvel_heros2, ...dc_heros2]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(0) -> [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(1) -> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const real_another_array = another_array.flat(2) -> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Pratik"))
//false

console.log(Array.from("Pratik"))
//convert in the array
//[ 'P', 'r', 'a', 't', 'i', 'k' ]

console.log(Array.from({name:"Pratik"})) //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
//[ 100, 200, 300 ]