

import '../globals.css';
import './styles.css';
import { supabase } from 'lib/utils/supabaseClient';
import ModuleSelect from './moduleSelect';
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

  // const [app, modules]: [AppData, PageModuleData ] = await Promise.all([appData, moduleData]);

  console.log('moduleData in layout', moduleData);



  return (
    <>
      <header className="bg-white shadow">
        <div
          className=" flex justify-left flex-row gap-10 mx-auto max-w-xl px-4 sm:px-6 lg:px-8 "
          style={{
            padding: '32px 0px 16px 36px',
            borderBottom: 'solid 1px black',
          }}
        ><div className="px-4 mt-2">LOGO</div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {params.appName}
          </h1>
          <div className="px-4 mt-2">
       <ModuleSelect moduleData={moduleData} appName={params.appName} />     </div>
        </div>
      </header>
      <main>
        <div className="mx-auto  py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}

// max-w-7xl