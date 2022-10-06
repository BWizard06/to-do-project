let email = document.getElementById("email");
let password = document.getElementById("password"); 
const login_url = "http://localhost:3000/auth/jwt/sign"
document.addEventListener("DOMContentLoaded", () => {
    function createLogin(login){
        fetch(login_url, {
            method: `POST`, 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(login)})
            .then((response) => 
                response.json())
            .then((data) => {
                localStorage.setItem('token', data.token);
            })
    }
    let form = document.getElementById("loginForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = document.getElementById("email");
        let password = document.getElementById("password"); 
        let login = {
            email: email.value,
            password: password.value
        }
        createLogin(login);

    })
})