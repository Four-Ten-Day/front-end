import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const client_id = process.env.NEXT_PUBLIC_AUTH_GITHUB_ID;
  const redirect_uri = 'http://localhost:3000/api/auth/callback/github';
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;

  res.redirect(githubAuthUrl);
};

export default handler;
