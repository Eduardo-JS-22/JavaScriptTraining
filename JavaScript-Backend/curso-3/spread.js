const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '46403736000',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511996467259', '5511993648197'],
    enderecos: [{
        rua: 'Rua do Sabão',
        numero: '123',
        complemento: 'Casa'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: ''
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatio: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);