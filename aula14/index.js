// IEEE 754-2008 PADRAO DE PRECISAO
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0 // return 0.99999999

num1 = Number(num1.toFixed(2)) // return 1.0

console.log(num1); 

console.log(Number.isInteger(num1)) // return false

// console.log(num1.toString() + num2); // return 12.5
// num1 = num1.toString(); // Altera para um String
// console.log(typeof num1) // number
// console.log(num1.toString(2)) // Representacao Binária
//  console.log(num1.toFixed(2)) // 2 casas decimais
// console.log(Number.isInteger(num1)) // Retorna true or false, nesse caso true
// let temp = num1 * `Olá`;
// console.log(Number.isNaN(temp)); // Nesse caso sim




