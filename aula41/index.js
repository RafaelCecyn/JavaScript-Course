// Escreva uma função que recebe 2 números e retorne o maior deles

// function max (x , y) {
//     if ( x > y) {
//         return x;
//     } else if (x === y) {
//         console.log(`Os números são iguais`);
//     } else {
//         return y;
//     }
// }

// console.log(max(10,2));

// function max (x , y) {
//     if (x > y) return x;
//     return y;
// }

// console.log(max(1,2));

// function max (x , y) {
//     return x > y ? x : y;
// }

const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log(max2(1,2));
