import { cache } from 'react'
// import { supabase } from 'lib/utils/supabaseClient';
import { cookies } from 'next/headers'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
// import { supabase } from 'lib/utils/supabaseClient';
const cookieStore = cookies()

const supabase = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
    },
  }
)

export const getUser = cache(async () => {

    const { data: { user } } = await supabase.auth.getUser()

    console.log("user in supabase methods", user)

  return user
})

export const getMember = cache(async (id: string) => {

    console.log("user id in getMember", id)
    const { data: member, error: memberError} = await supabase
    .from('members')
    .select('id, user_id, first_name, last_name, city, country')
    .eq('user_id', id)
    if (memberError) {
      console.log('Error', memberError);
    
    }
    if (!member) {
      throw new Error(`Method ERROR: No Data in DB for this member`);
    }

    console.log("member in method", member)
  return member
})


