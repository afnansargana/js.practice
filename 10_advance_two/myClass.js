// ES6: Class Method

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const afnan = new User("Afnan", "afnan@gmail.com", 786);

console.log(afnan.encryptPassword());
console.log(afnan.changeUsername());


// Behind the Scene: Constructor Function

function Afnan(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Method 1
Afnan.prototype.encryptPassword9 = function() {
    return `${this.password}abc`;
}

// Method 2
Afnan.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const Ayan = new Afnan("Ayan", "ayan@gmail.com", 7234);

console.log(Ayan.encryptPassword9());//Output = 7234abc
console.log(Ayan.changeUsername());//Output = AYAN