// Remove Duplicates:
// Write a function that takes an array as input and returns a new array with duplicate elements removed.


function noDuplicate(arr) {
    
    let uniqueArray = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i]) == false) {
            uniqueArray.push(arr[i]);
            seen.add(arr[i]);
        }
    }

    return uniqueArray;
} 

let inp = prompt("Enter the number of elements in the array : ");
let n = parseInt(inp);

let input = prompt("Enter the elements of the array : ");
let arr = input.split(" ").map(Number);

let ans = noDuplicate(arr);
console.log(ans.join(" "));