/* eslint-disable @next/next/no-head-element */

'use client'
import Link from 'next/link';
import Nav from './nav';
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let isServer = (typeof window === 'undefined')? false : true;



  return (
    <html className="h-full">
      <body className="h-full">
      <Providers>
        <div className="min-h-full">
        <Nav/>
          {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
