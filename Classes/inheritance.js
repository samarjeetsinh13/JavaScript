class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        return this.username;
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course added ${this.username}`)
    }
}


const teacher = new Teacher("Samarjeet", "sam@mit.com", "5431");
const user = new User("Samarjeet");

teacher.addCourse();
teacher.logMe();
console.log(teacher.username);

console.log(user == teacher)
console.log(Teacher == teacher)

console.log(teacher instanceof Teacher );