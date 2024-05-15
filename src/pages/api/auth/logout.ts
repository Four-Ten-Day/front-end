import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cookie = 'user=; HttpOnly; Path=/; Max-Age=0;';
  res.setHeader('Set-Cookie', cookie);

  res.redirect('/');
};

export default handler;
