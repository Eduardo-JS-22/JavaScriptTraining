import NaoEncontrado from "../erros/naoEncontrado.js";
import { autor } from "../models/index.js";

class AutorController {
    static listarAutores = async (req, res, next) => {
        try {
            const listaAutores = autor.find({});
            if (listaAutores !== null) {
                req.resultado = listaAutores;
                next();
            } else {
                next(new NaoEncontrado("Autores não localizados no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static listarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if (autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            } else {
                next(new NaoEncontrado("Autor não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static cadastrarAutores = async (req, res, next) => {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor criado com sucesso!", autor: novoAutor});
        } catch (erro) {
            next(erro);
        }        
    }

    static atualizarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            if (id !== null) {
                await autor.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Autor atualizado com sucesso."});
            } else {
                next(new NaoEncontrado("Autor não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static deletarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            if (id !== null) {
                await autor.findByIdAndDelete(id);
                res.status(200).json({message: "Autor deletado com sucesso."});
            } else {
                next(new NaoEncontrado("Autor não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }
}

export default AutorController;