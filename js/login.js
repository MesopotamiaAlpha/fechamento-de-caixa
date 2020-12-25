
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
    alert ("Login realizado com sucesso!");
    window.location = "calculo.html"; // Redirecting to other page.
    return false;
    }
}
