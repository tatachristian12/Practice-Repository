const prompt = require('prompt-sync')({ sigint: true });

class Customer{
    constructor(username){
        this.username = username
    }

    getUsername(){
        console.log(this.username);
         
    }

    setUsername(newUsername){
        this.username = newUsername = prompt("Enter username ")

    }
}
let user1 = new Customer()
user1.setUsername();
user1.getUsername();