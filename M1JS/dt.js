//Dates

let myDates = new Date()

console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());
console.log(myDates.toLocaleDateString());

console.log(typeof myDates);
//object


// let myCreatedDate = new Date(2025, 0, 10)//0=> january
// let myCreatedDate = new Date(2025, 0, 10, 5, 3)
// let myCreatedDate = new Date("2025-01-10")
let myCreatedDate = new Date("01-25-2025")

// console.log((myCreatedDate.toLocaleString()));

let myTimeStamp = Date.now()
//give total millisecond form jan 1970 to now 

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());//give millisecond
//form jan 1970 to the refrence data
console.log(Math.floor(Date.now()/1000));//in seconds

let newDate = new Date()
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getDate());

let modifiedDate = newDate.toLocaleString('default', {
    era:"long",
    weekday:"short",
})

console.log(modifiedDate);







