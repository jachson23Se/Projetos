// 9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

const operacao = prompt("Digite a operação matemática (+, -, *, /):");

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 === 0) {
        console.log("Erro: Divisão por zero!");
      } else {
        resultado = numero1 / numero2;
      }
      break;
    default:
      console.log("Operação inválida");
  }
  