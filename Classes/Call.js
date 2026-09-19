function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, branch){
    // setUsername(username); don't save the name but called current context rremove after called so var also removed from execution
    // setUsername.call(username) -- till not set the username
    setUsername.call(this, username)

    this.email = email;
    this.branch = branch;
}

const user1 = new createUser("samar", "Samar@google.com", "ML")

console.log(user1)