let expoente = 0; //começa do 0
let resultadoFinal = ""; //guarda o resultado

while (expoente <= 15){//enquanto o expoente for menor ou igual a 15
    let resultado = 1; //inicia o resultado em 1
    let contador = 1; //inicia o contador em 1

    while (contador <= expoente){ //enquanto o contador for menor ou igual ao expoente ele faz a multiplicação varias vezes
        resultado = resultado * 3;
        contador++; //incrementa o contador
        }
    resultadoFinal += "3 elevado a " + expoente + " = " + resultado + "\n"; //concatena o resultado na string
    expoente++; //incrementa o expoente
}