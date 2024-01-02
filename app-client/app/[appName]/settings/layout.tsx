import { supabase } from 'lib/utils/supabaseClient';
import { getCookie } from 'cookies-next';

export default async function SettingsPageLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode;
  params: {
    appName: string;
  };
}) {


  // const item = await getItem(id)




  // const memberData = getUserData(supabase);
    // console.log('appData', appData, typeof appData);

  // Wait for the promises to resolve
  // const [member] = await Promise.all([memberData]);


  return (
    <>

        <div className="mx-auto  py-6 px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
}

// max-w-7xl