import { supabase } from 'lib/utils/supabaseClient';
import { Image } from '@chakra-ui/react';
import { getAppData } from './layout';
import { ReactElement } from "react";
import React from 'react';

interface GetLogoProps  {
        appName: string;
  
};

const getLogo = async (props: { appName: string}) => {
        const appData = await getAppData(props.appName);

        console.log("appData in logo:", appData)

        const logoUrl = appData && appData.logo_url

        return (
                <div>
                        <Image
                                boxSize="50px"
                                objectFit="cover"

                                src={logoUrl}
                                alt='app logo'
                        />
                </div>
        );

}

export default getLogo