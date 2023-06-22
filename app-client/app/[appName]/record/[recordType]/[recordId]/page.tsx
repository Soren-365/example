import { supabase, supabaseConferati } from 'lib/utils/supabaseClient';
import RecordSection from './RecordSection';
import './recordPage.css';
import RecordData from './RecordData';
// import {  Text } from '@chakra-ui/react';

interface RecordPageProps {
  params: { appName: string; recordType: string; recordId: string };
}

export type RecordSectionData = {
  sectionId: number;
  section_data: object[];
};

export type RecordData = {
  record_data: object[];
};

const getPageRecordData = async (
  recordId: RecordPageProps['params']['recordId'],
  appName: RecordPageProps['params']['appName'],
  recordType: RecordPageProps['params']['recordType'],
): Promise<any> => {
  console.log('sending data', recordId, recordType, appName);
  // let { data, status, error } = await supabase.rpc('get_record_section_data', {
  //   record_id: parseInt(recordId),
  //   record_type: recordType,
  //   url_app: appName,
  // });


const { data, error } = await supabaseConferati
.from(recordType)
.select()
.eq('id', parseInt(recordId))



  if (error) {
    console.log('Error', error);
  }
  if (data) {
    return data[0];
  } else {
    return [''];
  }
};

export default async function Page({
  params: { appName, recordId, recordType },
}: RecordPageProps) {
  const recordData = await getPageRecordData(recordId, appName, recordType);

  console.log('record data', recordData);
  return (
    <div className="py-4">
      <div className="text-lg text-blue-700 py-4">
        <RecordData recordData={recordData} params={{ appName, recordId, recordType }} />

        {recordData?.section_data?.length > 0 &&
        recordData.section_data[0] !== '' ? (
          recordData?.section_data.map((thisRecordData: any) => (
            <div key={thisRecordData.sectionId}>
              <RecordSection
                sectionData={thisRecordData}
                params={{ appName, recordId, recordType }}
              />
            </div>
          ))
        ) : (
          <div> no sections </div>
        )}
      </div>
    </div>
  );
}