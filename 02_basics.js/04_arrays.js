//Difference between singleton and non-singleton object
//Non-Singleton (Har bar new dba bnai g y triqa 99% use hta h)
const user1 = {} //output={}
const user2 = {} //output={}
//Singleton  (ak h dba sab isi m s h chza l ga..) Pori application m is k sirf ak h hisa..
//Singleton ko bnana k two methods hn

//Method 1:
const tinderuser = new Object() //Output={} is ko khta hn Singleton object [Method 1]
const tinderuser2 = {} //Output={} is ko khta hn Non-Singleton object
//y opr wla k output same ho g dono k bas bnana k triqa m frq h dono ....

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
console.log(tinderuser.name); //Output=Sammy

//Method 2:(Real singleton method)
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullName : {
            firstName : "Muhammad",
            LastName : "Afnan"
        }
    }
}

console.log(regularUser.fullName.userfullName.LastName); //Output=Afnan (((( . operataion lga k hm log aga aga access kr sgta hn))))


//Object ko merge krna ho arrays k trha to...
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {obj1, obj2}
console.log(obj3); //Output={ obj1 : {1:"a", 2:"b"}, obj2: {3:"c", 4:"d" } }
//but agr shi tiqa s combine krna ho to then ((Object.assign))
//Object.assign: It is a static method copies all enumarable all properties from one or more source objects to a target object.It returns the modified target object.

const obj5 = {1:"a", 2:"b"}
const obj6 = {3:"c", 4:"d"}
const obj7 = Object.assign(obj5, obj6)
console.log(obj7); //Output= 

//isi trha ak or bh triqa h or in dono k output same ay g agr ap {} currrly brackets lga bh den to y kh sgta hn k y optional h..
//{} y target h or agla source is s kuch ni hta bas study krna m easy hta h or y method acha method h 
//Return target = (IS equal to) target ((True))
const obj8 = {1:"a", 2:"b"}
const obj9 = {3:"c", 4:"d"}
const obj10 = Object.assign({}, obj8, obj9)
console.log(obj10); //Output= 

//By spread method ((It is used 90%)) for join objects two or more together..

const obj11 = {1:"a", 2:"b"}
const obj12 = {3:"c", 4:"d"}
const obj13 = {...obj11, ...obj12}
console.log(obj13); //output=


//Jb database s value ati h to .. database s array of objects ay g ziada tr..[]
const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
user1.email
console.log(tinderuser); //Output=
//Agr keys lni hn to..
console.log(Object.keys(tinderuser)); //Output=
//Agr values lni hn to
console.log(Object.values(tinderuser)); //Output=
//Entries(Agr hr ak key value ko array m bnana ho to)
console.log(Object.entries(tinderuser)); //Output=

//Agr swal pochna ho objects m k y property ap k pas majod h to ((.hasOwnProperty))
console.log(tinderuser.hasOwnProperty('isLoggedIn')) //Output=True (kio k y is k pas majod h)

//Agr or bh chza dekhni ho to console kr k dekh sgta hn.. (Inspect kr k)



//=================Destructuring(Objects)==================
const course = {
    courseName: "Js in urdu",
    price: "999",
    courseInstructor :"Afnan",
}
course.courseInstructor //Output = Afnan

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor); //Output = Afnan 
console.log(instructor); //Output = Afnan 
 


//==========Api==========
//[[Sada alfaz m]]{Just for concept} Jb bh hm apna kam kisi pr dal d isa hm api khta hn
//hm actual m apna kam api k through krwta hn backend k dekho [[[misal k tor pr hm google pr dlta hn information to y google khud h chk krta h k wo register h noi h login krna ni krna wghera]]]
//Api hmy arrays k form m bh milti h is k mtlab y h k arrays[] l andr objects hn g{}
//Actual m api y chz h k hmra pas kuch values ati hn backend p to h kis trha isa likhta hn y API h 
//Phla k tim m wo value ati th xml structure m(Jo k bht complex hta th)
//Abhi hmr aps values ati hn mostly JSon m
//JSon dikhta ksa h bas itna
//{
//}
//JSon use(Example)Isa wo object bh kh sgta hn jis koi nam ni hta.. k koi jis k koi nam ni hta 
//Json javascript object notation h
// {
//     "name" : "Adnan",
//     "coursename" : "JS",
//     "rupees" : "free",
// }
//API(random user me api) is pr ja k kisi api k responce ko copy kr k  ((randomJSON Formater) tool on google) is pr paste kr k hm smjh sgta hn api's ko easily ....