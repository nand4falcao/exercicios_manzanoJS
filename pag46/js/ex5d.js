let impares = "";
let i = 1;

// Enquanto i for menor ou igual a 20
while (i <= 20) {
    // Se i for ímpar
    if (i % 2 !== 0) {
        impares += i + " "; // Adiciona o número ímpar à string
    }
    i++; // Incrementa o valor de i
}

alert("Números ímpares de 1 a 20: " + impares);