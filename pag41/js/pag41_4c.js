let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));
let media = (n1 + n2 + n3 + n4) / 4;
let resultado = (media >= 5) ? "Aluno aprovado" : "Aluno reprovado";

alert(resultado + "\nMédia: " + media);
