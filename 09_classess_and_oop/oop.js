// ==== Object literal ===
const user = {
    username: "Afnan",
    loginCount : 8,
    signedIn : true,

getUserDetails:function(){
    // console.log("Got user details");
    // console.log(`username:${this.username}`);
    console.log(this);//is s sra current context ay ga or is k mtlab bh yhi hta h 
    
    }  
}
//global context
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//ouput = {} empty parenthesis kio k yha value is k chng hti rhti h 
//kio k agr hm log inpect kr k dkha g to wha window object mila g phr is k andr kfi chza ho g but node m y empty h ho ga

// === constructor function ===

// const promiseOne = new promise()
// const date = new Date()
// actually in m y new keywoord h constructor function h
//Constructor function ek aisa function hota hai jo new keyword ke saath call hone par naye objects create aur initialize karne ke liye use hota hai.

// Simple example: Tumhein 100 students ke objects banane hain. Har student ka naam aur age alag hai.

// Agar har object manually banao, to code repeat hoga. Constructor function se tum ek hi template use karke multiple objects bana sakte ho.

const userOne = new User("Afnan", 12, true)
const userTwo = new User ('Ayan', 11, false)
function User(userName, loginCount, isLoggedIn){
    this.userName =  userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // this.greeting = function(){
    //     console.log(`welcome ${this.userName}`);
      return this //wsa y implicity define hta h ah agr ni bh lgae g to bh ho ga ..
}  
    
console.log(userOne);
console.log(userTwo);
// console.log(userOne.constructor);

//ak important bat agr hm log y kam new keyword use ni kra g to kra g to y shi ni ho g dosra print ho ga ak bar new k bghr try kr lo..

//== new keyword==
//1) jb hm new keyword use kra ga to sab s phla ak empty object create hta h jis ko instance bola jta h 
//2) call constructor function new keyword k wgha s (y sra rgu,ents pak krta h or hmy d dta h)
//3) this keyword m sra arguments inject ho jta hn
//4) is step m hmy mil jta hn function k andr





