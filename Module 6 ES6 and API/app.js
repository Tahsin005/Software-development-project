// // const name = `hkfhsfhs
// // hfksfshkjfshff
// // hfkshfkshfksfshkfjhskfhskfh
// // shfksfksfh`;

// // console.log(name);

// // const num = [1,2,3,4,5,6];

// // // console.log(...num);

// // const name = ["rahim", "tahsin", "messi", ...num]

// // console.log(...name);


// // console.log(Math.max(...num));

// // // arrow function
// // const test = () => "SUIII";

// // console.log(test());

// // const test2 = (a, b) => {
// //     var sum = a + b;
// //     return sum;
// // }

// // console.log(test2(2, 3));

// // console.log(`Sum ${test2(3, 4)}`);


// /* array destructuring */

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// var [a, b, c, d, e, f, g] = numbers;
// console.log(a, b, c, d, e, f, g);



// /* Object destructuring */

// const obj = {
//     name : "Tahsin",
//     age : 22,
//     IsValid : "True"
// };

// const {age, IsValid} = obj;

// console.log(IsValid, age);


// const array = [{
//     name : "Tahsin",
//     age : 22,
//     friend : ["abrar", "tawsif", "lilin"]
// }, {}, {}];


// console.log(array[0].friend[0]);



// /** map function */

// const nums = [1, 2, 3, 4];

// const sq = nums.map(x => x * x);

// console.log(...nums);
// console.log(...sq);



// /** filter function */
// const products = [
//     {name : "apple", price : 200, color : "black"},
//     {name : "samsung", price : 200, color : "yello"},
//     {name : "apple", price : 200, color : "golden"},
//     {name : "vivo", price : 200, color : "black"},
//     {name : "xioami", price : 200, color : "pink"},
//     {name : "apple", price : 200, color : "black"},
//     {name : "pixel", price : 200, color : "black"},
//     {name : "apple", price : 200, color : "white"},
//     {name : "pixel", price : 200, color : "black"},
//     {name : "oneplus", price : 200, color : "black"}
// ]


// const product = products.filter((pd) => pd.color == "black");
// console.log(...product);


// /** find function */
// const result = product.find((pd) => pd.name == "vivo");
// console.log(result);


// /** for each */

// const productContainer = document.getElementById("product-container");
// const res2 = products.forEach((pd) => {
//     const h1 = document.createElement("h1");
//     h1.innerText = pd.name;
//     productContainer.appendChild(h1);
// });





/** API */

fetch("https://fakestoreapi.com/products/1").then((res) => res.json()).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err);
});


/** asyncronus behaviour */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
// console.log(5);
name(5)
console.log(6);
console.log(7);
console.log(8);
console.log(9);

function name (x) {
    setTimeout(() => console.log(x));
    fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

}





