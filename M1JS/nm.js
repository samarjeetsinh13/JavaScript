const score = 400

const balance = new Number(100)

console.log(balance);

console.log(balance.toFixed(2));
//to fixed returns the string
//100.00

const num = 125.425

console.log(num.toPrecision(4))
//(digit)=> how many significant(total) digit we want round of accordingly

const hundreds = 10000

console.log(hundreds.toLocaleString('en-IN'));
//10,000

/********************Maths**************************** */
 
console.log(Math);


console.log(Math.floor((Math.random()*10)) + 1);

//Get the random number between range 

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1)) + min)