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
    }]
}

estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
})

console.log(estudante.enderecos);
console.log(estudante.enderecos[1]);

const listaEnderecosComComplementos = estudante.enderecos.filter(endereco => endereco.complemento) // Filtra o endeço com base no truthy e falsy.

console.log(listaEnderecosComComplementos);