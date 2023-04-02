Create SCHEMA conferati;

CREATE TABLE IF NOT EXISTS conferati."person" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "first_name" text,
    "last_name" text,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_person" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS conferati."organization" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "name" text,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_organization" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE IF NOT EXISTS conferati."role" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "person" bigint REFERENCES conferati."person" (id),
    "organization" bigint REFERENCES conferati."organization" (id),
    "title" text,
    "createdAt" TIMESTAMP  DEFAULT now() NOT NULL,
    CONSTRAINT "pk_role" PRIMARY KEY (
        "id"
     )
);

