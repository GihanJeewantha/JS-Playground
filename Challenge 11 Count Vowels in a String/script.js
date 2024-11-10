/*Goal: Write a program that counts the number of vowels (a, e, i, o, u) in a string.

Instructions:
Use prompt() to get a string from the user.
Loop through the string and count the vowels.
Display the count of vowels in the console. */

let str = prompt("Enter a string:");
let vowelsCount = 0;
let vowels = "aeiouAEIOU"; // Include both uppercase and lowercase vowels

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelsCount++;
    }
}

console.log("The number of vowels is: " + vowelsCount);
