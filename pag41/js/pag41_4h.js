let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));
let n4 = parseInt(prompt("Digite o quarto número:"));
let n5 = parseInt(prompt("Digite o quinto número:"));
let numeros = [n1, n2, n3, n4, n5];
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

alert("Maior valor: " + maior + "\nMenor valor: " + menor);
