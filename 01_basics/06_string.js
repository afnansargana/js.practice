const name = "Afnan";
const repCount = 50;

//way 1..(but it is not a market recamded not suitable) 
console.log("name" + "repCount" + "value"); 

//Way 2..backtacks(``)for write para and take words and combine words  which is take to variable.. 
console.log(`Helo my name is ${name} and my repo count is ${repCount}`); 

//Way 3..for user new key word and chk protypes and length of word with the help of console (inspect).. 
const gameName = new String("Afnansar"); 

//if you want to access the keys then square brackets use []... 
console.log(gameName[0]);//Output=A 
console.log(gameName[1]);//Output=f 

console.log(gameName.__proto__);//For checking the prototype and use . and two underscores __ in around it.. 

console.log(gameName.length);//output=8 

console.log(gameName.toUpperCase());//output=AFNANSAR(FOR ALL CAPITAL LETTERS) 

console.log(gameName.charAt(2));//OUTPUT=n agr dekhan ho k kn s character kis postion pr h to .... 

console.log(gameName.indexOf('n'));//output=2 agr dekhna ho k kn s position pr kn s character h to.. 
 
//(For charcter counting right s) 
const newString = gameName.substring(0, 4); 
console.log(newString);//output=Afna 

//slice(picha s start kra g count krna) 
const anotherString = gameName.slice(-6, 4); 
console.log(anotherString);//output=Afna

//trim(y function starting space end space ko remove k dta h jo k word  around hti h)
const newStringOne = "    Afnan    "
console.log(newStringOne);//Output=    Afnan    (with spaces..)
console.log(newStringOne.trim);//Output=Afnan(with spaces..)
//trim have two types
//1..trimStart    2..trimEnd

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('20', '-'));//for replacement
console.log(url.includes('Afnan'));//for check k y word majod h y ni agr hoa to true agr n hoa to false output ay g..
//Split
const Name = "Afnan Sargana";

console.log(Name.split(""));//output=[
  //'A', 'f', 'n', 'a',
  //'n', ' ', 'S', 'a',
  //'r', 'g', 'a', 'n',
  //'a'']
console.log(Name.split("-"));//output=[ 'Afnan Sargana' ]