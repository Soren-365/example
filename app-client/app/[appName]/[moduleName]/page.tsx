import { supabase } from 'lib/utils/supabaseClient';
import DynamicModuleSection from './dynamicModuleSection';
import { Json } from '@/lib/types/database.types';
import { unstable_noStore as noStore } from 'next/cache';

interface ModulePageProps {
  params: { appName: string; moduleName: string };
}

export type ModuleSectionData = {
  sectionId: number;
  section_data: object[];
};

const getPageModuleData = async (
  moduleName: ModulePageProps['params']['moduleName'],
  appName: ModulePageProps['params']['appName'],
): Promise<any> => {
  // ) => {

  console.log("asking for:", moduleName, appName)

  let { data, status, error } = await supabase.rpc(
    'get_module_section_data_with_app_filter',
    {
      url_module: moduleName,
      url_app: appName,
    },
  );

  console.log('module data:', data);
  //   let returnData

  if (error) {
    console.log('Error', error);
  }

  if (data) {
    return data[0].data;
  } else {
    return [''];
  }
};

export type ModuleData = Awaited<ReturnType<typeof getPageModuleData>>;

export default async function Page({
  params: { moduleName, appName },
}: ModulePageProps) {
  console.log('module name', moduleName);
  console.log('app name', appName);
 noStore()
  const moduleData = await getPageModuleData(moduleName, appName);

  // const moduleDataBySection: moduleSectionData[] = (moduleData) => {
  //   let newSections = []
  //   let arrayOfSections = []
  //   moduleData.forEach( () => {

  //   })
  // }

  console.log('module data 0', moduleData ? moduleData[0] : {});
  console.log('module data 1',moduleData ? moduleData[1]: {});
  return (
    
    <div className="py-4">
      <div className="text-lg text-blue-700 py-4">
        Module page: {moduleName}
      </div>
      {moduleData && moduleData.length > 0 && moduleData[0] !== '' ? (
        moduleData?.map((thisModuleData: any) => (
       
          <div key={thisModuleData.section_id} className='py-10'>
            <DynamicModuleSection
              moduleData={thisModuleData}
              appName={appName}
              moduleName={moduleName}
            />
          </div>
        ))
      ) : (
        <div> no data </div>
      )}
    </div>
  );
}
