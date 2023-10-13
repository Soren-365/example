
DROP function IF EXISTS get_module_sections; 

CREATE OR REPLACE FUNCTION public.get_module_section_data(url_module text, url_app text)
 RETURNS jsonb
 LANGUAGE sql
AS $function$WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
module_sections AS (SELECT id, record_table, title  FROM module_section WHERE page_module = (SELECT id FROM page_module)),
data AS (SELECT a.id as record_data_id, record_table, data FROM record_data a JOIN module_sections b USING(record_table)),
data_table AS (
SELECT  a.id as module_section_id, a.title as module_section_name, json_agg(b) AS record_data FROM (SELECT * FROM module_sections) a JOIN data b USING(record_table) GROUP BY a.title, a.id
)
SELECT json_agg(data_table) FROM data_table;$function$
;
