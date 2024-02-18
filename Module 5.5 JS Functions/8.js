// Factorial Calculation:
// Write a function to calculate the factorial of a given number using loops.

function fact(n) {
    ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

let n = parseInt(prompt("Enter a number : "));

console.log(fact(n));