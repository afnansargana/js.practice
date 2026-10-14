//map (y bh auto h return kr dta h value)
// Each function k trha h y bh kam krta h 
 
const myNums = [1, 2, 3, 4, 5]
const newNums=myNums.map( (num) => num+ 10 )
console.log(newNums); //Output = [ 11, 12, 13, 14, 15 ]

//Or han agr hm scope { }open kra g to is pr hmy return keyword use krna pra g wrna undefined ay g
// const myNums = [1, 2, 3, 4, 5]
// const newNums=myNums.map( (num) => {
//     return num+ 10
// } )
// console.log(newNums); //Output = [ 11, 12, 13, 14, 15 ]

//==For Each k zria== (Second way)
// const myNums = [1, 2, 4, 5]
// const newNums = []
// myNums.forEach((num)=> {
//     newNums.push(num + 10)
// });
// console.log(newNums); //Output = [ 11, 12, 14, 15 ]

//Chaining  (mtlab k multiple function lgana like map isi map ko do bar y kisi or ko bh multiple time kr sgta hn or is k sath sath filter or others bh lga sgta hn)
const myNumers = [2, 4, 5, 6, 8, 10]

const newNumers = myNumers
                .map( (num) => num * 10 )
                .map(  (num) => num + 1)
                .filter(  (num) => num >= 30)  // filter mean k jo condition true ho g whi chla g bas ...
console.log(newNumers);
