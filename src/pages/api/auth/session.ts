import { parseCookies } from '@/lib/utils/parse-cookies';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = parseCookies(req.headers.cookie);
  const userCookie = cookies.user;

  if (!userCookie) return res.status(401).json({ error: 'Not authenticated' });

  const user = JSON.parse(userCookie);
  res.status(200).json({ user });
};

export default handler;
