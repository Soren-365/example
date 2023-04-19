drop function if exists "public"."get_module_section_data"(url_module text, url_app text);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.module_section_data_json(join_table text, data_table text)
 RETURNS jsonb
 LANGUAGE plpgsql
AS $function$
DECLARE 
join_fk text := 'j.' || $2;
data_tables record;
returnjsonb jsonb := '{}';

this_statement text;
temp_jsonb jsonb;
temp_statement text;

BEGIN
 
 FOR this_statement in SELECT * FROM (
	 WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = 'people' AND app = 'Wikilection'),
sql_table AS (SELECT b.get_section_data_sql FROM module_section a JOIN module_section_data b ON a.module_section_data = b.id WHERE page_module = (SELECT id FROM page_module))
 SELECT * FROM sql_table
) z LOOP
 EXECUTE this_statement INTO temp_jsonb;

returnjsonb := returnjsonb::jsonb || temp_jsonb::jsonb;

END LOOP;

RETURN returnjsonb;
END;
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

CREATE OR REPLACE FUNCTION public.module_section_data(join_table text, data_table text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$
DECLARE 
join_fk text := 'j.' || $2;
data_tables record;
returnjsonb jsonb := '{}';

this_statement text;
temp_jsonb jsonb;
temp_statement text;

BEGIN
 
 FOR this_statement in SELECT * FROM (
	 WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = 'people' AND app = 'Wikilection'),
sql_table AS (SELECT b.get_section_data_sql FROM module_section a JOIN module_section_data b ON a.module_section_data = b.id WHERE page_module = (SELECT id FROM page_module))
 SELECT * FROM sql_table
) z LOOP
 EXECUTE this_statement INTO temp_jsonb;
returnjsonb := returnjsonb::jsonb || temp_jsonb::jsonb;
END LOOP;

RETURN QUERY SELECT * FROM returnjsonb;
END;
$function$
;


