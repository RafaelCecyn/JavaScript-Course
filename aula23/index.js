/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
FALSY
false
0
"" '' ``
null / undefined
NaN
*/

// console.log(`Luiz Otavio` && 0 && `Maria`); // return 0 pois é o primeiro valor false
// console.log(`Luiz Otavio` && true && `Maria`); // Todas as expressoes sao verdadeiras
// // entao retorna a última no caso Maria
// console.log(`Luiz` && undefined && `Maria`) // retorna undefined

// function falaOi () {
//     return `Oi`;
// }

// const vaiExecutar = `Joao`;

// console.log(vaiExecutar && falaOi()); // retorna Oi

// console.log(0 || false || null || `Luiz Otavio` || true); // retorna Luiz Otavio primeiro verdadeiro

// const corUsuario = `vermelho`;
// const corPadrao = corUsuario || `preto`;

// console.log(corPadrao); // retorna vermelho

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c ||d || e) // todos falsos retorna o último falso