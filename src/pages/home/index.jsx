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
          <S.Span>오늘 뭐하고 놀지 고민되나요?</S.Span>
          <S.Span>오놀이 랜덤으로 추천해줄게요 :)</S.Span>
        </TextGroup>
      </S.Row>

      <S.NextButton as={Link} to="/mode">
        네 좋아요!
      </S.NextButton>

      <HomeBackgroundImage />
    </>
  );
}
export default Home;
