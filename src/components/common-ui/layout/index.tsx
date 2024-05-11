import { jua } from '@/styles/fonts';
import { ReactNode } from 'react';
import * as S from './styles';
import UserInfo from '../user-info';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout className={jua.className}>
      <UserInfo />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
};

export default Layout;
