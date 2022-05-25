// function criaPessoa  (nome,sobrenome,idade) { // Parametro
//     return {
//         nome, // atributo
//         sobrenome,
//         idade
//     }
// }
// // Funcao que cria objeto chamamos de factory
// const pesssoa1 = criaPessoa(`Luiz`, `Miranda`, `25`); 
// const pesssoa2 = criaPessoa(`Maria`, `Oliveira`, `32`); 
// const pesssoa3 = criaPessoa(`Joao`, `Moreira`, `55`); 
// const pesssoa4 = criaPessoa(`Junior`, `Lara`, `44`); 
// const pesssoa5 = criaPessoa(`Jean`, `Otavio`, `69`); 

// console.log(pesssoa1.nome, pesssoa2.idade);

// const pessoa1 = {
//     nome: `Luiz`,
//     sobrenome: `Miranda`,
//     idade: 25,

//     fala() {
//         console.log(`Olá Mundo! `); // Funcao dentro de um objeto chamamos de método
//     }
// };

// pessoa1.fala();

const pessoa1 = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`); // Funcao dentro de um objeto chamamos de método
    },

    incrementaIdade () {  // Outro método
        this.idade++;
    }


};

pessoa1.fala(); // 25
pessoa1.incrementaIdade();
pessoa1.fala(); // 26
pessoa1.incrementaIdade();
pessoa1.fala(); // 27
