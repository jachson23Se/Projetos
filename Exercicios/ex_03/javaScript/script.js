// 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

let n= parseFloat(prompt("Digite um Número:"));


console.log("Números pares entre 1 e "+ n + ":");

let cont= 1;
while ( cont <= n) {
  if(cont % 2 == 0) {
    console.log(cont);
  }
  cont++;
}