
set check_function_bodies = off;


CREATE OR REPLACE FUNCTION public.get_module_section_data_with_app_filter(url_module text, url_app text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$


DECLARE 
data jsonb := '[]';
jsonb_data jsonb;
jsonb_row_data jsonb;
jsonb_column_data jsonb;
row_data record;
this_data record;
BEGIN


 FOR this_data in SELECT * FROM (
 WITH 
page_module AS (SELECT id FROM page_module WHERE url_name = $1 AND app = $2),
sql_table AS (SELECT a.*, b.get_section_data_sql FROM module_section a JOIN module_section_data b ON a.module_section_data = b.id WHERE page_module = (SELECT id FROM page_module))
 SELECT * FROM sql_table 
) z LOOP




EXECUTE format(this_data.get_section_data_sql , 
			   this_data.record_table, this_data.record_table, this_data.joining_table, this_data.record_table , this_data.second_parent_table , this_data.second_parent_table) USING this_data.app_filter_on_table ,url_app INTO jsonb_row_data;

SELECT json_agg(combined) as combined INTO jsonb_column_data FROM (SELECT record_table_column_labels_id as column_id, c.name as  record_name, column_name, label_name, column_position, ui_links_to_record, is_external_link FROM filters.module_section_columns_shown a 
JOIN record_table_column_labels b ON a.record_table_column_labels_id = b.id JOIN record_table c ON b.record_table_id = c.id WHERE module_section_id = this_data.id) as combined;
			   
jsonb_data := json_build_object ('section_id', this_data.id, 'section_column_data', jsonb_column_data,
 'section_row_data', jsonb_row_data::jsonb, 'main_record_name', this_data.record_table, 'section_richtext', this_data.richtext)::jsonb;		
  
 if EXISTS (SELECT data->0) THEN
data :=  jsonb_concat(data, jsonb_data );
ELSE
data :=  jsonb_data;
END IF;

END LOOP;


RETURN QUERY SELECT data;
END;

$function$
;

