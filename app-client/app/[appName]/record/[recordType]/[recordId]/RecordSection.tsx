'use client';

import { RecordData, RecordSectionData } from './page';
import './recordPage.css';
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
  recordData: NonNullable<RecordSectionData>;
}

const RecordSection = ({ sectionData,  params: {appName, recordId, recordType}  }: any) => {
  console.log('sectionData', sectionData);
  return (
    <>
      <Card>
        <CardHeader> <Text fontSize='2xl'>{sectionData.title}</Text></CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">

              <Thead>
                <Tr>
                  {Object.keys(sectionData.section_data[0]).map(
                    (key: string) => {
                      return <Th key={key}>{key === 'type' ? sectionData.title + ' ': ''}{key}</Th>;
                    },
                  )}
                </Tr>
              </Thead>
              <Tbody>
                {sectionData.section_data.map((section: any) => {
                  return (
                    <Tr key={section.link}>
                      {Object.values(section).map((value, index) => {
                        if (Object.keys(section)[index] === 'link') {
                          return (
                          <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500" key={value as number}>
                                  <Link href={`/${appName}/record/${sectionData.linkedRecordType}/${value}`} color='blue.400' _hover={{ color: 'blue.800', textDecoration: 'underline' }}>
                                  View
                          </Link>
                          
                        </Td>
                   
                          )
                        } 
                        else {
                        return (
                          <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500" key={value as number}>
                            {(value as number).toString()}
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
    </>
  );
};

{
  /* // <NonNullable<ModuleData> */
}
export default RecordSection;
