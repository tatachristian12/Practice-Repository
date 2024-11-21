const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Enter name: ");
const todayDate = new Date();
const dateOfBirth = new Date();
dateOfBirth.setFullYear(prompt("Enter year of birth: "));
dateOfBirth.setMonth(prompt("Enter month of birth: "));
dateOfBirth.setDate(prompt("Enter date of birth: "));

console.log(dateOfBirth);
console.log("My name is "+ name);



if ((dateOfBirth.getFullYear() + 20) < todayDate.getFullYear()) {
    console.log("I was 20 years in " + (dateOfBirth.getFullYear() + 20));
}else{
    console.log("I will be 20 years in "+ (dateOfBirth.getFullYear() + 20));
    
}