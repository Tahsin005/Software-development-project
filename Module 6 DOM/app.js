var h1 = document.getElementsByTagName("h1");

// console.log(h1);

// var hola = document.getElementById("hola");
var hola = (document.getElementById("hola").style.color = "red");

document.getElementById("hola").style.removeProperty("color");



// console.log(hola);

var child = document.getElementsByClassName("child");

// console.log(child[0]);
// console.log(child[1]);
// console.log(child);

var img = document.getElementById("img");

// console.log(img.getAttribute("src"));

img.setAttribute("alt", "picture of you dumbass");

// console.log(img.getAttribute("alt"));

img.classList.add("testclass");

// console.log(img);


var hero = document.getElementById("hero");
// console.log(hero.innerText);

var input = document.getElementById("input");

// console.log(input.value);


var parent = document.getElementById("parent").innerHTML;

// console.log(parent);

var testDiv = document.getElementsByClassName("test");

// console.log(testDiv[0].childNodes[1]);
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode);


var newDiv = document.getElementById("newDiv");

function createEL () {
    var p = document.createElement("p");
    p.innerText = "SUIII";

    newDiv.appendChild(p);
}

createEL();
// createEL();
// createEL();
// createEL();
// createEL();
// createEL();
// createEL();



// document.getElementById("submit-btn").addEventListener("click", function (e) {
//     // console.log("SUIIII");
//     var input = document.getElementById("input");

//     console.log(input.value);
// })


// document.getElementById("input").addEventListener("blur", function (e) {
//     // console.log("SUIIII");
//     console.log(e.target.value);
// })


// another way of doing this

function sudanirfua (e) {
    // console.log("SUIIII");
    console.log("Sudanirfua");
}