interface ModulePageProps {
  params: {moduleId: string}
}

export default async function Page({ params: { moduleId} }: ModulePageProps) {

      return (
    <>
    <h1>Hello, Next.js!</h1>
    <div>This is module id: {moduleId}</div>
    </>
    );
  }