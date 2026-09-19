const User = {
    _email: "fdjahk@fdjhdsas.com",
    _password: "sdhf",

    get email(){
        return `${this._email}`
    },

    set email(value){
        this._email = value.toUpperCase()
    }
}

const tea = Object.create(User)
tea.email = "dfhadsk"
//set in this way
console.log(tea.email);