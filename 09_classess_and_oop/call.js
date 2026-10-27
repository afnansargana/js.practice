function setUsername(username){
    //complex DB calls 
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(username)//y .call s hm call kr sga ga yni k output ay g kio k is bghr y ni ay ga cuz y dosra function s l rhi is m..
    this.email = email
    this.password = password
}

const myData = new createUser ('Afnan', 'afnan@gmail.com', 234)
console.log(myData);
