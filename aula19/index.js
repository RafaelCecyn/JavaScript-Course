/* 
Primitivos (imutáveis) - string, number, undefined,null, boolean, 
(bigInt, symbol) - Valor copiados

Referencia (mutável) - arrays, object, function - Passados por referencia
*/

// let nome = `Luiz`;
// nome[0] = `R`; // nao muda como no array
// console.log(nome[0]);

// let a = `A`;
// let b = a; // Cópia
// console.log(a, b) // A A

// a = `Outra coisa`;
// console.log(a, b) // return Outra coisa A // O valor de B nao é alterado

// let a = [1,2,3]
// // let b = a // b aponta para o mesmo local de a na memória
// let b = [...a] // valor de B totalmente independente
// let c = b
// console.log(a,b);

// a.push(4)
// console.log(a,b) // b também é alterado

// b.pop();
// console.log(a,b) // a também é afetado

// a.push(`Luiz`)
// console.log(c)

const a = {
    nome: `Luiz`,   
    sobrenome: `Otávio`
}

const b = {...a}

a.nome = `Joao`
console.log(a) // return Joao Otavio
console.log(b) // return Luiz Otavio

