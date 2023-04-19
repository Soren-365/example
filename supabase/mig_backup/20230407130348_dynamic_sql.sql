drop function if exists "public"."exec"(text);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.exec(statement text)
 RETURNS SETOF record
 LANGUAGE plpgsql
AS $function$
BEGIN 
    RETURN QUERY EXECUTE $1 ; 
END 
$function$
;
