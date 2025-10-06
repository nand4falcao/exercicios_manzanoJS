let somaFatorial = 0;
let contador = 1;

while (contador <= 15) {
    let numero = parseInt(prompt("Digite o " + contador + "º número:"));
    let fatorial = 1;
    let i = 1;

    while (i <= numero) {
        fatorial *= i;
        i++;
    }

    somaFatorial += fatorial;
    contador++;
}

alert("Somatório dos fatoriais: " + somaFatorial);
