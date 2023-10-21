// 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

var numero = parseInt(prompt("Digite um número:"));

// Verifica e exibe os números ímpares entre 1 e o número informado
console.log("Números ímpares entre 1 e " + numero + ":");

for (var i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}