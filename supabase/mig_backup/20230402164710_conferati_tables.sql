Create SCHEMA conferati;


CREATE TABLE IF NOT EXISTS conferati."person" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now() NOT NULL,
    CONSTRAINT "pk_person" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS conferati."organization" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "name" text NOT NULL,
    "type" text NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now() NOT NULL,
    CONSTRAINT "pk_organization" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS conferati."organization_role" (
    "id" bigint GENERATED ALWAYS AS IDENTITY,
    "person" bigint REFERENCES conferati."person" (id),
    "organization" bigint REFERENCES conferati."organization" (id),
    "title" text NOT NULL,
    "start_date" date,
    "end_date" date,
    "createdAt" TIMESTAMP DEFAULT now() NOT NULL,
    CONSTRAINT "pk_role" PRIMARY KEY ("person", "organization")
);


GRANT USAGE ON SCHEMA conferati TO supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA conferati to supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati  TO supabase_functions_admin, postgres, authenticated, service_role, dashboard_user, anon;
