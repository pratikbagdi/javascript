// singleton
//Object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Pratik",
    "full Name" : "Pratik bagdi",
    [mySym] : "mykye1", //symbol should strictly written in []
    age: 23,
    location: "Nagpur",
    email: "patikbagdi21@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

/*
* name -> key, Pratik -> value
* name is tracked as string
* , after value is neccessary
* "full Name" cannot access by console.log(JsUser."full Name")
* symbol need to be use in square bracket [mySym] 
because if we directly use as mySym : "mykey1" 
it's datatype will be string but we need datatype as symbol
*/

//method 1
console.log(JsUser.email)

//method 2
console.log(JsUser["email"]) // most used method to access the value in objects
console.log(JsUser["full Name"])
console.log(JsUser["age"])
//console.log(JsUser[age]) //error
console.log(JsUser[mySym])
console.log(typeof mySym)

JsUser.email="pratik@gmail.com" //change the value in object
//Object.freeze(JsUser) //we freeze hence no change will be done after this
JsUser.email="pratikbagdi@gmail.com"
console.log(JsUser)
/*
{
  name: 'Pratik',
  'full Name': 'Pratik bagdi',
  age: 23,
  location: 'Nagpur',
  email: 'pratik@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykye1'
}
*/

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());
/*
Hello Js User
undefined
*/

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`); //this. is required to acccess
}
console.log(JsUser.greeting2());
/*
Hello Js User, Pratik
undefined
*/

console.log(JsUser)