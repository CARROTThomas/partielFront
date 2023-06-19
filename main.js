const baseURL = "https://localhost:8000/api/";
//const baseURL = "partiel/thomascarrot.com/api/";

const container = document.querySelector('.mainContainer')

const btnLogin = document.querySelector('#login')
const btnCitations = document.querySelector('#citations')


let token = ""
let username = "";
let password = "";


// ###################################################################################################################################


// connexion
async function login(username, password) {

    let url = `${baseURL}login_check`;

    let body = {
        "username": username,
        "password" : password
    }

    let headers = {
        'Content-type': 'application/json',
    }

    await fetch(url, {method : "POST", headers, body:JSON.stringify(body)})
        .then(response=>response.json())
        .then(data=> {
            token = data.token
        });
}


// afficher 3 citations de l'utilisateur
async function citations() {
    let url = `${baseURL}citations`

    let headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    await fetch(url, headers)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
}






// ###################################################################################################################################