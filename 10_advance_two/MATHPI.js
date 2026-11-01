//Object k ak property h .getOwnPropertyDescriptor y object k hiddens property k bary m btati h 



console.log(Math.PI); //Output = 3.141592653589793
Math.PI = 5 //value chng lrna k try
console.log(Math.PI);// Output = 3.141592653589793 BUT IS K VALUE CHNG NI HO G IS LAI ISA UNIVERSAL CONSTANT BH KHTA HN

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter);
// kia math.pi k value chng kr sgta hn????? (Interview)
//Math.PI ki built-in value ko JavaScript mein directly change nahi kar sakte. Lekin apni variable ya object property bana kar kisi bhi doosri value ko use kar sakte ho.

const afnan = {
    name: 'M Afnan',
    class: 'BS CS',
    isAvailable: true,

    afnan :function(){
        console.log("order done");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(afnan));//Output = undefined (undefined is lia ay h kio k afnan object h ak pr hm log isa property k dwscripter poch rhai to is k property to name,class wghra hn)
console.log(Object.getOwnPropertyDescriptor(afnan, 'name'));//Output = ab a jae g in k hidden properties

// Object.defineProperty(afnan, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(afnan, 'name')); //UPDATE HO JAY G Y CHNG HO JAE G PROPERTY

//FOR LOOP LGAO G TO
for (let [key, value] of Object.entries(afnan)) {
    if (typeof value !== 'function') {
            console.log(`${key} : ${value}`); // is s code phta ga ni 
    }
} // is s object k sri properties a jae g easily

//kbhi kbhi asa hta h k object k jo property h ho sgta h wo loop k part h n bna