const express = require('express');
const {
  criarLivro,
  listarLivros,
  atualizarLivro,
  deletarLivro,
} = require('./livro.controller');

const router = express.Router();

router.post('/', criarLivro);
router.get('/', listarLivros);
router.put('/:id', atualizarLivro);
router.delete('/:id', deletarLivro);

module.exports = router;

