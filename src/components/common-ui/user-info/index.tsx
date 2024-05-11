import { boxShadow, breakpoints, colors } from '@/styles/theme';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const StyledUserInfo = styled.div`
  position: fixed;
  text-align: end;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 8px 20px;
  width: 100%;
  max-width: ${breakpoints.xs};
`;

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <StyledUserInfo>
      {session ? (
        <>
          {/* TODO: 없을 경우 기본 이미지 삽입*/}
          <Image
            src={session.user?.image!}
            width={32}
            height={32}
            alt="유저"
          ></Image>
          <button onClick={() => signOut()}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => signIn()}>로그인</button>
      )}
    </StyledUserInfo>
  );
};
export default UserInfo;
