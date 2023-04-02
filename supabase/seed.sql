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
INSERT INTO module_section_type (name, renderfunction, record_type) VALUES ('record-list', '', 1);
INSERT INTO module_section_type (name, renderfunction, record_type) VALUES ('govts-record-list', '', 2);
INSERT INTO module_section (title, module_section_type, page_module, record_type) VALUES ('List of people', 1, 1, 1);
INSERT INTO module_section (title, module_section_type, page_module, record_type) VALUES ('List of Govts', 2, 1, 2);


INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Justin Trudeau", "title": "Prime Minister of Canada"}' );
INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Pierre Polievre", "title": "Leader of the Official Opposition of Canada"}' );
INSERT INTO record_data (record_type, data) VALUES (1, ' {"name": "Jagmeet Singh", "title": "Party leader of New Democratic Party"}' );


INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 1"}' );
INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 2"}' );
INSERT INTO record_data (record_type, data) VALUES (2, ' {"name": "Govt 3"}' );



INSERT INTO conferati.person (first_name, last_name) VALUES ('Justin', 'Trudeau');
INSERT INTO conferati.organization (name) VALUES ('Government of Canada');
--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();


--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Home', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('People', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Governments', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Organizations', 'just testing', 'just testing');

--  INSERT INTO () VALUES ();