//Datatype:Data Type batata hai ke variable ke andar kis type ka data stored hai.
let name = "Afnan";   // String
let age = 21;         // Number
let isStudent = true; // Boolean
//There are two main types of datatype..
//1) Primitive:simple/basic value.
//Primitive data type ek single value represent karta hai...
//JavaScript mein 7 primitive data types hain:
let Name = "Afnan";       // String "Text"
let Age = 21;             // Number
let passed = true;        // Boolean "True/False"
let city;                 // Undefined "Value assign ni hoe"
let result = null;        // Null "intentially empty"
let bigNumber = 12345678901234567890n; // BigInt "Very large integer"
let id = Symbol("123");    // Symbol "Unique value bnana k lia "

const umerid = Symbol("124");
const anotherid = Symbol("124");//these two id have same values but they are not equal to each others....
console.log(umerid === anotherid)
//Reference (Non-Primitive):
//Ye multiple values ya complex data ko represent kar sakte hain.

//Three JavaScript mein commonly:
//Object:Always write in the square brackets[]
const heroes=["Adnan","Afnan"]
//Array:write in currly brackets{}
let myobj = {
    Name: "afnan",
    age: 19,
}
//Function:Parrenthesisi or carrly brackets,function(){}
const myFunction=function(){
    console.log("Hello world");    
}
//Agr kisi nmbr k datatrype chk krni hot o k is k data type kia h to y formual use hta h :
//console.log(typeof .....)


//JavaScript Dynamic hai ya Static?
//JavaScript Dynamically Typed Language hai. ✅
//Iska main reason ye hai ke JavaScript mein variable ka type pehle se fix nahi karna parta, balkay runtime par value dekh kar type determine hota hai.

//2. Static Typing kya hoti hai?
//Static typing mein variable ka type fixed/declared hota hai.
//Official link to see specifications of javascript on Ecma....
//ECMAScript 2026 — Official Specification
//https://262.ecma-international.org/5.1/#sec-11.4.3
//null k datatype k value object ay g......

//++++++++++++++++++++++++++++++++++++++++++
/////MEMORY/////
//STACK (Primitive)
//Heap (Non-primitive)
let myYoutubename= "afnan@google.com"
let anotherName= myYoutubename
anotherName= "adnan@google.com"
console.log(anotherName);
console.log(anotherName);

let userOne= {
    email: "user@gmail.com"
}
let userTwo = userOne
userTwo.email="afnan@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);