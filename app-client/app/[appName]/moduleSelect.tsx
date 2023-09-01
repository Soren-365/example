'use client'

import { useRouter } from 'next/navigation';
import { Select } from '@chakra-ui/react'


const Selector = ({moduleData, appName}:any) => {
    const router = useRouter();

    console.log("data for module selector", moduleData)
    return (
        <>
<Select placeholder='Select module' size='lg' onChange={(e) => router.push(`/${appName}/${e.target.value}`)}>
{moduleData?.map((data: any) => (
      <option key={data.id.toString() + data.title}  value={data.url_name}>{data.title}</option>

    ))}
</Select>


  </>
  )  
}

export default Selector