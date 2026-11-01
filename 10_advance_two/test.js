//Step 1 : copy path phr cd "idhr path paste kr dna h"
//step 2 : node --allow-natives-syntax test.js
//test.js file k nam h 
const myArray = [1, 2, 3, 4, 5];

// %DebugPrint(myArray)
//Notes
//Arrays javaScript m two types k hta hn...
//continues(Packed) array,holey array (Arrays k optimization hta h hr language k andr javaScript m c++ m hr jgha)

//Optimization javaScript m jo hta h wo three types k further hta h...
//SMI (small packed integer) y sb s optimize type h is k mtlab y h k isa ziada prefe kia jta h 
//Packed elements
//Double (float ,string, function)
//Object (Properties)
//Arrays (Elements)

//Packed_SMI_Elements kio k is k andr koi whole ni h mtlb k [1,,3, 5]
const arrTwo = [1, 2, 3, 4, 5]

//Ak important bat agr ak bar hm log packed-smi-elements s packed-double elements ya packed-elements bna  g to dobara is s phr y wpis packed-smi-elements ni bna g jo mrzi kr lo

//agr hm is m decimal wli value push kra g to y packed-double-elements bn jae g
arrTwo.push(6.0) //PACKED_DOUBLE_ELEMENTS

//Agr string m value push kra g to y Packed-Elements bn gia is s
arrTwo.push('7') //PACKED_ELEMENTS

//HOLEY_ELEMENTS (Multiple types included hn agr)
arrTwo[10]= 11 //its mean k 10 position pr 11 element push kr do but yha postion h six hn to y gap a gia andr //HOLEY_ELEMENTS

console.log(arrTwo); //Output= [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrTwo.length); //Output=11
console.log(arrTwo[9]); //Output=Undefined (y empty postion h)

// agr hole hn g to y sab chk kra ga:......
// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js
const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED (H means hole)

//PACKED is a generic word is k andr sab kuch a sgta h arrays, numbers and strings wghra
 
const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity)
 