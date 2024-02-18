// Check Prime Numbers:
// Create a function that determines if a given number is prime. The function should return true for prime numbers and false for non-prime numbers.

function isPrime(n) {
    if (n == 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

let n = parseInt(prompt("Enter a number : "));

if (isPrime(n)) {
    console.log("Yes");
} else {
    console.log("No");
}