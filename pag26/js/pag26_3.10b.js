let sm = parseFloat(prompt("Digite o salário mensal (SM): "));
let pr = parseFloat(prompt("Digite o percentual de reajuste (PR): "));
let novoSalario = sm + (sm * pr / 100);

alert("Salário antigo: R$ " + sm.toFixed(2));
alert("Percentual de reajuste: " + pr + "%");
alert("Novo salário: R$ " + novoSalario.toFixed(2));