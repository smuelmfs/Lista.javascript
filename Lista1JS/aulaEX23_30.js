let meuPinguim = {
    nome: "Macaroni",
    origem: "Subantártica" ,
    autor: "Pais do Pinguim" ,
    emitirSom(){
       console.log("CHIRP CHIRP")
    },
    fly (){
        if(meuPinguim.podeVoar!= false){
            console.log("Eu posso voar")
        }else{
            console.log("Eu não posso voar")
        }
            }
    }
console.log('Olá, sou um pinguim meu nome é '+meuPinguim.nome)
console.log(meuPinguim.emitirSom(''))
meuPinguim.podeVoar = false
console.log(meuPinguim.fly(''))
let i
for (i in meuPinguim) {
    console.log(meuPinguim[i])
}