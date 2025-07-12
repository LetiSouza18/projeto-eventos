-- View: public.atividade_visao

-- DROP VIEW public.atividade_visao;

CREATE OR REPLACE VIEW public.atividade_visao
 AS
 SELECT eventos.id,
    eventos.titulo,
    eventos.data_inicio,
    eventos.data_fim,
    eventos.descricao,
    eventos.valor,
    eventos.modalidade,
    eventos.link_inscricao,
    atividades_unicas.horario_inicio,
    atividades_unicas.horario_fim,
    atividades_unicas.detalhe_local,
    publicos_alvo.descricao AS descricao_publico,
    publicos_alvo.grau_formacao
   FROM eventos
     JOIN atividades_unicas ON eventos.id = atividades_unicas."idEvento"
     JOIN publicos_alvo ON publicos_alvo.id = atividades_unicas."idPublicoAlvo";

ALTER TABLE public.atividade_visao
    OWNER TO postgres;

SELECT *
FROM atividade_visao;