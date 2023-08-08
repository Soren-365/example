GRANT USAGE ON SCHEMA conferati TO  postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA conferati to  postgres, authenticated, service_role, dashboard_user, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA conferati  TO  postgres, authenticated, service_role, dashboard_user, anon;
