/* Peça ao usuário para digitar várias idades separadas por vírgula
em um input e exiba quantas pessoas são maior de idade (18
anos) e quantas são menores. */

function verificarIdades(){
    var idades = document.getElementById("txtIdades").value;
    idades = idades.split(",");
    var maior = 0;
    var menor = 0;
    for(i=0;i<idades.length;i++){
        if(parseInt(idades[i]) >=18){
            maior++;
        }else{
            menor++;
        }
    }
    document.write("Maiores: "+maior+" - Menores: "+menor);
}