class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`${this.username}`)
    }

    static createID(){
        return `dfasjg`
    }
}

const user = new User("sama");
console.log(user.username)


// console.log(user.createID()); not access by any instance or child class

class Teacher{
    constructor(username, email){
        super(username);
        this.email = email; 
    }
}
// console.log(user.createID());