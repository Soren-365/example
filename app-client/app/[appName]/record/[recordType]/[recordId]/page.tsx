import { supabase, supabaseConferati } from 'lib/utils/supabaseClient';
import RecordSection from './RecordSection';
import './recordPage.css';
import RecordData from './RecordData';
// import {  Text } from '@chakra-ui/react';
import { unstable_noStore as noStore } from 'next/cache';

interface RecordPageProps {
  params: { appName: string; recordType: string; recordId: string };
}

export type RecordSectionDataType = {
  sectionId: number;
  section_data: object[];
};

export type RecordDataType = {
  record_data: object[];
};

// const getPageRecordData = async (
//   recordId: RecordPageProps['params']['recordId'],
//   appName: RecordPageProps['params']['appName'],
//   recordType: RecordPageProps['params']['recordType'],
// ): Promise<any> => {
//   console.log('sending data', recordId, recordType, appName);
//   // let { data, status, error } = await supabase.rpc('get_record_section_data', {
//   //   record_id: parseInt(recordId),
//   //   record_table: recordType,
//   //   url_app: appName,
//   // });


// const { data, error } = await supabaseConferati
// .from(recordType)
// .select()
// .eq('id', parseInt(recordId))



//   if (error) {
//     console.log('Error', error);
//   }
//   if (data) {
//     return data[0];
//   } else {
//     return [''];
//   }
// };



const getPageRecordData = async (
  recordId: RecordPageProps['params']['recordId'],
  appName: RecordPageProps['params']['appName'],
  recordType: RecordPageProps['params']['recordType'],
): Promise<any> => {
  console.log('sending data', recordId, recordType, appName);
  // let { data, status, error } = await supabase.rpc('get_record_section_data', {
  //   record_id: parseInt(recordId),
  //   record_table: recordType,
  //   url_app: appName,
  // });



  let { data, status, error } = await supabase.rpc(
    'get_record_section_data_with_section_filter',
    {
      record_id: parseInt(recordId),
      record_table: recordType,
      app_name: appName
    },
  );
  

  if (error) {
    console.log('Error', error);
  }
  if (data) {
    return data[0].data;
  } else {
    return [''];
  }
};





export default async function Page({
  params: { appName, recordId, recordType },
}: RecordPageProps) {
  noStore()
  const recordData = await getPageRecordData(recordId, appName, recordType);

  console.log('record data', recordData);
  console.log('record sections data', recordData?.record_sections_data);
  // console.log('record sections data sorted', recordData.record_sections_data.sort(function(a,b){return a.vertical_page_position-b.vertical_page_position}));
const recordDataSortedByPosition = recordData?.record_sections_data?.sort(function(a: any,b: any){return a.vertical_page_position-b.vertical_page_position})
  return (
    <div className="py-4">
      <div className="text-lg text-blue-700 py-4">
        <RecordData recordData={recordData.record_data} recordLabelData={recordData.record_label_data} params={{ appName, recordId, recordType }} />

        {recordData.record_sections_data?.length > 0 &&
        recordData.record_sections_data[0] !== '' ? (
          recordDataSortedByPosition?.map((thisSectionData: any) => (
            <div key={thisSectionData.section_id} className="py-4">
              <RecordSection
                sectionData={thisSectionData}
                params={{ appName, recordId, recordType }}
              />
            </div>
          ))
        ) : (
          <div>  </div>
        )}
      </div>
    </div>
  );
}
