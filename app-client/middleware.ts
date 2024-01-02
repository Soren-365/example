
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from 'lib/types/database.types'
import { setCookie } from 'cookies-next';


export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareClient<Database>({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // console.log("session in middleware.ts", session)
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'Hello, Middleware!');
  response.cookies.set('myCookie', '123');
  if (session !== null) {
    response.cookies.set('user-id', session.user.id);
  }

  if (req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // Override Next default's overaggressive caching behavior
  // Make all internal requests must revalidate every 15 seconds
  const url = req.nextUrl.clone()
  url.searchParams.append('_nextCacheSkip', Math.floor(Date.now() / 1000 / 15).toString())

  return NextResponse.rewrite(url)
}