const numeros = [1,2,3,4,5,6,7,8,9];

// for (let numero of numeros) {
//     if (numero === 2 || numero === 5) {
//         continue;
//     }

//     if (numero === 7) {
//         break;
//     }

//     console.log(numero);
// }

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        i++;
        break;
    }

    i++;
}