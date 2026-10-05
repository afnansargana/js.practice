const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["Superman", "flash", "Batman"]



//y comments hta k in k output dkh sgta ho nicha wla teeno k
//marvel_heroes.push(dc_heroes) // Y existing array ko h push krta h..
//console.log(marvel_heroes); //output= ["thor", "Ironman", "spiderman", ["Superman", "flash", "Batman"] ] .>> is k mtlab kia h k jo hm n push kia h wo is k h hisa bn gia h wo bh ak h array h third element...
//console.log(marvel_heroes[3][1]); //output=flash .>>is k mtlab h k jo hisa bna h is m s 1 index ko pick kro

 

//agr dono arrays ko merge krna ho to is k two methods hn..(1)concat  (2)spread
const allHeroes = marvel_heroes.concat(dc_heroes) //y thra s milta h push s mgr(y new array ko h return krta h) dono arrays ko h merge krta h
console.log(allHeroes); //output=["thor", "Ironman", "spiderman", "Superman", "flash", "Batman"]

//spread:is k output bh same h ay g concat k trha same to same.... (y zida tr use k jti h kio k is m hm isi trha ziada sra merge kr sgta hn (...) y dot lga k aga)
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); //output=["thor", "Ironman", "spiderman", "Superman", "flash", "Batman"]

//rearly use this thing(reare case situation)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //output=[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] is s bh spread out ho g sra k sra array..

//agr array ko convrt krna ho to sting m then y method use krta hn hm log 
console.log(Array.isArray("Hitesh")); //output=false (idhr hm n swal pocha h kl kia y array h to is n  btaya h  k ni y array ni h)
console.log(Array.from("Hitesh")); //output=['H', 'i', 't', 'e', 's', 'h'] ..> is n sting ko array m cnvrt kr dia h..
console.log(Array.from({name: "hitesh"})); //output=[] ..> y dkho y is trha ni d g direct isa btana pra g...


//agr multiple variables ko arrays m cnvrt krna ho to..
let score1 = 100
let score2 = 200
let score3 = 300
//Array.of(returns a new array from a set of elements)
console.log(Array.of(score1, score2, score3)); //output=[100, 200, 300]
