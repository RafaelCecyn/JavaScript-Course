function meuEscopo () {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`resultado`);

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);
    }
}

const altura = 1.88;
const peso = 88;




const IMC = peso / Math.pow(altura, 2)

if (IMC < 18.5) {
    console.log(`Abaixo do peso`)
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`Peso normal`)
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Sobrepeso`)
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`Obesidade grau 1`)
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`Obesidade grau 2`)
} else {
    console.log(`Obesidade grau 3`)
}