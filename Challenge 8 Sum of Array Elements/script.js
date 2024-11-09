/* Write a program that calculates the sum of all numbers in an array.

Instructions:
Create an array with at least five numbers (e.g., [3, 7, 2, 9, 5]).
Use a loop to go through each element in the array and calculate the sum of the numbers.
Display the result in the console. */

let number = [3, 7, 2, 9, 5];
let sum = 0; 

for (let i = 0; i < number.length; i++) { 
    sum += number[i];
}

console.log("The sum is " + sum);
