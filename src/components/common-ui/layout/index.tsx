import { jua } from '@/styles/fonts';
import { ReactNode } from 'react';
import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Main className={jua.className}>{children}</S.Main>
    </S.Layout>
  );
};

export default Layout;
