import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client_id = process.env.NEXT_PUBLIC_AUTH_GITHUB_ID;
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;

  res.redirect(githubAuthUrl);
};

export default handler;
