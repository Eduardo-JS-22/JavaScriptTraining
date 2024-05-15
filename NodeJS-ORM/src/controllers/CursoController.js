const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices(); // Cria uma instância que puxa todos os métodos de models.

class CursoController extends Controller {
    constructor() {
        super(cursoServices);
    }
}

module.exports = CursoController;