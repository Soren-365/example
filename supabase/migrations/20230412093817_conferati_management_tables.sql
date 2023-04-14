alter table "public"."page_module" drop constraint "fk_page_module_app";

alter table "public"."page_module" drop constraint "page_module_id_key";

drop index if exists "public"."page_module_id_key";

create table "public"."data_app_filter" (
    "id" bigint generated always as identity not null,
    "table_name" text not null,
    "app" text not null,
    "filter_jsonkeys" text[] not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."data_table" (
    "name" text not null
);


create table "public"."module_section_data" (
    "id" bigint generated always as identity,
    "name" text not null,
    "get_section_data_sql" text not null
);

CREATE UNIQUE INDEX pk_module_section_data ON public.module_section_data USING btree (id);

alter table "public"."module_section_data" add constraint "pk_module_section_data" PRIMARY KEY using index "pk_module_section_data";


CREATE UNIQUE INDEX pk_data_app_filter ON public.data_app_filter USING btree (table_name, app);

CREATE UNIQUE INDEX pk_data_table ON public.data_table USING btree (name);



alter table "public"."data_app_filter" add constraint "pk_data_app_filter" PRIMARY KEY using index "pk_data_app_filter";

alter table "public"."data_table" add constraint "pk_data_table" PRIMARY KEY using index "pk_data_table";



set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.module_section_data(join_table text, data_table text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$
DECLARE 
jointable text := 'conferati.' || $1;
datatable text := 'conferati.' || $2;
join_fk text := 'j.' || $2;
BEGIN


RETURN QUERY EXECUTE 'WITH data as (SELECT * FROM ' || jointable || ' j JOIN ' || datatable || ' d ON ' || join_fk || ' = d.id )
SELECT jsonb_agg(c) FROM (SELECT data.' || data_table || ' , data.first_name, data.last_name, data.title FROM data) c';

END;

$function$
;


