const h1 = document.querySelector('.container h1');
const data = new Date(`2019-10-07 22:52:00`);

const diaSemana = data.getDay();
const diaDoMes = data.getDate();
const mes = data.getMonth()+1;
let mestexto;
let diaSemanaTexto;
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();


switch (mes) {
case 1:
    mestexto = `janeiro`;
    break;
case 2:
    mestexto = `fevereiro`;
    break;
case 3:
    mestexto = `março`;
    break;
case 4:
    mestexto = `abril`;
    break;
case 5:
    mestexto = `maio`;
    break;
case 6:
    mestexto = `junho`;
    break;
case 7:
    mestexto = `julho`;
    break;
case 8:
    mestexto = `agosto`;
    break;
case 9:
    mestexto = `setembro`;
    break;
case 10:
    mestexto = `outubro`;
    break;
case 11:
    mestexto = `novembro`;
    break;
case 12:
    mestexto = `dezembro`;
    break;
    default:
    mestexto = `vazio`;
    break;
}

switch (diaSemana) {
case 0:
    diaSemanaTexto = `domingo`;
    // break;
case 1:
    diaSemanaTexto = `segunda-feira`;
    break;
case 2:
    diaSemanaTexto = `terça-feira`;
    break;
case 3:
    diaSemanaTexto = `quarta-feira`;
    break;
case 4:
    diaSemanaTexto = `quinta-feira`;
    break;
case 5:
    diaSemanaTexto = `sexta-feira`;
    break;
case 6:
    diaSemanaTexto = `sábado`;
    break;
default:
    diaSemanaTexto = "vazio";
    break;
}

h1.innerHTML = `${diaSemanaTexto}, ${diaDoMes} de ${mestexto} de ${ano} ${hora}:${minuto}`;


// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle:'short'});




