const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '46403736000',
    turma: 'JavaScript'
}

// function exibeInfoEstudande(objEstudante, infoEstudante) {
//     return objEstudante[infoEstudante];
// }

const exibeInfoEstudande = (objEstudante, infoEstudante) => objEstudante[infoEstudante];

console.log(exibeInfoEstudande(estudante, 'nome'));
console.log(exibeInfoEstudande(estudante, 'cpf'));