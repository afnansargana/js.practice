// Basic Comparison

console.log(2 > 1);   // true  -> 2 is greater than 1
console.log(2 < 1);   // false -> 2 is not less than 1

console.log(2 >= 1);  // true  -> 2 is greater than or equal to 1
console.log(2 <= 1);  // false -> 2 is not less than or equal to 1

console.log(2 == 1);  // false -> values are not equal
console.log(2 != 1);  // true  -> values are not equal


// Comparison with String and Number

console.log("2" == 2);    // true  -> == only checks value
console.log("02" == 2);   // true  -> "02" converts to 2


// null comparison

console.log(null == 0);   // false
console.log(null >= 0);   // true SIRF YHI FALSE RH GA 
console.log(null > 0);    // false


// undefined comparison

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false


// Strict Comparison
// === checks BOTH value AND data type

console.log("2" === 2);   // false
// "2" is String
// 2 is Number