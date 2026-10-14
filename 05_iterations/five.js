//for each loop (Higher order function)
//call back function krta hn for each loop m (is m hm function k defination likhta hn pr ak kam krna h k is function k hm n nam hta dna h is m s)
const codding = ["js", "rb", "py", "java", "cpp"]
// codding.forEach(function(val){
//     console.log(val);    
// }) //Output= js rb py java cpp

////==Arrow Function ==
// codding.forEach
// ( (val) => {
//     console.log(val); 
// } )

// == Agr automatic print krna ho to ==
// function printMe(coding){
//     console.log(coding); 
// }
// codding.forEach(printMe)//Output = js rb py java cpp


codding.forEach( (val, index, arr) => {
    console.log(val, index, arr);
    
})

const myCoding = [
    {
    languageName : "Java",
    languageFileName : "js",
    },
    {
    languageName : "Phyton",
    languageFileName : "Phy",
    },
    {
    languageName : "Html",
    languageFileName : "hml",
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )//Output= Java Phyton Java