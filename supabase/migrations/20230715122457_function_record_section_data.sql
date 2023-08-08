

CREATE OR REPLACE FUNCTION public.get_record_section_data_with_section_filter(record_id bigint, record_type text, app_name text)
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
			   record_type, this_data.joining_table, record_type, this_data.second_parent_table, this_data.second_parent_table) USING $1, this_data.id INTO jsonb_row_data;

-- WITH cte as (
-- SELECT * FROM conferati.person a JOIN conferati.organization_role b  ON a.id = b.person JOIN conferati.organization c ON c.id = b.organization)
-- SELECT * FROM cte a JOIN (SELECT * FROM conferati.app_whitefilter_structuretable WHERE table_address = 'organization' AND app_id = (SELECT id FROM app WHERE url_name = 'Wikilection')) d ON d.filter = a.type 

-- SELECT json_agg(combined) INTO jsonb_row_data FROM (SELECT * FROM row_data) as combined;



SELECT json_agg(combined) as combined INTO jsonb_column_data FROM (SELECT record_type_column_labels_id as column_id, c.name as  record_name, column_name, label_name, column_position, ui_links_to_record FROM record_section_columns_shown a 
JOIN record_type_column_labels b ON a.record_type_column_labels_id = b.id JOIN record_type c ON b.record_type_id = c.id WHERE record_section_id = this_data.id) as combined;
			   
jsonb_section_data := json_build_object ('section_id', this_data.id, 'section_column_data', jsonb_column_data, 'section_row_data', jsonb_row_data::jsonb, 'vertical_page_position', to_json(this_data.vertical_page_position), 'section_title', this_data.title)::jsonb;	
 
 
 if EXISTS (SELECT jsonb_sections_data->0) THEN
jsonb_sections_data :=  jsonb_concat(jsonb_section_data, jsonb_sections_data );
ELSE
jsonb_sections_data :=  jsonb_section_data;
END IF;

END LOOP;

EXECUTE format('SELECT to_json(combined) FROM (SELECT * FROM conferati.%I WHERE id = $1) as combined', record_type) USING record_id INTO jsonb_record_data; 
			   
SELECT json_agg(combined) as combined INTO jsonb_record_label_data FROM (SELECT b.id as column_id,  column_name, c.name as record_name, label_name, is_external_link FROM record_type_column_labels b
JOIN record_type c ON b.record_type_id = c.id WHERE c.name = $2) as combined;

data := json_build_object ('record_sections_data', jsonb_sections_data, 'record_label_data', jsonb_record_label_data, 'record_data', jsonb_record_data );
RETURN QUERY SELECT data;
END;





$function$
;

