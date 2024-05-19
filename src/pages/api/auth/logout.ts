import { getHomePagePath } from '@/lib/utils/paths';
import { SessionData, sessionOptions } from '@/lib/utils/session';
import { getIronSession } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  session.destroy();
  res.redirect(getHomePagePath());
};

export default handler;
