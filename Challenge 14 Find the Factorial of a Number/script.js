/*Goal: Write a program that calculates the factorial of a number entered by the user.

Instructions:
Use prompt() to get a number from the user.
Calculate the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
Display the result in the console. */

let number = Number(prompt("Enter Number: "));
let factorial = 1;

for(let i=number; i >= 0; i-- ) {
    factorial *= i;
}

console.log("The factorial of " + number + " is " + factorial);
