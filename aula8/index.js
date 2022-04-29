/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925
Luiz Otávio Miranda nasceu em 1980
*/

const nome = `Rafael`;
const sobrenome = `Cecyn Mendes`;
const idade = 24;
const peso = 85;
const alturaEmMetros = 1.88;
// IMC peso/ (altura * altura)
let imc = peso / (alturaEmMetros * alturaEmMetros)
let anoAtual =  2022
let anoNascimento = (anoAtual - idade)

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem
${alturaEmMetros} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

