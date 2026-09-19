//Refrence 
// array -> object -> null 
//string -> object -> null 
//function -> object -> null 


function multiply(num){
    return num*5;
}

multiply.power = 2;

console.log(multiply(5));

console.log(multiply.power);

console.log(multiply.prototype);

//new keyword usage

function createUser(username, price){
    this.username = username
    this.price = price
}


// UserDefine prototype
createUser.prototype.increment = function () {
    this.price++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.price}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.increment()//increase the price
console.log(chai.price)
chai.printMe()//call the printMe fucntion