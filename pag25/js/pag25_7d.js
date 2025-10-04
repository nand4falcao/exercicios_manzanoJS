let horas = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h):"));
let distancia = horas * velocidade;
let litrosUsados = distancia / 12;

alert ("Velocidade média foi: ", +velocidade.toFixed(2)+ " km/h");
alert ("Tempo gasto: ", +horas.toFixed(2)+ " horas");
alert ("Distância percorrida: " +distancia.toFixed(2)+ " km");
alert ("Litros de combustível usados: " +litros_usados.toFixed(2)+ " litros")