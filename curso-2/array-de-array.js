const alunos = ['João', 'Maria', 'Rodrigo', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(lista);

console.log(
    `A aluna da posição 1 é ${lista[0][1]}.
    A nota do aluno é ${lista[1][1]}.`
);