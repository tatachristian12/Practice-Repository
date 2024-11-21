const prompt = require('prompt-sync')({ sigint: true });

// lucky number functionality
function luckyNumber(number) {
    if(number == "5"){
        return true;
    }
}

// This functioon collect data from the user.
function userInput(desc) {
    let userInput = String(prompt(desc))
    return userInput;
}

// store the number of counts
let inputCount = 0;
// while loop to count number of trials 
while(inputCount < 3){
     number = userInput("Enter Lucky Number: ")
    if(luckyNumber(number) != true){
        console.log("Try again");
        inputCount ++;
    }else if (luckyNumber(number) == true) {
        console.log("Congratulations");
        break;
    }
}