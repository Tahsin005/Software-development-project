// function loadApiData () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayData(data))
// }

// function displayData(data) {
//     const div = document.getElementById('divTag');

//     data.map(user => {
//         const p = document.createElement('p');
//         p.innerText = user.email;
//         div.appendChild(p);
//     })
// }


// function loadApiData () {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(data => displayData(data))
// }

// function displayData(data) {
//     const parentDiv = document.getElementById('container');
//     // data.map(post => {
//     //     const p = document.createElement('p');
//     //     p.innerText = post.id;
//     //     div.appendChild(p);
//     // })
//     for (const photo of data) {
//         const div = document.createElement('div');
//         div.style.backgroundColor = 'tomato';
//         div.style.padding = '20px';
//         div.style.margin = '20px';
//         div.style.borderRadius = '5px';
//         div.style.textAlign = 'center';
//         div.innerHTML = `
//             <h2>Title: ${photo.title}</h2>
//             <img src="${photo.thumbnailUrl}"/>
//         `;
//         parentDiv.appendChild(div);
//     }
// } 




// async await with fetch api
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success..', console.log("Resolve Log"));
//         }, 2000);
//     });
// }

// async function anotherfunc() {
//     const data = await getData();
//     console.log(data);
    

//     console.log(1);
//     console.log(2);
//     console.log(3);
// }

// anotherfunc();

async function getData() {
    let url = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await url.json()
    console.log(data);
}
async function anotherfunc() {
    const data = await getData();
    console.log(data);
    

    console.log(1);
    console.log(2);
    console.log(3);
}

anotherfunc();