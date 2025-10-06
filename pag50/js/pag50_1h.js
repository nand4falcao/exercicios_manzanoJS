let areaTotal = 0;

do {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo (m):"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m):"));
    
    let area = largura * comprimento;
    areaTotal += area;

    alert("Área do " + nome + ": " + area + " m²");
    var continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)").toUpperCase();
} while (continuar === "SIM");

alert("Área total da residência: " + areaTotal + " m²");
