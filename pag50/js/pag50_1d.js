let quadro = 1;      // começa no primeiro quadro
let graos = 1;       // primeiro quadro tem 1 grão
let total = 0;       // total acumulado de grãos

do {
    total += graos;  // acumula os grãos do quadro atual
    alert("Quadro " + quadro + ": " + graos + " grãos. Total até agora: " + total);
    
    graos *= 2;      // dobra a quantidade de grãos para o próximo quadro
    quadro++;        // vai para o próximo quadro
} while (quadro <= 64);

alert("Total de grãos no tabuleiro: " + total);
