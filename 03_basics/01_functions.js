//===========Functions==============
//Functions k sidha mtlab h k jo bh hm n code likhsa h h isa utha k ak package m bnd kr dia h h or is package k copies utha kh hm khi bh l ja sgta hn
console.log("A");
console.log("f");
console.log("n");
console.log("a");
console.log("n");

//function(){}
function saymyName(){
    console.log("A");
    console.log("f");
    console.log("n");
    console.log("a");
    console.log("n");
}
//agr isa call krna ho mtlab print
//saymyNamee "Referance"   () .>Execute
saymyName()

//Create a function in which we can add two numbers?
function addTwoNumbers(number1, number2){
    console.log(number1 + number2); 
} 
addTwoNumbers()//Output khali ay g kio k hm n koi digits h ni dia jis ko k wo call kr k add kra
addTwoNumbers(3, 4) //Output=7
//function k andr jo bh hm input lta hn inha hm bolta hn parameters()in k andr jo likha ho
//or jb hm function ok call krta hn in k andr jo values l jti hn in k andr jo hta hn inha hm khta hn (arguments) y bh hm inhi m likhta hn ()....
function addTwoNumbrs(numbr1, numbr2){
    //let result = numbr1 + numbr2
    //return result//(Y bh ak triqa h)
    return numbr1 + numbr2
} 
const result = addTwoNumbrs(4,5)
console.log("Result:" ,result); //Output= 'Result':8

//return k bad kuch bh print ni ho ga... y rule h chai ap console.log bh kr lo hn is k opr likho g to print ho jay g.
//jb bh hm return krta hn to hm is ko kisi variable m store krta hn  console log s ni ho ga direct print...
// ! This is exclemotary symbol y jo h true ko false or false ko true m cnvrt kr dta hn
function loginUserMessage(username){ //hm bydefault value bh d sgta hn is k mtlab kia h is k mtlab y h k [[[username="sam"]]] mtlab k agr hm kuch pass n kra to yhi ay g undefined kbhi bh ni ho ga..
    if(username === undefined){    //(!username) is equal to //(username === undefined) y dono brabr hn ak dosra k in k meaning same h...
        console.log("please enter a username");//Y jo h is wqt ay g agr hm username ni lgae g nicha phr y message execute ho g...
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Afnan"));//Output= Afnan just logged in..
console.log(loginUserMessage());// jb hm kuch  pass ni kt=rta to output y ata h y impprtant h mcqs k lia bh ..Output= Undefined just logged in..


//FOR SHOPPING CART:(E-commerance app) jis m hmy pta ni hta k hmra pas kitna nmbrs y kitna arguments hta hn bas hmy sab ko add krna hta h bas
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));//Output = 2
//Rest operator:   (...)   isi ko h hm rest operator bh kh ta hn or spred operator bh {jb hm ziada nmbr , values add krta hn to  y use krta hn } y in k usecase p depend h k kn isa hm rest bola g kn s spread..
//Rest operator k simple mtlab y h k jitna bh hmy numbers y kuch bh mila isa hmmuy pack kr k ak h bundle m  d do or y hmy sab kuch pack kr k [] m h d da ga
function calculateCartPrice(num2){
    return num2
}
console.log(calculateCartPrice(200, 400, 500));//Output= [200, 400, 500] y hmy sab kuch d rha h pack kr k (rest operator use hoa h is m)


function calculateCartPrice(val1, val2, ...num3){
    return num3
}
console.log(calculateCartPrice(200, 400, 500, 1000, 4000));//Output=[500, 1000, 4000] kio k is m hm n sirf value 1 0r value 2 ni dni y hm rest operator k sath oper btaya bh h

//Agr object ko function m pass krna ho to then;;;
const user = {
     username : "Afnan",
     price : 990,
 }
function handelObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handelObjects(user)//Output = Username is Afnan and price is 990 [Way 1] y kra g to h output h ay g...

//Ak or triqa bh h ....
handelObjects({
    username: "Afnan",
    price: 998,
})//Output= Username is Afnan and price is 998 [Way2]
    
//Isk andr hm arrays bh pass kr sgta hn..
const getArray = [100, 200, 300, 400]
// function returnSecondValue(){

// } just a structure....

function returnSecondValue(getArray){
    return getArray[1] //Is k andr jo bh hm index daly g whi return ho g yni k print ho ga
}
console.log(returnSecondValue(getArray)); //Output= 200 kio k hm n yhi index ko return kr k print krwaea h ....
console.log(returnSecondValue([100, 200, 300, 400])); //Output = 200 Output same h ay g kio k is m bh call hm log isi ko h kr rhi hn bas is m nam k jgha values dal d hn...