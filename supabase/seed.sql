 INSERT INTO note (title, content) VALUES ('first note','some description here');
 INSERT INTO note (title, content) VALUES ('second','... description here');
 INSERT INTO note (title, content) VALUES ('Remember','To water the plants'); 

 INSERT INTO app (url_name, logo_url) VALUES ('Wikilection', 'logo.png');
 INSERT INTO app (url_name, logo_url) VALUES ('Corporate', 'logo.png');


 INSERT INTO page_module (url_name, title, app) VALUES ('people','People', 'Wikilection');
 INSERT INTO page_module (url_name, title, app) VALUES ('governments','Governments', 'Wikilection');
 INSERT INTO page_module (url_name, title, app) VALUES ('news','News', 'Wikilection'); 


 INSERT INTO page_module (url_name, title, app) VALUES ('people','People', 'Corporate');
 INSERT INTO page_module (url_name, title, app) VALUES ('organizations','Organizations', 'Corporate');
 INSERT INTO page_module (url_name, title, app) VALUES ('news','News', 'Corporate'); 

INSERT INTO record_type (name, data_jsonschema) VALUES ('people', '');
INSERT INTO record_type (name, data_jsonschema) VALUES ('govts', '');
INSERT INTO module_section_type (name, renderfunction) VALUES ('record-list', '');
INSERT INTO module_section_type (name, renderfunction) VALUES ('govts-record-list', '');

INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH data AS (SELECT * FROM  conferati.organization_role a JOIN conferati.person b ON a.person = b.id)
SELECT json_agg(a) FROM (SELECT * FROM data) a');

--or this with app filter: 
INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_structuretable WHERE app_id = (SELECT id FROM app WHERE url_name = $1)),
filtered_data AS (SELECT id as org_role_id, title, person, org_id FROM conferati.organization_role c CROSS JOIN  (SELECT id as org_id FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter) d WHERE d.org_id = c.organization),
combined_data AS (SELECT * FROM  filtered_data a JOIN conferati.person b ON a.person = b.id JOIN conferati.organization c ON a.org_id = c.id)
SELECT json_agg( combined_data) FROM combined_data');

INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_structuretable WHERE app_id = (SELECT id FROM app WHERE url_name = $1))
SELECT json_agg(a) FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter');



INSERT INTO module_section (title, module_section_type, module_section_data, page_module) VALUES ('List of people', 1, 1, 1);
INSERT INTO module_section (title, module_section_type, module_section_data, page_module) VALUES ('List of Govts', 2, 3, 2);
INSERT INTO module_section (title, module_section_type, module_section_data, page_module) VALUES ('List of people', 1, 1, 4);
INSERT INTO module_section (title, module_section_type, module_section_data, page_module) VALUES ('List of Organizations', 2, 3, 5);

INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Justin Trudeau", "title": "Prime Minister of Canada"}' );
INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Pierre Polievre", "title": "Leader of the Official Opposition of Canada"}' );
INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Jagmeet Singh", "title": "Party leader of New Democratic Party"}' );


INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 1"}' );
INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 2"}' );
INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 3"}' );

INSERT INTO data_table (name) VALUES ('organization'),('person'),('organization_role');


INSERT INTO conferati.filtertypes_structuretable (type) VALUES ('Government'), ('Not for profit'), ('Political Party');
INSERT INTO conferati.app_whitefilter_structuretable (filter, table_address, column_address, app_id) VALUES ('Government', 'organization', 'type', 1), ('Not for profit', 'organization','type', 2), ('Political Party', 'organization','type', 1);


--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();


--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Home', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('People', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Governments', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Organizations', 'just testing', 'just testing');

--  INSERT INTO () VALUES ();