//Dates(DaTE K agr ap type check kro g to ap kompta chla g k y ak object h)formula=console.log(typeof myDate);
/////IMP:JavaScript m month hmesha 0 s start hta h for example k 0 h to january or 11 h to december count kia jae ga....
// ==================== JavaScript Dates ====================

// Date JavaScript ka built-in object hai.
// new Date() current date aur time deta hai.
const myDate = new Date();
console.log(myDate);
// Output: Current date aur time

// toString() complete date aur time ko String mein convert karta hai.Agr ap kpo sirf date chia ho y sirf tim to y is function s l sgta hn kio k wsa to date or time dono atya hn...
console.log(myDate.toString());
// Output example:
// Wed Sep 30 2026 21:10:00 GMT+0500 (Pakistan Standard Time)

// toDateString() sirf readable date deta hai.
console.log(myDate.toDateString());
// Output example:
// Wed Sep 30 2026

// toTimeString() sirf time deta hai.
console.log(myDate.toTimeString());
// Output example:
// 21:10:00 GMT+0500 (Pakistan Standard Time)

// getDate() month ki date/day number deta hai.
console.log(myDate.getDate());
// Output example:
// 30

// getMonth() month ka number deta hai.
// IMPORTANT: JavaScript mein month 0 se start hota hai.
// January = 0
// February = 1
// September = 8
console.log(myDate.getMonth());
// Output example:
// 8

// Actual month number 1 se 12 tak chahiye
// to +1 kar dete hain.
console.log(myDate.getMonth() + 1);
// Output example:
// 9

// getFullYear() complete year deta hai.
console.log(myDate.getFullYear());
// Output:
// 2026

// getDay() week ka day number deta hai.
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6
console.log(myDate.getDay());
// Output example:
// 3

// ==================== Specific Date ====================

// Hum khud bhi ek specific date create kar sakte hain.

// Syntax:
// new Date(year, month, date)

const birthDate = new Date(2005, 5, 19);

console.log(birthDate);
// Output example:
// Sun Jun 19 2005 ...

console.log(birthDate.toDateString());
// Output:
// Sun Jun 19 2005


//other different ways are given as:IN K comments htao g to ap output dekh sgta ho...

const birthNewDate = new Date(2005, 5, 19, 5, 3);

console.log(birthNewDate.toLocaleString());

const myCreatedDate = new Date("2023-01-14");

console.log(myCreatedDate);

//For time stamp...use jb hm polls bnata hn or bh kai jgha use hta h 

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

//console.log(Date.now()/1000); but is m y mili seconds m ay g to hm Math.floor use kr sgta hn isa seconds m convrt krna k lia ...

console.log(Math.floor(Date.now() / 1000));

//is s output y Y G K MILISECOND VALUE AY G 1 JANUARY 1970 S JHA S DATE JAVASCRRIPT M START HOE 

// `${newDate.getDay()} and the time..`

// ==================== toLocaleString() ====================

// Current date aur time create kar rahe hain.
// Yahan pehle se newDate ka naam use ho raha tha,
// is liye dobara const newDate declare nahi karenge.
const newDateForLocale = new Date();
console.log(newDateForLocale);
// Output example:
// Wed Sep 30 2026 22:20:00 GMT+0500 (Pakistan Standard Time)

// ---------------------------------------------------------
// 1. Normal toLocaleString()
// ---------------------------------------------------------

console.log(newDateForLocale.toLocaleString());
// Output example:
// 9/30/2026, 10:20:00 PM


// Yahan 'default' ka matlab hai
// system/browser ki default locale use karo.

console.log(newDateForLocale.toLocaleString("default"));
// Output example:
// 9/30/2026, 10:20:00 PM


// ---------------------------------------------------------
// toLocaleString() mein hum options de kar
// decide kar sakte hain ke Date mein se kya kya show karna hai.

console.log(
    newDateForLocale.toLocaleString("default", {
        weekday: "long",     //Wednesday(is k elwa yha hm narrow or short bh likh sgta hn long k jgha...)
        year: "numeric",    // 2026
        month: "long",      // September
        day: "numeric",     // 30
        hour: "numeric",    // 10 PM
        minute: "numeric",  // 20
        second: "numeric"   // 15
    })
);

// Output example:
// Wednesday, September 30, 2026 at 10:20:15 PM

