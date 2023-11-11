import { Link } from 'react-router-dom';
import Logo from '../../ui/logo';
import * as S from './styles';
import TextGroup from '../../ui/text-group';
import HomeBackgroundImage from '../../ui/home-background-image';

function Home() {
  return (
    <>
      <S.Row margintop="5.6rem">
        <Logo />
      </S.Row>
      <S.Row margintop="8rem">
        <TextGroup>
          <S.AnimatedSpan>오늘 뭐하고 놀지 고민되나요?</S.AnimatedSpan>
          <S.AnimatedSpan>오놀이 랜덤으로 추천해줄게요 :)</S.AnimatedSpan>
        </TextGroup>
      </S.Row>

      <S.AnimatedButton as={Link} to="/mode">
        네 좋아요!
      </S.AnimatedButton>

      <HomeBackgroundImage />
    </>
  );
}
export default Home;
