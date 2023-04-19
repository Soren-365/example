SELECT * FROM get_module_section_data( 'people', 'Wikilection');

WITH data AS (SELECT * FROM  conferati.organization_role a JOIN conferati.person b ON a.person = b.id JOIN conferati.organization c ON a.organization = c.id )
SELECT * FROM (SELECT * FROM data) a;

SELECT * FROM  conferati.organization_role a JOIN conferati.person b ON a.person = b.id

WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_structuretable WHERE app_id = 1),
filtered_data AS (SELECT * FROM conferati.organization_role c CROSS JOIN  (SELECT id as org_id FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter) d WHERE d.org_id = c.organization),
combined_data AS (SELECT * FROM  filtered_data a JOIN conferati.person b ON a.person = b.id JOIN conferati.organization c ON a.organization = c.id)
SELECT json_agg( combined_data) FROM combined_data;