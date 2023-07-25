'use client';

import './recordPage.css';
import { RecordData } from './page';
import { Card, CardHeader, CardBody, CardFooter, textDecoration, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js'
interface RecordProp {
  recordData: NonNullable<RecordData>;
}
import { MdCheckCircle } from 'react-icons/md'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { toCamelCase } from '@/lib/utils/functions'

const RecordData = ({ recordData, recordLabelData, params: {appName, recordId, recordType}  }: any) => {
  console.log('recordData', recordData);



  const rowData = []

    recordLabelData.forEach((labelData) => {
      Object.entries(recordData).map((entry) => {
        if (labelData.column_name === entry[0]) {
          rowData.push(entry);
        }
      });
    })
  

  // let columns = [];

  // recordLabelData.forEach((labelData) => {

  //   Object.keys(recordData[0]).forEach((columnName, index) => {
  //     if (labelData.column_name === columnName) {
  //       let newLabelData = labelData
  //       if (labelData.ui_links_to_record === true) {
  //         const linking_ids = recordData.map( row => row[labelData.record_name])
  //       newLabelData = Object.assign(newLabelData, { linking_ids})
  //       } 
  //      columns[labelData.column_position - 1] = newLabelData;
  //     }
  //   });



  // });

  // console.log('columns', columns);
  console.log('RECORD row data', rowData);
  console.log('RECORD label data', recordLabelData);


  return (
    <>
      <Card>
        <CardHeader> <Text fontSize='2xl'> {recordData?.name ? recordData?.name : `${recordData?.first_name} ${recordData?.last_name}`}</Text></CardHeader>
        {/* {toCamelCase(recordType)} */}
        <CardBody>
        <List spacing={3}>
     {recordData && rowData?.map( (entry, index) => {
      return (<>
        <ListItem key={index} className={"no-decoration"}><>
              {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
              {recordLabelData.find( labelData => labelData.column_name === entry[0]).label_name}: { entry[1]}
              </>
              </ListItem>
              </>
      )
      })}
      </List>
        </CardBody>
      </Card>
    </>
  );
};

{
  /* // <NonNullable<ModuleData> */
}
export default RecordData;
