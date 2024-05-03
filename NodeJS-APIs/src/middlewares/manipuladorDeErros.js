import mongoose from "mongoose";
import ErroBase from "../erros/erroBase.js";
import RequisicaoIncorreta from "../erros/requisicaoIncorreta.js";
import ErroValidacao from "../erros/erroValidacao.js";


function manipuladorDeErros(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviaResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviaResposta(res);
    } else if (erro instanceof ErroBase) {
        erro.enviaResposta(res);
    } else {
        new ErroBase().enviaResposta(res);
    }
}

export default manipuladorDeErros;