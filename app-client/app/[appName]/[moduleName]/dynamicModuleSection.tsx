'use client';
import { ModuleData, ModuleSectionData } from './page';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import DOMPurify from 'isomorphic-dompurify';
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
  Box,
  Text,
  Divider
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
  let columns: any[] = [];
  let rows: any[] = [];
  // finds uniques and sort by:  the main records name
  if (moduleData.section_row_data) {
    let module_data_unique: any[] = [];
    moduleData.section_row_data?.forEach((record: any) => {
      console.log("record:", record)
      if (
        module_data_unique.find(
          (entry) =>
            entry[moduleData.main_record_name] ===
            record[moduleData.main_record_name],
        ) === undefined
      ) {
        module_data_unique.push(record);
      }
    });
    console.log("module_data_unique:", module_data_unique)
    const module_data_sorted_by_main_record = module_data_unique.sort(function (
      a,
      b,
    ) {
      return (
        parseInt(a[moduleData.main_record_name]) -
        parseInt(b[moduleData.main_record_name])
      );
    });

    console.log("module row data", module_data_sorted_by_main_record)
    // creates the rows array for the UI
    rows = module_data_sorted_by_main_record.map((row, index) => {
      const transformedRow: any[] = [];
      moduleData.section_column_data?.forEach((labelData: any) => {
        Object.entries(row).map((entry) => {
          if (labelData.column_name === entry[0]) {
            transformedRow[labelData.column_position] = entry[1];
          }
        });
      });
      return transformedRow;
    });

    //creates the column labels, and links for the UI


    moduleData.section_column_data?.forEach((labelData: any) => {
      Object.keys(moduleData.section_row_data[0]).forEach((columnName, index) => {
        if (labelData.column_name === columnName) {
          let newLabelData = labelData;
          if (labelData.ui_links_to_record === true) {
            const linking_ids = module_data_sorted_by_main_record.map(
              (row) => row[labelData.record_name],
            );
            newLabelData = Object.assign(newLabelData, { linking_ids });
          }
          columns[labelData.column_position - 1] = newLabelData;
        }
      });
    });

    // console.log('columns labels', moduleData.section_column_data);
    console.log('MODULE SECTION columns', columns);
    console.log('MODULE SECTION rows', rows);
  }

  const richtext_purified = function () {
    return (
      <span className="content" style={{ display: "inline-block" }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(moduleData.section_richtext) }}></span>
    );
  }


  return (
    <>
      <Card>
        <CardBody>
          <Box padding="4" bg="blackAlpha.100" color="black" >
            <Text>
              {richtext_purified()}
            </Text>
          </Box>
          <Divider margin="4" />
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                {/* Main record type: {moduleData.root_ref_type} */}
              </TableCaption>
              <Thead>
                <Tr>
                  {columns?.map((column) => {
                    // return <Th key={key}>{key === 'type' ? moduleData.title + ' ': ''}{key}</Th>;
                    return <Th key={column.label_name}>{column.label_name}</Th>;
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {rows?.map((row: any, rowsindex) => {
                  return (
                    <Tr key={rowsindex}>
                      {row.map((value: any, index: number) => {
                        if (columns[index - 1]?.ui_links_to_record) {
                          return (
                            <Td
                              className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                              key={index}
                            >
                              <Link
                                href={`/${appName}/record/${columns[index - 1]?.record_name
                                  }/${columns[index - 1]?.linking_ids[rowsindex] ||
                                  moduleData.section_row_data[rowsindex][moduleData.main_record_name]

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
                        } else if (columns[index - 1]?.is_external_link) {
                          return (
                            <Td
                              className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                              key={index}
                            >
                              <Link
                                href={`${value}`}
                                color="blue.400"
                                _hover={{
                                  color: 'blue.800',
                                  textDecoration: 'underline',
                                }}
                              >
                                {columns[index - 1]?.label_name}
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
