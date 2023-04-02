
import '../globals.css';
import './styles.css'

export default function AppPageLayout({
  children, // will be a page or nested layout
  params
}: {
  children: React.ReactNode;
  params: {
    appName: string;
  }
}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " style={{padding: "32px 0px 16px 36px", borderBottom: "solid 1px black"}}>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {params.appName}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}
