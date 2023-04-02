
CREATE TABLE IF NOT EXISTS "app" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "url_name" text   NOT NULL UNIQUE,
    "logo_url" text   NOT NULL,
    "admin" text   NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_app" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS "module_section_type" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "name" text   NOT NULL,
    "renderfunction" text   NOT NULL,
    "record_type" bigint NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_module_section_type" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS "record_section_type" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "name" text   NOT NULL,
    "renderfunction" text   NOT NULL,
    "record_type" bigint NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_record_section_type" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS "record_type" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "name" text   NOT NULL,
    "data_jsonschema" text   NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_record_type" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS "record_data" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "data" jsonb   NOT NULL,
    "record_type" bigint NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_record_data" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS "page_module" (
    "id" bigint GENERATED ALWAYS AS IDENTITY UNIQUE,
    "url_name" text NOT NULL,
    "app" text NOT NULL,
    "title" text   NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_page_module" PRIMARY KEY (
       "url_name", "app"
     )
);

CREATE TABLE IF NOT EXISTS "page_record" (
    "id" bigint GENERATED ALWAYS AS IDENTITY UNIQUE,
    "url_name" text NOT NULL,
    "app" text NOT NULL,
    "title" text   NOT NULL,
    "description" text,
    "record_type" bigint NOT NULL,
    "record_filter" bigint NOT NULL,
    "record_data" bigint NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_page_record" PRIMARY KEY (
        "url_name", "app"
     )
);

CREATE TABLE IF NOT EXISTS "page_record_record" (
    "id" bigint UNIQUE GENERATED ALWAYS AS IDENTITY,
    "page_record" bigint NOT NULL,
    "linked_record" bigint NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_page_record_record" PRIMARY KEY (
        "page_record","linked_record"
     )
);

CREATE TABLE IF NOT EXISTS "module_section" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "title" text   NOT NULL,
    "module_section_type" bigint NOT NULL,
    "richtext" text, 
    "sectiondata" jsonb,
    "page_module" bigint NOT NULL,
    "record_type" bigint,
    "record_filter" bigint,
    "record_data" bigint,
    "vertical_page_position" int UNIQUE,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "uc_module_section_vertical_page_position" PRIMARY KEY (
        "id"
    )
);

CREATE TABLE IF NOT EXISTS "record_section" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "title" text   NOT NULL,
    "record_section_type" bigint NOT NULL,
    "page_record" bigint NOT NULL,
    "sectiondata" jsonb,
    "vertical_page_position" int UNIQUE NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_record_section" PRIMARY KEY (
        "id"
     )
);



CREATE TABLE IF NOT EXISTS "record_filter" (
    "id" bigint UNIQUE GENERATED ALWAYS AS IDENTITY,
    "app" bigint NOT NULL,
    "record_type" bigint NOT NULL,
    "filter_record_jsonkeys" text[] NOT NULL,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_record_filter" PRIMARY KEY (
        "record_type","app"
    )
);


-- Free plan table limit reached. SUBSCRIBE for more.



ALTER TABLE "module_section_type" ADD CONSTRAINT "fk_module_section_type_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "record_section_type" ADD CONSTRAINT "fk_record_section_type_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "record_data" ADD CONSTRAINT "fk_record_data_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "page_module" ADD CONSTRAINT "fk_page_module_app" FOREIGN KEY("app")
REFERENCES "app" ("url_name");

ALTER TABLE "page_record" ADD CONSTRAINT "fk_page_record_app" FOREIGN KEY("app")
REFERENCES "app" ("url_name");

ALTER TABLE "page_record" ADD CONSTRAINT "fk_page_record_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "page_record" ADD CONSTRAINT "fk_page_record_record_filter" FOREIGN KEY("record_filter")
REFERENCES "record_filter" ("id");

ALTER TABLE "page_record" ADD CONSTRAINT "fk_page_record_record_data" FOREIGN KEY("record_data")
REFERENCES "record_data" ("id");

ALTER TABLE "page_record_record" ADD CONSTRAINT "fk_page_record_record_page_record" FOREIGN KEY("page_record")
REFERENCES "page_record" ("id");

ALTER TABLE "page_record_record" ADD CONSTRAINT "fk_page_record_record_linked_record" FOREIGN KEY("linked_record")
REFERENCES "page_record" ("id");

ALTER TABLE "module_section" ADD CONSTRAINT "fk_module_section_module_section_type" FOREIGN KEY("module_section_type")
REFERENCES "module_section_type" ("id");

ALTER TABLE "module_section" ADD CONSTRAINT "fk_module_section_page_module" FOREIGN KEY("page_module")
REFERENCES "page_module" ("id");

ALTER TABLE "module_section" ADD CONSTRAINT "fk_module_section_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "module_section" ADD CONSTRAINT "fk_module_section_record_filter" FOREIGN KEY("record_filter")
REFERENCES "record_filter" ("id");

ALTER TABLE "module_section" ADD CONSTRAINT "fk_module_section_record_data" FOREIGN KEY("record_data")
REFERENCES "record_data" ("id");

ALTER TABLE "record_section" ADD CONSTRAINT "fk_record_section_record_section_type" FOREIGN KEY("record_section_type")
REFERENCES "record_section_type" ("id");

ALTER TABLE "record_section" ADD CONSTRAINT "fk_record_section_page_record" FOREIGN KEY("page_record")
REFERENCES "page_record" ("id");

ALTER TABLE "record_filter" ADD CONSTRAINT "fk_record_filter_record_type" FOREIGN KEY("record_type")
REFERENCES "record_type" ("id");

ALTER TABLE "record_filter" ADD CONSTRAINT "fk_record_filter_app" FOREIGN KEY("app")
REFERENCES "app" ("id");

-- Free plan table limit reached. SUBSCRIBE for more.



-- Free plan table limit reached. SUBSCRIBE for more.


