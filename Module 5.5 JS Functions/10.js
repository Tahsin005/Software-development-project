// Find Common Elements:
// Write a function that takes two arrays as input and returns a new array containing elements that are common to both arrays.

function mergeTwoArray(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

let inp = prompt("Enter the number of elements in the first array : ");
let n = parseInt(inp);

let input = prompt("Enter the elements of the first array : ");
let arr = input.split(" ").map(Number);

let inp2 = prompt("Enter the number of elements in the second array : ");
let n2 = parseInt(inp);

let input2 = prompt("Enter the elements of the second array : ");
let arr2 = input.split(" ").map(Number);

let ans = mergeTwoArray(arr, arr2);
console.log(ans.join(" "));

