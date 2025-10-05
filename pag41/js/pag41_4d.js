let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));
let media = (n1 + n2 + n3 + n4) / 4;
let resultado = "";

if (media >= 7) {
    resultado = "Aluno aprovado";
} else {
    let exame = parseFloat(prompt("Digite a nota do exame:"));
    let novaMedia = (media + exame) / 2;
    if (novaMedia >= 5) {
        resultado = "Aluno aprovado em exame";
        media = novaMedia;
    } else {
        resultado = "Aluno reprovado";
        media = novaMedia;
    }
}

alert(resultado + "\nMédia final: " + media);
