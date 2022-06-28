//                -5      -4       -3        -2         -1
//                0        1        2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4, 1); // Remove Júlia e retorna um array
// const removidos = nomes.splice(-2,2);  // Remove Gabriel e Júlia  
// const removidos = nomes.splice(3,0, 'Luiz');
//pop
// const removidos = nomes.splice(-1,1);

// shift
// const removidos = nomes.splice(0,1);

// push
// nomes.splice(nomes.length,0,'Luiz');

// unshift
nomes.splice(0,0,'Luiz')



console.log(nomes);