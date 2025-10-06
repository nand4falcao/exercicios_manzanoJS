let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));

// verifica se o divisor não é zero
if (divisor === 0) {
    alert("Divisão por zero não é permitida!");
} else {
    let quociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor; // subtrai o divisor do dividendo
        quociente++;      // conta quantas vezes o divisor entrou
    }

    alert(dividendo + " ÷ " + divisor + " = " + quociente + " (quociente inteiro)");
}
