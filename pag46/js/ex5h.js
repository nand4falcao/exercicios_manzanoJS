let resultadoTemperatura = "";
let c = 10;

while (c <= 100){
    c = c+10;
    let f = (c * 9/5) + 32;
    resultadoTemperatura = resultadoTemperatura +c+ "°C =" +f+ "°F\n";
}

alert("Conversão de Celsius para Fahrenheit:\n" + resultadoTemperatura);