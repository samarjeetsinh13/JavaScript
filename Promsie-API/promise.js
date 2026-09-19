
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()//connected to .then noe the promise is consumed and completation part will run
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");  
})


//do in one part
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 consumed");
})


const promiseThree = new Promise(function(re, reject){
    setTimeout(function(){
       re({username: "javascript", email:"chai@code.com"}) 
    }, 1000)
})

//pass the data from created section to consumed section
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"samar", password:"556633211"})
        }else{
            reject("ERROR:Something went wrong.")
        }
    }, 1000)
})
//promise chainig here first then generate the value and it can accept/executated by second then
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("the promsie is either resolve or get rejected"))
//finally execute after if promise resolve or get rejected


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"samar", password:"556633211"})
        }else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

//if error is coming give an error because there is no catch function for handle the error
// problem solve using try and catch block
async function consumepromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);
    }
}

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(response);
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
getAllUsers();
consumepromiseFive()

