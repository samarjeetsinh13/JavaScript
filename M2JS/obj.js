//singleton -->
//Object.create

//object literals

const mySym = Symbol()//access symbol as an key of the object

const jsUser ={
    name:"Samarjeetsinh",
    "full name": "Kher Samarjeetsinh",//access using only [ bracess]
    age: 18,
    [mySym]:"key2",//
    email:"kher@2007",
    location:"gandhinagar"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);//only access by []


jsUser["email"] = "sam@gmail.com"
// Object.freeze(jsUser)
//freeze the obj no changes occur after that.
jsUser["email"] = "sam@google.com"//change not exicuted

console.log(jsUser);

//Function

jsUser.greeting = function(){
    console.log("Hello js Users")
}
jsUser.greeting2 = function(){
    console.log(`Hello js Users ${this.email}`)
    //access the variable using this
}

console.log(jsUser.greeting)//acces by only (.)

console.log(jsUser.greeting());//exicute the function

console.log(jsUser.greeting2());


