-- PROCEDURE: public.exclui_eventos_passados(timestamp without time zone)

-- DROP PROCEDURE IF EXISTS public.exclui_eventos_passados(timestamp without time zone);

CREATE OR REPLACE PROCEDURE public.exclui_eventos_passados(
	IN data_limite timestamp without time zone)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
    DELETE FROM atividade_tema
    USING atividades, eventos
    WHERE atividade_tema.atividade_id = atividades.id
      AND atividades."idEvento" = eventos.id
      AND eventos.data_fim < data_limite;

    DELETE FROM atividades
    USING eventos
    WHERE atividades."idEvento" = eventos.id
      AND eventos.data_fim < data_limite;

    DELETE FROM atividadeunica_tema
    USING atividades_unicas, eventos
    WHERE atividadeunica_tema.atividadeunica_id = atividades_unicas.id
    AND atividades_unicas."idEvento" = eventos.id
    AND eventos.data_fim < data_limite;

    DELETE FROM atividades_unicas
    USING eventos
    WHERE atividades_unicas."idEvento" = eventos.id
      AND eventos.data_fim < data_limite;

    DELETE FROM eventos
    WHERE data_fim < data_limite;
END;
$BODY$;
ALTER PROCEDURE public.exclui_eventos_passados(timestamp without time zone)
    OWNER TO postgres;

CALL exclui_eventos_passados(CURRENT_TIMESTAMP);