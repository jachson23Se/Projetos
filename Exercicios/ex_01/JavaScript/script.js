
// 1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));


if (numero1 > numero2) {
    console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    console.log("O maior número é: " + numero2);
} else {
    console.log("Os números são iguais.");
}