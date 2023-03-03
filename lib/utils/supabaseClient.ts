import { createClient } from '@supabase/supabase-js';

import type {Database} from 'lib/types/db-generated'

let url = process.env.NEXT_PUBLIC_SUPABASE_URL
let anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (process.env.DB_LOCATION === 'local_db') {
  url = process.env.SUPABASE_LOCAL_URL
  anon_key = process.env.SUPABASE_LOCAL_ANON_KEY
}

// export const supabase = createClient();
export const supabase = createClient<Database>(url, anon_key)