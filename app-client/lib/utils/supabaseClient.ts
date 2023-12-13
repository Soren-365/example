import { createClient } from '@supabase/supabase-js';

import type {Database} from '@/lib/types/database.types'


let url 
let anon_key

if (process.env.DB_LOCATION === 'local_db') {
  url = process.env.SUPABASE_LOCAL_URL as string
  anon_key = process.env.SUPABASE_LOCAL_ANON_KEY as string
} else if (process.env.DB_LOCATION === 'prod_db') {
  url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

} else {
  throw new Error('no db url and code given, invalid DB_LOCATION in /utils/supabaseClient.ts')
}

const conferatiOptions = {
  db: { schema: 'conferati' }
};

console.log("db envs", url, anon_key)
console.log("creating db link")
// export const supabase = createClient();
export const supabase = createClient<Database>(url, anon_key)
export const supabaseConferati = createClient<Database['conferati']>(url, anon_key)