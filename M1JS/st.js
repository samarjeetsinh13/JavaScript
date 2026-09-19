const name = "samarjeetsinh"
const age = 18

console.log(`my name is ${name}. i am ${age} year old`)

console.log(name.__proto__)

console.log(name.length)

console.log(name.toUpperCase());
console.log(name.charAt(5));
//also use at()

console.log("a".charCodeAt(0))//index of the string => (vlaue) 
//return the ascaii value


console.log(name.indexOf('ama'));
//give only starting char index
//if not found return -1
console.log(name.lastIndexOf('a'));
//last occurance

let newName = name.substring(0,5)
//5 is excluded
//no negetive indexing


console.log(newName);

let another = name.slice(-6, -2)
//-2 is excluded



console.log(another);


const stringSpace ="      samar       " 

console.log(stringSpace.trimStart());
//remove white space from starting
console.log(stringSpace.trimEnd())
//remove white space form ending


console.log(stringSpace)

console.log(stringSpace.trim());
//remove white space

const url = "hafjgadj12jhfajdgfjadgkggh" 


console.log(url.includes('12'));
//boolean

console.log(url.replace('12', 'gfadhg'));
//repalce the word wtih speicific word
//replaceAll() => repalce all the word with given specific word

let phone = "123-4567-895"
console.log(phone.replace(/-/g, ""));
//remove -


console.log(url.split('g'))
//return the array spli by 'g'


const url2 = "https://example.com"

//boolean
console.log(url2.startsWith("https"));
//true
console.log(url2.endsWith("https"));
//false



const name1 ="Samarjeetsinh"

const surName = "Kher"

console.log(name1.concat(" ", surName))

console.log("ha".repeat(5))
//hahahahaha

console.log("25".padStart(5,"0"))
//00025 => padStart(totalNumberOfChar, addeble item)
//padEnd()  add at the end 

console.log("a".localeCompare("b"))
//if flase give negitive number

console.log("Samarjeetisinh".localeCompare("Kher"))
//sort the string and check the refernce

/*
Negative number: The referenceString comes before the compareString.
Positive number: The referenceString comes after the compareString.
Zero (0): Both strings are identical or equal in the given sort order
*/


//test

const password = "Kher@afdjjfdg";

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(password));//=> false
//all the pattern char must be in password

console.log(/hello/.test("hello world"))
// true


