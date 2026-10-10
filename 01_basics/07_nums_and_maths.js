const score = 400;
console.log(score);
// Jab new object use karte hain aur uski properties hoti hain,
// to console mein inspect karne par properties dekh sakte hain.
const balance = new Number(100);
console.log(balance);
// toString() Number ko String mein convert karta hai.
// Output: "100"
console.log(balance.toString());
// String banne ke baad uski length check kar sakte hain.
// Output: 3
console.log(balance.toString().length);
// Number k agay decimal points dene k lia toFixed() use hota hai.
// (2) ka matlab decimal k baad 2 digits.
// Ye specially e-commerce applications mein prices waghera k lia use hota hai.
console.log(balance.toFixed(2));
// Output: 100.00
// toPrecision() significant digits set karne k lia use hota hai.
// Ye result ko String ki form mein return karta hai.
const otherNumber = 23.8966;
// Yahan total 3 significant digits chahiye.
// 23.8966 → 23.9
// Kyun k 3 significant digits k baad next digit 9 hai,
// is lia rounding hoti hai.
console.log(otherNumber.toPrecision(3));
// Output: 23.9
// Yahan bhi total 3 significant digits chahiye.
// 123.8966 → 124
// Kyun k 3 significant digits k baad next digit 8 hai,
// is lia rounding hoti hai.
const otherNumberOne = 123.8966;
console.log(otherNumberOne.toPrecision(3));
// Output: 124
// Agar num ber bara ho to us mein commas lagane k lia
// toLocaleString() use karte hain.
// Ye given locale/standard k hisab se formatting karta hai.
const hundreds = 1000000;
console.log(hundreds.toLocaleString());
// Output: 1,000,000
// Indian numbering system k lia "en-IN" use kar sakte hain.
console.log(hundreds.toLocaleString("en-IN"));
// Output: 10,00,000

// ++++++++++++++++++ Maths ++++++++++++++++++

// Math JavaScript ka built-in object hai.
// Is mein mathematical calculations k lia bohat se methods aur properties hoti hain.
// Math ko console mein print kar k iski properties/methods inspect kar sakte hain.
console.log(Math);
// abs() number ki absolute value return karta hai.
// Simple words mein negative sign hata deta hai.
// Positive number positive hi rehta hai.
console.log(Math.abs(-4));
// Output: 4
console.log(Math.abs(4));
// Output: 4
// round() number ko nearest integer par round karta hai.
// 4.6 → 5
console.log(Math.round(4.6));
// Output: 5
// ceil() hamesha upper integer ki taraf jata hai.
// 4.2 → 5
console.log(Math.ceil(4.2));
// Output: 5
// floor() hamesha lower integer ki taraf jata hai.
// 4.9 → 4
console.log(Math.floor(4.9));
// Output: 4
// Agar multiple numbers mein sab se choti value find karni ho
// to Math.min() use karte hain.
console.log(Math.min(4, 5, 6, 7));
// Output: 4
// Agar multiple numbers mein sab se bari value find karni ho
// to Math.max() use karte hain.
console.log(Math.max(4, 5, 6, 7));
// Output: 7
// Math.random() hamesha 0 se lekar 1 se choti random value deta hai.
// Example: 0.1876, 0.29586, 0.7312 etc.
// 1 kabhi return nahi karta.
console.log(Math.random());
// Output: Random value, example: 0.29586
// Math.random() ki value ko 10 se multiply karne se
// range 0 se lekar 10 se choti ho jati hai.
// Example: 2.45, 7.31, 9.87 etc.
console.log(Math.random() * 10);
// Output: Random decimal, example: 7.31
// +1 karne se range 1 se lekar 11 se choti ho jati hai.
// Lekin abhi bhi decimal value aa sakti hai.
console.log((Math.random() * 10) + 1);
// Output: Random decimal, example: 8.31
// Math.floor() decimal part ko hata kar lower integer deta hai.
// Is lia Math.floor() k andar random number dena zaroori hai.
// Ye 1 se 10 tak random integer dega.
console.log(Math.floor(Math.random() * 10) + 1);
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9 ya 10
// Kisi specific range mein random integer nikalne k lia
// min aur max values define karte hain.
const min = 10;
const max = 20;
// Ye formula min se max tak random integer generate karta hai.
// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ya 20