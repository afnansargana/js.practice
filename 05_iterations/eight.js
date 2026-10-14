// == Return function
// ==Return Value==
const myNum = [1, 2, 3]
// const myTotal=myNum.reduce(function (acc, currval){
//     console.log(`aac: ${acc} and currval is: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// == Arrow Function ==
const myTotal = myNum.reduce( (acc, currval) => acc+currval, 0)
console.log(myTotal); //Output = 6


//===============================//
const shoppingCart = [
    {
        course : "javaScript",
        price : 999,
    },
    {
        course : "Phyton",
        price : 1999,
    },
    {
        course : "Mobile Dev",
        price : 4999,
    },
    {
        course : "Data Science",
        price : 10999,
    },
]
const priceToPay = shoppingCart.reduce( (acc, course)=> acc + course.price ,0 )
console.log(priceToPay);// Ouput = 18996 (Sum of values prices..)
