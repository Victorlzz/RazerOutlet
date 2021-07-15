var email = document.getElementById("email");

var botao = document.getElementById("botao");
botao.addEventListener("click", function(){
    
    if(email.value.includes("@")) {
        localStorage.setItem("email", email.value);
        console.log(email.value);
        alert("Email adicionado com sucesso");
}   else {
        alert("Por favor preencha corretamente o email");
}

})
