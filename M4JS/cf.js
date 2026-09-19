//unreadbel code not prefer

const balance = 1000

if (balance>500) console.log("test"),
console.log("test2")

const month = 4

switch (month) {
    case 1:// case the condition like "sam" , january if true then go into scope
        console.log("january");
        break;
    case "fab":
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("default match");
        break;
}

//once a case mathced all the code run after it except default


const email = ""

if(email){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

// "" => false
// "value"=>true

//falsy values

// false, 0, -0, BigInt 0n, "", null, NaN, undefined

//truthy value 
//true, "0", 'false', " ", [], {}, function (){}

// const arr = []
// if (arr.lenght === 0){
// }

// const obj = {}

// if(Object.keys(obj).length === 0){
// }

// false == 0 => true
// false == '' => true
// '' == 0 => true


// nullish coalescing operator (??): null undefined

let val1 = 5??100
//here it can take 5 

let val2 = null??5
//use when the there are chance to come vlaue null/undefined then it use
let val3 = undefined??5
//safety for null value assign
console.log(`val1:${val1},  val2:${val2}, val3:${val3}`);



//terniary operator

// condition ? true : false
const money = 500
money>=100 ? console.log("ameer") : console.log("gareeb");
