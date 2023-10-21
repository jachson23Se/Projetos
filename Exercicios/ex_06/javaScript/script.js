//a6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

const letra = prompt("Digite uma letra:");

// Converter a letra para minúsculas para facilitar a comparação
const letraMinuscula = letra.toLowerCase();


if (letra.length === 1 && letra.match(/[a-z]/i)) {
  
  if (
    letraMinuscula === "a" ||
    letraMinuscula === "e" ||
    letraMinuscula === "i" ||
    letraMinuscula === "o" ||
    letraMinuscula === "u"
  ) {
    console.log("A letra digitada é uma vogal.");
  } else {
    console.log("A letra digitada é uma consoante.");
  }
} else {
  console.log("Por favor, digite uma única letra válida.");
}