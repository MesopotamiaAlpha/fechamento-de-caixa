function validar(){
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  if ( usuario == "teste" && senha == "teste"){
  window.alert ("Login realizado com sucesso!");
  pagina(); // Redirecionando para outra pagina.
  return false;
  }else{
      window.alert("Usuario ou senha invalidos");
  }
}

function pagina(){
  window.location.href = "http://127.0.0.1:3000/menu.html";
}
