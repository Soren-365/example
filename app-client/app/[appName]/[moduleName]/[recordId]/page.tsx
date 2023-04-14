interface RecordPageProps {
    params: {recordId: string}
  }
  
  export default async function Page({ params: { recordId} }: RecordPageProps) {
  
        return (
      <>
      <h1>Record page</h1>
      <div>This is record id: {recordId}</div>
      </>
      );
    }