// Função para verificar se os campos do formulário de login estão preenchidos
function validarLogin() {
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;
   
    if (usuario === '' || senha === '') {
        alert("Por favor, preencha ambos os campos para entrar.");
    } else {
        window.location.href = "entrar.html"; // Redireciona para a página de login bem-sucedida
    }
}
 
// Função para verificar se o campo de e-mail está preenchido no formulário de recuperação de senha
function recuperarSenha() {
    var email = document.getElementById("inputEmail4").value;
    if (email === '') {
        alert("Por favor, digite seu e-mail para recuperar a senha.");
    } else {
        alert("Sua senha foi recuperada com sucesso!");
    }
}
 
// Adiciona eventos de clique aos botões correspondentes
if (document.getElementById("btn-login")) {
    document.getElementById("btn-login").addEventListener("click", validarLogin);
}
 
if (document.getElementById("btn-alterar-senha")) {
    document.getElementById("btn-alterar-senha").addEventListener("click", recuperarSenha);
}


function confereSenhas(){
    let senha       = document.getElementById("senha").value;
    let confSenha   = document.getElementById("confSenha").value;

    
}