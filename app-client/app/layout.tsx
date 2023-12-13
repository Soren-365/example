/* eslint-disable @next/next/no-head-element */


import Link from 'next/link';
import './globals.css';
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let isServer = (typeof window === 'undefined') ? false : true;



  return (
    <html className="h-full">
      <body className="h-full">
        <Providers>
          <div className="min-h-full">
          
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
