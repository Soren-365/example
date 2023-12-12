
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from 'lib/types/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // Override Next default's overaggressive caching behavior
  // Make all internal requests must revalidate every 15 seconds
  const url = req.nextUrl.clone()
  url.searchParams.append('_nextCacheSkip', Math.floor(Date.now() / 1000 / 15).toString())

  return NextResponse.rewrite(url)
}