for (let i = 0; i<10; i++) {
    if(i==5){
        // console.log("Detect 5")
        continue
    }
    //if there is 5 the after statements of continue are skipped
    // console.log(i) 
}

//for of

const arr = [1,2,3,4]

for (const num of arr) {
    // console.log(num)
}

for (const num in arr){
    // console.log(num)
}

//'in' are give the index of the iterable

//Maps
//map are different object
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'America')
map.set('Fr', "France")
map.set('IN', 'India')

console.log(typeof map);//return the object formate with key and value
//maintain order and give the unique values 

for(const [key, value] of map){
    //console.log(key, ":-", value)
}
//not itertable in for 'in'

//iter in object
const myObj = {
    game1 : 'NFS',
    game2 : 'COD'
}

// for(const [key, value] of myObj){
//     console.log(key, ":-", value)
// }

// not iterable in this way in obj

for(const [key, value] of Object.entries(myObj)){
    console.log(key, ":-", value)
}


for (const key in myObj) {//'in give key in object
    // console.log(key, ":=", myObj[key]);
    
}


//foreach loop

const coding = ['Js', 'rb', 'py', 'java', 'cpp']


arr.forEach((num) => {
    // console.log(num*num)
})
// console.log(arr);

arr.forEach(printMe)

function printMe(item){
    // console.log(item);
}

coding.forEach((item, index, arrList)=>{
    console.log(item, index, arrList)
})//contain three parameter item, index, arrlist


const myCoding = [
    {
        lanName:'javaScript',
        lanFileName: 'js'
    },
    {
        lanName:'python',
        lanFileName: 'py'
    },
    {
        lanName:'java',
        lanFileName: 'java'
    },
    {
        lanName:'ruby',
        lanFileName: 'rb'
    }
]
myCoding.forEach((item)=>{
    for(const key in item){
        console.log(key, ":-", item[key])
    }
})
myCoding.forEach((item)=>{
    console.log(item.lanFileName);
    
})