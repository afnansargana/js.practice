// for loop 
//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4 , 5]
for (const num of arr) {
    console.log(num);      
}//Output = 1, 2, 3, 4, 5

const myName = "M Afnan"
for (const nam of myName) {
    console.log(`My name is ${nam}`); 
}

//Map (koi duplicate value ni milti is m sari unique value h hti hn)

const map = new Map()
map.set('In', "India");
map.set('Pak', "Pakistan")
map.set('Ire', "Ireland" )

console.log(map);
for (const [key, Value] of map) {
    console.log(key, ":", Value);
       
}//Output= In : India Pak : Pakistan ......

//Agr object hta do to (errorr ay g)
// const myHeroes={
//     'game1': "Spiderman",
//     'game2': "Taken",
// }
// for (const [key, values] of myHeroes) {
//     console.log(key, ":" , values);
    
// }