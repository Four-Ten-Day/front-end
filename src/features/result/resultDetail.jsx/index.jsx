import Button from '../../../ui/Button';
import Heading from '../../../ui/Heading';

import { Card } from '../../../ui/backdropCard';
import FakeLoader from '../../fakeLoader';
import ResultBackGround from './resultBackground';
import * as S from './styles';

function ResultDetail() {
  return (
    <>
      <Card>
        <S.Image url="/result-movie.svg" />

        <S.ResultTextBox>
          <S.Span>오늘은..</S.Span>
          <Heading as="h1">영화보기</Heading>
          <S.Span>어때요?</S.Span>
        </S.ResultTextBox>

        <S.ButtonRow>
          <Button size="small" variations="quaternary">
            처음으로 돌아갈래요
          </Button>
          <Button size="small" variations="ternary">
            다시 추천 받을래요
          </Button>
        </S.ButtonRow>
      </Card>

      <FakeLoader loadingTime={3000} />
      <ResultBackGround />
    </>
  );
}
export default ResultDetail;
