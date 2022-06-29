// Dobre os números
//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor,indice,array) => {
    return valor * 2;
});
// console.log(numerosEmDobro);


// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map((valor) => {
    return valor.nome;
});
// console.log(nomes);

const idades = pessoas.map((valor) => {
    // delete valor.nome;
    // return valor;
    return { idade: valor.idade}
})
// console.log(idades);

const comIds = pessoas.map(function (valor,indice) {
    const newObj = {...valor};
    newObj.id = indice;
    return newObj;
})
console.log(comIds);
console.log(pessoas);