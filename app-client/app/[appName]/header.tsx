
import ModuleSelect from './moduleSelect';
import Logo from './getLogo';
// import { useRouter } from 'next/navigation';
import '../globals.css';
import Nav from './nav';
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
import { cookies } from 'next/headers'
import AuthButton from '../../components/AuthButton'
const HeaderComponent = ({ moduleData, appData, appName }: any) => {
  // const router = useRouter()
  // if (appData) {
  //   console.log('appData !!', appData);
  //   if (appData.default_url_module_name !== null && appName) {
  //     router.push(`/${appName}/${appData.default_url_module_name}`)
  //   }
  // }

  const cookieStore = cookies()

  console.log("appData in header:", appData)
  return (
    <>


      <div className="flex flex-row p-2 justify-between bg-white border-b border-gray-200">


        <div style={{ width: '480px' }} className="flex flex-row justify-between">
          <div className=" flex flex-col items-center ">
            <Logo appName={appName} />
          </div>

          <div className="flex items-center ">
            <Heading className="" size="lg"> {appData ? appData.url_name : ' '}</Heading>
          </div>

          <div className="px-4 mt-2">
            <ModuleSelect moduleData={moduleData} appName={appData.url_name} />
          </div>
        </div>
        <div className="flex flex-row">
          <Nav />
        </div>
        <AuthButton />
      </div>
    </>
  );
};

export default HeaderComponent;
