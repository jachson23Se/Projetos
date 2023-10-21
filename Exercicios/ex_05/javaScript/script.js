// 5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

let n = parseFloat(prompt("Digite um número:"))

if (n > 0) {
  console.log("O número é positivo.");
} else if (n < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}