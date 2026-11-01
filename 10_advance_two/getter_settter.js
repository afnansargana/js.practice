//class bnae g sab s phla
class User{
    constructor(email, password){
    this.email = email;
    this.password = password
    }
//gettter and setter

//for email
get email(){
    return this._email.toUpperCase()
}
set email(value){
    this._email = value
}
get password(){
    return this._password.toUpperCase()
}
set password(value){
    this._password = value
}
}
const afnan = new User('afnan@example.com', 'abc')
console.log(afnan.email);//Output = 123
