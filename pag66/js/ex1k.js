for (i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        let fatorial = 1;
        for (let j = 1; j <= i; j++){
            fatorial *= j;
        }
        alert("O fatorial de " + i + " é: " + fatorial);
    }
}