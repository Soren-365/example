

import '../globals.css';
import './styles.css';
import { supabase } from 'lib/utils/supabaseClient';

import HeaderComponent from './header';


interface AppPageProps {
  params: { appName: string };
}

const getPageModuleData = async (
  appName: AppPageProps['params']['appName'],
) => {
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

const getAppData = async (appName: AppPageProps["params"]["appName"]) => {

  // console.log('appName', appName);

  const { data, error } = await supabase
    .from('app')
    .select(`url_name, id, logo_url, home_module_url_name`)
    .eq('url_name', appName);
  if (error) {
    console.log('Error', error);
    throw new Error(`Error from db with app name: ${appName}`);
  }
  if (!data) {
    throw new Error(`ERROR: No Data in DB for this app name: ${appName}`);
  }

  //  console.log('data', JSON.stringify(data, null, 2));
  return data && data[0]

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
  console.log('loading layout for [appName]');
  console.log('appName in layout', params.appName);

  const moduleData = await getPageModuleData(params.appName);

  const appData = await getAppData(params.appName);
  console.log("logo url !!",  appData && appData.logo_url)
  console.log('moduleData in layout', moduleData);
  console.log('appName in layout', params.appName);
  console.log('appData appName in layout',  appData && appData.url_name);


  return (
    <>
      <header className="bg-white shadow">
        < HeaderComponent moduleData={moduleData} appData={appData} appName={params.appName} />


      </header>
      <main>
        <div className="mx-auto  py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}

// max-w-7xl