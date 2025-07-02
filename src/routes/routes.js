const express = require('express');

const eventoController = require('../controllers/evento-controller');
const atividadeController = require('../controllers/atividade-controller');
const atividadeUnicaController = require('../controllers/atividade-unica-controller');

const router = express.Router();

router.post('/eventos', eventoController.criarEvento);
router.get('/eventos', eventoController.listarEventos);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.deletarEvento);

router.post('/atividades', atividadeController.criarAtividade);
router.get('/atividades', atividadeController.listarAtividades);
router.put('/atividades/:id', atividadeController.atualizarAtividade);
router.delete('/atividades/:id', atividadeController.deletarAtividade);

router.post('/atividades-unicas', atividadeUnicaController.criarAtividadeUnica);
router.get('/atividades-unicas', atividadeUnicaController.listarAtividadesUnicas);
router.put('/atividades-unicas/:id', atividadeUnicaController.atualizarAtividadeUnica);
router.delete('/atividades-unicas/:id', atividadeUnicaController.deletarAtividadeUnica);

module.exports = router;
