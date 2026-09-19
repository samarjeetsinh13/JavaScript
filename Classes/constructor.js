function user(username, isloggedIn, loginCount){
    this.username = username
    this.isloggedIn = isloggedIn
    this.loginCount = loginCount

    return this
}

const userWtihoutNew = user("samar", true, 12)
const userWtihoutNewAgain = user("bhagi", true, 12)

console.log(userWtihoutNew);
console.log(userWtihoutNewAgain);//it can override the values


//that's why we use the new keyword to make the user object seperate


const user1 = new user("samar", true, 12)
const user2 = new user("bhagi", true, 12)

console.log(user1);
console.log(user2)