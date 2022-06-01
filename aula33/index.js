const pessoa = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 30,
    endereco: {
        rua: `Avenida Brasil`,
        numero: 320,
    }
};

// Atribuição via desestruturação
// const { nome = '', sobrenome, idade } = pessoa;
//const nome = pessoa.nome;
// Para mudar o valor da variável
//const {endereco: {rua, numero}, endereco} = pessoa;
const {nome,sobrenome, ...resto} = pessoa;
console.log(nome,resto);