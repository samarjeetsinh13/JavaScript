//1.VARIABLE

const accountId = 1445546
let accountEmail = "smak@gan.com"
var accountPassword = "154464"
accountCity = "junagadh"
let accountState//Undifined

// accountId = 34654

accountEmail = "fkafdjg@agajfg.com"
accountPassword = "245454"
accountCity = "maliya"

// const can't be updated

console.table([accountEmail, accountPassword, accountCity, accountState])
// print in table format
/* prefer not use var; var is globle scope*/

//2.

//alert(3 + 3)// work in console/browser not in node;

//null => standalone value
//undefine => unassigned value
//symbol => unique

//object

console.log(typeof null)//object
console.log(typeof(undefined))//undefined

//datatypes 

// 1. Premitive
// String, Number, Boolean, null, undefined, Symbol, BigInt 
//changes done in deep copy - not by refrence

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2)
//false both are different

console.log(id)
console.log(id2)

const bigNumber = 546461354646513246546n
console.log(typeof bigNumber)//bigInt datatype

// 2. non - premitive(refrence)

//Array, Object, Functions


const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof myFunc);//Function


//*************************************************** */


//Stack(Premitive)
//Heap(non-premitive)

let user = {
    name:"samarjeetsinh",
    age: 28
}

let anotherUser = user

anotherUser.name = "bhagirathsinh"
//It actully change in user also so non-premitive stored in heap
//it can be the shallow copy

console.log(user)
console.log(anotherUser)


