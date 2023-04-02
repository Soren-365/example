import { supabase } from 'lib/utils/supabaseClient';
import ModuleSection from './Section';

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
  let { data, error } = await supabase.rpc('get_module_section_data', {
    url_app: appName,
    url_module: moduleName,
  });

  if (error) {
    console.log('Error', error);
  }
  // console.log('data', JSON.stringify(data, null, 2));
  return data;
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



  // console.log('module data', moduleData);
  return (
    <>
      <h1>Module page: {moduleName}</h1>
      {moduleData.map((thisModuleData) => (
        <ModuleSection moduleData={thisModuleData} />
      ))}
    </>
  );
}
