// Filter Even Numbers:
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.


function newArray(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            ans.push(arr[i]);
        }
    }
    return ans;
} 

let inp = prompt("Enter the number of elements in the array : ");
let n = parseInt(inp);

let input = prompt("Enter the elements of the array : ");
let arr = input.split(" ").map(Number);

let result = newArray(arr);
console.log(result.join(" "));