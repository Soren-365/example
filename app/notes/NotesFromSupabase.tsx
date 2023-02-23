 import { supabase } from 'lib/utils/supabaseClient'

const notesFetch = async () => {
  // const supabase = createClient()
  
  // console.log("supabase driver on server", supabase)
  const { data: note, error } = await supabase.from('note').select('*')

if (error) {
  throw new Error('Error:', error)
}

  console.log("data", note)
   return <pre>{JSON.stringify({ note }, null, 2)}</pre>
}

async function NotesFromSupabase() {
  const notes = await notesFetch();

  return (
    <div>{notes}
      <ul>
      {/*   {notes.map((note) => (
          <li key={note}>{note}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default NotesFromSupabase