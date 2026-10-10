//if (control flow)  if(condition){}  ..>{}  >>>  scope khta hn isa ((AGR IF K CONDITION TRUE H TO ANDR K CODE EXSECUTE HO AGR FALSE HO GA TO NI HO G EXECUTE CODE))
//if (true){}
//==Operators==
//<,>,<=,>=,== → Values compare karta hai, zaroorat par type conversion bhi karta hai.
//=== → Value aur data type dono compare karta hai.
//!= → Check karta hai ke values equal nahi hain.

const temprature = 41
if ( temprature == 40){
    console.log("less than 50");
} else{
    console.log("temprature is greater than 50");
 } 
 console.log("Execute");//It is always executed cuz y condition k bhir h..

//const isUserLoggenIn = true
//if ( 2 == "2" ){
//    console.log(executed);
//}

const score = 200
// if (score >100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);// error = power is not defined (or y errror ana h chia y zrori h) kio k let ak block scope h or y whi declare ho g jha execute kia jae ga..

//implicit scope(this is right way..)
// const balance = 10000
// if (balance > 500) console.log("test"),console.log("test2");//output=test , test2

const balance = 10000  
if (balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance <900){
    console.log("less than 750");
}else {
    console.log("less than 1200");
}//else execute kra g kio k  bki sra match ni krta condition
//output=less than 1200

//== Multiple condition==
// and statement(( && )) check the both conditions...
const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
//Output = "Allow to buy course" (cuz both conditions are true)

//or statement ( || ) [[ y btay g k ak statement thk hni chia ]]
const loggedInFromGoogle = true
const loggedInFromEmail = false
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("userLoggedIn");    
}//Output = userloggedfIn (cuz in m s ak thk hni chia th jo k h) 