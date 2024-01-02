import { Key, Suspense } from 'react';
import React, { useState } from 'react';

import { getUser } from '@/lib/utils/supabaseMethods'
import { getMember } from '@/lib/utils/supabaseMethods'


import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import Settings from './settings';
import { createClient } from '@/lib/utils/supabase-server';
import { SupabaseClient } from '@supabase/supabase-js';


interface SettingsProps {
  params: { appName: string; recordType: string; recordId: string };
}


const getUserData = async (supabase: SupabaseClient<any, "public", any>) => {
  // console.log('appName', appName);

  const { data: { user } } = await supabase.auth.getUser()
  // console.log("user ddww", user)
  if (user) {
    const { data: member, error: memberError } = await supabase
      .from('members')
      .select('id, user_id, first_name, last_name, city, country, user_name')
      .eq('user_id', user.id)
    if (memberError) {
      console.log('Error', memberError);
      throw new Error(`Error from db with app name: `);
    }
    if (!member) {
      throw new Error(`ERROR: No Data in DB for this app name: `);
    }
    // console.log("member", member[0])
    // console.log('data', JSON.stringify(data, null, 2));
    return { user, member: member[0] };
  } else {
    return {}
  }
};

export default async function Page({ }) {

  //  const user = await fetch('http://localhost:3001/api/settings').then((res) => res.json())

  //  console.log("user", user)


  // const user = await getUser()
  // console.log("user in layout", user)

  // const member = await getMember(user.id)
  // console.log("member data", member)

  // const [ localMember, setLocalMember ] = useState()
  // console.log('app', app, typeof app);
  // console.log('modules', modules, typeof modules);


  const cookieStore = cookies()

  const supabase = createClient(cookieStore)



  const userData = await getUserData(supabase);

  console.log("userData", userData)

  return (

    userData.member ?
      < Settings id={userData.member.id} userId={userData.member.user_id} firstName={userData.member.first_name} lastName={userData.member.last_name} city={userData.member.city} country={userData.member.country} userName={userData.member.user_name} />
      : null

  );
}


