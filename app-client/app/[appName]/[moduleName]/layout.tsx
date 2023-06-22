
export default function ModulePageLayout({
    children, // will be a page or nested layout
    params
  }: {
    children: React.ReactNode;
    params: {
      moduleName: string;
    }
  }) {
    return (
      <>
   
        <div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </div>
      </>
    );
  }
  