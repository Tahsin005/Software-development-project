// Check Palindrome:
// Implement a function that checks whether a given string is a palindrome (reads the same backward as forward).

let str = prompt("Enter a string : ");
let ok = true;
for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
        ok = false; break;
    }
}

if (ok) console.log("Yes");
else console.log("No");