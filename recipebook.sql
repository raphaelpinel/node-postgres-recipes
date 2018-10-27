CREATE DATABASE recipebookdb;
GRANT CONNECT ON DATABASE recipebookdb TO recipe;

ALTER TABLE public.recipes
    ADD COLUMN id serial PRIMARY KEY;
ALTER TABLE public.recipes
    ADD COLUMN name character(255) NOT NULL;
ALTER TABLE public.recipes
    ADD COLUMN ingredients text;
ALTER TABLE public.recipes
    ADD COLUMN directions text;