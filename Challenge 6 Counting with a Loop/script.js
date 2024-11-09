// Write a program that counts from 1 to a number entered by the user, displaying each number in the console.

/* Instructions:
Use prompt() to get a number from the user.
Convert the input to a number.
Use a for loop to count from 1 up to the user’s number.
Display each number in the console as it counts.*/

let number = prompt("Enter Number: ");

number = Number(number);

for(let i=1; i <= number; i++){
    console.log(i);
}