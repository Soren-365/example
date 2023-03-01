import Link from 'next/link';
import CreateNote from './CreateNote';
import '../globals.css';
import { Suspense } from 'react';
import Notes from './Notes';
import NotesFromSupabase from './NotesFromSupabase';

async function getNotesDesc() {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve('A delayed headline (100ms)'), 100),
  );
}

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

export default async function Page() {
  const getNotesDescription = (await getNotesDesc()) as string;
  // console.log("countries", countries)
  return (
    <>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Notes
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul>
              {/* {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))} */}

              <li>{getNotesDescription}</li>
            </ul>
            <div className="py-10"> 
            <div>Fake fetching with setTimeout (2), streaming example:</div>
            <Suspense fallback={<div>loading...</div>}>
              {/* @ts-expect-error Async Server Component*/}
              <Notes />
            </Suspense>
            <hr />
            </div>
            <div>fetching from supabase, also ssr streaming (html + styles on server, but tailwind is not working for the moment):</div>
            <div className="border-b border-gray-200 bg-white px-4 py-10 sm:px-6">
              <h3 className="text-base font-semibold leading-6 text-gray-300">
                Notes
              </h3>

              <Suspense fallback={<div>loading...</div>}>
                {/* @ts-expect-error Async Server Component*/}
                <NotesFromSupabase />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
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
