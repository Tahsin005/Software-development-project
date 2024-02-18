function maxInArray(arr) {
    let mx = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // mx = max(mx, arr[i]);
        if (arr[i] > mx) {
            mx = arr[i];
        }
    }
    return mx;
}


// Find Maximum Value:
// Create a function that finds and returns the maximum value in an array of numbers.


let inp = prompt("Enter the number of elements in the array : ");
let n = parseInt(inp);

let input = prompt("Enter the elements of the array : ");
let arr = input.split(" ").map(Number);



console.log("Maximum is : " + maxInArray(arr));