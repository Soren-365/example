'use client';

import './recordPage.css';
import { RecordDataType } from './page';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  textDecoration,
  Text,
} from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';
interface RecordProp {
  recordData: NonNullable<RecordDataType>;
}
import { MdCheckCircle } from 'react-icons/md';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image,
  Img,
  Stack,
  Flex,
  Spacer,
  Box,
  Square,
} from '@chakra-ui/react';
import { toCamelCase } from '@/lib/utils/functions';

const RecordData = ({
  recordData,
  recordLabelData,
  params: { appName, recordId, recordType },
}: any) => {
  console.log('RECORD Data', recordData);

  const rowData: any[] = [];

  recordLabelData?.forEach((labelData: any) => {
    Object.entries(recordData).map((entry: any) => {
      if (labelData.column_name === entry[0]) {
        rowData.push(entry);
      }
    });
  });

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
  // console.log('RECORD row data', rowData);
  // console.log('RECORD label data', recordLabelData);

  return (
    <>
      <Card>
        <CardHeader>
          {' '}
          <Text fontSize="2xl" className='pb-0'>
            {' '}
            {recordData?.name
              ? recordData?.name
              : `${recordData?.first_name} ${recordData?.last_name}`}
          </Text>
        </CardHeader>
        {/* {toCamelCase(recordType)} */}
        <CardBody>
          <Flex direction="row">
      
            <div className='flex ' style={{margin: "auto 0"}}>
            <List spacing={3} >
              {recordData &&
                rowData?.map((entry, index) => {
                  const recordLabelDataEntry = recordLabelData?.find(
                    (labelData: any) => labelData.column_name === entry[0],
                  );
                  if (recordLabelDataEntry?.is_external_link) {
                    return (
                      <>
                        <ListItem
                          key={index}
                          color="blue.400"
                          _hover={{
                            color: 'blue.800',
                            textDecoration: 'underline',
                          }}
                        >
                          {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                          <Link href={entry[1]}>
                            {recordLabelDataEntry?.label_name}
                          </Link>
                        </ListItem>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <ListItem key={index} className={'no-decoration'}>
                          <>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            {recordLabelDataEntry?.label_name}: {entry[1]}
                          </>
                        </ListItem>
                      </>
                    );
                  }
                })}
            </List>
            </div>

            <Square size="100px"></Square>
            { recordData?.local_image_url ?
            <Image
              boxSize="200px"
              objectFit="cover"
              src={recordData?.local_image_url}
              alt={`${recordData?.first_name} ${recordData?.last_name}`}
            /> : null}

            
            <Spacer />
            {/* <Image
    boxSize='100px'
    objectFit='cover'
    src={recordData.local_image_url}
    alt='Dan Abramov'
  />
  <Image
    boxSize='150px'
    objectFit='cover'
    src={recordData.local_image_url}
    alt='Dan Abramov'
  /> */}
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

{
  /* // <NonNullable<ModuleData> */
}
export default RecordData;
