var num1 = 10;
var num2 = 10;

console.log(num1 + num2);

var num3 = "100";
var num4 = 100;

console.log(num3 + num4);
console.log(parseInt(num3) + num4);

num3 = "100.55555";
console.log(parseFloat(num3).toFixed(2));
console.log("Parsing Float : ");
console.log(parseFloat(num3).toFixed(2) + num4);

