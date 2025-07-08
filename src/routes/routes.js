const express = require('express');

const eventoController = require('../controllers/evento-controller');
const atividadeController = require('../controllers/atividade-controller');
const atividadeUnicaController = require('../controllers/atividade-unica-controller');
const temaController = require('../controllers/tema-controller');
const tipoController = require('../controllers/tipo-controller');
const instituicaoController = require('../controllers/instituicao-controller');
const publicoAlvoController = require('../controllers/publico-alvo-controller');
const responsavelController = require('../controllers/responsavel-controller');

const router = express.Router();

router.post('/eventos', eventoController.criarEvento);
router.get('/eventos', eventoController.listarEventos);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.deletarEvento);

router.get('/eventos/:eventoId/atividades', atividadeController.listarAtividadesPorEvento);
router.post('/eventos/:eventoId/atividades', atividadeController.criarAtividade);
router.put('/atividades/:id', atividadeController.atualizarAtividade);
router.delete('/atividades/:id', atividadeController.deletarAtividade);

router.post('/eventos/:id/atividades-unicas', atividadeUnicaController.criarAtividadeUnica);
router.get('/atividades-unicas', atividadeUnicaController.listarAtividadesUnicas);
router.put('/atividades-unicas/:id', atividadeUnicaController.atualizarAtividadeUnica);
router.delete('/atividades-unicas/:id', atividadeUnicaController.deletarAtividadeUnica);

router.get('/temas', temaController.listarTemas);
router.get('/tipos', tipoController.listarTipos);
router.get('/instituicoes', instituicaoController.listarInstituicoes);
router.get('/publicos-alvo', publicoAlvoController.listarPublicosAlvo);
router.get('/responsaveis', responsavelController.listarResponsaveis);

module.exports = router;
