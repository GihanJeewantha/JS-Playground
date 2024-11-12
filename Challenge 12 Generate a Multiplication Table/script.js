/*Goal: Write a program that generates a multiplication table for a number entered by the user.

Instructions:
Use prompt() to get a number from the user.
Generate a multiplication table from 1 to 10 for that number.
Display each result in the console. */

let number = Number(prompt("Enter a number for the multiplication table:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
