-- DROP SCHEMA conferati CASCADE;

create schema if not exists "conferati";

DROP TABLE IF EXISTS "conferati"."person";
DROP TABLE IF EXISTS "conferati"."organization";
DROP TABLE IF EXISTS "conferati"."organization_role";
DROP TABLE IF EXISTS "conferati"."filtertypes_st";
DROP TABLE IF EXISTS "conferati"."app_whitefilter_st";


create table "conferati"."filtertypes_st" (
    "id" bigint generated by default as identity not null,
    "type" text PRIMARY KEY ,
    "created_at" timestamp with time zone default now()
);



CREATE table IF NOT EXISTS "conferati"."organization_role" (
    "id" bigint PRIMARY KEY generated always as identity,
    "person" bigint not null,
    "organization" bigint not null,
    "title" text not null,
    "start_date" date,
    "end_date" date,
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "conferati"."organization" (
    "id" bigint PRIMARY KEY generated always as identity,
    "name" text not null,
    "type" text not null REFERENCES conferati.filtertypes_st(type),
    "created_at" timestamp without time zone not null default now()
);


CREATE table IF NOT EXISTS "conferati"."person" (
    "id" bigint PRIMARY KEY generated always as identity,
    "first_name" text not null,
    "last_name" text not null,
    "birthdate" date,
    "wikipedia_page" text,
    "created_at" timestamp without time zone not null default now()
);


create table "conferati"."app_whitefilter_st" (
    "id" bigint PRIMARY KEY generated by default as identity,
    "filter" text not null REFERENCES conferati.filtertypes_st(type),
    "table_address" text not null REFERENCES public.record_type(name),
    "app_id" bigint not null REFERENCES public.app(id),
    "column_address" text not null DEFAULT 'type',
    "created_at" timestamp with time zone default now()
);


create table "conferati"."record_section_whitefilter_st" (
    "id" bigint PRIMARY KEY generated by default as identity,
    "filter" text not null REFERENCES conferati.filtertypes_st(type),
    "table_address" text not null REFERENCES public.record_type(name),
    "record_section_id" bigint not null REFERENCES public.record_section(id),
    "column_address" text not null DEFAULT 'type',
    "created_at" timestamp with time zone default now()
);

create table "conferati"."record_section_blackfilter_st" (
    "id" bigint PRIMARY KEY generated by default as identity,
    "filter" text not null REFERENCES conferati.filtertypes_st(type),
    "table_address" text not null REFERENCES public.record_type(name),
    "record_section_id" bigint not null REFERENCES public.record_section(id),
    "column_address" text not null DEFAULT 'type',
    "created_at" timestamp with time zone default now()
);

-- ALTER TABLE conferati.app_whitefilter_st
--     ADD CONSTRAINT fk_filter FOREIGN KEY (filter) REFERENCES conferati.filtertypes_st(type);

-- ALTER TABLE conferati.app_whitefilter_st
--     ADD CONSTRAINT fk_table_address FOREIGN KEY (table_address) REFERENCES public.record_type(name);

-- ALTER TABLE conferati.app_whitefilter_st
--     ADD CONSTRAINT fk_table_address FOREIGN KEY (app_id) REFERENCES public.app(id);





-- CREATE UNIQUE INDEX app_whitefilter_types_pkey ON conferati.app_whitefilter_structuretable USING btree (id);

-- CREATE UNIQUE INDEX type_stucturetable_pkey ON conferati.filtertypes_structuretable USING btree (id);

-- CREATE UNIQUE INDEX type_stucturetable_type_key ON conferati.filtertypes_structuretable USING btree (type);

-- alter table "conferati"."app_whitefilter_structuretable" add constraint "app_whitefilter_types_pkey" PRIMARY KEY using index "app_whitefilter_types_pkey";

-- alter table "conferati"."filtertypes_structuretable" add constraint "type_stucturetable_pkey" PRIMARY KEY using index "type_stucturetable_pkey";

-- alter table "conferati"."app_whitefilter_structuretable" add constraint "app_whitefilter_structuretable_app_id_fkey" FOREIGN KEY (app_id) REFERENCES app(id) not valid;

-- alter table "conferati"."app_whitefilter_structuretable" validate constraint "app_whitefilter_structuretable_app_id_fkey";

-- alter table "conferati"."app_whitefilter_structuretable" add constraint "app_whitefilter_structuretable_filter_fkey" FOREIGN KEY (filter) REFERENCES conferati.filtertypes_structuretable(type) not valid;

-- alter table "conferati"."app_whitefilter_structuretable" validate constraint "app_whitefilter_structuretable_filter_fkey";

-- alter table "conferati"."filtertypes_structuretable" add constraint "type_stucturetable_type_key" UNIQUE using index "type_stucturetable_type_key";

-- alter table "conferati"."organization" add constraint "organization_type_fkey" FOREIGN KEY (type) REFERENCES conferati.filtertypes_structuretable(type) not valid;

-- alter table "conferati"."organization" validate constraint "organization_type_fkey";

-- alter table "public"."module_section_data" alter column "name" drop not null;


-- set check_function_bodies = off;


