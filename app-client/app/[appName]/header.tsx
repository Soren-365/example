
import ModuleSelect from './moduleSelect';
import Logo from './getLogo';
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

import { createClient } from '@/lib/utils/supabase-server';
// import { supabase } from 'lib/utils/supabaseClient';
import MemberMenu from 'components/MemberMenu';
import AuthButton from '../../components/AuthButton';
import Link from 'next/link';
import { useState } from 'react';

const HeaderComponent = async ({ moduleData, appAndMemberData, appName }: any) => {

  const cookieStore = cookies()



  const supabase = createClient(cookieStore)

  let memberData



  const { data: { user } } = await supabase.auth.getUser()
  console.log("user werw in header", user)

  if (user) {
    const { data: member, error: memberError } = await supabase
      .from('members')
      .select('id, user_id, first_name, last_name, city, country')
      .eq('user_id', user.id)
    if (memberError) {
      console.log('Error', memberError);
      throw new Error(`Error from db with app name: `);
    }
    if (!member) {
      throw new Error(`ERROR: No Data in DB for this app name: `);
    }
    memberData = member[0]
  }

  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    try {
      const { error } = await supabase.auth.signOut()
      console.log("err", error)
      // redirect('/login')
    } catch (e) {
      console.log("error", e)
    }

  }

  console.log("appData in header:", appAndMemberData)
  console.log("member in header:", memberData)
  return (
    <>

      <div className="px-4">
        <div className="flex flex-row  py-2  items-center justify-between bg-white border-b border-gray-200">
          <div style={{ width: '480px' }} className="flex flex-row justify-between">
            <div className=" flex flex-col items-center ">
              <Link
                href={`/${appName}`}
                className="flex justify-end no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                <Logo appName={appName} />

              </Link>
            </div>

            <div className="flex items-center ">
              <Link
                href={`/${appName}`}
                className="flex justify-end no-underline bg-btn-background hover:bg-btn-background-hover"
              >

                <Heading className="" size="lg"> {memberData !== undefined ? appAndMemberData.app[0].url_name : ' '}</Heading>
              </Link>
            </div>

            <div className="px-4 mt-2">
              <ModuleSelect moduleData={moduleData} appName={appAndMemberData.app.url_name} />
            </div>
          </div>
          <div className="flex flex-row">
            <Nav />
          </div>
          {user ?
            <div className='flex flex-row items-center gap-2'>
              <MemberMenu user={user} appName={appName}>
              
              </MemberMenu>
              <AuthButton user={user} />

            </div>
            : 
            (
              <Link
                  href="/login"
                  className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                  Login
              </Link>
          )
          }
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
