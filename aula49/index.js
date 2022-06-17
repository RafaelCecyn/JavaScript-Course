// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
    console.log("Oi");
}

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
};

function executaFuncao (funcao) {
    funcao();
}
executaFuncao(souUmDado) 

// Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log("Estou falando... ");
    },
    // falar2() {
    //     console.log("Estou falando... ");
    // }
}

obj.falar();