const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriaServices = new CategoriaServices(); // Cria uma instância que puxa todos os métodos de models.

class CategoriaController extends Controller {
    constructor() {
        super(categoriaServices);
    }
}

module.exports = CategoriaController;