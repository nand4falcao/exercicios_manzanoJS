let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente (número inteiro):"));
let resultado = 1;

for (let i = 1; i <= expoente; i++){
    resultado = resultado * base;
}

alert(base + " elevado a " + expoente + " é: " + resultado);