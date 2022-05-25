// // Funcao executa acao

// function saudacao (nome) {                  // parametro
//     return `Bom dia ${nome}!`
// } // nao precisa de ; no final

// const variavel = saudacao(`Luiz`); 
// console.log(variavel); // Bom dia Luiz

// function soma (x=1, y=1) {
//     const resultado = x + y // nao podemos alterar o escopo da funcao
//     return resultado;
// }

// const resultado = soma(); // a variável resultado é diferente do resultado dentro do escopo da funcao
// console.log(resultado) 

// Funcao anonima

// const raiz = function (n) {
//     return  n ** 0.5
// }; // precisa do ;

// console.log(raiz(25))

// Arrow Function

const raiz = (n) => {
    return  n ** 0.5
}; // precisa do ;

console.log(raiz(9))


// ou

const raizDois = n => n ** 0.5;

console.log(raizDois(9))