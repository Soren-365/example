import { createClient } from '@supabase/supabase-js';

let url;
let anon_key;
if (process.env.DB_LOCATION === 'local_db') {
  url = process.env.SUPABASE_LOCAL_URL
  anon_key = process.env.SUPABASE_LOCAL_ANON_KEY
} else if (process.env.DB_LOCATION === 'prod_db') {
  url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
} else {
  console.log("DB_LOCATION:", process.env.DB_LOCATION)
  // throw  Error(
  //   'NODE_ENV not set in lib/utils/supabaseClient.js. Edit package.json "dev":"NODE_ENV=local-db next dev" to fix',
  // );
}

// export const supabase = createClient();
export const supabase = createClient(url, anon_key)