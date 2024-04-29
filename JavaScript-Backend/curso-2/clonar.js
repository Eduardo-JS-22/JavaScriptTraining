const notas = [7, 7, 8, 9];
//const novaListaNotas = [...notas,]; // Cria um novo array e espalha os valores de notas.
const novaListaNotas = [...notas, 10];

//novaListaNotas.push(10);

console.log(notas);
console.log(novaListaNotas);

// Uso do = para defenir um valor, cria uma referencia ao valor original, sendo assim, utiliza-se spreed operator para copiar o valor. Ex: = [...Valor]