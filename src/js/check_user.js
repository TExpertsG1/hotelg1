const loginElement = document.querySelector("#login");
const logOutElement = document.querySelector("#logout");

console.log(loginElement);

logOutElement.setAttribute("href", "http://127.0.0.1:8080/pages/login.html");

function checaUsuario() {
    const usuario = localStorage.getItem("nome");
    //const usuario = "Alexandre";
    if(usuario) {
        loginElement.textContent = "Olá " + usuario;
        loginElement.setAttribute("href", "http://127.0.0.1:8080/index.html");

        /* exibir o botão sair */
        logOutElement.removeAttribute("style");

    } else {
        /* ocultar o botão sair */
        logOutElement.setAttribute("style", "display:none;");
        loginElement.textContent = "Login";
        loginElement.setAttribute("href", "http://127.0.0.1:8080/pages/login.html");
    }
    console.log(loginElement);
}

logOutElement.addEventListener("click", () => {
    localStorage.clear();
    checaUsuario();
})
      
checaUsuario();