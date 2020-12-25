
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";

})

function validate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( username == "email@email.com" && password == "teste"){
    window.alert ("Login realizado com sucesso!");
    pagina(); // Redirecionando para outra pagina.
    return false;
    }else{
        window.alert("Usuario ou senha invalidos");
    }
}

function pagina(){
    window.location.href = "http://127.0.0.1:5500/calculo.html";
}