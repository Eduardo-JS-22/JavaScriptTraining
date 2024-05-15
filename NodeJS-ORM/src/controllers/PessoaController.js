const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices(); // Cria uma instância que puxa todos os métodos de models.

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
}

module.exports = PessoaController;