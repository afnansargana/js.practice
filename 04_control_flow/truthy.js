const userEmail = " "
if (userEmail){
    console.log("Got user email");    
}else{
    console.log("Donnot have user email");
}//output= Got user email

//falsy values (false, 0, -0, BigInt 0n, null, undefined)

//truthy values ( "0","false"," " [string k andr ho to y truthy ho g], [], {}, function(){} >empty functio<)

if (userEmail === 0){
    console.log("Array is empty");
}//ouptut= Array is empty

//=== object ko detect krna ho to ===  (Object.keys(emptyObj).  y isa array k trha kr d ga
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is an empty");    
}//Output= Object is an empty

// false == 0
// true
// false == ''
// true
// 0 == ''
// true

//Nullish Coalesing Operator (??): null undefined
let val1;
 val1 = 5 ?? 10 //Output=5
//val1 = null ?? 10 //output=10
// val1 = undefined ?? 15 //Output= 15
// val1 = null ?? 10 ?? 20 //Output = 15(jo phla ho ga whi ay g)
console.log(val1);


//== Turniery operator ==

//condition ? true : false (formula)

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80")
//Ouptut=Less than 80
