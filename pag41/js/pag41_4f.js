let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));
let c = parseInt(prompt("Digite o terceiro valor:"));
let primeiro, segundo, terceiro;

// Comparando os valores para descobrir a ordem
if (a <= b && a <= c) {
    primeiro = a;
    if (b <= c) {
        segundo = b;
        terceiro = c;
    } else {
        segundo = c;
        terceiro = b;
    }
} else if (b <= a && b <= c) {
    primeiro = b;
    if (a <= c) {
        segundo = a;
        terceiro = c;
    } else {
        segundo = c;
        terceiro = a;
    }
} else {
    primeiro = c;
    if (a <= b) {
        segundo = a;
        terceiro = b;
    } else {
        segundo = b;
        terceiro = a;
    }
}

alert("Valores em ordem crescente: " + primeiro + ", " + segundo + ", " + terceiro);
