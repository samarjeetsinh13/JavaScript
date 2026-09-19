//arrays

let myArray = [11,31,3,4,"samar", true]
//store multiple element of different dtypes

//methods

let nums = [0,1,2,3,4,5,6,7,8,9]

nums.push(5)
//add in last
nums.pop()
//remove the last ele

nums.unshift(5)
//add in starting
nums.shift()
//remove first

const newArr = nums.join()
//give array ins string format
// console.log(newArr)

// console.log(typeof newArr);
// //string


// console.log(nums);


// //slice, splice


// console.log("A ", nums)
 
let myn1 = nums.slice(1, 4);
// 4 is excluded

// console.log(myn1)

// console.log("B ", nums);

let myn2 = nums.splice(1, 4)
//removed form actuall array and 4 is included

// console.log(myn2);

// console.log("C ", nums);
//the splice removed form actuall array
const arra1 = [1,2,3,4,5]

const arr2 = [6,7,8,9,10]

// const arr5 = arra1.push(arr2)
// console.log(arr5)


const arr3 = arra1.concat(arr2)

console.log(arr3);

const another_array2 = [...arra1, ...arr2]


console.log(another_array2)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)
console.log(real_another_array);

//Array properties

console.log(Array.isArray("samarjeetsinh"));
//boolean true or false



console.log(Array.from("samarjeetsinh"));

console.log(Array.from({
    name:"samarjeetsinh"
}));//it give the empty array 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

