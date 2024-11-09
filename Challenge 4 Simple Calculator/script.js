// Write a program that prompts the user to enter two numbers, then adds them together and displays the result.

/*Instructions:
Use prompt() twice to get two numbers from the user.
Convert these inputs from strings to numbers (since prompt() returns text).
Add the two numbers together.
Display the result in the console. */

let number1 = prompt("Enter Number 1: ");
let number2 = prompt("Enter Number 2: ");

// Convert the inputs to numbers and calculate the sum
let sum = Number(num1) + Number(num2);

console.log(`sum of the Numbers, ${sum}`);
