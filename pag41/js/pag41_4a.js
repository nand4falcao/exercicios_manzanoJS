let num1 = parseInt(prompt("Digite o primeiro valor:"));
let num2 = parseInt(prompt("Digite o segundo valor:"));
let maior = num1;
let menor = num2;

if (num2 > num1) {
    maior = num2;
    menor = num1;
}

let diferenca = maior - menor;
alert("A diferença do maior pelo menor é: " + diferenca);
