const estudantes = require('./estudantes.json');

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosImcompletos);