import Link from 'next/link';


import './styles.css'
import { Key, Suspense } from 'react';
import React from 'react';
import Image from 'next/image';
import moduleIcon from 'lib/images/svgs/module.svg';
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/lib/utils/supabase-server';

interface AppPageProps {
  params: {appName: string}
}


const getAppData = async (supabase: SupabaseClient<any, "public", any>, appName: AppPageProps["params"]["appName"]) => {
    
  // console.log('appName', appName);

  const { data, error } = await supabase
    .from('app')
    .select(`url_name, id, logo_url`)
    .eq('url_name', appName);
  if (error) {
    console.log('Error', error);  
    throw new Error(`Error from db with app name: ${appName}`);  
  }
  if (!data) {
    throw new Error(`ERROR: No Data in DB for this app name: ${appName}`);
  }

  //  console.log('data', JSON.stringify(data, null, 2));
  return data
  
};

const getPageModuleData = async (supabase: SupabaseClient<any, "public", any>, appName: AppPageProps["params"]["appName"]) => {
  // console.log('appName', appName);
  const { data, error } = await supabase
    .from('page_module')
    .select(`title, id, url_name`)
    .eq('app', appName);
  if (error) {
    console.log('Error', error);    
  }
  // console.log('data', JSON.stringify(data, null, 2));
  return data;
};


// const getUserData = async (supabase, appName: AppPageProps["params"]["appName"]) => {
//   // console.log('appName', appName);

//   const { data: { user } } = await supabase.auth.getUser()
// // console.log("user ddww", user)

//   const { data: member, error: memberError} = await supabase
//   .from('members')
//   .select('id, user_id, first_name, last_name, city, country')
//   .eq('user_id', user.id)
//   if (memberError) {
//     console.log('Error', memberError);
//     throw new Error(`Error from db with app name: ${appName}`);
//   }
//   if (!member) {
//     throw new Error(`ERROR: No Data in DB for this app name: ${appName}`);
//   }
// // console.log("member", member[0])
//   // console.log('data', JSON.stringify(data, null, 2));
//   return { user, member };
// };


type AppData = Awaited<ReturnType<typeof getAppData>> 
type PageModuleData = Awaited<ReturnType<typeof getPageModuleData>> 
// type UserData = Awaited<ReturnType<typeof getPageModuleData>> 

export default async function Page({ params: { appName } }: AppPageProps) {
  //   const getNotesDescription = (await getNotesDesc()) as string;
  // console.log("countries", countries)
console.log("appName", appName)
  
const cookieStore = cookies()

const supabase = createClient(cookieStore)
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


  const appData = getAppData(supabase, appName);
  const moduleData = getPageModuleData(supabase, appName);
  // const userData = getUserData(supabase, appName);
    // console.log('appData', appData, typeof appData);

  // Wait for the promises to resolve
  const [app, modules]: [AppData, PageModuleData ] = await Promise.all([appData, moduleData]);
  // console.log("user data", user)
  // console.log('app', app, typeof app);
  console.log('modules', modules, typeof modules);

  return (
    <>
      <div className="pb-10">
        <header>
          <div className="px-4 mx-auto  sm:px-6 lg:px-8">
            {/* <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {app[0].url_name} app
            </h1> */}
          </div>
        </header>
        <main>
          <div className="mx-auto  sm:px-6 lg:px-8">
            <div className="py-10">
              <Suspense fallback={<div>loading...</div>}>
                <>

                    <hr/>
                    <div></div>
                    <div className="card-1 border-b border-gray-200 bg-white p-10 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Modules</h3>
                      <ul role="list" className="divide-y divide-gray-200">
                        {modules?.map((module: { id: Key | null | undefined; url_name: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                          <li key={module.id}>
                            <a href={`/${app[0].url_name}/${module.url_name}`} className="block hover:bg-gray-50">
                              <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="flex min-w-0 flex-1 items-center">
                                  <div
                                    className="flex-shrink-0 "
                                    style={{ position: 'relative' }}
                                  >
                                    <Image
                                      src={moduleIcon}
                                      alt="some icon"
                                      height={20}
                                      width={20}
                                    />


                                  </div>
                                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>{module.title}</div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
            
                </>
              </Suspense>
            </div>
          </div>
        </main>
      </div>

      
    </>
  );
}
