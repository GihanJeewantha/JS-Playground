/* Goal: Write a program that removes duplicate values from an array and returns a new array with unique values only.

Instructions:
Create an array with some duplicate numbers (e.g., [1, 3, 5, 3, 7, 1, 9, 5]).
Use a loop or JavaScript methods to remove duplicates.
Display the array with unique values in the console.*/

let numbers = [1, 3, 5, 3, 7, 1, 9, 5];
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Array with unique values:", uniqueNumbers);
