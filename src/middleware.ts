import { SessionData, sessionOptions } from '@/lib/utils/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn)
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/mode', '/interest', '/distance', '/result'],
};
