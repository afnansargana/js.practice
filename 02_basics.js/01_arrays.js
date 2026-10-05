// ================================ Arrays ===================================
//()=paranthesis
//[]=square brackets
//{}=braces or curly brackets
//javascript arrays are resizeable(is k mtlB H K AGR AK BAR HM DECLARE KR D G TO IS K BAD BH HM CHZA A ADD KR SGTA HN ) mix ho sgta h data types k is k mtlab h k nmbr s bh sgta hn strings bh ets...
//javascript arrays are not associative(js m array sirf index number pr kam krta hn)
//javasript arrays are zero-indexed(mtlab k zero s start ho g)

//====== Example ======
//let arr= ["Ali", "Ahmed", "Zaima"];
//arr[0] //output=Ali -> 0, 1, 2 s chlta h isi hisab s chlta h y
//aar[1] //output=Ahmed 

//jb bh hm javascript arrays m copy operation ka g to y shallow copies create krta h(mtlab opr opr s copy andr s ni)
//Shallow copies:A shallow copy of an object is a copy whose properties share the same referance point(point to the same underlying values).
//Deep copy: A deep copy of an object is a copy whose properties do not share the same referance point.

//array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = []

const myArr2 = new Array(1, 2, 3, 4) 
console.log(myArr[1])//output=1
//is ko bh console m ja k hm is k dkh sgta hn prototype wghera....

//======Array Methods=======
myArr.push(6)// y add krta h or ab
console.log(myArr); // output=[0, 1, 2, 3, 4, 5, 6] yni k 6 ko add kr di h array k list m asa h jitna nmbr ap add krna chta hn kr sgta hn is k help s....

myArr.pop()// y simple jo last value ho g list m isa remove kr d ga bas or kuch ni....
console.log(myArr);//output=[0, 1, 2, 3, 4]

myArr.unshift(9)//is s start m value add kr sgta hn jsa k 9 likha h to y add ho gai h start m but y useful ni h itna 
myArr.shift()// is s 9 rwemove is k output y ay g k [0, 1, 2, 3, 4, 5]
console.log(myArr);//output=[9, 0, 1, 2, 3, 4, 5]

//agr pochn h question krna ho javascript s k y nmbr h yni h to y methods use hta hn
console.log(myArr.includes(9));//output = false (kio k y original array k list m majod h ni h)
console.log(myArr.indexOf(9));//output = -1 (or is k hmesha asi h ay g kio k agr koi nmbr asa daly g jo k add h n ho to phr is k output -1 h ay g hmsha)
console.log(myArr.indexOf(3));//output= 3 kio k is k index nmbr yhi h is k mtlab h k y isi nmbr pr mjod h...

const newArr = myArr.join() // is s wo square bracket khtm hn g or string m b cnvrt kr dta h y is s..
console.log(myArr);//output=[0, 1, 2, 3, 4, 5]
console.log( newArr);//output=0,1,2,3,4,5 (agr typeof dkho g is k to wo bh string ho chuki ho g0 


//slice=kat kr naya tukda niklna(original safe rhta h)
let friends = ["Ali", "Zaima", "Ahmed", "Bilal", "Sara"];
let newArr1 = friends.slice(1,3);
//1 se start karo, 3 s phla tak (3 include ni h)
console.log(newArr1); //["Zaima", "Ahmed"]
console.log(friends); //["Ali", "Zaima", "Ahmed", "Bilal", "Sara"];

//splice=originnal array ko h bdl dta h (bht powerful hta h)y btata h k kha s kitna htana hn kia jorna h 
let friend = ["Ali", "Zaima", "Ahmed", "Bilal"];
friend.splice(1, 2);//is k mtlab y h k index 1 s 2 naam hta do
console.log(friend);//["Ali", "Bilal"]-> Zaima, Ahmed gaye
