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

const RecordData = ({ recordData,  params: {appName, recordId, recordType}  }: any) => {
  console.log('recordData', recordData);
  return (
    <>
      <Card>
        <CardHeader> <Text fontSize='2xl'>{toCamelCase(recordType)}: {recordData?.name ? recordData?.name : `${recordData?.first_name} ${recordData?.last_name}`}</Text></CardHeader>
        <CardBody>
        <List spacing={3}>
     {recordData && Object.entries(recordData)?.map( (entry, index) => {
      return (<>
        <ListItem key={index} className={"no-decoration"}><>
              <ListIcon as={MdCheckCircle} color='green.500' />
              {entry[0]}: { entry[1]}
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
