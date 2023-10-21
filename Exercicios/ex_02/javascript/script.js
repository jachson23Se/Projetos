// 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.


let n =parseFloat(prompt("Digite um número:"));

if (n % 2 !==0){
    console.log("O númeor Digitado é impar"+n)
    
}else if (n% 2 == 0){
    console.log("O Número Digitado é Par"+n)
}