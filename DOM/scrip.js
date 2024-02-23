const body = document.body

// const div = document.createElement('div');

// body.appendChild(div);

// // div.innerHTML = '<strong>Hello, world!</strong>'

// const strong = document.createElement('strong');
// strong.innerHTML = 'Hello, world';

// div.append(strong);

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanBye.remove();
// div.append(spanBye);
console.log(spanHi.getAttribute("title"));

console.log(spanHi.setAttribute("title", "sdfsfsf"));

spanHi.id = "sdfsfs";

spanHi.removeAttribute("title");

spanHi.style.color = "red";
spanHi.style.backgroundColor = "green";
