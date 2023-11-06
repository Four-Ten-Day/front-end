import ProgressiveForm from '../../../ui/ProgressiveForm';
import * as S from './styles';
import { ReactComponent as Logo } from '../../../../public/logo.svg';
import { TextGroup } from '../../../ui/TextGroup';
import { Link } from 'react-router-dom';
import BackgroundWallpapers from '../../../ui/BackgroundImage';

function HomeDetail() {
  return (
    <>
      <ProgressiveForm>
        <ProgressiveForm.Title>
          <Logo />
        </ProgressiveForm.Title>
        <ProgressiveForm.Content>
          <TextGroup>
            <S.Span>오늘 뭐하고 놀지 고민되나요?</S.Span>
            <S.Span>오놀이 랜덤으로 추천해줄게요 :)</S.Span>
          </TextGroup>
        </ProgressiveForm.Content>
        <S.NextButton as={Link} to="/mode" size="medium">
          네 좋아요!
        </S.NextButton>
      </ProgressiveForm>

      <BackgroundWallpapers />
    </>
  );
}
export default HomeDetail;
