import { getLoginPagePath } from '@/lib/utils/paths';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './styles';

const UserInfo = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (router.pathname === getLoginPagePath()) return null;
  if (status === 'loading') return null;

  return (
    <S.UserInfo>
      {status === 'authenticated' ? (
        <>
          <S.UserImage
            src={session.user?.image ?? '/images/user.svg'}
            width={24}
            height={24}
            alt="유저 프로필"
          />
          <button onClick={() => signOut()}>
            <Image
              src={'/images/logout.svg'}
              alt="로그아웃"
              width={24}
              height={24}
            />
          </button>
        </>
      ) : (
        <button onClick={() => signIn()}>
          <Image
            src={'/images/login.svg'}
            alt="로그인"
            width={24}
            height={24}
          />
        </button>
      )}
    </S.UserInfo>
  );
};

export default UserInfo;
