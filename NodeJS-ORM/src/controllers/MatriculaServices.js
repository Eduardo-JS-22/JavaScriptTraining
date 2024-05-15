const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices(); // Cria uma instância que puxa todos os métodos de models.

class MatriculaController extends Controller {
    constructor() {
        super(matriculaServices);
    }
}

module.exports = MatriculaController;