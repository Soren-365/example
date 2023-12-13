'use client';

import type { RecordDataType, RecordSectionDataType } from './page';
import './recordPage.css';
import DOMPurify from 'isomorphic-dompurify';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  textDecoration,
  Text,
  Box,
  Container,
  Flex,
  Divider
} from '@chakra-ui/react';
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
import { Link } from '@chakra-ui/next-js';
interface RecordProp {
  recordData: NonNullable<RecordSectionDataType>;
}

const RecordSection = ({
  sectionData,
  params: { appName, recordId, recordType },
}: any) => {
  console.log('RECORD SECTION all data', JSON.stringify(sectionData, null, 7));
  let columns: any[] = [];
  let rowData;

  if (sectionData?.section_row_data) {
    rowData = sectionData?.section_row_data.map((row: any, index: number) => {
      const transformedRow: any[] = [];
      sectionData?.section_column_data.forEach((labelData: any) => {
        Object.entries(row).map((entry) => {
          if (labelData.column_name === entry[0]) {
            transformedRow[labelData.column_position] = entry[1];
          }
        });
      });
      return transformedRow;
    });

    sectionData?.section_column_data.forEach((labelData: any) => {
      Object.keys(sectionData?.section_row_data[0]).forEach(
        (columnName, index) => {
          if (labelData.column_name === columnName) {
            let newLabelData = labelData;
            if (labelData.ui_links_to_record === true) {
              const linking_ids = sectionData?.section_row_data.map(
                (row: any) => row[labelData.record_name],
              );
              newLabelData = Object.assign(newLabelData, { linking_ids });
            }
            columns[labelData.column_position - 1] = newLabelData;
          }
        },
      );
    });
  }

  // console.log('REC. SECTION columns', columns);
  // console.log('REC. SECTION row data', rowData);

 const richtext_purified = function() {
    return (
        <div className="content" style={{ display: "inline-block"}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(sectionData.section_richtext)}}></div>
    );
  }

  return (
    <>
      {rowData && (
        <Card>
          <CardHeader>
            {' '}
            <Text fontSize="ml">{sectionData.section_title}</Text>
          </CardHeader>
          <CardBody>


            {/* variant="boldVariant" */}
              <Box padding="4"   bg="blackAlpha.100" color="black" >
              
                  The {recordType} {richtext_purified()}
                  
                              
                              
              </Box>
          
        
            <Divider margin="4"/>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    {columns?.map((column) => {
                      // return <Th key={key}>{key === 'type' ? moduleData.title + ' ': ''}{key}</Th>;
                      return (
                        <Th key={column.label_name}>{column.label_name}</Th>
                      );
                    })}
                  </Tr>
                </Thead>
                <Tbody>
                  {rowData?.map((row: any, rowsindex: number) => {
                    return (
                      <Tr key={rowsindex}>
                        {row.map((value: any, index: number) => {
                          if (
                            columns &&
                            columns[index - 1]?.ui_links_to_record
                          ) {
                            return (
                              <Td
                                className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                                key={index}
                              >
                                <Link
                                  href={`/${appName}/record/${
                                    columns && columns[index - 1]?.record_name
                                  }/${
                                    (columns &&
                                      columns[index - 1]?.linking_ids[
                                        rowsindex
                                      ]) ||
                                    sectionData?.section_row_data[rowsindex].id

                                    //   moduleData.section_row_data[rowsindex - 1]
                                    //     [ columns[index - 1]
                                    //     ?.record_name]
                                    // || row.id
                                  }`}
                                  color="blue.400"
                                  _hover={{
                                    color: 'blue.800',
                                    textDecoration: 'underline',
                                  }}
                                >
                                  {value}
                                </Link>
                              </Td>
                            );
                          } else {
                            return (
                              <Td
                                className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                                key={index}
                              >
                                {value}
                              </Td>
                            );
                          }
                        })}
                      </Tr>
                    );
                  })}
                </Tbody>
                {/* <Tfoot>
      <Tr>
        <Th>-</Th>
        <Th>-</Th>
      </Tr>
    </Tfoot> */}
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      )}
    </>
  );
  
};

{
  /* // <NonNullable<ModuleData> */
}


export default RecordSection;
