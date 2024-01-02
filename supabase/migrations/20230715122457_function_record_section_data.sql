set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_record_section_data_with_section_filter(record_id bigint, record_table text, app_name text)
 RETURNS TABLE(data jsonb)
 LANGUAGE plpgsql
AS $function$


DECLARE 
jsonb_section_data jsonb;
jsonb_record_label_data jsonb;
jsonb_record_data jsonb;
jsonb_sections_data jsonb := '[]';
jsonb_data jsonb;
jsonb_row_data jsonb;
jsonb_column_data jsonb;
row_data record;
this_data record;
BEGIN


 FOR this_data in SELECT * FROM (
 WITH 
page_record AS (SELECT id FROM page_record WHERE app = $3 AND page_record.record_name = $2),
sql_table AS (SELECT a.*, b.get_section_data_sql FROM record_section a JOIN record_section_data b ON a.record_section_data = b.id WHERE a.page_record = (SELECT id FROM page_record))
 SELECT * FROM sql_table 
) z LOOP


EXECUTE format(this_data.get_section_data_sql, 
			   record_table, this_data.joining_table, record_table, this_data.second_parent_table, this_data.second_parent_table) USING $1, this_data.id INTO jsonb_row_data;

SELECT json_agg(combined) as combined INTO jsonb_column_data FROM (SELECT record_table_column_labels_id as column_id, c.name as  record_name, column_name, label_name, column_position, ui_links_to_record, is_external_link FROM filters.record_section_columns_shown a 
JOIN record_table_column_labels b ON a.record_table_column_labels_id = b.id JOIN record_table c ON b.record_table_id = c.id WHERE record_section_id = this_data.id) as combined;
			   
jsonb_section_data := json_build_object ('section_id', this_data.id, 'section_column_data', jsonb_column_data, 
'section_row_data', jsonb_row_data::jsonb, 'vertical_page_position', to_json(this_data.vertical_page_position), 
'section_title', this_data.title,'section_richtext', this_data.richtext)::jsonb;	
 
 
 if EXISTS (SELECT jsonb_sections_data->0) THEN
jsonb_sections_data :=  jsonb_concat(jsonb_section_data, jsonb_sections_data );
ELSE
jsonb_sections_data :=  jsonb_section_data;
END IF;

END LOOP;

EXECUTE format('SELECT to_json(combined) FROM (SELECT * FROM conferati.%I WHERE id = $1) as combined', record_table) USING record_id INTO jsonb_record_data; 

SELECT json_agg(combined) as combined INTO jsonb_record_label_data FROM (SELECT record_table_column_labels_id as column_id, c.name as  record_name, column_name, label_name, column_position, ui_links_to_record, is_external_link FROM filters.record_page_columns_shown a 
JOIN record_table_column_labels b ON a.record_table_column_labels_id = b.id JOIN record_table c ON b.record_table_id = c.id WHERE page_record_id =  (SELECT id FROM page_record WHERE app = $3 AND page_record.record_name = $2)) as combined;

-- SELECT json_agg(combined) as combined INTO jsonb_record_label_data FROM (SELECT b.id as column_id,  column_name, c.name as record_name, label_name, is_external_link FROM record_table_column_labels b
-- JOIN record_table c ON b.record_table_id = c.id WHERE c.name = $2) as combined;

data := json_build_object ('record_sections_data', jsonb_sections_data, 'record_label_data', jsonb_record_label_data, 'record_data', jsonb_record_data );
RETURN QUERY SELECT data;
END;

$function$
;

