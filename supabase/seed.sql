


--  INSERT INTO app (url_name, logo_url) VALUES ('Wikilection', '');
--  INSERT INTO app (url_name, logo_url) VALUES ('Corporate', '');


--  INSERT INTO page_module (url_name, title, app) VALUES ('people','People', 'Wikilection');
--  INSERT INTO page_module (url_name, title, app) VALUES ('governments','Governments', 'Wikilection');
--  INSERT INTO page_module (url_name, title, app) VALUES ('news','News', 'Wikilection'); 
--  INSERT INTO page_module (url_name, title, app) VALUES ('people','People', 'Corporate');
--  INSERT INTO page_module (url_name, title, app) VALUES ('organizations','Organizations', 'Corporate');
--  INSERT INTO page_module (url_name, title, app) VALUES ('news','News', 'Corporate'); 

-- INSERT INTO record_type (name) VALUES ('person');
-- INSERT INTO record_type (name) VALUES ('organization');
-- INSERT INTO record_type (name) VALUES ('organization_role');

-- --without app filter: 
-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH data AS (SELECT * FROM  conferati.organization_role a JOIN conferati.person b ON a.person = b.id)
-- SELECT json_agg(a) FROM (SELECT * FROM data) a');

-- --or this with app filter: 
-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_st WHERE app_id = (SELECT id FROM app WHERE url_name = $1)),
-- filtered_data AS (SELECT id as org_role_id, title, person, org_id FROM conferati.organization_role c CROSS JOIN  (SELECT id as org_id FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter) d WHERE d.org_id = c.organization),
-- combined_data AS (SELECT * FROM  conferati.person b  JOIN filtered_data a  ON a.person = b.id JOIN conferati.organization c ON a.org_id = c.id)
-- SELECT json_agg( combined_data) FROM combined_data');
-- --or this with app filter: 
-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_st WHERE app_id = (SELECT id FROM app WHERE url_name = $1))
-- SELECT json_agg(a) FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter');

-- INSERT INTO module_section_data ( description, get_section_data_sql) 
-- VALUES ('2 child tables, no filter',  'SELECT json_agg(combined) as combined FROM (SELECT * FROM conferati.%I a JOIN conferati.%I b  ON a.id = b.%I JOIN conferati.%I c ON c.id = b.%I ) as combined');

-- --without app filter: 
-- INSERT INTO module_section_data ( description, get_section_data_sql) 
-- VALUES ('no child table, no filter', 'SELECT json_agg(combined) as combined FROM (SELECT * FROM conferati.%I) as combined');

-- INSERT INTO module_section_data ( description, get_section_data_sql) 
-- VALUES ('2 child tables and filter', 'SELECT json_agg(combined) as combined FROM (SELECT * FROM conferati.%I a JOIN conferati.%I b  ON a.id = b.%I JOIN conferati.%I c ON c.id = b.%I JOIN conferati.app_whitefilter_st d ON d.filter = c.type WHERE table_address = $1 AND app_id = (SELECT id FROM app WHERE url_name = $2) ) as combined');



-- --or this with app filter: 
-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('SELECT json_agg(combined) as combined FROM (SELECT * FROM conferati.%I a JOIN conferati.%I b  ON a.id = b.%I) as combined');
-- --or this with app filter: 
-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('SELECT json_agg(combined) as combined FROM (SELECT * FROM conferati.%I a JOIN conferati.%I b  ON a.id = b.%I JOIN conferati.%I c ON a.id = c.%I) as combined');

-- INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_st WHERE app_id = (SELECT id FROM app WHERE url_name = $1)),
-- filtered_data AS (SELECT id as org_role_id, title, person, org_id FROM conferati.organization_role c CROSS JOIN  (SELECT id as org_id FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter) d WHERE d.org_id = c.organization),
-- combined_data AS (SELECT * FROM  conferati.person b  JOIN filtered_data a  ON a.person = b.id JOIN conferati.organization c ON a.org_id = c.id)
-- SELECT json_agg( combined_data) FROM combined_data');

-- INSERT INTO module_section (title,  module_section_data, record_table, joining_table, second_parent_table, page_module, vertical_page_position) VALUES ('List of people', 3, 'person', 'organization_role', 'organization', 1, null);
-- INSERT INTO module_section (title,  module_section_data, record_table, joining_table, second_parent_table, page_module, vertical_page_position) VALUES ('List of people', 3, 'person', null, null,  4,1);
-- INSERT INTO module_section (title,  module_section_data, record_table, joining_table, second_parent_table, page_module, vertical_page_position) VALUES ('List of Organizations', 1, 'organization', null, null, 5, null);
-- INSERT INTO module_section (title,  module_section_data, record_table, joining_table, second_parent_table, page_module, vertical_page_position) VALUES ('List of Govts', 1, 'organization', null, null,  2, null);
-- INSERT INTO module_section (title,  module_section_data, record_table, joining_table, second_parent_table, page_module, vertical_page_position) VALUES ('List of people', 1, 'person', 'organization_role', 'organization', 4, null);

-- SELECT * FROM app;

-- INSERT INTO page_record (app, record_name,title) VALUES ('Wikilection','person','Person');
-- INSERT INTO page_record (app, record_name,title) VALUES ('Corporate','organization','Organization');
-- INSERT INTO page_record (app, record_name,title) VALUES ('Corporate','person','Person');
-- INSERT INTO page_record (app, record_name,title) VALUES ('Wikilection','organization','Government');

-- INSERT INTO record_section ( page_record, record_section_data, joining_table, second_parent_table, vertical_page_position) VALUES (1,1, 'organization_role', 'organization',1);


-- SHOW data_directory;
 
-- docker exec -it  855930c17b54 /bin/bash
-- docker exec -it  855930c17b54 psql -U postgres -d postgres


-- /home/sg/Desktop/upwork/Adriel/conferati testdata/25 July


docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema conferati/filtertypes_st.csv" supabase_db_frontend:/var/lib/postgresql/data/filtertypes_st.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema conferati/organization.csv" supabase_db_frontend:/var/lib/postgresql/data/organization.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema conferati/organization_role.csv" supabase_db_frontend:/var/lib/postgresql/data/organization_role.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema conferati/person.csv" supabase_db_frontend:/var/lib/postgresql/data/person.csv

docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/app_whitefilter_st.csv" supabase_db_frontend:/var/lib/postgresql/data/app_whitefilter_st.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/record_section_whitefilter_st.csv" supabase_db_frontend:/var/lib/postgresql/data/record_section_whitefilter_st.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/record_section_blackfilter_st.csv" supabase_db_frontend:/var/lib/postgresql/data/record_section_blackfilter_st.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/module_section_columns_shown.csv" supabase_db_frontend:/var/lib/postgresql/data/module_section_columns_shown.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/record_section_columns_shown.csv" supabase_db_frontend:/var/lib/postgresql/data/record_section_columns_shown.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema filters/record_page_columns_shown.csv" supabase_db_frontend:/var/lib/postgresql/data/record_page_columns_shown.csv


docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/app.csv" supabase_db_frontend:/var/lib/postgresql/data/app.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/module_section_data.csv" supabase_db_frontend:/var/lib/postgresql/data/module_section_data.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/module_section.csv" supabase_db_frontend:/var/lib/postgresql/data/module_section.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/page_module.csv" supabase_db_frontend:/var/lib/postgresql/data/page_module.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/page_record.csv" supabase_db_frontend:/var/lib/postgresql/data/page_record.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/record_table.csv" supabase_db_frontend:/var/lib/postgresql/data/record_table.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/record_section.csv" supabase_db_frontend:/var/lib/postgresql/data/record_section.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/record_section_data.csv" supabase_db_frontend:/var/lib/postgresql/data/record_section_data.csv
docker cp "/home/sg/Desktop/upwork/Adriel/conferati testdata/7th september/schema public/record_table_column_labels.csv" supabase_db_frontend:/var/lib/postgresql/data/record_table_column_labels.csv



-- COPY conferati.filtertypes_st FROM 'filtertypes_st.csv' DELIMITER ',' CSV HEADER;

-- COPY conferati.organization
-- FROM 'organization.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY conferati.organization_role
-- FROM 'organization_role.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY conferati.person
-- FROM 'person.csv' 
-- DELIMITER ',' 
-- CSV HEADER;




-- COPY app
-- FROM 'app.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY record_table
-- FROM 'record_table.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY module_section
-- FROM 'module_section.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY page_module
-- FROM 'page_module.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY page_record
-- FROM 'page_record.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY record_section
-- FROM 'record_section.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY record_section_data
-- FROM 'record_section_data.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY record_table_column_labels
-- FROM 'record_table_column_labels.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY module_section_data
-- FROM 'module_section_data.csv' 
-- DELIMITER ',' 
-- CSV HEADER;



-- COPY filters.record_page_columns_shown
-- FROM 'record_page_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY filters.record_section_columns_shown
-- FROM 'record_section_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY filters.module_section_columns_shown
-- FROM 'module_section_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;


-- COPY filters.app_whitefilter_st
-- FROM 'app_whitefilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY filters.record_section_blackfilter_st
-- FROM 'record_section_blackfilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

-- COPY filters.record_section_whitefilter_st
-- FROM 'record_section_whitefilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;


-- docker exec -it 855930c17b54 /bin/bash
-- cd /var/lib/postgresql/data

-- psql -U postgres -d postgres -c "\COPY conferati.filtertypes_st FROM 'filtertypes_st.csv' DELIMITER ',' CSV HEADER;"


-- psql -U postgres -d postgres -c "\COPY module_section_data
-- FROM 'module_section_data.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"


-- psql -U postgres -d postgres -c "\COPY conferati.organization
-- FROM 'organization.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"


-- psql -U postgres -d postgres -c "\COPY conferati.organization_role
-- FROM 'organization_role.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY conferati.person
-- FROM 'person.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY app
-- FROM 'app.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY record_table
-- FROM 'record_table.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY page_module
-- FROM 'page_module.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"


-- psql -U postgres -d postgres -c "\COPY module_section
-- FROM 'module_section.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"



-- psql -U postgres -d postgres -c "\COPY page_record
-- FROM 'page_record.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY record_section_data
-- FROM 'record_section_data.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY record_section
-- FROM 'record_section.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"



-- psql -U postgres -d postgres -c "\COPY record_table_column_labels
-- FROM 'record_table_column_labels.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.record_page_columns_shown
-- FROM 'record_page_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.record_section_columns_shown
-- FROM 'record_section_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.module_section_columns_shown
-- FROM 'module_section_columns_shown.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.app_whitefilter_st
-- FROM 'app_whitefilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.record_section_blackfilter_st
-- FROM 'record_section_blackfilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"

-- psql -U postgres -d postgres -c "\COPY filters.record_section_whitefilter_st
-- FROM 'record_section_whitefilter_st.csv' 
-- DELIMITER ',' 
-- CSV HEADER;"
