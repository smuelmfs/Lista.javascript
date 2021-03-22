function calcularidadeDoCachorro(){
    let IdadedoCachorro = 13
    IdadedoCachorro = IdadedoCachorro*7
   
return IdadedoCachorro +("") + Idades ()
}
function Idades (){
    let IdadedoCachorro = 13
       if(IdadedoCachorro<14){
           return "Criança"
       }else if (IdadedoCachorro>14 && IdadedoCachorro<28){
           return "Adolescente"
       }else{
           return "Adulto"
       }
}

console.log(calcularidadeDoCachorro())