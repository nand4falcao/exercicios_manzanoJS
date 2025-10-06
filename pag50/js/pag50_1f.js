let soma = 0;
let total = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número (negativo para parar):"));
    if (numero < 0) break; // para o laço
    soma += numero;
    total++;
}

let media = total > 0 ? soma / total : 0;
alert("Somatório: " + soma + "\nMédia: " + media + "\nTotal de números lidos: " + total);
