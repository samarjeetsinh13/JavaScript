class User{
    #id;

    // #->private
    //it must be delcared here 
    constructor(email, password, id){
        this.password = password;
        this.email = email;
        this.#id = id;
        //initialization
    }
     
    get password(){
        return `${this._password}451`
    }

    //only get can't define we want to deiffne setter with it.

    set password(value){
        this._password = value.toUpperCase();
    }

    get id(){
        return `${this.#id}451`
    }

    set id(value){
        this.#id = value.toUpperCase();
    }

    //if we set password using only this.password
    //there are error called Maximum call stack size

    
    
}

const samar = new User("samar@google.com", "abc", "djdasfjhfs53");

// here it can give the ABC451 
// value come through getter 
// if second time we give value to the class it can change through setter

console.log(samar.password);
console.log(samar.id);