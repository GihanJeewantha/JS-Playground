// Write a program that prompts the user to enter a number and then tells them if the number is even or odd.

/*Instructions:
Use prompt() to get a number from the user.
Convert the input to a number.
Use an if-else statement to check if the number is even or odd.
A number is even if it divides by 2 with no remainder (number % 2 === 0).
Display the result in the console. */

let number = prompt("Enter Number: ");
number = Number(number);

if(number % 2 === 0){
    console.log(`Number ${number} is Even Number`);
}else{
    console.log(`Number ${number} is Odd Number`)
}