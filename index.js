//fetches user names and renders to the DOM
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {return response.json()})
    .then((data)=> {
        const html = data.map((user)=> {
            return `<tr><th id="${user.id}">${user.name}</th></tr>`
        }).join("")
        document.querySelector('#users').insertAdjacentHTML("afterbegin", html);  
    })
    .catch((error)=> {
        console.log(error)
    })
}

//displays posts associated with id when name clicked
function display(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response)=> {return response.json()})
        .then((data)=> {
            const html = data.map((post)=> {
                return `<p class="post-body">${post.body}</p>`
            }).join("")
            document.querySelector('#post').insertAdjacentHTML("afterbegin", html);  
        })
        .catch((error)=> {
            console.log(error)
        })
}

const nameLink = document.getElementById("users")
//handles clicking on user name
nameLink.addEventListener("click", (event) => {
    event.preventDefault();
    const userId = event.target.id;
    display(userId)
})

fetchData();