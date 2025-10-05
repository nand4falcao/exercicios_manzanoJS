let somaValores = 0;
let i = 1;

while (i <= 10){
    let valor = parseFloat(prompt("Digite o " + i +"° valor"));
    somaValores += valor;
    i++; 
}

let media = somaValores / 10;
alert("Somatório: " + somaValores + "\nMédia:" +media);