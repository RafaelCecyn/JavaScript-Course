// For in -> lê os índices ou chaves do objeto  

// const frutas = ['Pera', 'Maça', 'Uva'];

// // for (let i=0; i<frutas.length;i++) {
// //     console.log(frutas[i])
// // }

// for (let indice in frutas) { // lê os índices do Array muita interessante para objetos
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// console.log(pessoa.nome); // Luiz
// console.log(pessoa['nome']); // Luiz

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}