//class


// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return this.password
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@djsgf.ocm", "543");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//behind the scene

function User(username, eamil, password){
    this.username = username;
    this.email = this.email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return this.password;
}

const tea = new User("chai", "chai@djsgf.ocm", "543");

console.log(tea.encryptPassword())