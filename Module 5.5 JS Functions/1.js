/* Sum of Array Elements:
Write a function that takes an array of numbers as input and returns the sum of all the elements.
 */

let inp = prompt("Enter the number of elements in the array : ");
let n = parseInt(inp);

let input = prompt("Enter the elements of the array : ");
let arr = input.split(" ").map(Number);

let sum = 0;
for (let i  = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
}

console.log("Sum is : " + sum);