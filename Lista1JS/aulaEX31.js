function ValidarCPF(cpf){
    let soma = 0
    if (cpf.length != 11){
        console.log("CPF inválido!")
    }else{
      return cpf
    }if (soma>80){
       console.log("CPF acima de 80!")
   }else{
       return soma
   }
    soma = soma + Number(cpf)
}
let cpf = prompt("Informe o cpf")
console.log(ValidarCPF(cpf))