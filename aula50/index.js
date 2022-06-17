// // arguments que sustenta todos os argumentos enviados
// function funcao () {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1,2,3,4,5,6,7);

// function funcao (a,b,c,d,e,f) {
//     console.log(a,b,c,d,e,f);
// }
// funcao(1,2,3); // 1 2 3 undefined undefined undefined

// function funcao (a,b = 2, c = 4) {
//     console.log(a+b+c);
// }
// funcao(2,undefined,5); // NaN

// function funcao ({nome, sobrenome, idade}) {
//     console.log(nome,sobrenome,idade);
// }
// let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
// console.log(obj);

// function conta(operador, acumulador, ...numeros) {
//     console.log(operador, acumulador, numeros)
// }
// conta('+', 0, 20,30,40,50);

// function conta(operador, acumulador, ...numeros) { // rest tem que ser o último parâmetro
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// }

// conta('*',1,20,30,40)

const conta = (...args) => {
    console.log(args);
}
conta('+',1,20,30,40,50);