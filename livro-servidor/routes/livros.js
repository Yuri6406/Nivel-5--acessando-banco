const { Livro, obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try{
        const livro = await incluir(req.body);
        res.json({message: 'Livro adicionado com sucesso!', livro });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar livro', error });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;
        await excluir (codigo);
        res.json({ message: 'Livro excluir com sucesso! ' });
    } catch (error){
        res.status(500).json({ message: 'Erro ao excluir livro', error });
    }
});

module.exports = router;