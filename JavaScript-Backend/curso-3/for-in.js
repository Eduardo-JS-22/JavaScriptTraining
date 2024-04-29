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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}.`;
        console.log(texto);
    }
}