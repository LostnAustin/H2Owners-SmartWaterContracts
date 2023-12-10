
// import classes from "./Page.module.css";


// import { createClient } from '@/utils/supabase/server';
// import { cookies } from 'next/headers';

// export default async function Watercontracts() {
//   const cookieStore = cookies()
//   const supabase = createClient(cookieStore);
//   const { data: watercontracts } = await supabase.from("watercontracts").select();
  
  
//   return <pre>{JSON.stringify(watercontracts, null, 2)}</pre> 
  
// }
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page</div>
  )
}

export default page