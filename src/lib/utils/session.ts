export type SessionData = {
  user: string;
  isLoggedIn: boolean;
};

export const defaultSession = {
  user: null,
  isLoggedIn: false,
};

export const sessionOptions = {
  password: process.env.NEXT_PUBLIC_SESSION_PASSWORD!,
  cookieName: 'onol_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 - 60,
  },
};
