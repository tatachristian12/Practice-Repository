const prompt = require('prompt-sync')({ sigint: true });
const Register = require("./register");

function userInput(desc){
    return prompt(desc);
}


class Login extends Register{
    

    userLogin(){
       const loginUsername = userInput("Enter username: ");
       const loginPassword = userInput("Enter password: ");

       if (loginUsername == this.getUsername() && loginPassword == this.getPassword()) {
            console.log(`hello ${this.getFname()} ${this.getLname()},`);
            console.log("Login successful");
            console.log(`Your email is ${this.getEmail()}`);
               
       }else{
        console.log("Not Login");
        
       }
    }

}
const user1 = new Login();
user1.userRegistration();
user1.userLogin();