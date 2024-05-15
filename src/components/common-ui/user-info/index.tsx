import Image from 'next/image';
import * as S from './styles';
import { useSession } from '@/context/session-context';

const UserInfo = () => {
  const { login, logout, user } = useSession();

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
        <button onClick={() => login()}>
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
