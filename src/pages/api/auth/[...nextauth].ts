import { getLoginPagePath } from '@/lib/utils/paths';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: getLoginPagePath(),
  },
};

export default NextAuth(authOptions);
