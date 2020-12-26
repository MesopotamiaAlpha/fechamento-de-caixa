//Criando a coleção para usuarios
const docRef = firestore.doc("usuarios/cadastro");

// Procurar o formulario na tela
const signupForm = document.querySelector('#formulario-cadastro');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

// Pegar os campos com as informações
const email = signupForm['signup-email'].value;
const password = signupForm['signup-password'].value;

// Registrando o usuario por email e senha
auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    signupForm.reset();
    });
});


