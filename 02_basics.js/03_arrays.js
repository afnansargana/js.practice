//Objects ko declare krna k two(2) triqa hn... (1) By literal (2)By constructor
//Singleton(By constructor) y hmesha  jb bh hm consrtuctor k tor p kra g bna g y KBHI BH JB LITERLA K TRHA USE KRA G TO NI BNA GA (IMP FOR INTERVIEW)

//Object literal(Objects bnana k triqa)

//constructor method k through bnana ho object to is k y trtiqa h (((object.create)))isi k andr singleton bnta h
//Object.create

//Objects k andr apni key bh define kr sgta hn values bh but arrays m keys define ni kr sgta ....
//Agr object ko wsa bnana ho to variable like var or const etc lga k aga koi nam do koi bh phr (=) k sign or phr currly brackets{}... or is m object diclare kr do bas...
//Behind the seen y name age y sab ak string k trha access ho rhai hn...

//jb bh hm value ko access krta hn ziada tr . s h krta hn pr kuch asa cases bh hta hn jin m  koi or option ni jta [] square brackets k elwa

const mySym = Symbol("Key1") //part 1(agr symbol ko keys k trha access krna ho to)


const JsUser = {
    name : "Afnan",
    "full name" : "M Afnan",
    [mySym]: "mykey1", //Part2(agr symbols ko key k trha access krna ho to) ....>>>agr wsa krna ho to y symbol k arrounded jo hn [] square bractes y hta do .. {dono k output m frq ay g is wla m sath symbol likha hoa ay g}
    age : 18,
    location : "Khanewal",
    email : "afnan@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Mondays", "Sunday"],
}

//Objects ko access kasa kia jta h is k two ways hn..(JsUser.)is ka ga kuch bh lga do jo access krna ho or strt m console lga do..(y bh sai triqa h mgr is s bhtr bh ak h jo k nicha h is k)
console.log(JsUser.email); //Output=afnan@google.com"
console.log(JsUser["email"]); //Output=afnan@google.com"
console.log(JsUser["full Name"]); //Output=M Afnan
console.log(JsUser[mySym]); //Output= mykey1
//Agr chng krna ho kuch then
JsUser.email = "hitesh@chatgpt.com"
//Ab agr ap n freeze krna h k y aga kuch chng n ho then (freeze) method use hta h..
//Object.freeze(JsUser)//IS S Y AGA WLA CHNG NI HO G MTLAB OUTPUT="hitesh@chatgpr.com" {{{{Agr y comments htae g to y freeze ho jay g}}}}
JsUser.email = "afnan@microsoft.com"
console.log(JsUser); //Output=hitesh@chatgpt.com


//JavaScript ko hm variables k trha treet kr sgta hn koi issuse ni ho g {function execute krna k lia bh () braces lgana zrori h print yni k console.log krta hoa}
JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting()); //Output=Hello Js User,


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //Jb hm bnackticks lgae g to isa hm bolta hn sting interpulation.Or y ((this.)) lgana s list ko pta chl jta h k kn s variable lna h 
}
console.log(JsUser.greetingTwo()); //Output=Hello Js User, Afnan
