const prompt = require('prompt-sync')({ sigint: true });

function userLogin() {
    let username = prompt("Enter username; ");
    if(username.length != 10){
        return "The username must be 10 letters long"
    }else if(!/[0-9]/.test(username)){
        return "The username must have at least one number"
    }else if(!/[&,@,#]/.test(username)){
        return "The username must have at least one special character"
    }
    let password = prompt("Enter password; ");

        if(password.length != 10){
            return "The password must be 10 characters long"
        } else if(!/[@]/.test(password)){
            return "The password must contain @ symbol"
        }else{
            return "user account created successfully."
        }
    
}

console.log(userLogin());
