let termo1 = 1;
let termo2 = 1;
let proximo;

alert("Série de Fibonacci até o 15º termo:");

for (let i = 1; i <= 15; i++) {
  alert(termo1);
  proximo = termo1 + termo2; 
  termo1 = termo2;
  termo2 = proximo; 
}
