//singleton
//create using singletone
const newObj = new Object()

newObj.id = "123456"
newObj.name = "samarjeetsinh"

console.log(newObj);

const nestedObj = {
    work:{
        location:{
            name:"samrjeetsinh"
        }
    }
}

// console.log(nestedObj.works?.location.name);
//it return undefined if there is not such key in object

console.log(nestedObj.work?.location.name);
//? is usefull when we are take obj from API

const obj1 = {1:"san", 2:"hel"}
const obj2 = {3:"hey", 4:"hii"}
const obj3 = {obj1, obj2}

//inside the ibj there are two objects
console.log(obj3)

const obj4 = Object.assign({},obj1, obj2)
//{} is must be use because the first element trated as target and other are source
//if not give {} values are same it is good
//it can combine rightly
console.log(obj4)

const obj5 = {...obj1, ...obj2}//also usefull way of merge the objs
console.log(obj5) 

console.log(Object.keys(newObj));
console.log(Object.values(newObj));
console.log(Object.entries(newObj));
//give an array

console.log(newObj.hasOwnProperty('name'));
//give true or flase


//de-structure
const course = {
    name:"JS-hindi",
    price:"1000",
    instructor:"samarjeetsinh"
}

const {instructor} = course

console.log(instructor);

const {instructor:inst} = course
//also we can gave the sortcut names
console.log(inst);



