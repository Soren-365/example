'use client'

import { useRouter } from 'next/navigation';



const Selector = ({moduleData, appName}:any) => {
    const router = useRouter();

    console.log("data", moduleData)
    return (
        <>
    <select className="bg-white" placeholder="Select option" onChange={(e) => router.push(`/${appName}/${e.target.value}`)}>
    {moduleData?.map((data: any) => (
      <option key={data.id.toString() + data.title}  value={data.url_name}>{data.title}</option>

    ))}
  </select> 
  </>
  )  
}

export default Selector