let fib = [1,1];
let i = 2;

while (i < 15){
    fib[i] = fib[i-1] + fib[i-2];
    i++;
}

alert("Os 15 primeiros números da sequência de Fibonacci são: " + fib);