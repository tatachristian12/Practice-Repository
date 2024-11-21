const prompt = require('prompt-sync')({ sigint: true });

class Age{
    constructor(username,dateOfBirth){
        this._username = username
        this._dateOfBirth = dateOfBirth
    }

    setUsername(newUsername){
        return (this._username = newUsername);
    }

    getUsername(){
        return this._username;
    }

    setdateOfBirth(newDateOfBirth){
        return (this._dateOfBirth = new Date(newDateOfBirth));
    }

    getdateOfBirth(){
        return this._dateOfBirth;
    }

    ageConfirmation(){

        const currentDate = new Date();

        const myYearOfBirth = Number(this.getdateOfBirth().getFullYear());

        const myMonthOfBirth = Number(this.getdateOfBirth().getMonth());

        const myDateOfBirth = Number(this.getdateOfBirth().getDate());

        const futureYear = currentDate.getFullYear() + 20;

        const myFutureAge = currentDate.getFullYear() - myYearOfBirth + 20;

        console.log("Hello "+ this.getUsername() + " I will be " + myFutureAge + " on the" + new Date(futureYear,myMonthOfBirth,myDateOfBirth));
        
}
}
const user1 = new Age();
user1.setUsername("tata");
user1.setdateOfBirth("2001-12-24");
user1.ageConfirmation();