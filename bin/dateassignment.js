const prompt = require('prompt-sync')({ sigint: true });

function userInput(desc) {
    return prompt(desc)
}

function getGuessDateOfBirth(dateOfBirth) {
    let setDateOfBirth = new Date(dateOfBirth)
    setDateOfBirth.setFullYear(setDateOfBirth.getFullYear());

    let currentAge = 20;
    console.log("You will be " + currentAge + " Years old on " + (setDateOfBirth.getFullYear() + currentAge))
}
let getDateOfBirth = userInput("Enter date of birth YYYY-MM-DD....")
getGuessDateOfBirth(getDateOfBirth);
