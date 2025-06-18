// export default class Calculadora {
//   // Soma
//   static soma(a, b) {
//       return a + b;
//   }

//   // Subtração
//   static subtracao(a, b) {
//       return a - b;
//   }

//   // Multiplicação
//   static multiplicacao(a, b) {
//       return a * b;
//   }

//   // Divisão
//   static divisao(a, b) {
//       if (b === 0) {
//           throw new Error("Divisão por zero não é permitida.");
//       }
//       return a / b;
//   }

//   // Potência (a^b)
//   static potencia(base, expoente) {
//       let resultado = 1;
//       for (let i = 0; i < expoente; i++) {
//           resultado *= base;
//       }
//       return resultado;
//   }

//   // Raiz quadrada (aproximação)
//   static raizQuadrada(numero) {
//       if (numero < 0) {
//           throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
//       }
//       let raiz = numero;
//       let precisao = 0.00001;
//       while ((raiz - (numero / raiz)) > precisao) {
//           raiz = (raiz + (numero / raiz)) / 2;
//       }
//       return raiz;
//   }
// }
