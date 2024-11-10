/*Write a program that finds the largest number in an array.

Instructions:
Create an array with a list of numbers.
Use a loop to find the largest number in the array.
Display the largest number in the console. */

let numbers =  [3, 7, 2, 9, 5];
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is " + largest);