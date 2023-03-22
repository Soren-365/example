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
--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();
--  INSERT INTO () VALUES ();


--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Home', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('People', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Governments', 'just testing', 'just testing');
--  INSERT INTO moduletype (name, renderfunction, data_jsonschema) VALUES ('Organizations', 'just testing', 'just testing');

--  INSERT INTO () VALUES ();