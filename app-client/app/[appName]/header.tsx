'use client';
import ModuleSelect from './moduleSelect';
import Logo from './getLogo';

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
  Divider,
  Heading,
} from '@chakra-ui/react';

const HeaderComponent = ({ moduleData, appData, appName }: any) => {
  if (appData) {
    console.log('appData !!', appData);
  }

  return (
    <>
      <Box w="100%" p={10}>
        {/* <div
 className=" flex justify-left flex-row gap-10 mx-auto max-w-xl px-4 sm:px-6 lg:px-8 "
 style={{
   padding: '32px 0px 16px 36px',
   borderBottom: 'solid 1px black',
 }}
 >
  */}

        {/* {appData[0].logo_url} */}
        <Flex flexDirection="row" alignItems="center" gap="6">
          <Logo appData={appData} />
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          
          </h1>
<Heading mt="10px"> {appData ? appData[0].url_name : ' '}</Heading>
          <div className="px-4 mt-2">
            <ModuleSelect moduleData={moduleData} appName={appData[0].url_name} />
          </div>
        </Flex>
      </Box>
    </>

    //

    //         <Box  w='100%' p={4} color='white'>
    // {/* <div
    // className=" flex justify-left flex-row gap-10 mx-auto max-w-xl px-4 sm:px-6 lg:px-8 "
    // style={{
    //   padding: '32px 0px 16px 36px',
    //   borderBottom: 'solid 1px black',
    // }}
    // >
    //  */}

    // {/* {appData[0].logo_url} */}
    // <Flex flexDirection='row'>

    //    <Heading >
    //   {appData? appData[0].url_name :  ' '}
    // </Heading>

    //   <Logo appData={appData} />

    // <div className="px-4 mt-2">
    // <ModuleSelect moduleData={moduleData} appName={appName} />
    // </div>
    // </Flex>
    // </Box>
  );
};

export default HeaderComponent;
