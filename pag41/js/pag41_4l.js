let nome = prompt("Digite seu nome:");
let sexo = prompt("Digite seu sexo (M/F):").toUpperCase();

let saudacao = (sexo === "M") ? "Ilmo Sr. " + nome : "Ilma Sra. " + nome;

alert(saudacao);
