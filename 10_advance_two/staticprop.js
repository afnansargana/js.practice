class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    createId() {
        return `786`;
    }
}

const afnan = new User("Afnan");

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher(
    "iphone",
    "i@PaymentMethodChangeEvent.com"
);
iphone.logMe();// logMe(Username print krta h) Output = Username: iphone
console.log(iphone.createId()); //Output =  786