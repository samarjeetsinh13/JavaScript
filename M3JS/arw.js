//this give the details of the current context

const admission = {
    name:"samar",
    age:"18",
    stream:"btech",
    welcome:function(){
        console.log(`${this.name} Welcome to the Collage.`)
        console.log(this)//give the all details about the given context
        //here the context is the object named admission
    }
}

admission.welcome()
admission.name = "bhagirathsinh"
admission.welcome()
console.log(admission.name)
//the name is changed inside the fucntion in object
console.log(this);
//give the {} there is nothing in the context

function word(){
    let username = "sam"
    console.log(this.username);
    //it give the undefined value 
}

word()


const func = () => {
    let username = "hitesh"
    console.log(this.username);
}
//also give undefined
func()

const sum = (num1, num2) => {
    return num1 + num2
}
const sum2 = (num1, num2) => num1 + num2//imploco\it return

console.log(sum2(5, 4))

const addTwo = ()=>({username:"samarjeetsinh"})
//without () object can't return in arw fucntion 




