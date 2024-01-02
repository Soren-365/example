import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Input, Stack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
// import { supabase } from '@/lib/utils/supabaseClient'
// import { supabase as supabaseOnClient } from '@/lib/utils/supabaseClient'
import { SupabaseClient } from '@supabase/supabase-js'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import { createClient } from '@/lib/utils/supabase-server'


export default function AuthButton({ user } : {user: Object}) {
  // const cookieStore = cookies()
  // const supabaseServerClient = createClient(cookieStore)

  // const {
  //   data: { user },
  // } = await supabaseServerClient.auth.getUser()

  console.log("user in authbutton", user)
  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    try {
      const { error } = await supabase.auth.signOut()
      console.log("err", error)
    } catch (e) {
      console.log("error", e)
    }
    redirect('/login')
  }

  return user ? (
    <>
   
    
        {/* <div className='flex flex-row'>
          <div className='w-full'></div>
          <div className='basis-[100px]'> */}
          <div >
            <form action={signOut}>
              <Button className="my-0 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                colorScheme='gray'
                variant='ghost'
                size='sm'
                type="submit"
              >
                Logout
              </Button>
            </form>
            </div>
          {/* </div> */}
          
        {/* // </div> */}
    
    </>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  )
}
