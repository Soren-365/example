

import '../globals.css';
import './styles.css';
import { supabase as supabaseOnClient } from 'lib/utils/supabaseClient';
import Nav from './nav';
import { getCookie } from 'cookies-next';

import HeaderComponent from './header';
import type { SupabaseClient } from '@supabase/supabase-js';


interface AppPageProps {
  params: { appName: string };
}

const getPageModuleData = async (
  appName: AppPageProps['params']['appName'],
) => {
  // console.log('appName', appName);
  const { data, error } = await supabaseOnClient
    .from('page_module')
    .select(`title, id, url_name`)
    .eq('app', appName);
  if (error) {
    console.log('Error', error);
  }
  // console.log('data', JSON.stringify(data, null, 2));
  return data;
};

export const getAppData = async (appName: AppPageProps["params"]["appName"]) => {

  // console.log('appName', appName);

  const { data: app, error: appDataError } = await supabaseOnClient
    .from('app')
    .select(`url_name, id, logo_url, home_module_url_name`)
    .eq('url_name', appName);
  if (appDataError) {
    console.log('Error', appDataError);
    throw new Error(`Error from db with app name: ${appName}`);
  }
  if (!app) {
    throw new Error(`ERROR: No Data in DB for this app name: ${appName}`);
  }


  // console.log("member", member[0])
  // console.log('data', JSON.stringify(data, null, 2));

  //   const { data: { user } } = await supabase.auth.getUser()
  // console.log("user dd", user)
  //   const userId = getCookie('user-id'); // => 'value'

  //   // console.log("SSESISON", session)
  //   console.log("userId", userId)


  const data = { app }

  //  console.log('data', JSON.stringify(data, null, 2));
  return data

};

export default async function AppPageLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode;
  params: {
    appName: string;
  };
}) {



 
  // console.log("supabase in layout", supabase)

  console.log('appName in layout', params.appName);

  const moduleData = await getPageModuleData( params.appName);
  const appAndMemberData = await getAppData( params.appName);

  console.log("logo url !!",  appAndMemberData && appAndMemberData.app)
  console.log('moduleData in layout', moduleData);
  // console.log('appName in layout', params.appName);
  // console.log('appAndMemberData appName in layout',  appAndMemberData && appAndMemberData.app);


  return (
    <>
      <header className="bg-white shadow w-full">
        < HeaderComponent moduleData={moduleData} appAndMemberData={appAndMemberData} appName={params.appName} />


      </header>
      <main>
        <div className="mx-auto  py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}

// max-w-7xl