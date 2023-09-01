'use client';
import { supabase } from 'lib/utils/supabaseClient';
import { Image } from '@chakra-ui/react';



const getLogo =   ( { appData }:any) => {



return (<>
        
{ appData[0]?.logo_url ? <Image
          boxSize="50px"
          objectFit="cover"
             
              src={appData[0]?.logo_url}
              alt='app logo'
            /> : null}
  </>
          );
  
  }

  export default getLogo