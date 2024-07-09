const express = require('express');
const router = express.Router();
const Livro = require('../module/livro/livro.model');

router.get('/listar', async (req, res) => {
    try {
        const livros = await Livro.find({});
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get('/listar/:id', async (req, res) => {
    try {
        const livro = await Livro.findOne({id: req.params.id});
        if(!livro){
            return res.status(404).json({message: 'Livro não encontrado'});
        }
        return res.status(200).json(livro);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.patch('/editar/:id', async (req, res) => {
    try {
        const livro = await Livro.findOne({id: req.params.id});
        if(!livro){
            return res.status(404).json({message: 'Livro não encontrado'});
        }
        if(req.body.titulo != null){
            livro.titulo = req.body.titulo;
        }
        if(req.body.num_paginas != null){
            livro.num_paginas = req.body.paginas;
        }
        if(req.body.isbn != null){
            livro.isbn = req.body.codigo;
        }
        if(req.body.editora != null){
            livro.editora = req.body.editora;
        }

        await livro.save();
        return res.status(200).json({message: 'Livro atualizado com sucesso!'});

    } catch (error) {
        return res.status(400).json(error);
    }
})

router.post('/cadastrar', async (req, res) => {
    try {
        const novoLivro = new Livro(req.body);
        await novoLivro.save();
        return res.status(200).json({message: 'Livro cadastrado com sucesso!'});
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.delete('/deletar/:id', async (req, res) => {
    try {
        const livro = await Livro.findOne({id: req.params.id});
        if(!livro){
            return res.status(404).json({message: 'Livro não encontrado'});
        }

        await livro.deleteOne();
        return res.status(200).json({message: 'Livro deletado com sucesso!'})
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;