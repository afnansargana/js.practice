//y jb classess ni hti th is wqt old property kh sgta h
function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    });

}
const afnan = new User("afnan@gamil.com", 456)
console.log(afnan.email);
