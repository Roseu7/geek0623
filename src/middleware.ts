// https://supabase.com/docs/guides/auth/server-side/nextjs

import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'


export async function middleware(req: NextRequest) {
    const supabase = createClient()
    const { nextUrl } = req;
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        return NextResponse.redirect(new URL('/auth', nextUrl))
    }
    return await updateSession(req)
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|auth|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ],
}