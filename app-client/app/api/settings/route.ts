import { cache } from 'react'
// import { supabase } from 'lib/utils/supabaseClient';
// import { cookies } from 'next/headers'
// import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { supabase } from 'lib/utils/supabaseClient';
// const cookieStore = cookies()

// const supabase = createServerClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   {
//     cookies: {
//       get(name: string) {
//         return cookieStore.get(name)?.value
//       },
//     },
//   }
// )



export async function GET() {

    // const { data: { user } } = await supabase.auth.getUser()
   const user = {}
    console.log("in settings route function", user)
    
      // const { data: member, error: memberError} = await supabase
      // .from('members')
      // .select('id, user_id, first_name, last_name, city, country')
      // .eq('user_id', user.id)
      // if (memberError) {
      //   console.log('Error', memberError);
      //   throw new Error(`Error from db with app name: ${}`);
      // }
      // if (!member) {
      //   throw new Error(`ERROR: No Data in DB for this app name: ${}`);
      // }
   
    return Response.json({ user})
  }