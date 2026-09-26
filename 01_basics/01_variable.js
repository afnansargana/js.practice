const accountId=12344
var accountEmail= "amin56@gmail.com"
let accountoPassword= "1234"
accountCity= "Abdul-Hakim"
let accountState;

/* prefer not to use var
because of issuse in block scope or functional scope
*/

accountEmail= "ar23@gmail.com"
accountCity= "Khanewal"
console.log(accountCity);
console.table([accountEmail, accountId, accountEmail, accountCity, accountState])