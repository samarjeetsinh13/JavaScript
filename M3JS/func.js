function sum(num1, num2){
    console.log(num1+num2)
}

const result = sum(5,4)
// result come from the exicution of the function the result var not store any value

// console.log(result)
// undefined

function loginMsg(userName){
    if(!userName){
        console.log("Please enter a username")
        return//it can return form here nothing will be print
    }
    return `${userName} just logged in`
}

console.log(loginMsg())//if the arg is empty the value print it is undefined


//rest opt for unknown number of parameter
function calculateCartIthems(...item){
    return item
}

console.log(calculateCartIthems(1,2,3,4,6,54,67))

function calculateCartIthems(val1, val2, ...item){
    return item
}

console.log(calculateCartIthems(1,2,3,4,6,54,67))
//here the 1 and 2 should be go to the val1 and val2 remaining for item


if (true){
    let userName ="damr"
    if(userName==="damr"){
        let website = "hey"
        console.log(userName + website)
    }
    // console.log(website);
    
}
// console.log(userName)

console.log(add1(5))

function add1 (num){
    return num+1
}

// console.log(add2(50))
// can't access before varible declaration it follows variable rules
const add2 = function(num){
    return num21
}

