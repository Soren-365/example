alter table "public"."module_section" alter column "sectiondata" drop not null;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_module_section_data(url_module text, url_app text)
 RETURNS jsonb
 LANGUAGE sql
AS $function$

WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
module_sections AS (SELECT id, record_type, title  FROM module_section WHERE page_module = (SELECT id FROM page_module)),
data AS (SELECT a.id as record_data_id, record_type, data FROM record_data a JOIN module_sections b USING(record_type)),
data_table AS (
SELECT  a.id as module_section_id, a.title as module_section_name, json_agg(b) AS record_data FROM (SELECT * FROM module_sections) a JOIN data b USING(record_type) GROUP BY a.title, a.id
)
SELECT json_agg(data_table) FROM data_table;$function$;

drop function if exists "storage"."can_insert_object"(bucketid text, name text, owner uuid, metadata jsonb);


