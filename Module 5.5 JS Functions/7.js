// FizzBuzz:
// Implement the classic FizzBuzz problem. Loop through numbers from 1 to 100. If a number is divisible by 3, print "Fizz"; if it's divisible by 5, print "Buzz"; if it's divisible by both 3 and 5, print "FizzBuzz"; otherwise, print the number.


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Buzz");
    } else if (i % 5 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}