// Immediately Ivoked function expressions (IIFE)
// Jo function immediately execute ho jaye isay IIFE kehta hain ((Global scope k))
// IIFE m na function wsa h likh kr bhir s () y brackets lga dni pora k is trha y IIFE BN JAE GA..
// OR AGR IS K AGA KOI OR FUNCTION BH KRNA HO TO PHR PHLA K BAD ";" Y LGANA PRA GA WRNA ERRORR A JAE G...
// NAMED IIFE..

(function chai(){ // NAMED IIFE..
    console.log(`DB CONNECTED`);
})(); // Output = DB CONNECTED "Ab agr kuch execute karna ho to hm y () in m hi likh kr krae g bas yha hm n alg line m isa ni likha frq y h"


// Agr arrow FUNCTION m bnana ho to
(() => {
    console.log(`DB CONNECTED TWO`);
})(); // Output = DB CONNECTED TWO


// Agr m n koi nam execute krna ho to....((((UNNAMED IIFE [SIMPLE IIFE]))))
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Afnan");