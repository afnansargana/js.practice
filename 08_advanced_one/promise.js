//Promise: y ak object h khud m..
//jb promises ni hta th javascript m tb hm use krta th phla kuch libraries jsa k q or bluebird but ab in k zrorot ni h kio k node js n hmy is k direct support s sia h 
// fetch('https://somthing.com').then().catch().finally()  //.>Promises
const promiseOne = new Promise(function(resolve, reject) {
    //Do any async task
    //Db calls,cryptography
    setTimeout(function(){
        console.log('Async task is completed');
    }, 1000)
    resolve()
});
//for comsumption of promise .then() is k sidha relation h resolve k sath or kisi chz k sath ni h is k relation...
promiseOne.then(function(){   //consume krna k lia
  console.log("promise consumed")  
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Task two is completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Task complete"); 
})

//resolve s data pass krna ho to then
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"afnan", email: "afnan@example"})//is k andr ziada tr data pas object h ho g{}

    },1000)
})
promiseThree.then(function(user){
    console.log(user);    
})
//more advance
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    // let error = true; //Output = Error: Something went wrong
    let error = false;   //Output = Afnan 
    if (!error) {
        resolve({username: 'Afnan', email: 'amin2example'})
    }else{
        reject('Error: Something went wrong')
    }
    
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch((error)=> {
console.log(error);
}).finally(() => { // y hm btata h k final ho gia h kam is k lia chai error false ho y true
    console.log("The promise is either");
})

//Second way
//Async await method k through...
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "M Afnan", password:'1234'});
            
        }else{
            reject('error:js went wrong')
        }
    })
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()

//..
// async function getUsers(){
//   try {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getUsers()

fetch ('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);  
})

