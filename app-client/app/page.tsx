


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

interface AppPageProps {
  params: {appName: string}
}


// const getAppData = async (appName: AppPageProps["params"]["appName"]) => {
    
//   // console.log('appName', appName);

//   const { data, error } = await supabase
//     .from('app')
//     .select(`url_name, id, logo_url`)
//     .eq('url_name', appName);
//   if (error) {
//     console.log('Error', error);  
//     throw new Error(`Error from db with app name: ${appName}`);  
//   }
//   if (!data) {
//     throw new Error(`ERROR: No Data in DB for this app name: ${appName}`);
//   }

//   //  console.log('data', JSON.stringify(data, null, 2));
//   return data
  
// };

export default function HomePage() {

   redirect('/login')

  //   const router = useRouter()
  // if (appData) {
  //   console.log('appData !!', appData);
  //   if (appData.default_url_module_name !== null && appName) {
  //     router.push(`/${appName}/${appData.default_url_module_name}`)
  //   }
  // }


  return (
    <div className="py-10">
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Dashboard
        </h1>
   
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    
      </div>
    </main>
  </div>
  );
}
