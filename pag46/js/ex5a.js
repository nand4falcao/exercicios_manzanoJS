let numero = parseInt(prompt("Digite o número para ver a tabuada:"));
let resultado = "";
let i = 1;

while (i <= 10) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    i++;
}

alert("Tabuada de " + numero + ":\n" + resultado);

