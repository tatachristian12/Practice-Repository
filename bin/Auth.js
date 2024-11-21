const prompt = require('prompt-sync')({ sigint: true });

const database = {};

class Auth {
    constructor(username,password) {
        this._username = username;
        this._password = password;
    }

    setUsername(newUsername){
        this._username = newUsername;
    }
    getUsername(){
        return this._username = database.username;
    }

    setPassword(newPassword){
        this._password = newPassword;
    }
    getPassword(){
        return this._password = database.password;
    }

    userRegistration(){
        console.log("User Registration");
        
        const userUsername = prompt("Enter Username: ");
        const userPassword = prompt("Enter Password: ");


        if(userUsername && userPassword){
            database.username = userUsername;
            database.password = userPassword;
           
            console.log("User registration completed");
        }else{
            console.log("Error registering");
            
        }
    }

    userLogin(){
        console.log("User Login");

        const userLoginUsername = prompt("Enter username: ");
        const userLoginPassword = prompt("Enter password: ");

        if(userLoginUsername == this.getUsername() && userLoginPassword == this.getPassword()){
            return true;
        }else{
            console.log("Invalid Login");
        }
        
    }
  
}

module.exports = Auth;

