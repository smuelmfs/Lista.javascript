let identificação = prompt("faça o login")
if (identificação=="Admin"){
    let senha = prompt("Digite a senha")
    if(senha=="UNIBH"){
       alert("Bemvindo") 
    }else if(senha== null){
        alert("cancelado")
    }else if(senha!= "Unibh"){
        alert("Senha incorreta")
    }
}else if(identificação == null){
    alert("cancelado")
}
else if (identificação != "Admin"){
    alert("Não conheço você")
}