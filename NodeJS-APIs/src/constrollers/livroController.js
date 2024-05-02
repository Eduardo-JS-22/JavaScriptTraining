import livro from "../models/Livro.js";
import NaoEncontrado from "../erros/naoEncontrado.js";
import { autor } from "../models/Autor.js";

class LivroController {
    static listarLivros = async (req, res, next) => {
        try {
            const listaLivros = await livro.find({});
            if (listaLivros !== null) {
                res.status(200).json(listaLivros);
            } else {
                next(new NaoEncontrado("Livros não localizados no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static listarLivroPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if (livroEncontrado !== null) {
                res.status(200).json(livroEncontrado);
            } else {
                next(new NaoEncontrado("Livro não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static cadastrarLivros = async (req, res, next) => {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            if (autorEncontrado !== null) {
                const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}
                const livroCriado = await livro.create(livroCompleto);
                res.status(201).json({message: "Livro criado com sucesso!", livro: livroCriado});
            } else {
                next(new NaoEncontrado("Autor não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }        
    }

    static atualizarLivro = async (req, res, next) => {
        const livroBody = req.body;
        try {
            const id = req.params.id;
            if (id !== null) {
                const autorEncontrado = await autor.findById(livroBody.autor);
                if (autorEncontrado !== null) {
                    const livroCompleto = {...livroBody, autor: {...autorEncontrado._doc}}
                    await livro.findByIdAndUpdate(id, livroCompleto);
                    res.status(200).json({message: "Livro atualizado com sucesso."});
                } else {
                    next(new NaoEncontrado("Autor não localizado no banco de dados."));
                }
            } else {
                next(new NaoEncontrado("Livro não localizado no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static deletarLivro = async (req, res, next) => {
        try {
            const id = req.params.id;
            if (id !== null) {
                await livro.findByIdAndDelete(id);
                res.status(200).json({message: "Livro deletado com sucesso."});
            } else {
                next(new NaoEncontrado("Livro não localizado no banco de dados."));
            }            
        } catch (erro) {
            next(erro);
        }
    }

    static listarLivrosPorEditora = async (req, res, next) => {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            if (livrosPorEditora !== null) {
                res.status(200).json(livrosPorEditora);
            } else {
                next(new NaoEncontrado("Livros não localizados no banco de dados."));
            }
        } catch (erro) {
            next(erro);
        }
    }
}

export default LivroController;