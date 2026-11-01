// Parent Class
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child Class
class Teacher extends User {
    constructor(username, email, password) {
        super(username);

        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const Sargana = new Teacher("Alisha", "alisha@example.com", 456);

Sargana.addCourse(); //Output = A new course was added by Alisha
Sargana.logMe(); //Output = USERNAME is Alisha

Sargana.logMe()
const tea = new User ('tea')

Sargana.logMe()
console.log(Sargana === tea); //OUTPUT = false
console.log(Sargana instanceof Teacher); //OUTPUT = true 
