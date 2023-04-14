import { supabase } from 'lib/utils/supabaseClient';
import ModuleSection from './Section_dyn';

interface ModulePageProps {
  params: { appName: string; moduleName: string };
}

export type moduleSectionData = {
  id: number;
  data: {
    name: string;
    title: string;
  };
  record_type: string;
  module_section: string;
};

const getPageModuleData = async (
  moduleName: ModulePageProps['params']['moduleName'],
  appName: ModulePageProps['params']['appName'],
): Promise<moduleSectionData[] | null> => {
  // console.log('moduleName', moduleName);
  // console.log('appName', appName);

// const statement = `WITH person_data as (SELECT * FROM conferati.organization_role a JOIN conferati.person b ON a.person = b.id )
// SELECT jsonb_agg(c) FROM (SELECT person_data.first_name, person_data.last_name, person_data.title FROM person_data) c`


// let { data, error } = await supabase.rpc('module_section_data', {
//  join_table: 'organization_role',
//   data_table: 'person'
// });



  let { data, error } = await supabase.rpc('get_module_section_data', {
    url_module: moduleName,
     url_app: appName,
    
  });

  if (error) {
    console.log('Error', error);
  }
  console.log('returned ', JSON.stringify(data, null, 2));
  return data[0].data;
};



export type ModuleData = Awaited<ReturnType<typeof getPageModuleData>>;

export default async function Page({
  params: { moduleName, appName },
}: ModulePageProps) {
  // console.log('module name', moduleName);

  const moduleData: ModuleData = await getPageModuleData(moduleName, appName);

  // const moduleDataBySection: moduleSectionData[] = (moduleData) => {
  //   let newSections = []
  //   let arrayOfSections = []
  //   moduleData.forEach( () => {

  //   })
  // }



  console.log('module data', moduleData);
  return (
    <div className='py-4'>
     
      {moduleData.map((thisModuleData) => (
        <ModuleSection moduleData={thisModuleData} />
      ))}
    </div>
  );
}
