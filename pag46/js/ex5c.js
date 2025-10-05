let somaPares = 0;
let i = 1;

while (i <= 500){
    if (i % 2 === 0){
        somaPares += i;
    }
}

alert("A soma dos números pares de 1 a 500 é: " + somaPares);