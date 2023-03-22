const notesFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(['Note 1', 'Note 2', 'Note 3']), 2000),
  );

async function Notes() {
  const notes = (await notesFetch()) as string[];

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes