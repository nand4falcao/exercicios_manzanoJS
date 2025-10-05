let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));
let n4 = parseInt(prompt("Digite o quarto número:"));
let divisiveis = [];

if (n1 % 2 === 0 && n1 % 3 === 0) divisiveis.push(n1);
if (n2 % 2 === 0 && n2 % 3 === 0) divisiveis.push(n2);
if (n3 % 2 === 0 && n3 % 3 === 0) divisiveis.push(n3);
if (n4 % 2 === 0 && n4 % 3 === 0) divisiveis.push(n4);

alert("Números divisíveis por 2 e 3: " + divisiveis.join(", "));
