import { Outlet } from 'react-router-dom';
import * as S from './styles';

function AppLayout() {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  );
}
export default AppLayout;
