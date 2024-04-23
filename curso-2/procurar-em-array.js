const alunos = ['João', 'Maria', 'Rodrigo', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

const exibeNomeENota = (aluno) => {
    if (lista[0].includes(aluno)) { // Procura em lista[alunos] se tem o nome repassado.
        const [alunos, medias] = lista; // Adiciona os dados da lista em uma variável. (Desustruturação)
        const indice = alunos.indexOf(aluno); // Retorna o número da posição do aluno.
        const mediaAluno = medias[indice];
        return `O aluno ${aluno} tem a nota média ${mediaAluno}.`;
    } else {
        return `O aluno ${aluno} não existe na lista.`;
    }
};

console.log(exibeNomeENota('Ana'));