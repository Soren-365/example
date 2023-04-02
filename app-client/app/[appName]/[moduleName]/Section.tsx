import { ModuleData, moduleSectionData } from './page';

interface ModuleProp {
  moduleData: NonNullable<moduleSectionData>;
}

const ModuleSection = ({ moduleData }: ModuleProp) => {

  console.log(moduleData.record_data)
  return (
    <>
      <div key={moduleData.module_section_id} className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {moduleData.module_section_name}
        </h3>
        <ul>{
          moduleData.record_data.map( (row) => {
            return (<li key={1}>Name: {row.data.name}, Title: {row.data.title}</li>)
          })}
         
        </ul>
      </div>
    </>
  );
};

// <NonNullable<ModuleData>
export default ModuleSection;
