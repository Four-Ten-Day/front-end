import { getHomePagePath } from '@/lib/utils/paths';
import { SessionData, sessionOptions } from '@/lib/utils/session';
import { getIronSession } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code;

  if (!code) return res.status(400).json({ error: 'Code not provided' });

  const client_id = process.env.NEXT_PUBLIC_AUTH_GITHUB_ID;
  const client_secret = process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET;

  try {
    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id,
          client_secret,
          code,
        }),
      }
    );

    if (!tokenResponse.ok) throw new Error('Failed to fetch access token');

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken)
      return res.status(400).json({ error: 'Access token not found' });

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!userResponse.ok) throw new Error('Failed to fetch user data');

    const user = await userResponse.json();

    const session = await getIronSession<SessionData>(req, res, sessionOptions);

    session.user = user;
    session.isLoggedIn = true;
    await session.save();

    res.redirect(getHomePagePath());
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
    else res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
