document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
 
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
   
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
   
    alert('Login bem-sucedido!');
});
 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    var email = document.getElementById('email').value.trim();
   
    if (email === '') {
        alert('Por favor, informe seu e-mail.');
        return;
    }
   
    alert('Um e-mail de recuperação de senha foi enviado para ' + email);
});