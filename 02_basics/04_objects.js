//declaration of singleton object
//const tinderUser = new Object() 

//declaration of non-singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pratik",
            lastname: "Bagdi",
        }
    },
    copyname: {
        //userfullname: {
            firstname: "Pratik",
            lastname: "Bagdi"
        //}
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.copyname.userfullname?.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//Syntax 1 - not recommended
const obj3_1 = { obj1, obj2}
console.log(obj3_1) 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

/*
Syntax 2 -> const returnTarget = Object.assign(target, source);
Consider...

const obj3 = Object.assign(obj1, obj2)
=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

Here obj1 = target and obj2 = source
Therefore the value of obej1 will be changed 
returntarget == target

console.log(obj1) 
=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

Here we should use {} in place of target 
i.e. target = returntarget = obj3
as shown below
*/

const obj3_2 = Object.assign({}, obj1, obj2) //any no of obj can be use as source
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(obj3_2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1) //{ '1': 'a', '2': 'b' }

const obj3_3 = {...obj1, ...obj2}
console.log(obj3_3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Array ke andar bahut sare objects hai
const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 1,
        email: "xyz@gmail.com",
    },
    {
        id: 1,
        email: "okc@gmail.com",
    }
]

console.log(users[2].email)

console.log(tinderUser);

//we will get result in array using below properties
console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
//it will give array in array
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


//To check if the object have the property or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

console.log(tinderUser.hasOwnProperty('isLogged')); //false

//Destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Pratik"
}
//Syntax 1
//console.log(course.courseInstructor)

//Syntax 2
const {courseInstructor} =course
console.log(courseInstructor); //Pratik

//Syntax 3
const {courseInstructor: instructor} =course
console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "Pratik")

/* json
Key and Value are in string

API can object or array containing different object
{
    "name":"Pratik",
    "coursename":"Js in Hindi",
    "price": "free"
}

[
    {},
    {},
    {},
]

URL FOR API
https://api.github.com/users/hiteshchoudhary

Random User me -
Website - https://randomuser.me/
API - https://randomuser.me/api/

Json Formatter to study JSON API files
https://jsonformatter.org/
Click Format/Beautify
*/

