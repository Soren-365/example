GRANT USAGE ON SCHEMA conferati, filters, public TO  postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA conferati, filters,public to  postgres, authenticated, service_role, dashboard_user, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati, filters, public  TO  postgres, authenticated, service_role, dashboard_user, anon;


GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati, filters, public TO postgres, anon;
    