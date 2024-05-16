import {
  SessionData,
  defaultSession,
  sessionOptions,
} from '@/lib/utils/session';
import { getIronSession } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  if (session.isLoggedIn !== true) res.status(200).json(defaultSession);
  else res.status(200).json(session);
};

export default handler;
