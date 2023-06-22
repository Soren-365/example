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
  console.log('moduelData', moduleData);
  // console.log('appName', appName);
  return (
    <>
      <Card>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                Section with record type: {moduleData.record_type}
              </TableCaption>

              <Thead>
                <Tr>
                  <Th>Link</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Title</Th>
                  <Th>Name</Th>
                  <Th>Type</Th>
                </Tr>
              </Thead>
              <Tbody>
                {moduleData?.section_data?.map((module: any) => {
                  return (
                    <Tr key={module.id}>
                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <Link
                          as={NextLink}
                          href={`/${appName}/record/${moduleData.references_type}/${module.id}`}
                        >
                          Go
                        </Link>
                      </Td>
                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {module.first_name}
                      </Td>

                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {module.last_name}
                      </Td>
                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {module.title}
                      </Td>
                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {module.name}
                      </Td>
                      <Td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {module.type}
                      </Td>
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

      {/* <div
        key={moduleData.sectionId}
        className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6"
      >
      
      </div> */}
    </>
  );
};

{
  /* // <NonNullable<ModuleData> */
}
export default ModuleSection;
