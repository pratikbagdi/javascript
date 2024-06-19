//Dates
let myDate = new Date()
console.log(`toString() -> ${myDate.toString()}`);
console.log(`toDateString() -> ${myDate.toDateString()}`);
console.log(`toTimeString() -> ${myDate.toTimeString()}`);
console.log(`toISOString() -> ${myDate.toISOString()}`);
console.log(`toUTCString() -> ${myDate.toUTCString()}`);
console.log(`toJSON() -> ${myDate.toJSON()}`);
console.log(`toLocaleString() -> ${myDate.toLocaleString()}`);
console.log(`toLocaleDateString() -> ${myDate.toLocaleDateString()}`);
console.log(`toLocaleTimeString() -> ${myDate.toLocaleTimeString()}`);
console.log(`getTimezoneOffset() -> ${myDate.getTimezoneOffset()}`);

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23) //month start with 0 in Js
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) 
console.log(myCreatedDate1.toLocaleString()); //choose format according to values

let myCreatedDate2 = new Date("2023-01-14") //here month start with 01
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("10-20-2024") // in India we prefer mm-dd-yyyy
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("2024-01-14")
let myCreatedDate5 = new Date(2024, 5, 19, 17, 33, 2, 5) // enter exact time(24Hr) and date at present here
let myTimeStamp = Date.now()
console.log(myTimeStamp); 
console.log(myCreatedDate4.getTime())
console.log(myCreatedDate5.getTime())

console.log(Math.floor(Date.now()/1000)) //we will get in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); //1- Mon, 2- Tue, 3- Wed, 4- Thu
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}))