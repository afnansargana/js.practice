const programming = ["js", "rubby", "phyton", "java", "cpp"]

const values = programming.forEach( (item) => {
    console.log(item); //Output = rubby,phyton,java,rubby
    //return item
})
console.log(values);//Output = undefined (( is s hmy y pta chla h k for each return ni krta value or agr hm manually bh returb krwae to bh ni ho ga return...))


//filter (Is k zria hm return kr sgta hn)
//Pr filter k andr bh hm agr parenthesis lgae g to is k lia return keyword use krna pra ga wrna agr () y lgae g to return keyword use h ni krna pra g...
//First way...
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nums = myNums.filter( (num) => num>4 )
// console.log(nums);//Output = [ 5, 6, 7, 8, 9, 10 ]
//Second way...
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = nums.filter( (num) => {
//     return num > 4
// } )
// console.log(newnums);//Output = [ 5, 6, 7, 8, 9, 10 ]

// //Third way
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNum.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);//Ouput = [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Friction', publish: 1981, edition:2004},
    { title: 'Book Two', genre: 'Non-Friction', publish: 1982, edition:2008},
    { title: 'Book Three', genre: 'History', publish: 1991, edition:2006},
    { title: 'Book four', genre: 'Friction', publish: 1981, edition:2004},
    { title: 'Book five', genre: 'History', publish: 2002, edition:2014},

];
const userBooks = books.filter( (bk)=> {
   return bk.genre === 'History'
})
console.log(userBooks);

//Agr do lna hn to or (( && )) lgae ga.. 
const myBooks=books.filter ( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
} )
console.log(myBooks);
