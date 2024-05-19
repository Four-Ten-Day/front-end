import { getModePagePath } from '@/lib/utils/paths';
import * as S from './styles';

const Nav = () => {
  return (
    <S.Nav>
      <S.AnimatedButton href={getModePagePath()} size="M" variant="contained">
        네 좋아요!
      </S.AnimatedButton>
    </S.Nav>
  );
};

export default Nav;
