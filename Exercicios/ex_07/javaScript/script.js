// 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

var nota = parseFloat(prompt("Digite uma nota:"));

if ( nota >= 0 && nota <= 10) {
  console.log("A nota informada é válida.");
} else {
  console.log("A nota não é valida");
}