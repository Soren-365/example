'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();
    console.log("pathname", pathname)

    return (
    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
    {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
    <Link
      href="/"
      className={pathname === '/' ?  'border-indigo-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2' :  'border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 ' } 
    >
      Dashboard
    </Link>

    <Link
      href="/notes"
      className={pathname === '/notes' ?  'border-indigo-500 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2' :  'border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 ' } 
        aria-current="page"
    >
      Notes
    </Link>

  </div>
    )
}