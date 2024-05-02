import ErroBase from "./erroBase.js";

class NaoEncontrado extends ErroBase {
    // constructor() {
    //     super("Página não encontrada.", 404);
    // }

    constructor(mensagem = "Página não encontrada.") {
        super(mensagem, 404);
    }
}
export default NaoEncontrado;