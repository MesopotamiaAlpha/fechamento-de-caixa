window.alert("carregado");

function validar(){
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  if ( usuario == "email@email.com" && senha == "teste"){
  window.alert ("Login realizado com sucesso!");
  pagina(); // Redirecionando para outra pagina.
  return false;
  }else{
      window.alert("Usuario ou senha invalidos");
  }
}

function pagina(){
  window.location.href = "menu.html";
}
