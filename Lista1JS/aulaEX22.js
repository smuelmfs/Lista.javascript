function somarValores(valor_string){
    let soma = 0
    let valor = valor_string.split(',')
    for (let i = 0; i<valor.length;i++){
        soma = soma +Number(valor[i])
             if(valor == null){
            
        }
    }
    return soma  
}
let valor = prompt("Informe todos os valores")
console.log(somarValores(valor))