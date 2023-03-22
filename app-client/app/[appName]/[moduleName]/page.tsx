export default async function Page({ params: { moduleId} }) {

    return (
    <>
    <h1>Hello, Next.js!</h1>
    <div>This is module id: {moduleId}</div>
    </>
    );
  }