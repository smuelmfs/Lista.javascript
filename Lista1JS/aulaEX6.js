/* Peça ao usuário para digitar vários nomes. Exiba na tela todos os
nomes digitados, porém de maneira invertida (do último para o
primeiro). */

function exibirNomes(){
    var nomes = document.getElementById("txtNomes").value;
    nomes = nomes.split(",");
    
   for(i=nomes.length-1;i>=0;i--){
    document.write(nomes[i]+"<br>");
}
}