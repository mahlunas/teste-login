function validacaoCredencial(email, senha){
    var usuario = JSON.parse(localStorage.getItem("usuario"));

    return usuario && email === usuario.email && senha === usuario.senha;
}

document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(validacaoCredencial(email, senha)){
        window.location.href = 'index.html';
    } else {
        alert('Usuario ou senha incorretos');
    }
});