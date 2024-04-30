import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `Erro ao listar livros: ${erro.message}`});
        }
    }

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message: `Erro ao buscar livro: ${erro.message}`});
        }
    }

    static async cadastrarLivros (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro criado com sucesso!", livro: livroCriado});
        } catch (erro) {
            res.status(500).json({message: `Erro ao cadastrar novo livro: ${erro.message}`});
        }        
    }

    static async atualizarLivro (req, res) {
        const livroBody = req.body;
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(livroBody.autor);
            const livroCompleto = {...livroBody, autor: {...autorEncontrado._doc}}
            await livro.findByIdAndUpdate(id, livroCompleto);
            res.status(200).json({message: "Livro atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({message: `Erro ao atualizar livro: ${erro.message}`});
        }
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso."});
        } catch (erro) {
            res.status(500).json({message: `Erro ao deletar livro: ${erro.message}`});
        }
    }

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({message: `Erro ao listar livros por editora: ${erro.message}`});
        }
    }
}

export default LivroController;