create sequence "public"."note_id_seq";

create table "public"."app" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "logo_url" text not null,
    "admin" text,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."module_section" (
    "id" bigint generated always as identity not null,
    "title" text,
    "module_section_type" bigint not null,
    "module_section_data" bigint,
    "richtext" text,
    "sectiondata" jsonb not null,
    "page_module" bigint not null,
    "vertical_page_position" integer,
    "section_filter_jsonschema" text ,
    "createdAt" timestamp without time zone not null default now()
);



create table "public"."module_section_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "renderfunction" text not null,
    "module_section_data" bigint not null,
    "createdAt" timestamp without time zone not null default now()
);




create table "public"."note" (
    "id" integer not null default nextval('note_id_seq'::regclass),
    "title" character varying(255) not null,
    "content" text not null,
    "createdat" date default now()
);


create table "public"."page_module" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "app" text not null,
    "title" text not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."page_record" (
    "id" bigint generated always as identity not null,
    "url_name" text not null,
    "app" text not null,
    "title" text not null,
    "description" text,
    "record_type" bigint not null,
    "record_filter" bigint not null,
    "record_data" bigint not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."page_record_record" (
    "id" bigint generated always as identity not null,
    "page_record" bigint not null,
    "linked_record" bigint not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."record_data" (
    "id" bigint generated always as identity not null,
    "data" jsonb not null,
    "record_type" bigint not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."record_filter" (
    "id" bigint generated always as identity not null,
    "app" bigint not null,
    "record_type" bigint not null,
    "filter_record_jsonkeys" text[] not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."record_section" (
    "id" bigint generated always as identity not null,
    "title" text not null,
    "record_section_type" bigint not null,
    "page_record" bigint not null,
    "sectiondata" jsonb,
    "vertical_page_position" integer not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."record_section_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "renderfunction" text not null,
    "record_type" bigint not null,
    "createdAt" timestamp without time zone not null default now()
);


create table "public"."record_type" (
    "id" bigint generated always as identity not null,
    "name" text not null,
    "data_jsonschema" text not null,
    "createdAt" timestamp without time zone not null default now()
);



alter sequence "public"."note_id_seq" owned by "public"."note"."id";

CREATE UNIQUE INDEX app_url_name_key ON public.app USING btree (url_name);

CREATE UNIQUE INDEX module_section_vertical_page_position_key ON public.module_section USING btree (vertical_page_position);

CREATE UNIQUE INDEX note_pkey ON public.note USING btree (id);

CREATE UNIQUE INDEX page_module_id_key ON public.page_module USING btree (id);

CREATE UNIQUE INDEX page_record_id_key ON public.page_record USING btree (id);

CREATE UNIQUE INDEX page_record_record_id_key ON public.page_record_record USING btree (id);

CREATE UNIQUE INDEX pk_app ON public.app USING btree (id);

CREATE UNIQUE INDEX pk_module_section_type ON public.module_section_type USING btree (id);

CREATE UNIQUE INDEX pk_page_module ON public.page_module USING btree (url_name, app);

CREATE UNIQUE INDEX pk_page_record ON public.page_record USING btree (url_name, app);

CREATE UNIQUE INDEX pk_page_record_record ON public.page_record_record USING btree (page_record, linked_record);

CREATE UNIQUE INDEX pk_record_data ON public.record_data USING btree (id);

CREATE UNIQUE INDEX pk_record_filter ON public.record_filter USING btree (record_type, app);

CREATE UNIQUE INDEX pk_record_section ON public.record_section USING btree (id);

CREATE UNIQUE INDEX pk_record_section_type ON public.record_section_type USING btree (id);

CREATE UNIQUE INDEX pk_record_type ON public.record_type USING btree (id);

CREATE UNIQUE INDEX record_filter_id_key ON public.record_filter USING btree (id);



CREATE UNIQUE INDEX uc_module_section_vertical_page_position ON public.module_section USING btree (id);

alter table "public"."app" add constraint "pk_app" PRIMARY KEY using index "pk_app";

alter table "public"."module_section" add constraint "uc_module_section_vertical_page_position" PRIMARY KEY using index "uc_module_section_vertical_page_position";

alter table "public"."module_section_type" add constraint "pk_module_section_type" PRIMARY KEY using index "pk_module_section_type";

alter table "public"."note" add constraint "note_pkey" PRIMARY KEY using index "note_pkey";

alter table "public"."page_module" add constraint "pk_page_module" PRIMARY KEY using index "pk_page_module";

alter table "public"."page_record" add constraint "pk_page_record" PRIMARY KEY using index "pk_page_record";

alter table "public"."page_record_record" add constraint "pk_page_record_record" PRIMARY KEY using index "pk_page_record_record";

alter table "public"."record_data" add constraint "pk_record_data" PRIMARY KEY using index "pk_record_data";

alter table "public"."record_filter" add constraint "pk_record_filter" PRIMARY KEY using index "pk_record_filter";

alter table "public"."record_section" add constraint "pk_record_section" PRIMARY KEY using index "pk_record_section";

alter table "public"."record_section_type" add constraint "pk_record_section_type" PRIMARY KEY using index "pk_record_section_type";

alter table "public"."record_type" add constraint "pk_record_type" PRIMARY KEY using index "pk_record_type";

alter table "public"."app" add constraint "app_url_name_key" UNIQUE using index "app_url_name_key";

alter table "public"."module_section" add constraint "fk_module_section_module_section_type" FOREIGN KEY (module_section_type) REFERENCES module_section_type(id) not valid;

alter table "public"."module_section" validate constraint "fk_module_section_module_section_type";



alter table "public"."module_section" add constraint "module_section_vertical_page_position_key" UNIQUE using index "module_section_vertical_page_position_key";


alter table "public"."page_module" add constraint "fk_page_module_app" FOREIGN KEY (app) REFERENCES app(url_name) not valid;

alter table "public"."page_module" validate constraint "fk_page_module_app";

alter table "public"."page_module" add constraint "page_module_id_key" UNIQUE using index "page_module_id_key";

alter table "public"."page_record" add constraint "fk_page_record_app" FOREIGN KEY (app) REFERENCES app(url_name) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_app";

alter table "public"."page_record" add constraint "fk_page_record_record_data" FOREIGN KEY (record_data) REFERENCES record_data(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_data";

alter table "public"."page_record" add constraint "fk_page_record_record_filter" FOREIGN KEY (record_filter) REFERENCES record_filter(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_filter";

alter table "public"."page_record" add constraint "fk_page_record_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."page_record" validate constraint "fk_page_record_record_type";

alter table "public"."page_record" add constraint "page_record_id_key" UNIQUE using index "page_record_id_key";

alter table "public"."page_record_record" add constraint "page_record_record_id_key" UNIQUE using index "page_record_record_id_key";

alter table "public"."record_data" add constraint "fk_record_data_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_data" validate constraint "fk_record_data_record_type";

alter table "public"."record_filter" add constraint "fk_record_filter_app" FOREIGN KEY (app) REFERENCES app(id) not valid;

alter table "public"."record_filter" validate constraint "fk_record_filter_app";

alter table "public"."record_filter" add constraint "fk_record_filter_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_filter" validate constraint "fk_record_filter_record_type";

alter table "public"."record_filter" add constraint "record_filter_id_key" UNIQUE using index "record_filter_id_key";

alter table "public"."record_section" add constraint "fk_record_section_record_section_type" FOREIGN KEY (record_section_type) REFERENCES record_section_type(id) not valid;

alter table "public"."record_section" validate constraint "fk_record_section_record_section_type";

alter table "public"."record_section_type" add constraint "fk_record_section_type_record_type" FOREIGN KEY (record_type) REFERENCES record_type(id) not valid;

alter table "public"."record_section_type" validate constraint "fk_record_section_type_record_type";


