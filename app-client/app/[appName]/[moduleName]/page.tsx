import { supabase } from 'lib/utils/supabaseClient';
import ModuleSection from './Section_dyn';
import { Json } from '@/lib/types/database.types';

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
  ):Promise<any> => {
// ) => {
  // console.log('moduleName', moduleName);
  // console.log('appName', appName);

  // const statement = `WITH person_data as (SELECT * FROM conferati.organization_role a JOIN conferati.person b ON a.person = b.id )
  // SELECT jsonb_agg(c) FROM (SELECT person_data.first_name, person_data.last_name, person_data.title FROM person_data) c`

  // let { data, error } = await supabase.rpc('module_section_data', {
  //  join_table: 'organization_role',
  //   data_table: 'person'
  // });

  console.log("sending data", moduleName, appName)
  let { data, status, error } = await supabase.rpc('get_module_section_data_with_app_filter', {
    url_module: moduleName,
    url_app: appName,
  });

  console.log("data", data)
//   let returnData 

   if (error) {
     console.log('Error', error);
  }
//   } else {
//     console.log('returned ', JSON.stringify(data, null, 2));
    
//     // if ((status = 200)) {
      
//     //   if (data![0].data !== null) {
//     //      returnData =data![0].data as ModuleSectionData
//     //     // console.log(returnData)
        
//     //   }
//     // }
// returnData = data![0].data.json()
//   }
if (data) {
  return data[0].data 
} else {
  return ['']
}
};

export type ModuleData = Awaited<ReturnType<typeof getPageModuleData>>;

export default async function Page({
  params: { moduleName, appName },
}: ModulePageProps) {
  // console.log('module name', moduleName);

  const moduleData = await getPageModuleData(moduleName, appName);

  // const moduleDataBySection: moduleSectionData[] = (moduleData) => {
  //   let newSections = []
  //   let arrayOfSections = []
  //   moduleData.forEach( () => {

  //   })
  // }

  console.log('module data', moduleData, moduleData[0]);
  return (
    <div className="py-4">
      {(moduleData.length > 0 && moduleData[0] !== '') ? moduleData?.map((thisModuleData: any) => (
        <div key={thisModuleData.sectionId}>
          <ModuleSection moduleData={thisModuleData} />
        </div>
      )) : 
      <div> no data </div>
      }
    </div>
  );
}
