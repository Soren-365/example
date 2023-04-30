-- DROP SCHEMA public CASCADE;
-- DROP SCHEMA conferati CASCADE;

create schema if not exists "conferati";
create schema if not exists "public";

ALTER TABLE "conferati"."organization_role" drop constraint if exists "pk_role";
ALTER TABLE "conferati"."organization_role" drop constraint if exists "organization_role_organization_fkey";
ALTER TABLE "conferati"."organization_role" drop constraint if exists "organization_role_person_fkey";
ALTER TABLE "public"."data_app_filter" drop constraint if exists "pk_data_app_filter";
ALTER TABLE "public"."data_table" drop constraint if exists "pk_data_table";
ALTER TABLE "public"."module_section" drop constraint if exists "uc_module_section_vertical_page_position";
ALTER TABLE "public"."module_section_data" drop constraint if exists "pk_module_section_data";
ALTER TABLE "public"."note" drop constraint if exists "note_pkey";
ALTER TABLE "public"."page_module" drop constraint if exists "pk_page_module";
ALTER TABLE "public"."page_record" drop constraint if exists "pk_page_record";
ALTER TABLE "public"."page_record_record" drop constraint if exists "pk_page_record_record";
ALTER TABLE "public"."record_filter" drop constraint if exists "pk_record_filter";
ALTER TABLE "public"."record_section" drop constraint if exists "pk_record_section";
ALTER TABLE "public"."module_section" drop constraint if exists "fk_module_section_module_section_type";
ALTER TABLE "public"."module_section" drop constraint if exists "fk_module_section_record_data";
ALTER TABLE "public"."module_section" drop constraint if exists "fk_module_section_record_filter";
ALTER TABLE "public"."module_section" drop constraint if exists "fk_module_section_record_type";
ALTER TABLE "public"."module_section" drop constraint if exists "module_section_vertical_page_position_key";
ALTER TABLE "public"."page_record" drop constraint if exists "fk_page_record_app";
ALTER TABLE "public"."page_record" drop constraint if exists "fk_page_record_record_data";
ALTER TABLE "public"."page_record" drop constraint if exists "fk_page_record_record_filter";
ALTER TABLE "public"."page_record" drop constraint if exists "fk_page_record_record_type";
ALTER TABLE "public"."page_record" drop constraint if exists "page_record_id_key";
ALTER TABLE "public"."page_record_record" drop constraint if exists "page_record_record_id_key";
ALTER TABLE "public"."record_data" drop constraint if exists "record_data_record_type_fkey";
ALTER TABLE "public"."record_filter" drop constraint if exists "fk_record_filter_app";
ALTER TABLE "public"."record_filter" drop constraint if exists "fk_record_filter_record_type";
ALTER TABLE "public"."record_filter" drop constraint if exists "record_filter_id_key";
ALTER TABLE "public"."record_section" drop constraint if exists "fk_record_section_record_section_type";
ALTER TABLE "public"."record_section" drop constraint if exists "record_section_vertical_page_position_key";
ALTER TABLE "public"."record_section_type" drop constraint if exists "fk_record_section_type_record_type";
ALTER TABLE "conferati"."organization" drop constraint if exists "pk_organization";
ALTER TABLE "conferati"."person" drop constraint if exists "pk_person";
ALTER TABLE "public"."app" drop constraint if exists "pk_app";
ALTER TABLE "public"."module_section_type" drop constraint if exists "pk_module_section_type";
ALTER TABLE "public"."record_data" drop constraint if exists "pk_record_data";
ALTER TABLE "public"."record_section_type" drop constraint if exists "pk_record_section_type";
ALTER TABLE "public"."app" drop constraint if exists "app_url_name_key";


DROP TABLE IF EXISTS "conferati"."person";
DROP TABLE IF EXISTS "conferati"."organization";
DROP TABLE IF EXISTS "conferati"."organization_role";
DROP TABLE IF EXISTS "public"."app";
DROP TABLE IF EXISTS "public"."data_app_filter";
DROP TABLE IF EXISTS "public"."data_table";
DROP TABLE IF EXISTS "public"."module_section_data";
DROP TABLE IF EXISTS "public"."module_section_type";
DROP TABLE IF EXISTS "public"."note";
DROP TABLE IF EXISTS "public"."page_module";
DROP TABLE IF EXISTS "public"."page_record_record";
DROP TABLE IF EXISTS "public"."record_section_type";
ALTER TABLE "public"."record_type" drop constraint if exists "pk_record_type";
DROP TABLE IF EXISTS "public"."record_type";
DROP TABLE IF EXISTS "public"."page_record";
DROP TABLE IF EXISTS "public"."record_data";
DROP TABLE IF EXISTS "public"."record_filter";
DROP TABLE IF EXISTS "public"."record_section";
DROP TABLE IF EXISTS "public"."module_section";

CREATE table IF NOT EXISTS "conferati"."organization_role" (
    "id" bigint generated always as identity not null,
    "person" bigint not null,
    "organization" bigint not null,
    "title" text not null,
    "start_date" date,
    "end_date" date,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "conferati"."organization" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "type" text not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "conferati"."person" (
    "id" bigint generated always as identity not null,
    "first_name" text not null,
    "last_name" text not null,
    "created_at" timestamp without time zone not null default now()
);



CREATE UNIQUE INDEX IF NOT EXISTS pk_organization ON conferati.organization USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_person ON conferati.person USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_role ON conferati.organization_role USING btree (id);

alter table "conferati"."organization_role" add constraint "pk_role" PRIMARY KEY using index "pk_role";

alter table "conferati"."organization" add constraint "pk_organization" PRIMARY KEY using index "pk_organization";

alter table "conferati"."person" add constraint "pk_person" PRIMARY KEY using index "pk_person";

alter table "conferati"."organization_role" add constraint "organization_role_organization_fkey" FOREIGN KEY (organization) REFERENCES conferati.organization(id) not valid;

alter table "conferati"."organization_role" validate constraint "organization_role_organization_fkey";

alter table "conferati"."organization_role" add constraint "organization_role_person_fkey" FOREIGN KEY (person) REFERENCES conferati.person(id) not valid;

alter table "conferati"."organization_role" validate constraint "organization_role_person_fkey";


create sequence "public"."note_id_seq";

CREATE table IF NOT EXISTS "public"."app" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "logo_url" text not null,
    "admin" text,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."data_app_filter" (
    "id" bigint generated always as identity not null,
    "table_name" text not null,
    "app" text not null,
    "filter_jsonkeys" text[] not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."data_table" (
    "name" text not null
);


CREATE table IF NOT EXISTS "public"."module_section" (
    "id" bigint generated always as identity not null,
    "title" text not null,
    "module_section_type" bigint not null,
    "module_section_data" bigint not null,
    "richtext" text,
    "sectiondata" jsonb,
    "page_module" bigint not null,
    "vertical_page_position" integer,
    "created_at" timestamp without time zone not null default now(),
    "record_data" bigint,
    "record_filter" bigint,
    "record_type" bigint
);


CREATE table IF NOT EXISTS "public"."module_section_data" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "get_section_data_sql" text not null
);

CREATE table IF NOT EXISTS "public"."module_section_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "renderfunction" text,
    "created_at" timestamp without time zone not null default now()
);

CREATE table IF NOT EXISTS "public"."note" (
    "id" integer not null default nextval('note_id_seq'::regclass),
    "title" character varying(255) not null,
    "content" text not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."page_module" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "app" text not null,
    "title" text not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."page_record" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "app" text not null,
    "title" text not null,
    "description" text,
    "record_type" bigint not null,
    "record_filter" bigint not null,
    "record_data" bigint not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."page_record_record" (
    "id" bigint generated always as identity not null,
    "page_record" bigint not null,
    "linked_record" bigint not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."record_data" (
    "id" bigint generated always as identity not null,
    "data" jsonb not null,
    "record_type" bigint not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."record_filter" (
    "id" bigint generated always as identity not null,
    "app" bigint not null,
    "record_type" bigint not null,
    "filter_record_jsonkeys" text[] not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."record_section" (
    "id" bigint generated always as identity not null,
    "title" text not null,
    "record_section_type" bigint not null,
    "page_record" bigint not null,
    "sectiondata" jsonb,
    "vertical_page_position" integer not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."record_section_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "renderfunction" text not null,
    "record_type" bigint not null,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "public"."record_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "data_jsonschema" text not null,
    "created_at" timestamp without time zone not null default now()
);


alter sequence "public"."note_id_seq" owned by "public"."note"."id";

CREATE UNIQUE INDEX IF NOT EXISTS app_url_name_key ON public.app USING btree (url_name);

CREATE UNIQUE INDEX IF NOT EXISTS module_section_vertical_page_position_key ON public.module_section USING btree (vertical_page_position);

CREATE UNIQUE INDEX IF NOT EXISTS note_pkey ON public.note USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS page_record_id_key ON public.page_record USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS page_record_record_id_key ON public.page_record_record USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_app ON public.app USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_data_app_filter ON public.data_app_filter USING btree (table_name, app);

CREATE UNIQUE INDEX IF NOT EXISTS pk_data_table ON public.data_table USING btree (name);

CREATE UNIQUE INDEX IF NOT EXISTS pk_module_section_data ON public.module_section_data USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_module_section_type ON public.module_section_type USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_page_module ON public.page_module USING btree (url_name, app);

CREATE UNIQUE INDEX IF NOT EXISTS pk_page_record ON public.page_record USING btree (url_name, app);

CREATE UNIQUE INDEX IF NOT EXISTS pk_page_record_record ON public.page_record_record USING btree (page_record, linked_record);

CREATE UNIQUE INDEX IF NOT EXISTS pk_record_data ON public.record_data USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_record_filter ON public.record_filter USING btree (record_type, app);

CREATE UNIQUE INDEX IF NOT EXISTS pk_record_section ON public.record_section USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_record_section_type ON public.record_section_type USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS pk_record_type ON public.record_type USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS record_filter_id_key ON public.record_filter USING btree (id);

CREATE UNIQUE INDEX IF NOT EXISTS record_section_vertical_page_position_key ON public.record_section USING btree (vertical_page_position);

CREATE UNIQUE INDEX IF NOT EXISTS uc_module_section_vertical_page_position ON public.module_section USING btree (id);

alter table "public"."app" add constraint "pk_app" PRIMARY KEY using index "pk_app";

alter table "public"."data_app_filter" add constraint "pk_data_app_filter" PRIMARY KEY using index "pk_data_app_filter";

alter table "public"."data_table" add constraint "pk_data_table" PRIMARY KEY using index "pk_data_table";

alter table "public"."module_section" add constraint "uc_module_section_vertical_page_position" PRIMARY KEY using index "uc_module_section_vertical_page_position";

alter table "public"."module_section_data" add constraint "pk_module_section_data" PRIMARY KEY using index "pk_module_section_data";

alter table "public"."module_section_type" add constraint "pk_module_section_type" PRIMARY KEY using index "pk_module_section_type";

alter table "public"."note" add constraint "note_pkey" PRIMARY KEY using index "note_pkey";

alter table "public"."page_module" add constraint "pk_page_module" PRIMARY KEY using index "pk_page_module";

alter table "public"."page_record" add constraint "pk_page_record" PRIMARY KEY using index "pk_page_record";

alter table "public"."page_record_record" add constraint "pk_page_record_record" PRIMARY KEY using index "pk_page_record_record";

alter table "public"."record_data" add constraint "pk_record_data" PRIMARY KEY using index "pk_record_data";

alter table "public"."record_filter" add constraint "pk_record_filter" PRIMARY KEY using index "pk_record_filter";

alter table "public"."record_section" add constraint "pk_record_section" PRIMARY KEY using index "pk_record_section";

alter table "public"."record_section_type" add constraint "pk_record_section_type" PRIMARY KEY using index "pk_record_section_type";

alter table "public"."record_type" add constraint "pk_record_type" PRIMARY KEY using index "pk_record_type";

alter table "public"."app" add constraint "app_url_name_key" UNIQUE using index "app_url_name_key";

alter table "public"."module_section" add constraint "fk_module_section_module_section_type" FOREIGN KEY (module_section_type) REFERENCES module_section_type(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_module_section_type";

alter table "public"."module_section" add constraint "fk_module_section_record_data" FOREIGN KEY (record_data) REFERENCES record_data(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_data";

alter table "public"."module_section" add constraint "fk_module_section_record_filter" FOREIGN KEY (record_filter) REFERENCES record_filter(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_filter";

alter table "public"."module_section" add constraint "fk_module_section_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_type";

alter table "public"."module_section" add constraint "module_section_vertical_page_position_key" UNIQUE using index "module_section_vertical_page_position_key";

alter table "public"."page_record" add constraint "fk_page_record_app" FOREIGN KEY (app) REFERENCES app(url_name) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_app";

alter table "public"."page_record" add constraint "fk_page_record_record_data" FOREIGN KEY (record_data) REFERENCES record_data(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_data";

alter table "public"."page_record" add constraint "fk_page_record_record_filter" FOREIGN KEY (record_filter) REFERENCES record_filter(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_filter";

alter table "public"."page_record" add constraint "fk_page_record_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_type";

alter table "public"."page_record" add constraint "page_record_id_key" UNIQUE using index "page_record_id_key";

alter table "public"."page_record_record" add constraint "page_record_record_id_key" UNIQUE using index "page_record_record_id_key";

alter table "public"."record_data" add constraint "record_data_record_type_fkey" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_data" validate constraint "record_data_record_type_fkey";

alter table "public"."record_filter" add constraint "fk_record_filter_app" FOREIGN KEY (app) REFERENCES app(id) not valid;

alter table "public"."record_filter" validate constraint "fk_record_filter_app";

alter table "public"."record_filter" add constraint "fk_record_filter_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_filter" validate constraint "fk_record_filter_record_type";

alter table "public"."record_filter" add constraint "record_filter_id_key" UNIQUE using index "record_filter_id_key";

alter table "public"."record_section" add constraint "fk_record_section_record_section_type" FOREIGN KEY (record_section_type) REFERENCES record_section_type(id) not valid;

alter table "public"."record_section" validate constraint "fk_record_section_record_section_type";

alter table "public"."record_section" add constraint "record_section_vertical_page_position_key" UNIQUE using index "record_section_vertical_page_position_key";

alter table "public"."record_section_type" add constraint "fk_record_section_type_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_section_type" validate constraint "fk_record_section_type_record_type";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.exec(statement text)
 RETURNS SETOF record
 LANGUAGE plpgsql
AS $function$
BEGIN 
    RETURN QUERY EXECUTE $1 ; 
END 
$function$
;

CREATE OR REPLACE FUNCTION public.get_module_section_data(url_module text, url_app text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$
DECLARE 
join_fk text := 'j.' || $2;
data_tables record;
data jsonb := '[]';

this_module_section int;
this_statement text;
temp_jsonb jsonb;
temp_jsonb_data jsonb;
temp_statement text;
this_data record;
BEGIN


 FOR this_data in SELECT * FROM (
 WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
sql_table AS (SELECT a.id, b.get_section_data_sql FROM module_section a JOIN module_section_data b ON a.module_section_data = b.id WHERE page_module = (SELECT id FROM page_module))
 SELECT * FROM sql_table 
) z LOOP
-- RAISE EXCEPTION 'module_s_d id % - id %',this_data.id, this_data.get_section_data_sql;
 EXECUTE this_data.get_section_data_sql INTO temp_jsonb;
--  RAISE EXCEPTION '%', temp_jsonb;
temp_jsonb_data := json_build_object ('sectionId', this_data.id, 'section_data', temp_jsonb::jsonb)::jsonb;	
 if EXISTS (SELECT data->0) THEN
data :=  jsonb_concat(data, temp_jsonb_data );
ELSE
-- data := temp_jsonb_data;
data :=  temp_jsonb_data;
END IF;
END LOOP;

RETURN QUERY SELECT data;
END;
$function$
;



CREATE OR REPLACE FUNCTION public.get_module_section_data_with_app_filter(url_module text, url_app text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$
DECLARE 
join_fk text := 'j.' || $2;
data_tables record;
data jsonb := '[]';

this_module_section int;
this_statement text;
temp_jsonb jsonb;
temp_jsonb_data jsonb;
temp_statement text;
this_data record;
BEGIN


 FOR this_data in SELECT * FROM (
 WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
sql_table AS (SELECT a.id, b.get_section_data_sql FROM module_section a JOIN module_section_data b ON a.module_section_data = b.id WHERE page_module = (SELECT id FROM page_module))
 SELECT * FROM sql_table 
) z LOOP
-- RAISE EXCEPTION 'module_s_d id % - id %',this_data.id, this_data.get_section_data_sql;


 EXECUTE this_data.get_section_data_sql USING url_app INTO temp_jsonb;
--  RAISE EXCEPTION '%', temp_jsonb;
temp_jsonb_data := json_build_object ('sectionId', this_data.id, 'section_data', temp_jsonb::jsonb)::jsonb;	
 if EXISTS (SELECT data->0) THEN
data :=  jsonb_concat(data, temp_jsonb_data );
ELSE
-- data := temp_jsonb_data;
data :=  temp_jsonb_data;
END IF;
END LOOP;

RETURN QUERY SELECT data;
END;
$function$
;


GRANT USAGE ON SCHEMA conferati TO  postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA conferati to  postgres, authenticated, service_role, dashboard_user, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati  TO  postgres, authenticated, service_role, dashboard_user, anon;

-- GRANT USAGE ON SCHEMA conferati TO supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA conferati to supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati  TO supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;
