/*Faça um programa que entre com cinco números e imprima o
quadrado de cada número (Looping). */

function calcularQuadrado(){
    var numeros = document.getElementById("txtNumeros").value;
    numeros = numeros.split(",");
    for(i=0;i<numeros.length;i++){
        quadrado = parseInt(numeros[i])*parseInt(numeros[i]);
        document.write("O quadrado de "+numeros[i]+ " é "+quadrado+"<br>");
    }
    
    }
