
import ModuleSelect from './moduleSelect';
import Logo from './getLogo';
// import { useRouter } from 'next/navigation';
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
  // const router = useRouter()
  // if (appData) {
  //   console.log('appData !!', appData);
  //   if (appData.default_url_module_name !== null && appName) {
  //     router.push(`/${appName}/${appData.default_url_module_name}`)
  //   }
  // }

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

       <Flex flexDirection="row" alignItems="center" gap="6">
          <Logo appData={appData} />
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">

          </h1>
          <Heading mt="10px"> {appData ? appData.url_name : ' '}</Heading>
          <div className="px-4 mt-2">
            <ModuleSelect moduleData={moduleData} appName={appData.url_name} />
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default HeaderComponent;
