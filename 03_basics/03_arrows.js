const user = {
    username: "Afnan",
    price: 999,
    welcomessage: function(){
        console.log(`${this.username} , welcome to wenbsite`);//yha pr jo this lgaea h y current content ko jo bh currly brakets m h isa access kr rha h or is k right way bh yhi h....

        //console.log(this);//Y current content print kra g yni k sra jo kuch h is m username or price m  is k comment hta k kro g to pta chl jae g        
    }
}
user.welcomessage()//Output = Afnan , welcome to wenbsite (y is k sath h print ho g functiok bad asa h krna prta h to h print hta h y..)
user.username = "Sam"//now current content change...
user.welcomessage() //Output = Sam , welcome to wenbsite
//Brwoser k andr jo global object h wo window object h..(Imp)
//agr hm sirf this print kra g to is k "{}" y output ay g but agr sidha inspect kr k kra to window ay g kio k y global object h...

function cup(){
    let username = "Adnan"
    console.log(this);//to is k output bht sri ay g engine yni k node m agr sirf this ko kra g function m or agr this k aga kuch call kra g to undefined ay g
    console.log(this.username);//Output = undefined (Cuz y is k andr h ha function m)
    
}
cup()

//dosra way s likho g to..
const chai = function(){
    let username = "Afnan"
    console.log(this.username);
    
}
chai()//Output = undefined

//=========Arrow Function =========
// function k andr h function k defination likh kr function keyword hta do or is m () in square barackets k bad ak arrow is trha "=>" lga do to y arrow function bn gia...

const mine = () => {
    let username = "Afnan"
    console.log(this.username);
    
}
mine()//Output = undefined

//Arrow function k basic content : () => {}
    //Explicit return: jb hm return keyword use krta hn..
    //for basic arrow function yni k way 1..
const addTwo =(num1,num2) => {
    return num1+num2
}
console.log(addTwo(3, 4)); //Output= 7

//Implicit return ynni k arrow function k way 2 (implicit return: jis m hm return keyword use ni krta)..
const addtwo =(num1,num2) => num1+num2
console.log(addtwo(3, 4)) //Ouput = 7 (same)

//Ak imp bat agr arrow function hm currly barackets m likha g to return keyword use kra g otherwise ni kra g ....

//way 3...(implicit return)
const add2 =(num1,num2) => (  num1+num2 )
console.log(add2(3, 4)) //Output = 7 (same)

//Agr hm n object return krna ho to 
const add3 =(num1,num2) => {username: "Ayan"}
console.log(add3()); //Output = undefined (kio k return krna k round brackets m isa likhn apra g)

const add4 =(num1,num2) => ({username: "Ayan"})
console.log(add4()); //Output = { username: 'Ayan' }
