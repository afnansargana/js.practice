const User = {
    _email: "ayan@gmail.com",
    _password: 'password',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const ayan = Object.create(User)
console.log(ayan.email);

583496944