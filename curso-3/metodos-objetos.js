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

const chavesObjeto = Object.keys(estudante);
const valoresObjeto = Object.values(estudante);
console.log(chavesObjeto);
console.log(valoresObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessáro ter um endereço cadastrado.')
}