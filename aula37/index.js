//            0123....
// const nome = `Luiz Otávio`;
const nome = ['Luiz', 'Otavio', 'Henrique'];

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i=0;i<nome.length;i++) {
//     console.log(nome[i]);
// }

// for (let index in nome) {
//     console.log(nome[index]);
// }

for (let valor of nome) {
    console.log(valor);
}

