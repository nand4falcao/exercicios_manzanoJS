let cotacaoDolar = parseFloat(prompt("Digite a cotação do Dólar hoje: "))
let reais = parseFloat(prompt("Digite o valor em Reais que você possui: "))
let valorEmDolar = reais / cotacaoDolar
alert ("O valor em Dólar é: $"+ valorEmDolar.toFixed(2))