let myName = "samar          "


String.prototype.trueLength = function(){
    console.log(`${this}`)//give the current context who call the method
    console.log(`${this.trim().length}`)
}

myName.trueLength();
"hello             ".trueLength()



// i want to create a method which remove the extra whitespace and give the true length of the string

//scenario

const superHeros = ["Thor", "SpiderMan"];

const powers = {
    thor: "hammer", 
    spiderMan: "sling",

    getSuperHeroPower: function(){
        console.log(`Hero has ${this.thor}`)
    }
}
// i want to define mehtod calles samar

Object.prototype.samar = function(){
    console.log("Function contain samar method")
}
//also array and string has the properties which has object

superHeros.samar()
powers.samar()
powers.getSuperHeroPower()

//give array the properties

Array.prototype.heySamar = function(){
    console.log("Samar say hello")
}

superHeros.heySamar();
// powers.heySamar(); // it not contain array prototype


//inheritance in object 

const user = {
    login: "username", 
    email: "username@google.com"
}

const admin = {
    username: "username",
    id: "dafjashdjfg"
}

admin.__proto__ = user//admin can access all properties of the user

console.log(admin.email)

Object.setPrototypeOf(admin, user);
//admin can access all properties of the user

console.log(admin.login)



