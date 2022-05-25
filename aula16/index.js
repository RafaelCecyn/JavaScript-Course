const alunos = ['Luiz', 'Maria', 'Joao'];

console.log(typeof alunos) // return object
console.log(alunos instanceof Array) // return true

// alunos.push(`Luiza`)
// alunos.push(`Eduardo`)

// console.log(alunos.slice(0,3)); // Pega o Luiz, Maria e Joao sempre colocar um índice a mais para pegar o valor

// delete alunos[1]; // Nao muda a posicao do array e no lugar da Maria fica undefined
// console.log(alunos[1])



// const removido = alunos.shift();

// console.log(alunos) 


// alunos.unshift(`Fabio`); // Fabio indice 0
// alunos.unshift(`Luiza`); // Luiza indice 1

// alunos.push(`Luiza`); // adiciona no fim
// alunos.push(`Fabio`); // adiciona no fim

// alunos[alunos.length] = `Luiza`
// alunos[alunos.length] = `Fabio`
// alunos[alunos.length] = `Luana`

// alunos[0] = `Eduardo`
// alunos[3] = `Luiza`

// console.log(alunos) // todos
// console.log(alunos[0]) // Luiz
// console.log(alunos[2]) // Joao