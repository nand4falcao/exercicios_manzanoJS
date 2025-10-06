let maior = null;
let menor = null;

while (true) {
    let numero = parseInt(prompt("Digite um número positivo (negativo para parar):"));
    if (numero < 0) break;

    if (maior === null || numero > maior) maior = numero;
    if (menor === null || numero < menor) menor = numero;
}

if (maior !== null && menor !== null) {
    alert("Maior número: " + maior + "\nMenor número: " + menor);
} else {
    alert("Nenhum número positivo foi informado.");
}
