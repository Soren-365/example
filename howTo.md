# how to add an app

 INSERT INTO app (url_name) VALUES ('Corporate');


</br></br></br>

# How to add a module to an app

 INSERT INTO page_module (url_name, title, app) VALUES ('organizations','Organizations', 'Corporate');


</br></br></br>

# How to add a table section query to an app (sometimes the query already exists)

INSERT INTO module_section_data ( get_section_data_sql) VALUES ('WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_st WHERE app_id = (SELECT id FROM app WHERE url_name = $1))
SELECT json_agg(a) FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter');

in this example the query is:

-
WITH filter_settings AS (SELECT filter, table_address, column_address FROM conferati.app_whitefilter_st WHERE app_id = (SELECT id FROM app WHERE url_name = $1))
SELECT json_agg(a) FROM conferati.organization a JOIN filter_settings b ON a.type = b.filter
-

</br>

## 1.
change the $1 with a valid app url name ( in this case $1 becomes 'Corporate' )
-


</br>

## 2.
be sure to test it and see that it returns the correct json by inserting and running in
https://app.supabase.com/project/opygivcsedwyrpbmudit/sql
-


</br>

## 3.
copy the resulting json (right click on return data), and copy it into 

https://jsonlint.com/

press 'validate json'
-

</br>

## 4. 
if you get a valid result you can go ahead and do the INSERT INTO above (remember to first change back the 'Corporate' to $1 in the string)

</br></br></br>


# How to add a table layout to an app

this one is not implemented yet

INSERT INTO module_section_type (name, renderfunction) VALUES ('govts-record-list', '');



</br></br></br>


# How to add a section to a module or table layout

INSERT INTO module_section (title, module_section_type, module_section_data, page_module) VALUES ('List of Organizations', 2, 3, 5);


</br></br></br>
