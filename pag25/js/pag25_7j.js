let cotacaoDolar = parseFloat(prompt("Digite a cotação do Dólar hoje: "))
let dolares = parseFloat(prompt("Digite a quantidade de dolares que você possui: "))
let valorEmReal = cotacaoDolar * dolares
alert ("O valor em Real é: R$"+ valorEmReal.toFixed(2))