let votosA = parseInt(prompt("Digite a quantidade de votos para o candidato A: "));
let votosB = parseInt(prompt("Digite a quantidade de votos para o candidato B: "));
let votosC = parseInt(prompt("Digite a quantidade de votos para o candidato C: "));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let votosBrancos = parseInt(prompt("Digite a quantidade de votos em branco: "));

let totalEleitores = votosA + votosB + votosC + votosNulos + votosBrancos;

let percValidos = ((votosA + votosB + votosC) / totalEleitores) * 100;
let percA = (votosA / totalEleitores) * 100;
let percB = (votosB / totalEleitores) * 100;
let percC = (votosC / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percBrancos = (votosBrancos / totalEleitores) * 100;

alert("Total de eleitores: " + totalEleitores);
alert("Percentual de votos válidos: " + percValidos.toFixed(2) + "%");
alert("Percentual de votos válidos para o candidato A: " + percA.toFixed(2) + "%");
alert("Percentual de votos válidos para o candidato B: " + percB.toFixed(2) + "%");
alert("Percentual de votos válidos para o candidato C: " + percC.toFixed(2) + "%");
alert("Percentual de votos nulos: " + percNulos.toFixed(2) + "%");
alert("Percentual de votos em branco: " + percBrancos.toFixed(2) + "%");
