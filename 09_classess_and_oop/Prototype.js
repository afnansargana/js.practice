// let myName = "Afnan     "
// let myChannel = "Chai     "
// console.log(myName.length);//Output = 10

// console.log(myName.trim().length)// ouput = 5
// console.log(myName.trueLength);//yhi hme=ra challege h k length y jo hm gap dt HN Y is trha bh khtm hoo sgta trim() k sath but hm n trueLength ak function bnana h ak kism k jis s is k solution mil jay...

//Method:Jab kisi object ki property mein function store ho, toh usay aam tor par method kehte hain.
// getSpiderPower: function() {
//     console.log("Hello")
// }

//example:yha method ho rha h function m
let myHeroes = ["thor", 'spiderman']
//object
let heroPower = {
    thor : 'hamer',
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); //(this) us object ko refer karta hai jis par method call kiya gaya hai
    }
}

//Prototype = Prototype ek object hai jiske through doosra object additional properties aur methods access kar sakta hai.
// Object.prototype.afnan = function() {
//     console.log("Hello Afnan");
// };
// let myHeroes = ["Thor", "Spiderman"];
// myHeroes.afnan();

Object.prototype.afnan= function(){
    console.log(`afnan is present in all objects`);
}

Array.prototype.heyAfnan = function(){
    console.log(`Afnan says hello`);
}

// heroPower.afnan()
myHeroes.afnan()
myHeroes.heyAfnan()
// heroPower.heyAfnan()   

//Inheritence
const User = {
    name: 'afnan',
    email: "afnan@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //__proto__ is k mtlab h k is k zria hm log characrastics l sgta hn dosra object s yni k acccess d sgta hn
}
//__proto__ y bhir bh d sgta hn ...
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
//is s bh hm log l sgta hn properties y modern method h direct..

let anotherUsername = "Sargana     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this}.name`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

