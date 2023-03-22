import { createClient } from '@supabase/supabase-js';

import type {Database} from 'lib/types/database.types'

let url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
let anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (process.env.DB_LOCATION === 'local_db') {
  url = process.env.SUPABASE_LOCAL_URL as string
  anon_key = process.env.SUPABASE_LOCAL_ANON_KEY as string
}

// export const supabase = createClient();
export const supabase = createClient<Database>(url, anon_key)