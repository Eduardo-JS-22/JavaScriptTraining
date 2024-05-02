class RequisicaoIncorreta extends Error {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos.", status = 400) {
        super();
        this.message = mensagem;
        this.status = status;
    }

    enviaResposta(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    }
}

export default RequisicaoIncorreta;