/*Goal: Write a program that checks if a string entered by the user is a palindrome (reads the same forwards and backwards).

Instructions:
Use prompt() to get a string from the user.
Check if the string reads the same forwards and backwards.
Display whether it is a palindrome or not in the console. */

let str = prompt("Enter a string to check if it is a palindrome:");

let reversedStr = str.split('').reverse().join(''); // Reverse the string

if (str === reversedStr) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}