let n = 1;

while (n <= 10) {
    if (n % 2 !== 0) { // verifica se é ímpar
        let fatorial = 1;
        let i = 1;
        while (i <= n) {
            fatorial *= i;
            i++;
        }
        console.log("Fatorial de " + n + " = " + fatorial);
    }
    n++;
}
