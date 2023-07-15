'use client';
import { ModuleData, ModuleSectionData } from './page';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
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
import { Link } from '@chakra-ui/react';

import NextLink from 'next/link';
interface ModuleProp {
  moduleData: NonNullable<ModuleSectionData>;
  appName: string;
  moduleName: string;
}

const ModuleSection = ({ moduleData, appName, moduleName }: any) => {
  console.log('moduleData', JSON.stringify(moduleData, null, 7));


  const rowData = moduleData.section_row_data.map((row, index) => {
    const transformedRow = [];
    moduleData.section_column_data.forEach((labelData) => {
      Object.entries(row).map((entry) => {
        if (labelData.column_name === entry[0]) {
          transformedRow[labelData.column_position] = entry[1];
        }
      });
    });
    return transformedRow;
  });

  let columns = [];

  moduleData.section_column_data.forEach((labelData) => {

    Object.keys(moduleData.section_row_data[0]).forEach((columnName, index) => {
      if (labelData.column_name === columnName) {
        let newLabelData = labelData
        if (labelData.ui_links_to_record === true) {
          const linking_ids = moduleData.section_row_data.map( row => row[labelData.record_name])
        newLabelData = Object.assign(newLabelData, { linking_ids})
        } 
       columns[labelData.column_position - 1] = newLabelData;
      }
    });



  });

  // console.log('columns labels', moduleData.section_column_data);
  // console.log('columns', columns);
  // console.log('row data', rowData);

  return (
    <>
      <Card>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                {/* Main record type: {moduleData.root_ref_type} */}
              </TableCaption>
              <Thead>
                <Tr>
                  {columns.map((column) => {
                    // return <Th key={key}>{key === 'type' ? moduleData.title + ' ': ''}{key}</Th>;
                    return <Th key={column.label_name}>{column.label_name}</Th>;
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {rowData.map((row: any, rowsindex) => {
                  return (
                    <Tr key={rowsindex}>
                      {row.map((value, index) => {
                        if (
                          columns[index - 1]
                            ?.ui_links_to_record
                        ) {
                          return (
                            <Td
                              className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                              key={index}
                            >
                              <Link
                                href={`/${appName}/record/${
                                  columns[index - 1]
                                    ?.record_name
                                }/${columns[index - 1]
                                  ?.linking_ids[rowsindex] || moduleData.section_row_data[rowsindex].id
                               
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

              {/* 
             <Tfoot>
      <Tr>
        <Th>-</Th>
        <Th>-</Th>
      </Tr>
    </Tfoot>
   */}
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};

{
  /* // <NonNullable<ModuleData> */
}
export default ModuleSection;
