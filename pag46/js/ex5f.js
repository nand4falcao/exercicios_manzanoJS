let b = parseInt(prompt("Digite a base:"));
let e = parseInst(prompt("Digite o expoente:"));
let resultadoPontencia  = 1;
let i = 1;

while (i <= e){
    resultadoPontencia *= b;
    i++;
}

alert(b + " elevado a " + e + " é: " + resultadoPontencia);