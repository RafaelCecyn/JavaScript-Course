
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 
// const data = new Date(2019,3); // Mon Apr 01 2019 00:00:00 GMT-0300 (Brasilia Standard Time)
// console.log(data.toString()); // Thu Jan 02 1970 00:00:00 GMT-0300 (Brasilia Standard Time)


// const data = new Date(2019,3); // a, m,d,h,M,s,ms

// const data = new Date('2019-04-20 20:15:59'); //Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)
// console.log('Dia', data.getDate()); // Teremos o dia 20 do mês
// console.log('Mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear()); // 
// console.log('Hora', data.getHours()); // 
// console.log('Minuto', data.getMinutes()); // 
// console.log('Segundo', data.getSeconds()); // 
// console.log('Millissegundo', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());
// console.log(Date.now()); // 1654001513994

// function zeroAEsqueda (num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data) {
//     const dia = zeroAEsqueda(data.getDate());
//     const mes = zeroAEsqueda(data.getMonth() + 1);
//     const ano = zeroAEsqueda(data.getFullYear());
//     const hora = zeroAEsqueda(data.getHours());
//     const minuto = zeroAEsqueda(data.getMinutes());
//     const segundo = zeroAEsqueda(data.getSeconds());
//     const milissegundo = zeroAEsqueda(data.getMilliseconds());
//     const diaDaSemana = zeroAEsqueda(data.getDay());

//     return `${dia}/ ${mes} / ${ano} ${hora}: ${minuto} :${segundo} `
// }

// const data = new Date();
// const DataBrasil = formataData(data);
// console.log(DataBrasil);

const data = new Date();
console.log(data.getMonth());
