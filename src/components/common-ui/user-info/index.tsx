import Image from 'next/image';
import * as S from './styles';
import { useSession } from '@/context/session-context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getLoginPagePath } from '@/lib/utils/paths';

const UserInfo = () => {
  const { logout, user } = useSession();
  const router = useRouter();

  if (router.pathname === getLoginPagePath()) return null;

  return (
    <S.UserInfo>
      {user ? (
        <>
          <S.UserImage
            src={user.avatar_url ?? '/images/user.svg'}
            width={24}
            height={24}
            alt="유저 프로필"
          />
          <button onClick={() => logout()}>
            <Image
              src={'/images/logout.svg'}
              alt="로그아웃"
              width={24}
              height={24}
            />
          </button>
        </>
      ) : (
        <Link href={'/login'}>
          <Image
            src={'/images/login.svg'}
            alt="로그인"
            width={24}
            height={24}
          />
        </Link>
      )}
    </S.UserInfo>
  );
};

export default UserInfo;
