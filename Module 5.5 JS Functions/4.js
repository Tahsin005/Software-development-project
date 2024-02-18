// Reverse String:
// Implement a function that reverses a given string using loops.


let str = prompt("Enter the string : ");

let ans = "";
for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
}

console.log(ans);