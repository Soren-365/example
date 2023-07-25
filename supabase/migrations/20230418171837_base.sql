-- DROP SCHEMA public CASCADE;


create schema if not exists "public";
DROP TABLE IF EXISTS "public"."app";
DROP TABLE IF EXISTS "public"."record_type";
DROP TABLE IF EXISTS "public"."record_type_column_labels";

CREATE table IF NOT EXISTS "public"."app" (
    "id" bigint PRIMARY KEY generated always as identity,
    "url_name" text UNIQUE not null,
    "logo_url" text not null,
    "admin" text,
    "created_at" timestamp without time zone not null default now()
);

CREATE table IF NOT EXISTS "public"."record_type" (
    "id" bigint PRIMARY KEY generated always as identity,
    "name" text not null UNIQUE,
    "data_jsonschema" text,
    "created_at" timestamp without time zone not null default now()
);

CREATE TABLE IF NOT EXISTS "public"."record_type_column_labels" (
    "id" bigint generated always as identity NOT NULL,
    "record_type_id" bigint NOT NULL REFERENCES record_type(id),
    "column_name" text   NOT NULL UNIQUE,
    "label_name" text   NOT NULL,
      CONSTRAINT "pk_record_type_column_labels" PRIMARY KEY (
        "record_type_id","column_name"
     )
);


--//-- 

DROP TABLE IF EXISTS "public"."page_module";
DROP TABLE IF EXISTS "public"."module_section_columns_shown";
DROP TABLE IF EXISTS "public"."module_section";
DROP TABLE IF EXISTS "public"."module_section_data";

CREATE table IF NOT EXISTS "public"."page_module" (
    "id" bigint generated always as identity UNIQUE NOT NULL,
    "url_name" text,
    "app" text,
    "title" text,
    "created_at" timestamp without time zone not null default now(),
    CONSTRAINT "pk_page_module" PRIMARY KEY (
        "url_name","app"
     )
);

CREATE TABLE IF NOT EXISTS "public"."module_section_columns_shown" (
    "id" bigint generated always as identity NOT NULL,
    "module_section_id" bigint,
    "record_type_column_labels_id" bigint,
    "column_position" integer,
    "ui_links_to_record" boolean  NOT NULL DEFAULT false,
    CONSTRAINT "pk_module_section_columns_shown" PRIMARY KEY (
        "module_section_id","record_type_column_labels_id"
     )
);


CREATE table IF NOT EXISTS "public"."module_section_data" (
    "id" bigint PRIMARY KEY generated always as identity,
    "get_section_data_sql" text not null,
    "description" text
);

CREATE table IF NOT EXISTS "public"."module_section" (
    "id" bigint generated always as identity not null,
    "title" text   NOT NULL,
    "record_name" text NOT NULL REFERENCES record_type(name),
    "joining_name" text REFERENCES record_type(name),
    "second_parent_name" text REFERENCES record_type(name),
    "richtext" text,
    "module_section_data" bigint REFERENCES module_section_data(id) NOT NULL,
    "page_module" bigint NOT NULL REFERENCES page_module(id),
    "vertical_page_position" int,
    "created_at" timestamp without time zone not null default now()
);




DROP TABLE IF EXISTS "public"."page_record";

CREATE table IF NOT EXISTS "public"."page_record" (
    "id" bigint generated always as identity UNIQUE not null,
    "app" text not null REFERENCES app(url_name),
    "title" text not null,
    "description" text,
    "record_name" text not null REFERENCES record_type(name),
    "created_at" timestamp without time zone not null default now(),
    CONSTRAINT "pk_page_record" PRIMARY KEY (
        "app","record_name"
     )
);


DROP TABLE IF EXISTS "public"."record_section_columns_shown";
DROP TABLE IF EXISTS "public"."record_section_data";
DROP TABLE IF EXISTS "public"."record_section";

CREATE TABLE IF NOT EXISTS "public"."record_section_columns_shown" (
    "id" bigint generated always as identity NOT NULL,
    "record_section_id" bigint,
    "record_type_column_labels_id" bigint,
    "column_position" integer,
    "ui_links_to_record" boolean  NOT NULL DEFAULT false,
    CONSTRAINT "pk_record_section_columns_shown" PRIMARY KEY (
        "record_section_id","record_type_column_labels_id"
     )
);

CREATE table IF NOT EXISTS "public"."record_section_data" (
    "id" bigint PRIMARY KEY generated always as identity,
    "get_section_data_sql" text not null,
    "description" text not null
);

CREATE table IF NOT EXISTS "public"."record_section" (
    "id" bigint PRIMARY KEY generated always as identity,
    "title" text   NULL,
    "page_record" bigint NOT NULL REFERENCES page_record(id),
    "joining_name" text REFERENCES record_type(name),
    "second_parent_name" text REFERENCES record_type(name),
    "record_section_data" bigint NOT NULL REFERENCES record_section_data(id),
    "vertical_page_position" int NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL
);






-- CREATE UNIQUE INDEX IF NOT EXISTS app_url_name_key ON public.app USING btree (url_name);

-- CREATE UNIQUE INDEX IF NOT EXISTS page_record_id_key ON public.page_record USING btree (id);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_app ON public.app USING btree (id);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_data_app_filter ON public.data_app_filter USING btree (table_name, app);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_data_table ON public.data_table USING btree (name);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_module_section_data ON public.module_section_data USING btree (id);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_module_section ON public.module_section USING btree (id);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_page_module ON public.page_module USING btree (url_name, app);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_record_section ON public.record_section USING btree (id);

-- CREATE UNIQUE INDEX IF NOT EXISTS pk_record_type ON public.record_type USING btree (id);


-- alter table "public"."record_type" add constraint "pk_record_type" PRIMARY KEY using index "pk_record_type";

-- alter table "public"."app" add constraint "app_url_name_key" UNIQUE using index "app_url_name_key";

-- set check_function_bodies = off;

