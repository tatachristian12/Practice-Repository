const prompt = require('prompt-sync')({ sigint: true });

const datebase = {};

function userInput(desc){
    return prompt(desc);
}

class Register{
    constructor(fname, lname, username, email, password){
        this._fname = fname;
        this._lname = lname;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    setFname(newFname){
       this._fname = newFname;
    }
    getFname(){
        return this._fname = datebase.fname;
    }

    setLname(newLname){
        this._lname = newLname;
     }
     getLname(){
         return this._fname = datebase.lname;
     }

     setUsername(newUsername){
        this._username = newUsername;
     }
     getUsername(){
         return this._username = datebase.username;
     }

     setEmail(newEmail){
        this._email = newEmail;
     }
     getEmail(){
         return this._email = datebase.email;
     }

     setPassword(newPassword){
        this._password = newPassword;
     }
     getPassword(){
         return this._password = datebase.password;
     }

     userRegistration(){
        console.log("User Registration")
        const fnameValue = userInput("Enter fname: ");
        const lnameValue = userInput("Enter lname: ");
        const usernameValue = userInput("Enter username: ");
        const emailValue = userInput("Enter email: ");
        const passwordValue = userInput("Enter password: ");

        if(fnameValue.length > 10){
             console.log("Invalid fname");
             
        }else if(lnameValue.length > 10){
            console.log("Invalid lname");
            
        }else if(!/[0-9]/.test(usernameValue)){
            console.log("Invalid username");
            
        }else if(!/[@]/.test(emailValue)){
            console.log("Invalid email");
            
        }else if(!/[@,#,$,%,&]/.test(passwordValue)){
            console.log("Invalid Password");
            
        }else if(fnameValue && lnameValue && usernameValue && emailValue && passwordValue){
            datebase.fname = fnameValue;
            datebase.lname = lnameValue;
            datebase.username = usernameValue;
            datebase.email = emailValue;
            datebase.password = passwordValue;

            console.log("Registration successful");
            
        }
     }    
     
}

module.exports = Register;