CREATE TABLE public.posts(
    id varchar NOT NULL, 
    body varchar NULL,
    CONSTRAINT posts_pk PRIMARY KEY (id)
);

/*Postgres rodando no Beekeeper */