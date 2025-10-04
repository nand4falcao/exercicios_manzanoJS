let prestacao = parseFloat(prompt("Digite o valor da prestação:"));
let juros = parseFloat(prompt("Digite a taxa de juros ao mês (%): "));
let meses = parseFloat(prompt("Digite o tempo de atraso (em meses): "));
let prestacaoFinal = prestacao + (prestacao * juros/100) * meses;

alert  ("O valor da prestação em atraso é: R$" +prestacaoFinal.toFixed(2));