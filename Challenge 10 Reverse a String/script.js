/*Goal: Write a program that reverses a string input by the user.

Instructions:
Use prompt() to get a string from the user.
Reverse the string.
Display the reversed string in the console. */

let str = prompt("Enter String:");
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log("The reversed string is: " + reversedStr);