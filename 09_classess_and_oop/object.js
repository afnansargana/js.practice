//function m bh property access kr sgta hn ...
function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5)); //Output = 25
console.log(multipleBy5.power);//Output = 2
console.log(multipleBy5.prototype);//output = {}

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    score ++
}
createUser.prototype.printMe= function(){
    console.log(`score is  ${this.score}`);
}
const chai = new createUser('chai', 25)
const tea = createUser('tea', 250)
chai.printMe()

