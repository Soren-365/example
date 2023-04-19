alter table "conferati"."organization_role" drop constraint "organization_role_organization_fkey";

alter table "conferati"."organization_role" drop constraint "organization_role_person_fkey";

alter table "conferati"."organization_role" drop constraint "pk_role";

drop index if exists "conferati"."pk_role";

drop table "conferati"."organization_role";

create table "conferati"."organizaion_role" (
    "id" bigint generated always as identity not null,
    "person" bigint not null,
    "organization" bigint not null,
    "title" text not null,
    "createdAt" timestamp without time zone not null default now(),
    "start_date" date,
    "end_date" date
);


CREATE UNIQUE INDEX pk_role ON conferati.organizaion_role USING btree (id);

alter table "conferati"."organizaion_role" add constraint "pk_role" PRIMARY KEY using index "pk_role";

alter table "conferati"."organizaion_role" add constraint "organizaion_role_organization_fkey" FOREIGN KEY (organization) REFERENCES conferati.organization(id) not valid;

alter table "conferati"."organizaion_role" validate constraint "organizaion_role_organization_fkey";

alter table "conferati"."organizaion_role" add constraint "organizaion_role_person_fkey" FOREIGN KEY (person) REFERENCES conferati.person(id) not valid;

alter table "conferati"."organizaion_role" validate constraint "organizaion_role_person_fkey";


alter table "public"."record_data" drop constraint "fk_record_data_record_type";

alter table "public"."module_section" drop column "module_section_data";

alter table "public"."module_section" drop column "section_filter_jsonschema";

alter table "public"."module_section" add column "record_data" bigint;

alter table "public"."module_section" add column "record_filter" bigint;

alter table "public"."module_section" add column "record_type" bigint;

alter table "public"."module_section" alter column "title" set not null;

alter table "public"."module_section_type" drop column "module_section_data";

alter table "public"."module_section_type" add column "record_type" bigint not null;

CREATE UNIQUE INDEX record_section_vertical_page_position_key ON public.record_section USING btree (vertical_page_position);

alter table "public"."module_section" add constraint "fk_module_section_record_data" FOREIGN KEY (record_data) REFERENCES record_data(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_data";

alter table "public"."module_section" add constraint "fk_module_section_record_filter" FOREIGN KEY (record_filter) REFERENCES record_filter(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_filter";

alter table "public"."module_section" add constraint "fk_module_section_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_record_type";

alter table "public"."module_section_type" add constraint "fk_module_section_type_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."module_section_type" validate constraint "fk_module_section_type_record_type";

alter table "public"."record_data" add constraint "record_data_record_type_fkey" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_data" validate constraint "record_data_record_type_fkey";

alter table "public"."record_section" add constraint "record_section_vertical_page_position_key" UNIQUE using index "record_section_vertical_page_position_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_module_sections(url_module text, url_app text)
 RETURNS TABLE(id bigint, data jsonb, record_type text, module_section text)
 LANGUAGE sql
AS $function$

WITH page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
module_sections AS (SELECT id, record_type  FROM module_section WHERE page_module = (SELECT id FROM page_module))
SELECT a.id, a.data, a.record_type, b.title FROM record_data a JOIN module_section b ON a.record_type = (SELECT record_type FROM module_sections);



$function$
;

CREATE OR REPLACE FUNCTION public.getrecordsformodulesection(bigint)
 RETURNS SETOF module_section
 LANGUAGE sql
AS $function$
    SELECT * FROM module_section WHERE page_module = $1;
$function$
;

CREATE OR REPLACE FUNCTION public.getrecordsformodulesection(text)
 RETURNS SETOF module_section
 LANGUAGE sql
AS $function$
    SELECT * FROM module_section WHERE page_module = (SELECT id FROM page_module WHERE url_name = $1);
$function$
;


