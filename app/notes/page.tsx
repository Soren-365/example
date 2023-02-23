// import PocketBase from 'pocketbase';
import Link from 'next/link';
// import styles from './Home.module.css';
import CreateNote from './CreateNote';
// import { supabase } from 'lib/supabaseClient';

// do not cache this page
// export const revalidate = 0
// import 'server-only'

// import { createClient } from 'lib/utils/supabase-server'
// import { supabase} from 'lib/utils/supabaseClient'
import { Suspense } from 'react'
import Notes from './Notes';
import NotesFromSupabase from './NotesFromSupabase';

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');

  // const { data } = await supabase.from('posts').select('*')

  // return <pre>{JSON.stringify({ data }, null, 2)}</pre>

  // const supabase = createClient()
  // console.log("supabase", supabase)
  // let { data, error } = await supabase.from('countries').select()
  // console.log("data", data, error)
  // return {
  //   props: {
  //    countries: data
  //   },
  // }
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve('Product information ready for SEO'), 100),
  );
}

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

export default async function Page() {
  const description = (await getNotes()) as string;
  // console.log("countries", countries)
  return (
    <>
    <ul>
      {/* {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))} */}
      <li>hey</li>

      <li>you</li>
      <li>{description}</li>
     
    </ul>
    <div>Fake fetching with setTimeout 2sec, streaming example:</div>
     <Suspense fallback={<div>loading...</div>}>
     {/* @ts-expect-error Async Server Component*/}
     <Notes />
     </Suspense>
     <hr/>
     <div>fetching from supabase, also with ssr streaming:</div>
     <Suspense fallback={<div>loading...</div>}>
     {/* @ts-expect-error Async Server Component*/}
     <NotesFromSupabase />
     </Suspense>
     </>
  );
}

// export default async function NotesPage() {
//   const notes = await getNotes();

//   return(
//     <div>
//       <h1>Notes</h1>
//       <div className={styles.grid}>
//         {notes?.map((note) => {
//           return <Note key={note.id} note={note} />;
//         })}
//       </div>

//       <CreateNote />
//     </div>
//   );
// }

// function Note({ note }: any) {
//   const { id, title, content, created } = note || {};

//   return (
//     <Link href={`/notes/${id}`}>
//       <div className={styles.note}>
//         <h2>{title}</h2>
//         <h5>{content}</h5>
//         <p>{created}</p>
//       </div>
//     </Link>
//   );
// }
