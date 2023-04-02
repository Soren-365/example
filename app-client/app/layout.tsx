/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import Nav from './nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 
  
  return (
    <html className="h-full">
      <body className="h-full">
        <div className="min-h-full">
        <Nav/>
          {children}
        </div>
      </body>
    </html>
  );
}
