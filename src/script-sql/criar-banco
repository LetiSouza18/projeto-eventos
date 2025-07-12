CREATE DATABASE postgres
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';

-- Table: public.atividade_tema

-- DROP TABLE IF EXISTS public.atividade_tema;

CREATE TABLE IF NOT EXISTS public.atividade_tema
(
    atividade_id integer NOT NULL,
    tema_id integer NOT NULL,
    CONSTRAINT "PK_f76f3ce8562f9cc7d8cdf0b16e6" PRIMARY KEY (atividade_id, tema_id),
    CONSTRAINT "FK_3593761d8742b171af0efb54701" FOREIGN KEY (atividade_id)
        REFERENCES public.atividades (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "FK_fab90702bcba80b54a6ea96f2bd" FOREIGN KEY (tema_id)
        REFERENCES public.temas (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.atividade_tema
    OWNER to postgres;
-- Index: IDX_3593761d8742b171af0efb5470

-- DROP INDEX IF EXISTS public."IDX_3593761d8742b171af0efb5470";

CREATE INDEX IF NOT EXISTS "IDX_3593761d8742b171af0efb5470"
    ON public.atividade_tema USING btree
    (atividade_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: IDX_fab90702bcba80b54a6ea96f2b

-- DROP INDEX IF EXISTS public."IDX_fab90702bcba80b54a6ea96f2b";

CREATE INDEX IF NOT EXISTS "IDX_fab90702bcba80b54a6ea96f2b"
    ON public.atividade_tema USING btree
    (tema_id ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: public.atividades

-- DROP TABLE IF EXISTS public.atividades;

CREATE TABLE IF NOT EXISTS public.atividades
(
    id integer NOT NULL DEFAULT nextval('atividades_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    data timestamp without time zone,
    descricao character varying COLLATE pg_catalog."default",
    horario_inicio character varying COLLATE pg_catalog."default",
    horario_fim character varying COLLATE pg_catalog."default",
    detalhe_local character varying COLLATE pg_catalog."default",
    "idEvento" integer NOT NULL,
    "idTipo" integer,
    "idInstituicao" integer,
    "idPublicoAlvo" integer,
    "idResponsavel" character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_a6aaafbd59aa3ed64c5fa2b196b" PRIMARY KEY (id),
    CONSTRAINT "FK_02db26426399131cb2f6762d38b" FOREIGN KEY ("idInstituicao")
        REFERENCES public.instituicoes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_5794ba51e01e7a3fc3fb8b1787e" FOREIGN KEY ("idEvento")
        REFERENCES public.eventos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_82ac3b947e4fbd9418139cfa870" FOREIGN KEY ("idTipo")
        REFERENCES public.tipos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_89a26088d3c5042742b77e62b5f" FOREIGN KEY ("idResponsavel")
        REFERENCES public.responsaveis (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_f7f4ee9eb6fd9faa3eaa571ae81" FOREIGN KEY ("idPublicoAlvo")
        REFERENCES public.publicos_alvo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.atividades
    OWNER to postgres;

-- Table: public.atividades_unicas

-- DROP TABLE IF EXISTS public.atividades_unicas;

CREATE TABLE IF NOT EXISTS public.atividades_unicas
(
    id integer NOT NULL DEFAULT nextval('atividades_unicas_id_seq'::regclass),
    horario_inicio character varying COLLATE pg_catalog."default",
    horario_fim character varying COLLATE pg_catalog."default",
    detalhe_local character varying COLLATE pg_catalog."default",
    "idEvento" integer NOT NULL,
    "idInstituicao" integer,
    "idPublicoAlvo" integer,
    "idResponsavel" character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_6053981205d6c1e752220aec519" PRIMARY KEY (id),
    CONSTRAINT "FK_0ecd63102ed79864e3c24d7cbea" FOREIGN KEY ("idResponsavel")
        REFERENCES public.responsaveis (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_1cd6ac312214af12a30f08cdbde" FOREIGN KEY ("idPublicoAlvo")
        REFERENCES public.publicos_alvo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_44e62b4c82696e0ac808b94bed8" FOREIGN KEY ("idEvento")
        REFERENCES public.eventos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_71bccf037e203846a9f0e4343ad" FOREIGN KEY ("idInstituicao")
        REFERENCES public.instituicoes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.atividades_unicas
    OWNER to postgres;

-- Table: public.atividadeunica_tema

-- DROP TABLE IF EXISTS public.atividadeunica_tema;

CREATE TABLE IF NOT EXISTS public.atividadeunica_tema
(
    atividadeunica_id integer NOT NULL,
    tema_id integer NOT NULL,
    CONSTRAINT "PK_07dff42e325acec91a5d5b20ccd" PRIMARY KEY (atividadeunica_id, tema_id),
    CONSTRAINT "FK_7e2eb912a6e0501fb6f729b15b4" FOREIGN KEY (atividadeunica_id)
        REFERENCES public.atividades_unicas (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "FK_e666ecd08387761b1881b937c89" FOREIGN KEY (tema_id)
        REFERENCES public.temas (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.atividadeunica_tema
    OWNER to postgres;
-- Index: IDX_7e2eb912a6e0501fb6f729b15b

-- DROP INDEX IF EXISTS public."IDX_7e2eb912a6e0501fb6f729b15b";

CREATE INDEX IF NOT EXISTS "IDX_7e2eb912a6e0501fb6f729b15b"
    ON public.atividadeunica_tema USING btree
    (atividadeunica_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: IDX_e666ecd08387761b1881b937c8

-- DROP INDEX IF EXISTS public."IDX_e666ecd08387761b1881b937c8";

CREATE INDEX IF NOT EXISTS "IDX_e666ecd08387761b1881b937c8"
    ON public.atividadeunica_tema USING btree
    (tema_id ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: public.eventos

-- DROP TABLE IF EXISTS public.eventos;

CREATE TABLE IF NOT EXISTS public.eventos
(
    id integer NOT NULL DEFAULT nextval('eventos_id_seq'::regclass),
    titulo character varying COLLATE pg_catalog."default" NOT NULL,
    data_inicio timestamp without time zone,
    data_fim timestamp without time zone,
    descricao character varying COLLATE pg_catalog."default",
    valor character varying COLLATE pg_catalog."default",
    modalidade character varying COLLATE pg_catalog."default",
    link_inscricao character varying COLLATE pg_catalog."default",
    imagem_url bytea[],
    data_limite_inscricoes timestamp without time zone,
    CONSTRAINT "PK_40d4a3c6a4bfd24280cb97a509e" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.eventos
    OWNER to postgres;

-- Table: public.instituicoes

-- DROP TABLE IF EXISTS public.instituicoes;

CREATE TABLE IF NOT EXISTS public.instituicoes
(
    id integer NOT NULL DEFAULT nextval('instituicoes_id_seq'::regclass),
    descricao character varying COLLATE pg_catalog."default",
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    departamento character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_4d6f7be02c9863c6e6ca10a9246" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.instituicoes
    OWNER to postgres;

-- Table: public.locais

-- DROP TABLE IF EXISTS public.locais;

CREATE TABLE IF NOT EXISTS public.locais
(
    id integer NOT NULL DEFAULT nextval('locais_id_seq'::regclass),
    cep character varying COLLATE pg_catalog."default",
    estado character varying COLLATE pg_catalog."default",
    bairro character varying COLLATE pg_catalog."default",
    numero character varying COLLATE pg_catalog."default",
    rua character varying COLLATE pg_catalog."default",
    cidade character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_42eaed01557782613d36365d300" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.locais
    OWNER to postgres;

-- Table: public.publicos_alvo

-- DROP TABLE IF EXISTS public.publicos_alvo;

CREATE TABLE IF NOT EXISTS public.publicos_alvo
(
    id integer NOT NULL DEFAULT nextval('publicos_alvo_id_seq'::regclass),
    descricao character varying COLLATE pg_catalog."default" NOT NULL,
    grau_formacao character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_08615fbd866f68746a55cd106a8" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.publicos_alvo
    OWNER to postgres;

-- Table: public.responsaveis

-- DROP TABLE IF EXISTS public.responsaveis;

CREATE TABLE IF NOT EXISTS public.responsaveis
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    telefone character varying COLLATE pg_catalog."default",
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    linkedin character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    lattes character varying COLLATE pg_catalog."default",
    bio character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_79aa857625cefa30a1eb63b1209" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.responsaveis
    OWNER to postgres;

-- Table: public.temas

-- DROP TABLE IF EXISTS public.temas;

CREATE TABLE IF NOT EXISTS public.temas
(
    id integer NOT NULL DEFAULT nextval('temas_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_8c74c55b130d5a91f7d5f575d63" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.temas
    OWNER to postgres;

-- Table: public.tipos

-- DROP TABLE IF EXISTS public.tipos;

CREATE TABLE IF NOT EXISTS public.tipos
(
    id integer NOT NULL DEFAULT nextval('tipos_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_9e292aa5abcebee247bc9193b55" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tipos
    OWNER to postgres;

