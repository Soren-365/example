import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from 'lib/types/database.types'

// let url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
// let anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// console.log("db envs", url, anon_key)


export const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
