/*
 * Função para que hover do campo user e senha não retornem ao tamanho original se estiverem preenchidos 
 */
let inputs = document.getElementsByClassName("input-form");
for(let input of inputs) {
    input.addEventListener("blur", function(){
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        } 
        else {
            input.classList.remove("has-val");
        }
    });
}


function logar() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "teste" && password == "123") {
        alert("Sucesso!");
    }
    else {
        alert("Usuário ou senha incorretos");
    }

}