const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// const nomesAtualizados = new Set(nomes);
// const listaNomesAtualizados = [...nomesAtualizados];

const listaNomesAtualizados = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);