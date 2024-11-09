/*  Write a program that counts from 1 to 20, but with a twist:

For numbers divisible by 3, print "Fizz" instead of the number.
For numbers divisible by 5, print "Buzz" instead of the number.
For numbers divisible by both 3 and 5, print "FizzBuzz".

Instructions:
Use a for loop to count from 1 to 20.
Use if-else statements to check each number:
If the number is divisible by both 3 and 5, print "FizzBuzz".
If it’s divisible by only 3, print "Fizz".
If it’s divisible by only 5, print "Buzz".
Otherwise, print the number itself.*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


