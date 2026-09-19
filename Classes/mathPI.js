// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); 

//not overwrite the Math.PI


const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const chai = {
    name:'masala chai',
    price: 250, 
    isAvailable: true,
    orderChai: function(){
        console.log("chai fatt gayi")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
    writable: false,
    // The writable attribute determines if a property's value can be changed using an assignment operator (=). If set to false, the property becomes read-only.
    enumerable: false,
    //The enumerable attribute controls whether a property shows up when you loop over the object (e.g., using for...in loops, Object.keys(), or Object.assign()). If set to false, the property is hidden from these iteration methods, though it can still be accessed directly
    configurable: false
    // property from the object using the delete operator, and you cannot change its descriptor attributes (e.g., you can't turn a non-enumerable property into an enumerable one later)
})

delete chai.name

console.log(chai.name);

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(const [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
}

// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: false,
//     configurable: false
// })

// we can't redefine properties

// Math.PI = 46;
// console.log(Math.PI) 