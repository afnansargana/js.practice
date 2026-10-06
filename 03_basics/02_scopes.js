//let a = 10
const b = 20
var c = 30

//Scope: Actual m currly brackets {} h scope hta hn sab programming languages m..
//{} curlly brackets jb kisi function k sath ata hn y if/else k sath ata hn tb inha scope khta hn..
//Jo if k andr hm likhta hn wo h pora block scope or dosra h global scope.. jo bhir wli cndition m ho ga
//global scope m jo value likhta hn wo hti h andr mgr jo block scope m likhta hn wo bhir ni jni chia
//windows m yni k inspect kr k hm jo scope dkhta hn wo alg h or jo code k andr node k through chk krta hn wo alg h...
//jitni bar currly brackets ay g itni bar scope ay g..
//var:same scope mein dobara declare ho sakta hai. or jo y h 

var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    console.log("Inner: ",a);    //Inner:  10
}

console.log(a);// ouput=300
console.log(b);//output= 20
console.log(c);//output=300

//Closure : It is an intersting technique in javaScript...
//Nested scope : jo child function h wo parent k variable ko access kr pta hn .. nicha example bh d hoe h is k function 1 or functon 2 k zria s...
function one(){
    const username = "Afnan"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
    //console.log(website);// y is trha ni ho g kio k y alhda h opr function two wla ko is n andr h access kr sgta n bas or y k function one ko hm access kr sgta hn function two m kio k function two function one k andr h ....
    two()//Agr hm is ko commentout kr den to y to call ni ho g to one bh jo nicha h wo bh execute ni ho ga kio k console.log to is k andr h ha two k andr opr dekha to   
}
one() //Output= Afnan

if (true){
    const username = "AfnanSar"
    if(username === "AfnanSar"){
        const website = " Youtube"
        console.log(username + website); //Output=AfnanSar youtube
        
    }
}

//================= intersting Concept ===============
function addone(num){
    return num + 1
}
addone(5) //sirf is k output kuch ni ay g kio is k ak reason h wo y k hm console.log ybi k print to krwaea h ni h khi.. y addone hm function s phla bh likh sgta hn koi issuse ni ho ga is k
 
//AK or triqa s bh y likh sgta hn wo y h k
const addTwo = function(num){
    return num + 2
}
addTwo(5) 
 //OUTPUT IS K H KUCH NI AY G REASON WHI K KUCH PRINT H NI ki IS LIA
 //OR HAN AK OR imp bat wo y h k agr hm is addTwo(5) ko opr l jae to y error d ga kio const d kr kr yni k data type d kr function devlare kia h 