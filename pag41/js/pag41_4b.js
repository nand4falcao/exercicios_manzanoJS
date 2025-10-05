let valor = parseInt(prompt("Digite um número:"));
let modulo = valor;

if (valor < 0) {
    modulo = valor * -1;
}

alert("O valor positivo é: " + modulo);
